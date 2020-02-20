<template>
    <div class="boxall" style="height: 3.2rem">
        <div class="alltitle">{{title}}</div>
        <slot></slot>
        <div class="boxfoot"></div>
    </div>
</template>

<script>
export default {
    props:['title'],
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped>

</style>