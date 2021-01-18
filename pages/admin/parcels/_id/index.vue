<template>
  <div>
    <b-card bg-variant="light">
      <h5 class="my-4">Parcel Overview</h5>
      <b-form inline v-for="(value, key, index) in parcelOverview" :key="index">
        <label class="mr-sm-2" :for="key">{{ key }}</label>
        <b-form-input
          :v-model="parcel.key"
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
        @click="updateParcel(parcel.id, parcel)"
        variant="danger"
        >Save</b-button
      >
      <b-button v-if="!viewMode" @click="viewMode = !viewMode">Cancel</b-button>
    </b-card>

    <h5 class="my-4">Delivery progress</h5>
    <h6>
      Information updated:
      {{ $moment(this.parcel.lastUpdate.datetime).format('MMM. D') }}
    </h6>
    <b-table class="border-bottom" borderless :items="parcelDeliveryProgress">
      <template #cell(progress)="data">
        {{ data.value.status }}<br />{{ data.value.location }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const parcel = await store.dispatch('parcels/find', params.id)
    return { parcel }
  },
  data() {
    return {
      viewMode: true,
    }
  },
  computed: {
    parcelOverview() {
      return {
        'Tracking Number': this.parcel.id.toString(),
        'Employee ID': this.parcel.employeeId.toString(),
        'Customer Name': this.parcel.customerName,
        Origin: this.parcel.origin,
        Destination: this.parcel.destination,
        Location: this.parcel.location,
        Status: this.parcel.status,
        Date: this.$moment(this.parcel.lastUpdate.datetime).format('MMM. D'),
      }
    },
    parcelDeliveryProgress() {
      const parcelDeliveryProgress = []
      const parcelHistories = this.parcel.parcelHistories
      let previousDate = ''

      for (const parcelHistory of parcelHistories) {
        const date = this.$moment(parcelHistory.datetime).format('MMM. D')
        const time = this.$moment(parcelHistory.datetime).format('h:mm a')
        const progress = {
          status: parcelHistory.status.status,
          location: parcelHistory.location,
        }
        const parcelHistoryRow = {
          date: date !== previousDate ? date : '',
          time,
          progress,
          _rowVariant: date !== previousDate ? 'date border-top' : '',
        }

        previousDate = date

        parcelDeliveryProgress.push(parcelHistoryRow)
      }
      return parcelDeliveryProgress
    },
  },
  methods: {
    async updateParcel(id, parcel) {
      const updated = await this.$store.dispatch('parcels/update', id, parcel)
      console.log(updated)
    },
  },
}
</script>

<style lang="scss" scoped></style>