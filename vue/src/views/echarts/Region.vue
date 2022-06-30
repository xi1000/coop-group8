<template>
  <div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 800px; height: 600px"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  //注册子组件
  components: {},
  name: "eCharts-manage",
  data() {
    return {
      name: [],
      age: [],
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "地区总计确诊人数随时间变化",
        },
        tooltip: {},
        legend: {},
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35,
          },
        ],
        xAxis: {
          type: "category",
          axisLabel: {},
          data: this.date,
        },
        yAxis: { min: 15000 },
        series: [
          {
            name: "确诊人数",
            type: "line",
            data: this.number,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //从后端获取
    getName() {
      axios
        .get("http://localhost:8081/place/")
        .then((res) => {
          this.number = res.data.num;
          this.date = res.data.date;
          this.drawChart();
          console.log(res);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    this.getName();
  },
};
</script>
<style scoped>
</style>

