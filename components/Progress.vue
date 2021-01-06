<template>
    <div class="progress">
        <p>{{ progress }}</p>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        props: ["progress"]
    }
</script>

<style lang="scss" scoped>
.progress {
    paddings: 1rem;
    border: 1px dotted #CCC;
    margin: 1rem 0;
}
</style>
