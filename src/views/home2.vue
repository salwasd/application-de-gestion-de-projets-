<template>
 <div class="bckg">
    <hea-der2/>
  </div>
</template>
<script>
import heaDer2 from '../views/heaDer2.vue';
export default {
  name: 'home2',
  components:{
heaDer2,
  },
};
</script>
<style scoped>
  .bckg{
    background: url(https://chef-de-projet.fr/wp-content/uploads/2021/07/Diagramme-de-Gantt-1280x640.png);
    background-size: cover;
    padding: 1em;
    height: 100vh;
  }
  .container{
    margin-top: 0;
    padding: 0;
  }
.card{
  width: 30rem;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 100px;
  height: 300px;
 
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: rgb(64, 64, 133);
  border: none;
  color: #ffff;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-top: 50px;
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
</style>
