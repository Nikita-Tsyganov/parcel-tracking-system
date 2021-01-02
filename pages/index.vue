<template>
  <div class="container">
    <div class="tracking-id-input">
        <form class="form" @submit.prevent="addTrackingID">
            <label for="trackingID">Tracking numbers</label>
            <!-- @submit, v-model, etc. for for js functionality, yet to be completed -->
            <input type="text" v-model="trackingID" name="trackingID" placeholder="Enter up to 24 items, separated by commas or line breaks">
            <input type="submit" value="Track" class="btn">
        </form>
    </div>
  </div>
</template>

<!-- not done -->
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
    .container div {
        border: 1px #ccc solid;
        flex-basis: 25%; 
    }
    .form {
        display: flex;
        flex-direction:column;
        align-items:flex-start;
        padding: 10%; 
    }
    .input[type="text"] {
        flex: 10; 
    }
    .input[type="submit"] {
        flex: 1;
        padding: 10px;
    }
    .btn {
        background: #0467C6;
        color: #FFF;
        padding: 7px 25px;
        cursor: pointer;
    }
    .btn:hover {
        background: #FFF;
    }
</style>
