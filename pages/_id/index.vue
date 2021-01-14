<template>
  <div class="container">
    <h5 class="mb-4">Delivery progress</h5>
    <h6>
      Information updated:
      {{ $moment(this.parcelLastUpdate.datetime).format('MMM. D') }}
    </h6>
    <b-table class="border-bottom" borderless :items="parcelDeliveryProgress">
      <template #cell(progress)="data">
        {{ data.value.status }}<br />{{ data.value.location }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      parcel: {},
      parcelLastUpdate: {},
      parcelDeliveryProgress: [],
    }
  },
  methods: {
    ...mapActions({
      findParcel: 'parcels/find',
    }),
  },
  async fetch() {
    this.parcel = await this.findParcel(this.$route.params.id)
    this.parcelLastUpdate = this.parcel.lastUpdate
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

      this.parcelDeliveryProgress.push(parcelHistoryRow)
    }
  },
}
</script>

<style lang="scss" scoped></style>