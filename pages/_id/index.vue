<template>
  <div class="container">
    <h3 class="ls-02 mb-4">Delivery status</h3>
    <div class="h5 font-weight-bold mb-1 ls-05">
      {{ parcel.status }}
    </div>
    <b-link class="text-decoration-none mb-4" v-b-toggle.details
      >Delivery details
      <span class="when-closed">
        <img class="chevron" src="chevron-down.svg" alt="Chevron down icon"
      /></span>
      <span class="when-open">
        <img class="chevron" src="chevron-up.svg" alt="Chevron up icon"
      /></span>
    </b-link>
    <b-collapse class="ls-05" id="details">
      <div class="pt-4">
        <span class="font-weight-bold">Shipping service:</span>
        Team 5 Express
      </div>
      <div>
        <span class="font-weight-bold">Tracking number:</span>
        {{ parcel.id }}
      </div>
      <div>
        <span class="font-weight-bold">Delivery standard:</span>
        {{
          $moment(firstEvent.datetime).add(14, 'days').format('MMM. D, YYYY')
        }}
      </div>
    </b-collapse>
    <div class="h6 small ls-normal pt-4 mb-2">
      <div>Origin</div>
      <div>{{ parcel.origin }}</div>
    </div>
    <div class="col-lg-6 mb-5" v-if="this.parcel.lastUpdate.statusId > 1">
      <b-progress class="overflow-visible my-3" id="progress-bar" max="9">
        <b-progress-bar
          class="working rounded-pill position-relative overflow-visible"
          v-if="deliveryProgress < 9"
          :value="deliveryProgress"
        >
        </b-progress-bar>
        <b-progress-bar
          class="success rounded-pill position-relative overflow-visible"
          v-else
          :value="deliveryProgress"
          variant="success"
        >
        </b-progress-bar>
      </b-progress>
      <ProgressBarLabels :parcel="this.parcel" />
    </div>
    <div v-else>
      <div class="mb-4">
        A shipping label has been created by the shipper. Once the shipment
        arrives in our facility, tracking status and the expected delivery date
        will be updated. Check back for updates.
      </div>
    </div>
    <h3 class="ls-05 mb-4">Delivery progress</h3>
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
    <b-button class="px-4 py-2 mt-4" squared variant="primary" to="/"
      >Track another item</b-button
    >
  </div>
</template>

<script>
import ProgressBarLabels from '~/components/ProgressBarLabels'
export default {
  components: {
    ProgressBarLabels,
  },
  async asyncData({ store, params }) {
    const parcel = await store.dispatch('parcels/find', params.id)

    return {
      parcel,
      deliveryProgress: 0,
    }
  },
  async mounted() {
    for (let i = 0; i <= this.lastEvent.statusId * 100; i++) {
      this.deliveryProgress = i / 100

      if (i % 6 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1))
      }
    }
    if (this.parcel.lastUpdate.statusId < 1) {
      document
        .getElementsByClassName('progress-bar')[0]
        .classList.add('animation-done')
    }
  },
  computed: {
    firstEvent() {
      return this.parcel.events[this.parcel.events.length - 1]
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

.progress {
  height: 12px;
}

.progress-bar.working::after {
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  right: -19px;
  background-color: white;
  border: 7px solid #0275d8;
  border-radius: 50%;
}

.progress-bar.success::after {
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  right: -19px;
  background-color: white;
  border: 7px solid #198754;
  border-radius: 50%;
}

.progress-bar.animation-done::after {
  right: 0;
}

.overflow-visible {
  overflow: visible;
}

.delivery-milestone {
  max-width: 120px;
}

.chevron {
  padding-left: 3px;
  margin-top: -2px;
}
</style>