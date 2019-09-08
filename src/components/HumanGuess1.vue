<template>
  <div class="whole_bg_color">
    <h1 class="marginTop15px">Guess My Number(First Game)</h1>
		<h4 class="marginTop15px">I have a number, please guess (between 1 and 99)</h4>



    <div class="alert alert-primary msgbox marginTop15px" role="alert">
      {{result}}
    </div>
      <div>
        <!-- <div class="msgbox">{{result}}</div> -->
        <input type="button" value="Play" @click="init" class="btn btn-primary marginTop15px">
      </div>

      <form class="form-inline marginTop15px">
        <div class="col-lg-12">
          <input type="text" value="" v-model="guessNumber" class="form-control">
          <input type="button" value="Guess" @click="guess" class="btn btn-primary">
        </div>
      </form>

		</div>
</template>

<script>


// class GameOne {
//   constructor() {
//     this.result= "Please click \"Play\" to Start game1."
//     this.count=0,
//     this.correctNumber=null
//     this.guessNumber=null
//   }
//   init(){
//     this.count = 0
//     this.correctNumber = Math.floor((Math.random() * 100));
//     this.result = "Please guess a number, enter it, and press Guess."
//   }
//
//   guess(){
//
//     if (this.guessNumber != null && this.correctNumber !=null){
//
//       this.count++
//
//       if(this.correctNumber > this.guessNumber){
//         this.result = "Try higher"
//       }
//
//       else if(this.correctNumber < this.guessNumber){
//         this.result = "Try lower"
//       }
//
//       else{
//         this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
//         this.count = 0
//       }
//
//         this.guessNumber = ""
//       }
//     }
//
// }


import GameOne from '../model/humanguess1.js'
var newGame = new GameOne

export default {
  name: 'HumanGuess1',
  data () {
    return newGame
    // return {
    //   result: "Please click \"Play\" to Start game.",
    //   count:0,
    //   correctNumber:null,
    //   guessNumber:null,
    // }
  },
  methods: {

      // Prepare or renew the game.
      init(){
        // this.count = 0
        // this.correctNumber = Math.floor((Math.random() * 100));
        // this.result = "Please guess a number, enter it, and press Guess."
        newGame.init()
      },

      guess(){
        newGame.guess()
        // if (this.guessNumber != null && this.correctNumber !=null){
        //
        //   this.count++
        //
        //   if(this.correctNumber > this.guessNumber){
        //     this.result = "Try higher"
        //   }
        //
        //   else if(this.correctNumber < this.guessNumber){
        //     this.result = "Try lower"
        //   }
        //
        //   else{
        //     this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
        //     this.count = 0
        //   }
        //
        //     this.guessNumber = ""
        //   }
        }
      },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msgbox{
    background-color:pink;
    /* width:80%;
    margin: auto;; */
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
