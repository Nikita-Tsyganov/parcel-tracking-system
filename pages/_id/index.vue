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
    <div v-if="lastEvent.statusId > 1" class="col-lg-6 mb-5">
      <b-progress class="rounded-pill overflow-visible my-3" max="9">
        <b-progress-bar
          class="rounded-pill position-relative overflow-visible"
          :value="deliveryProgress"
          :variant="lastEvent.statusId === 9 ? 'success' : 'primary'"
        >
        </b-progress-bar>
      </b-progress>
      <div class="position-relative d-flex justify-content-between ls-05">
        <div
          v-if="lastEvent.statusId >= 3"
          class="delivery-milestone text-secondary"
        >
          <img class="mb-2" src="received.svg" alt="Parcel received" />
          <div class="font-weight-bold">Received by Team 5</div>
          <div>
            {{
              $moment(
                parcel.events.filter((event) => event.statusId === 3)[0]
                  .datetime
              ).format('MMM. DD, YYYY')
            }}
          </div>
        </div>
        <div
          v-if="lastEvent.statusId > 3 && lastEvent.statusId < 9"
          class="position-absolute delivery-milestone dynamic-delivery-milestone text-center"
          :style="{
            left: `calc(${(lastEvent.statusId / 9.0) * 100}%)`,
          }"
        >
          <div class="h4 m-0">
            <fa :icon="['fas', statusIcons[lastEvent.statusId - 1]]" />
          </div>
          <div class="font-weight-bold">{{ lastEvent.status.status }}</div>
          <div>
            {{ $moment(lastEvent.datetime).format('MMM. D') }}
          </div>
        </div>
        <div
          id="delivered"
          class="delivery-milestone text-right"
          v-if="lastEvent.statusId === 9"
        >
          <img
            class="mb-2 text-success"
            src="delivered.svg"
            alt="Parcel delivered"
          />
          <div class="font-weight-bold">Delivered</div>
          <div>
            {{ $moment(lastEvent.datetime).format('MMM. D') }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="col-lg-6 my-4">
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
export default {
  async asyncData({ store, params }) {
    const parcel = await store.dispatch('parcels/find', params.id)

    return {
      parcel,
      deliveryProgress: 0,
      statusIcons: [
        '',
        '',
        '',
        'truck',
        'truck',
        'truck',
        'truck',
        'truck',
        '',
      ],
    }
  },
  async mounted() {
    for (let i = 0; i <= this.lastEvent.statusId * 100; i++) {
      this.deliveryProgress = i / 100

      if (i % 6 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1))
      }
    }
    if (this.lastEvent.statusId > 1) {
      const progressBar = document.getElementsByClassName('progress-bar')[0]

      if (this.lastEvent.statusId === 9) {
        progressBar.classList.add('delivered')
      } else {
        progressBar.classList.add('animation-done')
      }
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

.progress-bar::after {
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  right: -19px;
  background-color: white;
  border: 7px solid #0d6efd;
  border-radius: 50%;
}

.progress-bar.bg-success::after {
  border-color: #198754;
}

.progress-bar.animation-done::after {
  right: -12px;
}

.progress-bar.delivered::after {
  right: 0;
}

.delivery-milestone {
  max-width: 120px;
}

.dynamic-delivery-milestone {
  transform: translate(-50%);
}

.chevron {
  padding-left: 3px;
  margin-top: -2px;
}
</style>