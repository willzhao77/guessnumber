<template>
  <div id="app">
    <router-link v-bind:to="'/'" class="btn btn-primary">Home</router-link>
    <router-link v-bind:to="'/HumanGuess1'" class="btn btn-primary">HumanGuess1</router-link>
    <router-link v-bind:to="'/HumanGuess2'" class="btn btn-primary">HumanGuess2</router-link>
    <router-link v-bind:to="'/ComputerGuess1'" class="btn btn-primary">ComputerGuess1</router-link>
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
</style>
