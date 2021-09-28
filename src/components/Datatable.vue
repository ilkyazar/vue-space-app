<template>
  <table-lite
    :has-checkbox="true"
    :is-loading="table.isLoading"
    :is-re-search="table.isReSearch"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    :messages="table.messages"
  ></table-lite>
</template>

<script>
import { defineComponent, reactive } from "vue";
import TableLite from "vue3-table-lite";

export default defineComponent({
  name: "Datatable",
  components: {
    TableLite,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    totalRecordCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: props.columns,
      rows: props.rows,
      totalRecordCount: props.totalRecordCount,
      /* sortable: {
        order: "date",
        sort: "asc",
      }, */
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data",
      },
    });

    console.log("Table columns in Datatable: ", table.columns);
    console.log("Table rows in Datatable: ", table.rows);

    return {
      table,
    };
  },
});
</script>
