<template>
  <div class="items">
    <!--     <ul class="item-list">
      <li v-for="item in items" :key="item">
        <router-link
          :to="{ name: 'AstronomyPicture', params: { pictureid: item.date } }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul> -->
    <Datatable
      v-if="dataLoaded"
      :rows="tableRows"
      :columns="tableColumns"
      :totalRecordCount="tableTotalRecordCount"
    />
  </div>
</template>

<script>
import Datatable from "@/components/Datatable";
import formatDate from "@/lib/utils.js";

export default {
  name: "AstronomyPictureList",
  components: {
    Datatable,
  },
  data() {
    return {
      tableColumns: [
        {
          label: "Date",
          field: "date",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Title",
          field: "title",
          width: "10%",
          sortable: true,
          display: function (row) {
            return `<a
          href="/secure/astronomy-pictures/${row.date}"
          > ${row.title} </a
        >`;
          },
        },
        {
          label: "Copyright",
          field: "copyright",
          width: "15%",
          sortable: true,
        },
      ],
      tableTotalRecordCount: 20,
      tableRows: [],
      dataLoaded: false,
    };
  },
  beforeMount() {
    var startDate = new Date();
    var endDate = new Date();
    startDate.setDate(startDate.getDate() - this.tableTotalRecordCount + 1);
    fetch(
      `${process.env.VUE_APP_NASA_URL}api_key=${
        process.env.VUE_APP_API_KEY
      }&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data in AstronomyPictureList: ", data);
        this.tableRows = data;
        this.dataLoaded = true;
        // table.isLoading = false;
        // finally
      });
  },
};
</script>

<style lang="scss" scoped>
.items {
  background: $base-color;
  color: $primary-color;
  padding: 50px 150px;

  /*   .item-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;

    li {
      flex-basis: 25%;
      padding: 45px;
      border-radius: 15px;
      a {
        color: $primary-color;
        text-decoration: none;
      }
    }
  } */
}
</style>
