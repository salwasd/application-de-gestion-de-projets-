<template>
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
      
      <button class="bttn"  @click.prevent="logout">← logout</button>
      
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
  <button class="button" style="vertical-align:middle"  @click.prevent="goh"><span>home</span></button>
</div>
    <div class="col">
    <div class="col">
      <button class="button" style="vertical-align:middle"  @click.prevent="gop"><span>projets</span></button>
    </div></div>
    <div class="col">
      <button class="button" style="vertical-align:middle"  @click.prevent="goc"><span>clients</span></button>

  </div></div><hr/></div>
      
  

</template>
<script>
export default{
  methods:{
    gop(){
      this.$router.push("projets")
    },
    logout(){
      this.$router.push("/")
    },
    goc(){  this.$router.push("clients")},
    goh(){  this.$router.push("/home2")}
  }
}
</script>

<style scoped>
nav li a{
  display: block;
  padding: 0 5px;
  line-height: 30px;
  float: right;
  color: #463f3f;
}
nav li a:hover {
  color: red;
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f1f3f5;
  border: none;
  color: #06283D;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 10px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.bttn {
  display: inline-block;
  border-radius: 4px;
  background-color: #f1f3f5;
  border: none;
  color: red;
  text-align: center;
  font-size: 15px;
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