export default class GameFour {
  constructor() {
      this.message = "Select a correct number, and start the game."
      this.computerOutput = ""
      this.game4 = false
      this.numberlist = []
      this.guessNumber = null
      this.startButton = false
      this.isDisabled = false
      this.count = 0
  }
  // Prepare or renew the game.
  init(){
        for(var i =0;i<=99;i++){
          this.numberlist[i] = i
        }
      }
      Random(min, max){
        return Math.round(Math.random()*(max-min))+min;
      }
      startGame(){
        this.init()
        this.guessNumber = this.Random(0, 99)
        this.computerOutput = "I guess your number is " + this.guessNumber
        this.startButton = true
        this.count++
        console.log("Guess number is: " +this.guessNumber)
        console.log(this.count)
      }
      restart(){
        this.init()
        this.startButton = false
        this.isDisabled=false
        this.guessNumber = null
        this.computerOutput =""
        this.message="Select a correct number, and start the game."
        this.numberlist=[]
        this.count=0
      }
      guessAndCheck(){
        if(this.numberlist.length>0){
          this.guessNumber =  this.numberlist[this.Random(0, this.numberlist.length-1)]
          this.computerOutput = "I guess your number is " + this.guessNumber
        }
        else{
          this.computerOutput = "You lied to me!!!"
          this.isDisabled = true
        }

        console.log(this.count)
      }
      getRangeNum1(min, max){
        for(var i=0;i<this.numberlist.length;i++){
          if(!(Math.abs(this.guessNumber - this.numberlist[i])>=min && Math.abs(this.guessNumber - this.numberlist[i])<=max)){
            this.numberlist.splice(i,1)
            i--
          }
        }
        this.guessAndCheck()
      }
      getRangeNum2(num){
        for(var i=0;i<this.numberlist.length;i++){
          if(!(Math.abs(this.guessNumber - this.numberlist[i])>=num)){
            this.numberlist.splice(i,1)
            i--
          }
        }
        this.guessAndCheck()
      }
      ColdButton(){
          console.log("I pressed COLD button")
        if(this.startButton){
          this.count++
          this.getRangeNum2(40)
        }
        console.log("Guess number is: " +this.guessNumber)
      }
      CoolButton(){
          console.log("I pressed COOL button")
        if(this.startButton){
          this.count++
          this.getRangeNum1(20, 39)
        }
        console.log("Guess number is: " +this.guessNumber)
      }
      WarmButton(){
          console.log("I pressed WARM button")
        if(this.startButton){
          this.count++
          this.getRangeNum1(10, 19)
        }
        console.log("Guess number is: " +this.guessNumber)
      }
      HotButton(){
          console.log("I pressed HOT button")
        if(this.startButton){
          this.count++
          this.getRangeNum1(1, 9)
        }
        console.log("Guess number is: " +this.guessNumber)

      }
      CorrectButton(){
        if(this.startButton){
          this.message = "Well Done! It took you " + this.count + " attempts to guess this number"
          this.isDisabled = true
        }
      }

}
