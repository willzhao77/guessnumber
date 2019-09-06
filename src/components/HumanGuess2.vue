<template>
  <div class="whole_bg_color">
		<h1 class="marginTop15px">Guess My Number(Second Game)</h1>
		<h4 class="marginTop15px">I have a number, please guess (between 1 and 99)</h4>

    <div class="alert alert-primary msgbox marginTop15px" role="alert">
      {{result}}
    </div>
		<!-- <div class="msgbox">{{result}}</div> -->
    <div class="">
      <input type = "button" value ="Play" @click ="resetGame" class="btn btn-primary marginTop15px">
    </div>

    <form class="form-inline center_div marginTop15px">
			<input type="text" value="" v-model="guessNumber" class="form-control">
			<input type="button" value="Guess" @click="guess" class="btn btn-primary">
		</form>
	</div>
</template>



<script>

import GameTwo from '../model/humanguess2.js'
var newGame = new GameTwo


export default {
  name: 'HumanGuess2',
  data () {
    return newGame
    // return {
      // result: "Please click \"Play\" to Start game.",
      // count:0,
	    // absValue:null,
      // correctNumber:null,
      // guessNumber:null,
    // }
  },
  methods: {
    resetGame(){
            // this.count = 0
            // this.correctNumber = Math.floor((Math.random() * 100));
            // this.result = "Please guess a number, enter it, and press Guess."
            newGame.resetGame()
          },

          guess(){
            newGame.guess()

          //   if (this.guessNumber != null && this.correctNumber !=null){
          //
          //     this.count++
    		  // absValue = Math.abs(this.correctNumber - this.guessNumber);
          //
          //     if(absValue >= 40){
          //       this.result = "COLD"
          //     }
          //
          //     else if(absValue>=20 && absValue <= 39){
          //       this.result = "COOL"
          //     }
          //
    		  // else if(absValue>=10 && absValue <= 19){
          //       this.result = "WARM"
          //     }
          //
    		  // else if(absValue>=1 && absValue <= 9){
          //       this.result = "HOT"
          //     }
          //
          //     else{
          //       this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
          //       this.count = 0
          //     }
          //
          //       this.guessNumber = ""
          //     }

            }
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msgbox{
  background-color:lightyellow;
  width:80%;
  margin: auto;;
}
.center_div{
width: 300px;
margin: auto;
}
.marginTop15px{
margin-top: 15px
}

.whole_bg_color{
padding: 10px;
background-color: lightblue;
width: 50%;
margin: 20px auto;
}
</style>
