<template>
  <div>
    <b-row class="mb-2" align-h="around">
      <b-col class="mb-2" cols=2>
        {{ $moment(parcelHistory.date).format('h:mm a') }}
      </b-col>
      <b-col class="mb-2" cols=2>
        {{ parcelHistory.parcelHistories[0].status.status }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ParcelHistory',
  props: ['parcelHistory'],
}
</script>

<style lang="scss" scoped></style>