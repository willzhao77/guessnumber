<template>
  <div class="whole_bg_color">
      	<h1 class="">Guess My Number(Third Game)</h1>
        <div class="alert alert-primary msgbox marginTop15px" role="alert">
          {{message}}
        </div>
        <!-- <div class="msgbox">{{message}}</div> -->
        <form class="marginTop15px form-inline" action="#" method="post" v-on:submit.prevent="setNum">
          <div class="col-lg-12">
          <input type="text" name="" value="" v-model="userNumber"  class="form-control">
          <input type="button"  :disabled='setIsDisabled' name="" value="Set Number" @click ="setNum"  class="btn btn-primary">
          </div>

        </form>
        <div class="marginTop15px">
          <input type="button" :disabled='guessIsDisabled' name="" value="Begin to Guess"  @click ="guess" class="btn btn-primary">
          <input type="button" name="" value="Restart Game" @click ="restart" class="btn btn-primary">
        </div>
        <label for=""  class="marginTop15px">{{counterDisplay}}</label>
        <div class="alert alert-primary msgbox marginTop15px">{{computerOutput}}</div>
        <div class="marginTop15px">
          <input type="button" :disabled='isDisabled' name="" value="Try Higher" @click ="tryhigher" class="btn btn-primary">
          <input type="button" :disabled='isDisabled' name="" value="Try Lower" @click ="trylower" class="btn btn-primary">
          <input type="button" :disabled='isDisabled' name="" value="Correct" @click ="correct" class="btn btn-primary">
        </div>

    </div>
	</div>
</template>



<script>

import GameThree from '../model/computerguess1.js'
var newGame = new GameThree

export default {
  name: 'ComputerGuess1',
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
      setNum(){
        newGame.setNum()
          // this.correctNumber = this.userNumber
          // this.message = "You selected number is: "+ this.correctNumber
          // this.userNumber = ''
          // if(this.correctNumber!=""&& this.correctNumber!=null){
          //   if(!isNaN(this.correctNumber) && this.correctNumber>=0 && this.correctNumber<=99){
          //     this.setIsDisabled = true
          //     this.guessIsDisabled=false
          //     this.isDisabled=false
          //   }
          //   else{
          //     this.message ="Invaild enter! Try again please."
          //   }
          // }
      },

      restart(){
        newGame.restart()
        // this.message = "Please enter a number (between 0-99) for computer guess."
        // this.computerOutput=null
        // this.counterDisplay="Times:0"
        // this.count=0
        // this.mixnum=0
        // this.maxnum=99
        // this.userNumber=null
        // this.correctNumber=null
        // this.guessNumber=null
        // this.setIsDisabled=false
        // this.guessIsDisabled=true
        // this.isDisabled=true
      },

      guess(){
        newGame.guess()
        // this.count++
        // this.guessNumber = Math.floor((this.maxnum- this.mixnum)/2 + this.mixnum)
        // this.computerOutput = "Computer: I guess your number is " + this.guessNumber
        // this.counterDisplay = "Time: " + this.count
        // this.guessIsDisabled = true
      },

      tryhigher(){
        newGame.tryhigher()
        // if(this.guessNumber == this.maxnum){
        //   this.computerOutput ="You lied to me!!!!"
        // }
        // else{
        //   this.mixnum = this.guessNumber+1
        //   this.guess()
        // }
      },

      trylower(){
        newGame.trylower()
        // if(this.guessNumber == this.mixnum){
        //   this.computerOutput ="You lied to me!!!!"
        // }
        // else{
        //   this.maxnum = this.guessNumber -1
        //   this.guess()
        // }
      },

      correct(){
        newGame.correct()
        // if (this.correctNumber ==null){
        //   this.computerOutput ="Please set a guess number."
        // }
        // else{
        //   if(this.guessNumber != this.correctNumber){
        //     this.computerOutput ="You lied to me!!!!"
        //   }
        //   else{
        //     this.computerOutput ="YOHO!!"
        //     this.message = "Congratulation!! You got it in " + this.count +" trials"
        //   }
        //   this.isDisabled = true
        // }
      }
      },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msgbox{
  background-color:lightgreen;
  width:80%;
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
  border-radius:10px;
}


</style>
