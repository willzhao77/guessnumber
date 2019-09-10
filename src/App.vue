<template>
  <div id="app">
    <router-link v-bind:to="'/'" class="btn btn-primary">HumanGuess1</router-link>
    <router-link v-bind:to="'/HumanGuess2'" class="btn btn-primary">HumanGuess2</router-link>
    <router-link v-bind:to="'/ComputerGuess1'" class="btn btn-primary">ComputerGuess1</router-link>
    <router-link v-bind:to="'/ComputerGuess2'" class="btn btn-primary">ComputerGuess2</router-link>

    <transition mode='out-in'>
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(180px); /*位移*/
}

/*
v-enter-active 【入场动画的时间段】
v-leave-active 【离场动画的时间段】
*/
.v-enter-active,
.v-leave-active{
    transition: all .4s ease;
}

/* components use below CSS */
.marginTop15px{
  margin-top: 15px
}
.msgbox{
  width:80%;
  margin: auto;;
}
.whole_bg_color{
  padding: 10px;
  background-color: lightblue;
  width: 50%;
  margin: 20px auto;
  border-radius:10px;
}
</style>
