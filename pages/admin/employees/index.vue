<template>
  <div>
    <b-table striped hover :items="employeesList">
      <template #cell(employee_ID)="data">
        <nuxt-link :to="`/admin/employees/${data.value}`">{{
          data.value
        }}</nuxt-link>
      </template>
      <template #cell(actions)="data">
        <b-button
          size="sm"
          :to="`/admin/employees/${data.item.employee_ID}`"
          class="mr-2"
        >
          View / Edit
        </b-button>
        <b-button size="sm" variant="danger" @click="deleteEmployee(data.item.employee_ID)">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const employees = await store.dispatch('employees/all')
    return { employees }
  },
  computed: {
    employeesList() {
      const employeesList = []

      for (const employee of this.employees) {
        const employeeRow = {
          employee_ID: employee.id,
          full_name: employee.fullName,
          email: employee.email,
          username: employee.username,
          actions: '',
        }
        employeesList.push(employeeRow)
      }
      return employeesList
    },
  },
  methods: {
    async deleteEmployee(id) {
      await this.$store.dispatch('employees/delete', id)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>