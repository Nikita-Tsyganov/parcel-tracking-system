<template>
  <div>
    <b-card bg-variant="light">
      <h5 class="my-4">Parcel Overview</h5>
      <b-form inline v-for="(value, key, index) in parcelOverview" :key="index">
        <label class="mr-sm-2" :for="key">{{ key }}</label>
        <b-form-input :v-model="parcelOverview.key" :id="key"> </b-form-input>
      </b-form>
      <br />
      <b-button @click="createParcel(parcelOverview)" variant="primary"
        >Add</b-button
      >
      <b-button to="/admin/parcels">Cancel</b-button>
    </b-card>

    <!-- <h3 class="ls-05 my-4">Delivery progress</h3>
    <div class="ls-05">
      Information updated:
      {{ $moment(lastEvent.datetime).format('MMM. D') }}
    </div>
    <b-table
      class="border-bottom mb-4"
      borderless
      :items="parcelDeliveryProgress"
    >
      <template #cell(progress)="data">
        <div>{{ data.value.status }}</div>
        <div>{{ data.value.location }}</div>
      </template>
    </b-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      parcelOverview: {
        'Tracking Number': '',
        'Employee ID': '',
        'Customer Name': '',
        Origin: '',
        Destination: '',
        Location: '',
        Status: '',
        Date: '',
      },
    }
  },
  computed: {
    // parcelDeliveryProgress() {
    //   const parcelDeliveryProgress = []
    //   let previousDate = ''
    //   for (const event of this.parcel.events) {
    //     const date = this.$moment(event.datetime).format('MMM. D')
    //     const time = this.$moment(event.datetime).format('h:mm a')
    //     const progress = {
    //       status: event.status.status,
    //       location: event.location,
    //     }
    //     const eventRow = {
    //       date: date !== previousDate ? date : '',
    //       time,
    //       progress,
    //       _rowVariant: date !== previousDate ? 'date border-top' : '',
    //     }
    //     previousDate = date
    //     parcelDeliveryProgress.push(eventRow)
    //   }
    //   return parcelDeliveryProgress
    // },
  },
  methods: {
    async createParcel(parcel) {
      console.log(parcel)
      const newParcel = await this.$store.dispatch('parcels/create', parcel)
      console.log(newParcel)
    },
  },
}
</script>

<style lang="scss" scoped></style>