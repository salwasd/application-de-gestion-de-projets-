<template>
    <div class="container">
    <div class="row align-items-center">
      <div class="col">
      </div>
      <div class="col">
       </div>
       <div class="col">
  </div>
  <div class="col">
  </div>
  <div class="col">
  </div>
  <div class="col">
  </div>
      <div class="col">
      <div class="col">
    
      </div></div>
      <div class="col">
        <button class="bttn"  @click.prevent="goli" >logIn</button>
    </div>
    
    
    
</div><hr/></div>
   
  </template>
  
  <script>
  export default {
  methods:{
      logout(){
        this.$router.push("/")
  },
  gop(){
        this.$router.push("projets")
      },
      goc(){  this.$router.push("clients")}
    }
  }
  </script>
  
  <style scoped>
 .bttn {
  display: inline-block;
  border-radius: 4px;
  background-color: #f1f3f5;
  border: none;
  color: rgb(184, 26, 26);
  text-align: center;
  font-size: 15px;
  font-weight: 650;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.bttn:hover  {
  background: rgb(184, 26, 26);
  color: white}
  </style>