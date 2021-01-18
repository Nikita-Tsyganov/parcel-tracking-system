<template>
  <div>
    <b-card bg-variant="light">
      <h5 class="my-4">Employee Information</h5>
      <b-form
        inline
        v-for="(value, key, index) in employeeInformation"
        :key="index"
      >
        <label class="mr-sm-2" :for="key">{{ key }}</label>
        <b-form-input
          :v-model="employee.key"
          :id="key"
          :placeholder="value"
          :plaintext="viewMode"
        >
        </b-form-input>
      </b-form>
      <br />
      <b-button v-if="viewMode" @click="viewMode = !viewMode" variant="primary"
        >Edit</b-button
      >
      <b-button
        v-if="!viewMode"
        @click="updateEmployee(employee.id, employee)"
        variant="danger"
        >Save</b-button
      >
      <b-button v-if="!viewMode" @click="viewMode = !viewMode">Cancel</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const employee = await store.dispatch('employees/find', params.id)
    return { employee }
  },
  data() {
    return {
      viewMode: true,
    }
  },
  computed: {
    employeeInformation() {
      return {
        'Employee ID': this.employee.id.toString(),
        'Full Name': this.employee.fullName,
        Email: this.employee.email,
        Username: this.employee.username,
      }
    },
  },
  methods: {
    async updateEmployee(id, employee) {
      const updated = await this.$store.dispatch(
        'employees/update',
        id,
        employee
      )
      console.log(updated)
    },
  },
}
</script>

<style lang="scss" scoped></style>