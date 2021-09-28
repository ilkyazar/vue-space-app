<template>
  <ul>
    <li v-for="field in Object.keys(schema.fields)" :key="field">
      <ErrorMessage :name="field" />
    </li>
  </ul>
</template>

<script>
import { ErrorMessage } from "vee-validate";

export default {
  name: "ErrorMessageContainer",
  props: {
    schema: {},
  },
  components: {
      ErrorMessage,
  }
};
</script>
