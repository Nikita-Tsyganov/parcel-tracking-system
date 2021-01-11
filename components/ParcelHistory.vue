<template>
  <div>
    <b-container class="parcel-history">
      <b-row align-h="between">
        <b-col class="mb-2" cols=1>
          {{ $moment(parcelHistory.datetime).format('MMM. D') }}
        </b-col >
        <b-col class="mb-2" cols=1>
          {{ $moment(parcelHistory.datetime).format('h:mm a') }}
        </b-col>
        <b-col class="mb-2" cols=1>
          {{ parcelHistory.status.status }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ParcelHistory',
  props: ['parcelHistory'],
}
</script>

<style lang="scss" scoped></style>