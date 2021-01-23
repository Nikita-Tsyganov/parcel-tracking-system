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
      <b-button v-if="viewMode" to="/admin/parcels">Back</b-button>
      <b-button
        v-if="!viewMode"
        @click="updateParcel(parcel.id, parcel)"
        variant="danger"
        >Save</b-button
      >
      <b-button v-if="!viewMode" @click="viewMode = !viewMode">Cancel</b-button>
    </b-card>

    <h3 class="ls-05 my-4">Delivery progress</h3>
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
    </b-table>
    <b-button to="/admin/parcels">Back</b-button>
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
        'Customer Name': this.parcel.fromName,
        Origin: this.parcel.origin,
        Destination: this.parcel.destination,
        Location: this.lastEvent.location,
        Status: this.lastEvent.status.status,
        Date: this.$moment(this.lastEvent.datetime).format('MMM. D'),
      }
    },
    lastEvent() {
      return this.parcel.events[0]
    },
    parcelDeliveryProgress() {
      const parcelDeliveryProgress = []
      let previousDate = ''

      for (const event of this.parcel.events) {
        const date = this.$moment(event.datetime).format('MMM. D')
        const time = this.$moment(event.datetime).format('h:mm a')
        const progress = {
          status: event.status.status,
          location: event.location,
        }
        const eventRow = {
          date: date !== previousDate ? date : '',
          time,
          progress,
          _rowVariant: date !== previousDate ? 'date border-top' : '',
        }

        previousDate = date

        parcelDeliveryProgress.push(eventRow)
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