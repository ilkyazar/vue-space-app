<template>
  <Form :validation-schema="schema" @submit="submit">
    <h1>Login</h1>
    <label>E-Mail</label>
    <Field name="email" type="email" placeholder="jane.doe@example.com" />
    <label>Password</label>
    <Field name="password" type="password" />
    <ErrorMessageContainer :schema="schema" />
    <button>Submit</button>
    <router-link to="/auth/forgot-password">Forgot password?</router-link>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";
import ErrorMessageContainer from "@/components/ErrorMessageContainer";
import { TokenService } from "@/services/TokenService";

export default {
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(5),
    });
    return {
      schema,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessageContainer,
  },
  methods: {
    submit() {
      // set user here
      this.$router.push({ name: "Secure" });
      console.log("Logging in");
      setTimeout(() => TokenService.saveToken("ThisIsToken"), 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: large;
  }

  input {
    margin: 8px 0;
  }

  button {
    text-transform: uppercase;
    color: $primary-color;
    background: linear-gradient(135deg, $tertiary-color 0%, $base-color 90%);
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    color: $tertiary-color;
  }
}
</style>
