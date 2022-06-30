const user={
    state: sessionStorage.getItem('userstate') ? JSON.parse(sessionStorage.getItem('userState'))
    : {
    user:{
      name:''
    }
},
   getters:{
     getUser(state){
       return state.user;
     }
   },
  //修改
   mutations:{
    updateUser(state,user) {
      state.user =user;
    }
   },
  //调用修改
   actions:{
    asyncUpdateUser(context,user){
      context.commit('updateUser',user);
    }
   }
}
    
export default user;