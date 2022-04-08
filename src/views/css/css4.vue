<!--
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2022-01-17 16:25:26
 * @LastEditTime: 2022-01-17 16:51:20
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
-->
<template>
  <div class="wrapper">
    <div class="typing-demo">
      This is a typing demo.
    </div>
</div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>