<template>
    <div>
        {{trackingID}}
    </div>
</template>

<script>
import trackingID from '@/pages/index';

export default {
    data() {
        return {
            trackingID,
            progress: {}
        };
    },
    //created() {
    //    const parcel = axios
    //    .get('parcels/${this.$route.params.id}')
    //    .then((parcel) => console.log(parcel))
    //}
}

</script>

<style>
</style>