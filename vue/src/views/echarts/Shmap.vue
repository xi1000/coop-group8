<template>
  <div>
    <div class="map-box" ref="mapContainProvince" />
  </div>
</template>
 
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      listArr: [], //城市json
      max: "", //最大value值
      min: "", // 最小value值
    };
  },
  methods: {
    drawProvinceMap(provinceName, mapName) {
      this.provinceName = provinceName;
      this.mapName = mapName;
      require(`echarts/map/js/province/${this.provinceName}.js`);
      let _this = this;
      let myChart8 = echarts.init(this.$refs.mapContainProvince);
      const option = {
        visualMap: {
          min:800,
          max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
          inRange: {
            color: ["lightskyblue"],
          },
        },
        series: [
          {
            type: "map",
            map: this.mapName,
            label:{
                show:true
            },
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } },
              emphasis: {
                areaColor: "#67C23A", //鼠标进入时的颜色
              },
            },
            data: [
                {name:'浦东新区',value:22}
            ],
            nameMap:{
                
            }
          },
        ],
      };
      myChart8.setOption(option);
    },
  },
  created() {},
  mounted() {

    this.drawProvinceMap("shanghai", "上海");
  },
};
</script>

<style scoped>
.map-box {
  display: inline-block;
  width: 60vw;
  height: 85vh;
}
</style>