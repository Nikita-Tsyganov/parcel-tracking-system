<template>
  <div class="d-flex justify-content-between ls-05">
    <div
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
  name: 'Parcel',
  props: ['parcel'],
}
</script>

<style scoped>
</style>