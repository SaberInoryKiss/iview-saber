<template>
    <div class="allnav" ref="container">
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    props: {
      data: {
            type: Object
        },
    },
    // watch: {
    //     data: {
    //         immediate:true,
    //         handler:function(val){
    //          console.log(val)
    //         }
    //     }
    // },
    watch: {
        data: {
          handler(newVal) {
            this.data = newVal
            this.init()
          },
          deep:true,
        }
    },
    methods: {
        init() {
            console.log(this.data);
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.container);
            let option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        lineStyle: {
                            color: "#dddc6b"
                        }
                    }
                },
                legend: {
                    top: "0%",
                    data: this.data.title,
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: "12"
                    }
                },
                grid: {
                    left: "10",
                    top: "30",
                    right: "10",
                    bottom: "10",
                    containLabel: true
                },

                xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 12
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.2)"
                            }
                        },

                        data: this.data.date
                    },
                    {
                        axisPointer: { show: false },
                        axisLine: { show: false },
                        position: "bottom",
                        offset: 20
                    }
                ],

                yAxis: [{
                    type: "value",
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: 12
                        }
                    },

                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    }
                }],
                series: this.data.data.map((r, i) => {
                    return {
                        name: this.data.title[i],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                color: this.data.color[i],
                                width: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1, [{
                                            offset: 0,
                                            color: "rgba(1, 132, 213, 0.4)"
                                        },
                                        {
                                            offset: 0.8,
                                            color: "rgba(1, 132, 213, 0.1)"
                                        }
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(0, 0, 0, 0.1)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: this.data.color[i],
                                borderColor: "rgba(221, 220, 107, .1)",
                                borderWidth: 12
                            }
                        },
                        data: r
                    };
                })
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }
    }
};
</script>

<style>

</style>