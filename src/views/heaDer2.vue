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
    <div class="col">
      <button class="button" style="vertical-align:middle" @click.prevent="gop" ><span>projets list</span></button>
    </div></div>
    <div class="col">
      <button class="button" style="vertical-align:middle" @click.prevent="goc"><span>clients list </span></button>

  </div></div><hr/></div>
 
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
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #183b5f;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 200px;
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