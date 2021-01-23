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
        <b-form-input :v-model="employeeInformation.key" :id="key">
        </b-form-input>
      </b-form>
      <br />
      <b-button @click="createEmployee(employeeInformation)" variant="primary"
        >Add</b-button
      >
      <b-button to="/admin/employees">Cancel</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeInformation: {
        'Employee ID': '',
        'Full Name': '',
        Role: '',
      },
    }
  },
  methods: {
    async createEmployee(employee) {
      const newEmployee = await this.$store.dispatch(
        'employees/create',
        employee
      )
      console.log(newEmployee)
    },
  },
}
</script>

<style lang="scss" scoped></style>