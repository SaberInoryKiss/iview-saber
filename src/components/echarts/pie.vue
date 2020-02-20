<template>
    <div>    
        <div class="allnav" ref="container"></div> 
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: ['data', 'color','title'],
    mounted() {},
    methods: {
        init() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.container);

            let option = {

                title: [{
                    text: this.title,
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: '16'
                    }

                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }
                },
                legend: {

                    top: '70%',
                    itemWidth: 10,
                    itemHeight: 10,
                    data: this.data.map(a=>a.name),
                    textStyle: {
                        color: 'rgba(255,255,255,.5)',
                        fontSize: '12',
                    }
                },
                series: [{
                    name: this.title,
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: this.data
                    // [
                    //     { value: 1, name: '0岁以下' },
                    //     { value: 4, name: '20-29岁' },
                    //     { value: 2, name: '30-39岁' },
                    //     { value: 2, name: '40-49岁' },
                    //     { value: 1, name: '50岁以上' },
                    // ]
                }]
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }
    }
}
</script>
<style scoped>

</style>