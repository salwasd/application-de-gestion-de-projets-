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
      Name: <br><input type="text" v-model="currentProject.name" />  
      <br>
      Client<br><input type="text" v-model="currentProject.client" /> 
      <br>
      Date Debut<br><input type="text" v-model="currentProject.dateDebut" /> 
      <br>
    </div>
    </div>
    <div class="col">
      <div class="inputMaterial">
      
      society<br><input type="text" v-model="currentProject.society" /> 
      <br>
      Status<br><input type="text" v-model="currentProject.name" /> 
      <br>
      Date Fin<br><input type="text" v-model="currentProject.dateFin" /> 
    </div></div>
    <hr/>
    <div class="row">
    <div class="col">
    </div>
    <div class="col"> 
      <div class="inputMaterial">
      Montant<br>
    </div></div>
    <div class="col">
    </div>
    
  </div>
   
    </div></div></div>
    <div class="card-footer">
        <button class="btn btn-outline-success"  @click.prevent="gop">edit</button>
      </div></div>
    <hr><div>
      <div class="card text-center" >
    <table class="table table--responsive table--horizontal-border margin-double--bottom" >
	<thead>
    <tr>
		
		
      <td><strong>N°</strong></td>
      <td><strong>date</strong></td>
      <td><strong>payment</strong></td>
      <td><strong>statut</strong></td>
    </tr>
  </thead>
   <tbody>
    <tr>
      
      <td><strong>1</strong></td>
      <td>01/08/2022</td>
      <td>66666</td>
      <td>en cours</td>
    </tr>
  </tbody>
  </table></div></div></div>
</template>
<script>
   import heaDer from '../views/heaDer.vue';
export default{
  name:'prjx',
  props: {
    projectProp: Object
  },
  data() {
    return {
      currentProject: {}
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
    console.log("@@@@@ afret", this.currentProject)
    this.currentProject = JSON.parse(JSON.stringify(this.projectProp))
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
thead{
color:black ;
background-color: #e6d6d6;
}
.table, th, td {
  border: 1px solid #e6d6d6;
  border-collapse: collapse;
  
}
.card{
  width: 70rem;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 350px;
}
</style>