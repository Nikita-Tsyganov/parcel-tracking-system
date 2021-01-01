<template>
  <div class="container">
    <header class="header">
        <h1>Parcel Tracker</h1>
    </header>
    <form class="form" @submit.prevent="addTrackingID">
	  <input type="text" v-model="trackingID" name="trackingID" placeholder="Enter tracking ID">
	  <input type="submit" value="Search" class="btn">
     </form>
  </div>
</template>
<script>
export default {
    name: "TrackingID",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTrackingID() {
            const newTrackingID = {
                title: this.title
            }
            // Send up to parent
            this.$emit('add-tracking-id', newTrackingID);
            
            //clear field
            this.title = '';
        }
    }
}
</script>

<style>
    .header {
        display: flex;
        justify-content:center;
        background: #732323;
        color: #FFF;
        padding: 10px;
    }
    .form {
        display: flex;
        flex-direction:column;
        align-items:center;
        padding: 10%; 
    }
    .container div {
        border: 1px #ccc solid;
        flex-basis: 25%; 
    }
    .input[type="text"] {
        flex: 2;
    }
    .btn {
        flex: 1;
        background: #FF4D4D;
        color: #FFF;
        padding: 7px 20px;
        cursor: pointer;
    }
    .btn:hover {
        background: #FFF;
    }
    .links {
      padding-top: 15px;
    }
</style>
