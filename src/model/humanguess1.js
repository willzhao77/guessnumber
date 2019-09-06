export default class GameOne {
  constructor() {
    this.result= "Please click \"Play\" to Start game."
    this.count=0,
    this.correctNumber=null
    this.guessNumber=null
  }
  init(){
    this.count = 0
    this.correctNumber = Math.floor((Math.random() * 100));
    this.result = "Please guess a number, enter it, and press Guess."
  }

  guess(){
    if (this.guessNumber != null && this.correctNumber !=null){

      this.count++

      if(this.correctNumber > this.guessNumber){
        this.result = "Try higher"
      }

      if(this.correctNumber < this.guessNumber){
        this.result = "Try lower"
      }

      if(this.correctNumber == this.guessNumber){
        this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
        this.count = 0
      }
        this.guessNumber = ""
      }
    }

}
