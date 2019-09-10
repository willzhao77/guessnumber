<template>
  <div class="whole_bg_color">
      	<h1 class="">Guess My Number(Forth Game)</h1>
        <div class="alert alert-primary msgbox marginTop15px" role="alert">
          {{message}}
        </div>


        <div class="marginTop15px">
          <input type="button" :disabled='startButton' name="" value="Start Game"  @click ="startGame">
          <input type="button" name="" value="Restart Game" @click ="restart"><br>
          <input type="button" :disabled='isDisabled' name="" value="COLD"  @click ="ColdButton">
          <input type="button" :disabled='isDisabled' name="" value="COOL"  @click ="CoolButton">
          <input type="button" :disabled='isDisabled' name="" value="WARM"  @click ="WarmButton">
          <input type="button" :disabled='isDisabled' name="" value="HOT"   @click ="HotButton">
          <input type="button" :disabled='isDisabled' name="" value="CORRECT" @click = "CorrectButton">
        </div>

        <div class="alert alert-primary msgbox marginTop15px">{{computerOutput}}</div>

    </div>
	</div>
</template>



<script>

import GameFour from '../model/computerguess2.js'
var newGame = new GameFour

export default {
  name: 'ComputerGuess2',
  data () {
    return newGame
    // return {
    //   message: "Please enter a number (between 0-99) for computer guess.",
    //   computerOutput:null,
    //   counterDisplay:"Times:0",
    //   count:0,
    //   mixnum:0,
    //   maxnum:99,
    //   userNumber:null,
    //   correctNumber:null,
    //   guessNumber:null,
	  //   game3:false,
    //   setIsDisabled:false,
    //   guessIsDisabled:true,
    //   isDisabled:true
    // }
  },
  methods: {
    // Prepare or renew the game.
    startGame(){
      newGame.startGame()
    },

    restart(){
      newGame.restart()
    },

    ColdButton(){
      newGame.ColdButton()
    },

    CoolButton(){
      newGame.CoolButton()
    },


    WarmButton(){
      newGame.WarmButton()
    },

    HotButton(){
      newGame.HotButton()
    },

    CorrectButton(){
      newGame.CorrectButton()
    }
  },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msgbox{
  background-color:lightgreen;
  /* width:80%;
  margin: auto; */
}

/* .marginTop15px{
  margin-top: 15px
} */

/* .whole_bg_color{
  padding: 10px;
  background-color: lightblue;
  width: 50%;
  margin: 20px auto;
  border-radius:10px;
} */


</style>
