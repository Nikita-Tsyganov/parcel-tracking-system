<template>
  <div>
    <div class="delivery-progress">
      <h5>Delivery progress</h5>
      <!-- <b-table striped hover fixed stacked="sm" :items="items" :fields="fields" primary-key="date" ></b-table> <ParcelHistory v-bind:parcelHistory="parcelHistory" /> 
        -->
      <deliveryProgress/>
      <parcel/>
    </div>
  </div>
</template>>

<script>
import axios from 'axios'
import deliveryProgress from '@/components/Progress'

export default {
  components: {
    deliveryProgress,
  },
  data() {
    return {
      parcels: [],
    }
  },
  created() {
    const parcel = axios.get('parcels').then((parcel) => console.log(parcel))
  },
}
</script>

<style lang="scss" scoped>
.b-table {
  width: 35%;
}
</style>