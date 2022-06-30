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
        <el-table-column
          prop="name"
          label="物品名称"
          min-width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          min-width="120"
          align="center"
        >
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Price",
  inject: ["reload"],
  data() {
    return {
      tableData: [], //表格
      url: "",
      srcList: [""],
      fileList: [],
      edit_dialogVisible: false, //对话框
      add_dialogVisible: false,
      editObj: {
        plac: "",
        nam: "",
        pric: "",
        num: "",
      },
      add: {
        plac: "",
        nam: "",
        pric: "",
      },
    };
  },
  methods: {
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
    handleChange(file, fileList) {
      this.fileParam = new FormData(); //创建form对象
      this.fileParam.append("file", file["raw"]);
      this.fileParam.append("fileName", file["name"]);
    },  
    //图片获取
    getimage() {
      axios
        .get("http://127.0.0.1:8081/down-image/", {
          responseType: "arraybuffer",
        })
        .then((response) => {
          console.log(response);

          let c = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          this.url = "data:image/png;base64," + c;
          this.srcList[0] = "data:image/png;base64," + c;
        });
    },
    //图片相关
    Str2Bytes(str) {
      var pos = 0;
      var len = str.length;
      if (len % 2 != 0) {
        return null;
      }
      len /= 2;
      var hexA = new Array();
      for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
      }
      return hexA;
    },
    arrayBufferToBase64(buffer) {
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //                return window.btoa( binary );
      return binary;
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
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
