<template>
    <div>
        <div class="allnav" ref="container"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props:{
        data: {
            type: Array,
            default: () => []
        },
        color: {
            type: String
        },
    },
    watch: {
        data(newVal,oldVal) {
            this.data = newVal
            this.init()
        },
        deep: true
    },
    mounted() {
    },
    methods: {
        init() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.container);

            
            let option = {
                //  backgroundColor: '#00265f',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '0%',
                    top: '10px',
                    right: '0%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: this.data.map(a=>a.label),
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 1,
                            type: "solid"
                        },
                    },

                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                        // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        //formatter: '{value} %'
                        show: true,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1	)",
                            width: 1,
                            type: "solid"
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                        }
                    }
                }],
                series: [{
                        type: 'bar',
                        data: this.data.map(a=>a.value),
                        barWidth: '35%', //柱子宽度
                        // barGap: 1, //柱子之间间距
                        itemStyle: {
                            normal: {
                                color: this.color,
                                opacity: 1,
                                barBorderRadius: 5,
                            }
                        }
                    }

                ]
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