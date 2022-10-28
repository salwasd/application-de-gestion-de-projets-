<template>
<div class="hero">
<hea-der/>
 <div class="container">
	<div class="row">
		<div class="col-md-12">
            <h2>Listes des projets</h2>
            <hr>
			<table  id="table" class="table table-hover table-borded">
	<thead>
		<tr>
      <th>id</th>
      <th>nom</th>
      <th>client</th>
      <th>société</th>
      <th>statut</th>
			<th>dateDebut</th>
			<th>dateFin</th>
      <th></th>
      <th> <button class="btn btn-outline-dark" @click="onAddClick">+</button> </th>
			
		</tr>
    	</thead>
    <tr v-for="item in list" :key="item.id">
      <th>{{item.id}}</th>
      <th>{{item.name}}</th>
      <th>{{item.client}}</th>
			<th>{{item.society}}</th>
			<th>en cours</th>
			<th>{{item.dateDebut}}</th>
      <th>{{item.dateFin}}</th>	
      
      <th><button class="btn btn-outline-danger" @click.prevent="dlt(item.id)">X</button></th>
       <th><button class="btn btn-outline-success" @click.prevent="mdf(item)">edit</button></th>
		</tr>
</table>
		</div>
	</div>
</div></div>
</template>
<script>
 import heaDer from '../views/heaDer.vue';
export default {
  components:{
heaDer,
  },
  data(){
    return{
      list:[],
    }
  },
 methods: {
  dlt(id){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", id)
       this.axios.delete("https://63049d2e761a3bce77ebaf37.mockapi.io/users/" + id)
        .then(response => {
          this.list = resp.data
         console.log(response);
     }).catch(()=>{});
  },
  onAddClick(){
      this.$router.push("addPrj")
  },
  mdf(project){
    console.log("@@@@@ before", project)
       this.$router.push({name: 'prjx', params: {projectProp: project}})
      }
  },
  mounted () {
    this.axios.get('https://63049d2e761a3bce77ebaf37.mockapi.io/users')
    .then((resp)=>{
      this.list = resp.data
      console.log("@@@@@@@@@@@@@@", resp.data)
      })
  },
}
</script>


<style scoped>

.container{
	text-align:center;
	width: 3000px;
	padding: 10px;
}
.table, th, td {
  border: 1px solid #eeeeee;
  border-collapse: collapse;
  font-family:'Marcellus', serif;

}
h2{
  font-family:'Marcellus', serif;
  color: #183b5f;
  font-weight: bolder;
}
thead{
color:#183b5f ;
background-color: #eeeeee;
font-weight: bold;
}
</style>