<template>
  <div class="container w-50">
    <b-form @submit.prevent="login">
      <label class="sr-only" for="employee-id">Employee ID</label>
      <b-form-input
        id="employee-id"
        v-model="loginInfo.username"
        placeholder="Employee ID"
        class="mb-3"
      ></b-form-input>

      <label class="sr-only" for="password">Password</label>
      <b-input-group>
        <b-form-input
          id="password"
          v-model="loginInfo.password"
          placeholder="Password"
          class="mb-4"
        ></b-form-input>
      </b-input-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.loginInfo })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
</style>