<template>
<div >
  <div class="box">
    <div id="header">
      <div id="cont-lock"><i class="material-icons lock">Sign in</i></div>
    </div>
    <form>
      <div class="container text-center">
      <div class="group">
        <input class="inputMaterial" type="text" v-model="username" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>username</label>
      </div>
      <div class="group">
        <input
          class="inputMaterial"
          type="password"
          v-model="password"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Password</label>
      </div>
      
      <button id="buttonlogintoregister" class="sign-up"  @click.prevent="login">log In
      </button>
     </div>
    </form>
    <div id="footer-box">
      <p class="footer-text">
        Not registred?<a href="http://localhost:8080/signup" class="sign-up">
          Sign up now</a>
      </p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      this.axios
        .get("https://63049d2e761a3bce77ebaf37.mockapi.io/users")
        .then((resp) => {
          this.list = resp.data;
          console.log("@@@@@@@@@@@@@", this.list);
          this.list.forEach((item) => {
            if (this.username === item.username) {
              this.$router.push("/home2");
            } else {
              console.log("doesn't exist");
            }
          });
        });
    },
  },
  mounted() {},
};
</script>
<style scoped>
html {
  font-family: "Roboto";
}
.backg{
  background: url(https://www.waterstechnology.com/sites/default/files/styles/1905x657sc/public/2022-06/GettyImages-1356565274.jpg?itok=ZpmGA46m);
  background-size: cover;
  padding: 1em;
}
.box {
  position: relative;
  margin: auto;
  height: 450px;
  left: 0;
  z-index: 200;
  right: 0;
  width: 400px;
  color: #666;
  border-radius: 3px;
  background: #fff;
  margin-top: 30px;
  margin-bottom: 70px;
  
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
}
.box ::content {
margin:20px
}

#header {
  background: #4682B4; 
  position: relative;
  height: 80px;
  width: 100%;
margin-bottom: 50px;
}

#cont-lock {
  width: 100%;
  height: 65px;
  position: relative;
}

.lock {
  text-align: center;
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  line-height: 65px;
  font-size: 28px;
}

#bottom-head {
  position: relative;
  background: #4682B4;
  height: 20px;
}

#bottom-head::after {
  content: "";
  width: 0px;
  height: 0px;
  display: block;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 7px solid white;
  border-right: 7px solid rgba(0, 0, 0, 0);
  border-left: 7px solid rgba(0, 0, 0, 0);
  border-top: 7px solid rgba(0, 0, 0, 0);
  padding: auto;
}

.box h1 {
  margin-left: 20px;
  margin-top: 0;
  font-size: 24px;
  font-weight: 300;
  color: #cfd8dc;
  line-height: 35px;
}

.box button {
  background: #EEF5DB;
  border: 0;
  color: #06283D;
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  width: 330px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  border-radius: 2px;
}

.box button:active {
  background: #EEF5DB;
  color: #06283D;
}

.box button:hover {
  background: #ca3e34;
  color: whitesmoke;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.box p {
  font-size: 14px;
  text-align: center;
}

.group {
  position: relative;
  margin-bottom: 35px;
  margin-left: 40px;
}

.inputMaterial {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}

.inputMaterial:focus {
  outline: none;
}

/* LABEL ======================================= */

label {
  color: #999;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
.inputMaterial:focus ~ label,
.inputMaterial:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #4F6367;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 315px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #4F6367;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
.inputMaterial:focus ~ .bar:before,
.inputMaterial:focus ~ .bar:after {
  width: 50%;
}

/* active state */
.inputMaterial:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

#footer-box {
  width: 100%;
  height: 40px;
  background: #4682B4;
  position: absolute;
  bottom: 0;
}

.footer-text {
  color: whitesmoke;
}

.sign-up {
  color: white;
  cursor: pointer;
}

.sign-up:hover {
  color: white;
}
</style>