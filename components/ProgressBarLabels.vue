<template>
  <div class="d-flex justify-content-between ls-05">
    <div
      id="parcel-received"
      class="delivery-milestone text-secondary"
      for="progress-bar"
      v-if="parcel.lastUpdate.statusId >= 3"
    >
      <img class="mb-2" src="received.svg" alt="Parcel received" />
      <div class="font-weight-bold">Received by Team 5</div>
      <div>
        {{
          $moment(
            parcel.parcelHistories.filter(
              (parcelHistory) => parcelHistory.statusId === 3
            )[0].datetime
          ).format('MMM. DD, YYYY')
        }}
      </div>
    </div>
    <div
      id="CHANGEME1"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 1</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="CHANGEME2"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 2</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="CHANGEME3"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 3</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="CHANGEME4"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 4</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="CHANGEME5"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 5</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="CHANGEME6"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fa', 'truck']" />
      <div class="font-weight-bold">CHANGE ME 6</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="in-transit"
      class="delivery-milestone text-center"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <fa :icon="['fas', 'truck']" />
      <div class="font-weight-bold">In transit</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
    <div
      id="delivered"
      class="delivery-milestone text-right"
      for="progress-bar"
      v-if="parcel.status === 'Delivered'"
    >
      <img
        class="mb-2 text-success"
        src="delivered.svg"
        alt="Parcel delivered"
      />
      <div class="font-weight-bold">Delivered</div>
      <div>
        {{ $moment(parcel.lastUpdate.datetime).format('MMM. D') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parcel'],
}
</script>

<style scoped>
</style>