<template>
  <b-container class="parcel-history">
    <b-row cols="3">
      <b-col>
        <p>{{ parseDate(parcelHistories.datetime) }}</p>
      </b-col>
      <b-col>
        <p>{{ parcelHistories.dateTime }}</p>
      </b-col>
      <b-col>
        <p>{{ parcelHistories.status.status }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ParcelHistory',
  props: ['parcelHistory'],

  methods: {
    parseDate(date) {
      var parsedDate = new Date(date).toString()
      console.log(parsedDate)
    },
  },
}
</script>
