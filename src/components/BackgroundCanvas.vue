<template>
    <div>
        <canvas id="canv"></canvas>
    </div>
</template>

<script>
import initBackgroundCanvas from './js/bg.js'
export default {
    mounted () {
        initBackgroundCanvas()
	}
}
</script>
<style>
    #canv {
        position: fixed;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
</style>