<template>
    <div>
      
  <hea-der/>
    <div class="card text-center" >
      <h5 class="card-header">information du projet</h5>
    <div class="card-body">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div class="inputMaterial">
        Name <br><input type="text" v-model="currentClient.name" />  
        <br>
        email<br><input type="text" v-model="currentClient.email" />  
        <br>
        city<br><input type="text" v-model="currentClient.city" />  
        <br>
      </div>
      </div>
      <div class="col">
        <div class="inputMaterial">
        
        phone number<br><input type="text" v-model="currentClient.num" />  
        <br>
        responsable client<br><input type="text" v-model="currentClient.respClient" />  
        <br>
        responsable client<br><input type="text" v-model="currentClient.respPrj" />  
      </div></div>
      
      </div></div></div>
      <div class="card-footer">
        <button class="btn btn-outline-success" @click.prevent="gop">edit</button>
      </div></div>
      <hr></div>
</template>

<script>
   import heaDer from '../views/heaDer.vue';
export default {
    name:'cltx',
    components:{
heaDer,
  },
  props: {
    clientProp: Object
  },
  data() {
    return {
      currentClient: {}
    }
    
  },
  methods:{
      gop(){
      this.$router.push("projets")
    }},
  components:{
    heaDer,
  },
  mounted() {
    console.log("@@@@@ after", this.currentClient)
    this.currentClient = JSON.parse(JSON.stringify(this.clientProp))
  }
}
</script>

<style scoped>
 .inputMaterial {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  color: rgb(124, 124, 124)
}
.card{
  width: 70rem;
  margin: 0 auto;
  margin-top: 30px;
  height: 300px;
}
.card-body{
  margin-top: 30px
}
</style>