<template>
  <b-container class="parcel-history">
    <b-row cols="3">
      <b-col>
        <p>{{ $moment(parcelHistory.datetime).format("MMM. D") }}</p>
      </b-col>
      <b-col>
        <p>{{ $moment(parcelHistory.datetime).format("h mm a") }}</p>
      </b-col>
      <b-col>
        <p>{{ parcelHistory.status.status }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ParcelHistory',
  props: ['parcelHistory'],
}
</script>
