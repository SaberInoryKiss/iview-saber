<template>
  <div class="map4" ref="map"></div>
</template>

<script>
import echarts from "echarts";
import "../js/china";
// import { data, geoCoordMap } from "../js/area_echarts";
export default {
  props: ["data"],
  data() {
    return {
      myChart: {}
    };
  },
  watch: {
      data(newVal,oldVal) {
        this.data = newVal
        this.init() 
      },
    },
  mounted(){
  },
  methods: {
    // convertData(data) {
    //   var res = [];
    //   console.log(res)
    //   for (var i = 0; i < data.length; i++) {
    //     var geoCoord = geoCoordMap[data[i].name];
    //     if (geoCoord) {
    //       res.push({
    //         name: data[i].name,
    //         value: geoCoord.concat(data[i].value)
    //       });
    //     }
    //   }
    //   return res;
    // },

    init() {
      
         var myChart = echarts.init(this.$refs.map);
          let option = {
            tooltip: {
              trigger: "item",
              // formatter: '{b}<br/>{c} '
              // formatter: function(params) {
              //   if (typeof params.value[2] == "undefined") {
              //     return params.name + " : " + params.value;
              //   } else {
              //     return params.name + " : " + params.value[2];
              //   }
              // }
            },
            //左侧小导航图标
            visualMap: {  
                show : true,  
                x: '30%',  
                y: '68%',   
                textStyle: {
                    fontSize: 8,
                    fontWeight: 'bold',
                    color: 'yellow'
                },
                    
                splitList: [   
                    {min: 1500},{start: 1000, end: 1500},  
                    {start: 500, end: 1000},{start: 200, end: 500},  
                    {start: 100, end: 200},{start: 0, end: 100},  
                ],  
                color: ['#FF5511', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
            }, 
            geo: {
              map: "china",
              label: {
                emphasis: {
                  show: false
                }
              },
              roam: true, //禁止其放大缩小
              itemStyle: {
                normal: {
                  areaColor: "#4c60ff",
                  borderColor: "#002097"
                },
                emphasis: {
                  areaColor: "#293fff"
                }
              }
            },
            series: [
              {
                name: "确诊人数",
                label: {
                    normal: {  
                        textStyle: {
                            fontSize: 8,
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                }, 
                type: "map",
                mapType: 'china', // 自定义扩展图表类型
                itemStyle: {
                    normal: { label: { show: true } },
                    emphasis: { label: { show: true } }
                },
                // coordinateSystem: "geo",
                // data: this.convertData(data),
                data: this.data,
                // symbolSize: function(val) {
                //   return val[2] / 15;
                // },
                // label: {
                //   normal: {
                //     formatter: "{b}",
                //     position: "right",
                //     show: false
                //   },
                //   emphasis: {
                //     show: true
                //   }
                // },
                // itemStyle: {
                //   normal: {
                //     color: "#ffeb7b"
                //   }
                // }
              }
            ]
          };

          myChart.setOption(option);
          myChart.resize();
      
     
      // console.log(this.myChart)
      // window.addEventListener("resize", function() {
        
      //   this.myChart.resize();
      // });
    }
  }
};
</script>

<style>
</style>