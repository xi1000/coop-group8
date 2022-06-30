<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  data () {
  return {
    isRouterAlive: true
  }
},
  name: 'App',
  mounted(){
    window.addEventListener('unload',this.saveState);
  },
  provide(){
		return {
			reload: this.reload
		}
	},
  methods:{
    saveState(){
      window.sessionStorage.setItem('state',JSON,stringify(this.$store.state.user))
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function() {
         this.isRouterAlive = true
      })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
