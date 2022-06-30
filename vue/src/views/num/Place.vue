<template>
  <div>
    <el-main>
      <el-table :data="tableData">
        <el-table-column
          prop="place"
          label="区域"
          min-width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="time" label="时间" min-width="100">
        </el-table-column>
        <el-table-column prop="name" label="物品" min-width="160">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Place",
  inject: ["reload"], //刷新
  data() {
    return {
      tableData: [], //表格
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      fileParam: "",
      edit_dialogVisible: false, //对话框
      add_dialogVisible: false,
      editObj: {
        plac: "",
        newplac: "",
      },
      add: {
        plac: "",
        tim: "",
        nam: "",
        pric: "",
      },
    };
  },
  methods: {
    //table
    getData() {
      axios
        .get("http://localhost:8081/goods/")
        .then((res) => {
          this.tableData = res.data; //[]
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    //返回内容
    handleChange(file, fileList) {
      this.fileParam = new FormData(); //创建form对象
      this.fileParam.append("file", file["raw"]);
      this.fileParam.append("fileName", file["name"]);
    }, //传图片数据
    handleClick() {
      axios
        .post("http://127.0.0.1:8081/save/", this.fileParam)
        .then((response) => {
          console.log(response);
          this.fileList = [];
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
</style>
