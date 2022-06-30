<template>
  <div>

<el-container style="height: 1000px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>确诊人数</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/num/place">
              地区展示
            </router-link></el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/num/Number">
              物品展示
            </router-link></el-menu-item>
            <el-menu-item index="1-3">
            <router-link to="/echarts/test">
              各地区比较
            </router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-location"></i>确诊人数</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link to="/num/place">
              公告发布
            </router-link></el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/echarts/Shmap">
              shmap
            </router-link></el-menu-item>
            <el-menu-item index="2-3">
            <router-link to="/echarts/Region">
              地区时间横向比较
            </router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-menu-item index="1-4">
            <router-link to="/gomain">
            回到首页
            </router-link></el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{$store.getters.getUser.name}}</span>
    </el-header>
    <router-view /> 
    
  </el-container>
</el-container>





  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
export default {
  data () {
    return {}
  },
  methods: {},
}

