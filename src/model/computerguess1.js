export default class GameThree {
  constructor() {
    this.message =  "Please enter a number (between 0-99) for computer guess."
    this.computerOutput = "Computer: Please let me guess a number."
    this.counterDisplay = "Times:0"
    this.count = 0
    this.mixnum = 0
    this.maxnum = 99
    this.userNumber = null
    this.correctNumber = null
    this.guessNumber = null
    this.game3 = false
    this.setIsDisabled = false
    this.guessIsDisabled = true
    this.isDisabled = true
  }
  // Prepare or renew the game.
    setNum(){
        this.correctNumber = this.userNumber
        this.userNumber = ''
        if(this.correctNumber!=""&& this.correctNumber!=null){

          if(!isNaN(this.correctNumber) && this.correctNumber>=0 && this.correctNumber<=99){
            this.message = "You selected number is: "+ this.correctNumber
            this.setIsDisabled = true
            this.guessIsDisabled=false
            this.isDisabled=false
            }
            else {
              this.message = "Please input a number between 0-99"
            }
          }
          else{
            this.message ="Invaild enter! Try again please."
          }

    }

    restart(){
      this.message = "Please enter a number (between 0-99) for computer guess."
      this.computerOutput="Let's play a new game."
      this.counterDisplay="Times:0"
      this.count=0
      this.mixnum=0
      this.maxnum=99
      this.userNumber=null
      this.correctNumber=null
      this.guessNumber=null
      this.setIsDisabled=false
      this.guessIsDisabled=true
      this.isDisabled=true
    }

    guess(){
      this.count++
      this.guessNumber = Math.floor((this.maxnum- this.mixnum)/2 + this.mixnum)
      this.computerOutput = "Computer: I guess your number is " + this.guessNumber
      this.counterDisplay = "Time: " + this.count
      this.guessIsDisabled = true
    }

    tryhigher(){
      if(this.guessNumber == this.maxnum){
        this.computerOutput ="You lied to me!!!!"
      }
      else{
        this.mixnum = this.guessNumber+1
        this.guess()
      }
    }

    trylower(){

      if(this.guessNumber == this.mixnum){
        this.computerOutput ="You lied to me!!!!"
      }
      else{
        this.maxnum = this.guessNumber -1
        this.guess()
      }
    }

    correct(){
      if (this.correctNumber ==null){
        this.computerOutput ="Please set a guess number."
      }
      else{
        if(this.guessNumber != this.correctNumber){
          this.computerOutput ="You lied to me!!!!"
        }
        else{
          this.computerOutput ="YOHO!!"
          this.message = "Congratulation!! You got it in " + this.count +" trials"
        }
        this.isDisabled = true
      }
    }

}
