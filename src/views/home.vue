<template>
  
<section class="hero">
  <button class="btn"  @click.prevent="goli" >logIn</button>
</section>
</template>
<script>
 
export default {
  name: 'home',
  
  methods:{
    goli(){
      this.$router.push("/login")
    }
  }
  }
;
</script>
<style scoped>
h3{
  font-family:'Marcellus', serif;
  color: aliceblue;
}
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  color: rgb(52, 52, 133);
  background: url(https://kronsteg.de/wp-content/uploads/2020/03/Remote-Workv2.png,) center center no-repeat;
  background-size: cover;
}
.btn {
  position: absolute;
  top: 15.5%;
  left: 84%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #24697e;
  color:  white;
  font-size: 16px;
  padding: 8px 80px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.btn:hover {
  background-color:#009688;
  color: white;
}
</style>
