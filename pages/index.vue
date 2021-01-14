<template>
  <div class="container">
    <div class="tracking-id-input">
      <form>
        <label class="mb-2" for="trackingNumber">Tracking numbers</label>
        <b-form-input
          class="mb-3"
          id="trackingNumber"
          name="trackingNumber"
          type="text"
          v-model="trackingNumber"
          placeholder="Enter up to 24 items, separated by commas or line breaks"
          @keypress.enter.prevent="track()"
        ></b-form-input>
        <b-button squared variant="primary" @click.prevent="track()"
          >Track</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trackingNumber: '',
    }
  },
  methods: {
    track() {
      this.$router.push(`/${this.trackingNumber}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>