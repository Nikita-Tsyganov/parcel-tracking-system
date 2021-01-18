<template>
  <div>
    <b-table striped hover :items="parcelsList">
      <template #cell(tracking_ID)="data">
        <nuxt-link :to="`/admin/parcels/${data.value}`">{{
          data.value
        }}</nuxt-link>
      </template>
      <template #cell(employee_ID)="data">
        <nuxt-link to="">{{ data.value }}</nuxt-link>
      </template>
      <template #cell(actions)="data">
        <b-button
          size="sm"
          :to="`/admin/parcels/${data.item.tracking_ID}`"
          class="mr-2"
        >
          View / Edit
        </b-button>
        <b-button size="sm" variant="danger" @click="deleteParcel(data.item.tracking_ID)">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const parcels = await store.dispatch('parcels/all')
    return { parcels }
  },
  computed: {
    parcelsList() {
      const parcelsList = []

      for (const parcel of this.parcels) {
        const parcelRow = {
          tracking_ID: parcel.id,
          employee_ID: parcel.employeeId,
          customer_name: parcel.customerName,
          origin: parcel.origin,
          destination: parcel.destination,
          location: parcel.location,
          status: parcel.status,
          date: this.$moment(parcel.lastUpdate.datetime).format('MMM. D'),
          actions: '',
        }
        parcelsList.push(parcelRow)
      }
      return parcelsList
    },
  },
  methods: {
    async deleteParcel(id) {
      await this.$store.dispatch('parcels/delete', id)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>