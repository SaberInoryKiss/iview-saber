<template>
  <div class="map4" ref="map"></div>
</template>

<script>
import echarts from "echarts";
import "../js/china";
import { data, geoCoordMap } from "../js/area_echarts";
export default {
  props: ["list"],
  data() {
    return {
      myChart: {}
    };
  },
  watch: {
    list() {
      this.init()
    }
  },
  mounted(){
    this.myChart = echarts.init(this.$refs.map);
  },
  methods: {
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    init() {
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return params.name + " : " + params.value;
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },

        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false, //禁止其放大缩小
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
            name: "感染人数",
            type: "scatter",
            coordinateSystem: "geo",
            data: this.convertData(data),
            symbolSize: function(val) {
              return val[2] / 15;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#ffeb7b"
              }
            }
          }
        ]
      };

      this.myChart.setOption(option);
      this.myChart.resize();
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