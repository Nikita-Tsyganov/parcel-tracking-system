<template>
  <div>
    <div class="container">
      <h5 class="mb-2">Delivery status</h5>
      <h6 class="mt-4">
        <b>{{ this.parcel.status }}</b>
      </h6>
      <b-button class="mb-2" variant="link" size="sm" v-b-toggle.details
        >Delivery details
      </b-button>
      <b-collapse id="details">
        <p class="my-0"><b>ID:</b> {{ this.parcel.id }}</p>
        <p class="my-0"><b>Origin:</b> {{ this.parcel.origin }}</p>
        <p class="my-0"><b>Destination:</b> {{ this.parcel.destination }}</p>
        <p>{{ this.parcel.statusid }}</p>
      </b-collapse>
      <template>
        <b-progress
          variant="success"
          class="w-50 my-4"
          :value="this.parcel.lastUpdate.statusId"
          max="9"
        ></b-progress>
    <h3 class="mb-4">Delivery progress</h3>
    <p class="mb-0">
      Information updated:
      {{ $moment(this.parcel.lastUpdate.datetime).format('MMM. D') }}
    </p>
    <b-table class="border-bottom" borderless :items="parcelDeliveryProgress">
      <template #cell(progress)="data">
        {{ data.value.status }}<br />{{ data.value.location }}
      </template>
    </div>
    <div class="container">
      <h5 class="mb-4">Delivery progress</h5>
      <h6>
        Information updated:
        {{ $moment(this.parcel.lastUpdate.datetime).format('MMM. D') }}
      </h6>
      <b-table class="border-bottom" borderless :items="parcelDeliveryProgress">
        <template #cell(progress)="data">
          {{ data.value.status }}<br />{{ data.value.location }}
        </template>
      </b-table>
      <b-button squared variant="primary" to="/"> Track another item </b-button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const parcel = await store.dispatch('parcels/find', params.id)
    return { parcel }
  },
  computed: {
    parcelDeliveryProgress() {
      const parcelDeliveryProgress = []
      const parcelHistories = this.parcel.parcelHistories
      let previousDate = ''

      for (let i = 0; i < parcelHistories.length; i++) {
        const date = this.$moment(parcelHistories[i].datetime).format('MMM. D')
        const time = this.$moment(parcelHistories[i].datetime).format('h:mm a')
        const progress = {
          status: parcelHistories[i].status.status,
          location: parcelHistories[i].location,
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
}
</script>

<style lang="scss" scoped></style>