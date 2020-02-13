<template>
    <Card :padding=padding class="no-select"> 
        <div class="flex">
            <div class="flex a-center j-center" style="height:110px;width:92px;" :style="{'background-color':bgcolor}">
                <Icon :type="icon" style="font-size:28px;color:#fff"/>
            </div>
            <div class="flex a-center flex-col j-center flex-1">
                <h1>{{mycount}}</h1>
                <div>{{title}}</div>
            </div>
        </div>
    </Card>
</template>

<script>
export default {
    props: ["icon","bgcolor","count","title"],
    data() {
        return {
            mycount:0,
            padding:0
        }
    },
    created() {

    },
    mounted() {
        var timer = setInterval(() => {
            this.mycount < this.count ? this.mycount++ : clearInterval(timer)
        },1)
    }
}
</script>
<style scoped>

</style>