<template>
  <div class="container">
    <h3 class="mb-4">Delivery status</h3>
    <p class="h5 font-weight-bold mb-1">
      {{ this.parcel.status }}
    </p>
    <b-link class="text-decoration-none mb-4" v-b-toggle.details
      >Delivery details
      <span class="when-closed"><fa :icon="['fas', 'chevron-down']" /></span>
      <span class="when-open"><fa :icon="['fas', 'chevron-up']" /></span>
    </b-link>
    <b-collapse class="mt-4" id="details">
      <p class="my-0">
        <span class="font-weight-bold">Shipping service:</span>
        Team 5 Express
      </p>
      <p class="my-0">
        <span class="font-weight-bold">Tracking number:</span>
        {{ this.parcel.id }}
      </p>
      <p class="my-0">
        <span class="font-weight-bold">Delivery standard:</span>
        {{
          $moment(this.parcel.createdAt).add(14, 'days').format('MMM. D, YYYY')
        }}
      </p>
      <p>{{ this.parcel.statusid }}</p>
    </b-collapse>
    <div class="container mb-0">
      <h6 class="small my-2">
        Origin<br /><span>
          {{ this.parcel.origin }}
        </span>
      </h6>
      <b-progress id="progress-bar" class="w-50 my-3" max="9">
        <b-progress-bar
          :value="this.parcel.lastUpdate.statusId"
          variant="success"
        >
        </b-progress-bar>
      </b-progress>
      <div class="d-flex justify-content-between col-6">
        <label
          for="progress-bar"
          class="col-2"
          v-if="statusIDPresent(3) !== false"
        >
          <fa :icon="['fas', 'box']" />
          <h6 class="font-weight-bold my-0">Received by Team 5 Express</h6>
          <h6>
            {{
              $moment(
                this.parcel.parcelHistories[statusIDPresent(3)].dateTime
              ).format('MMM. DD, YYYY')
            }}
          </h6>
        </label>
        <label
          for="progress-bar"
          class="col-4"
          v-if="statusIDPresent(9) !== false"
          style="text-align: right"
        >
          <fa :icon="['fas', 'check-circle']" />
          <h6 class="font-weight-bold my-0">Delivered</h6>
          <h6>
            {{
              $moment(this.parcel.parcelHistories[0].dateTime).format('MMM. D')
            }}
          </h6>
        </label>
      </div>
    </div>
    <h3 class="mt-5 mb-4">Delivery progress</h3>
    <p class="mb-0">
      Information updated:
      {{ $moment(this.parcel.lastUpdate.datetime).format('MMM. D') }}
    </p>
    <b-table
      class="border-bottom mb-4"
      borderless
      :items="parcelDeliveryProgress"
    >
      <template #cell(progress)="data">
        {{ data.value.status }}<br />{{ data.value.location }}
      </template>
    </b-table>
    <b-button class="px-4 py-2 mt-4" squared variant="primary" to="/"
      >Track another item</b-button
    >
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
      let previousDate = ''

      for (const parcelHistory of this.parcel.parcelHistories) {
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
    statusIDPresent(id) {
      const parcels = this.parcel.parcelHistories

      for (var i = 0, len = parcels.length; i < len; i++) {
        if (parcels[i].statusId == id) {
          return i
        }
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.when-closed,
.when-open {
  display: none;
}
.collapsed > .when-closed,
.not-collapsed > .when-open {
  display: inline-block;
}
</style>