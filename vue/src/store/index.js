import Vue from 'vue';
import Vuex from 'vuex'
import user from './modules/user'
//获取数据
//this.data = this.$store.state.forensic.case_info
//存数据到vuex
//this.$store.commit('forensic/getTreeCaseInfo',data)
//值
Vue.use(Vuex);
export default new Vuex.Store({
   modules:{
     user
   }
 });