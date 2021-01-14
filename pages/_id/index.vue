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
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $moment, params }) {
    const parcel = await $axios.$get(`parcels/${params.id}`)
    const parcelHistories = parcel.parcelHistories
    const parcelDeliveryProgress = []
    let previousDate = ''

    for (let i = 0; i < parcelHistories.length; i++) {
      const date = $moment(parcelHistories[i].datetime).format('MMM. D')
      const time = $moment(parcelHistories[i].datetime).format('h:mm a')
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
    return { parcel, parcelDeliveryProgress }
  },
}
</script>

<style lang="scss" scoped></style>