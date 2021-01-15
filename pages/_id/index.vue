<template>
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
    <b-button squared variant="primary" href="/">
      Track another item
    </b-button>
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