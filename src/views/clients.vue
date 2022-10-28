<template>
 <div>
  <hea-der/>
<div class="container">
	<div class="row">
		<div class="col-md-12">
            <h2>Listes des clients</h2>
            <hr/>
			<table class="table">
	<thead>
		<tr>
      <th>id</th>
      <th>nom</th>
      <th>ville</th>
      <th>numéro de téléphone</th>
      <th>Email</th>
      <th>responsable client</th>
      <th>responsable projet</th>		
      <th></th>
      <th><button class="btn btn-outline-dark" @click="onAddClick">+</button> </th> 
		</tr>
    	</thead>
    <tr v-for="item in list" :key="item.id">
      <th>{{item.id}}</th>
      <th>{{item.name}}</th>
      <th>{{item.city}}</th>
		<th>{{item.num}}</th>
		<th>{{item.email}}</th>
     	<th>{{item.respClient}}</th>
      <th>{{item.respPrj}}</th>	
      <th><button class="btn btn-outline-danger" @click.prevent="dltCLi(item.id)">X</button></th>
      <th><button class="btn btn-outline-success" @click.prevent="mdfCli(item)">edit</button></th>
		</tr>
</table>


		</div>
	</div>
</div>
</div>
</template>
<script>
import heaDer from '../views/heaDer.vue';
export default {
  name:'clients',
  components:{
heaDer,
  },
  data(){
    return{
      list:null,
    }
  },
  methods: {
      onAddClick(){
        this.$router.push("addclt")
      },
       dltCLi(id){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", id)
       this.axios.delete("https://63049d2e761a3bce77ebaf37.mockapi.io/cients/" + id)
        .then(response => {
          this.list = resp.data
         console.log(response);
     }).catch(()=>{});
  },
   mdfCli(client){
    console.log("@@@@@ before", client)
       this.$router.push({name: 'cltx', params: {clientProp: client}})
  }
  },
  mounted () {
    this.axios.get('https://63049d2e761a3bce77ebaf37.mockapi.io/cients')
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