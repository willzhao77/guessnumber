export default class GameTwo {
  constructor() {
    this.result =  "Please click \"Play\" to Start game."
    this.count = 0
    this.absValue = null
    this.correctNumber = null
    this.guessNumber = null
  }

  resetGame(){
          this.count = 0
          this.correctNumber = Math.floor((Math.random() * 100));
          this.result = "Please guess a number, enter it, and press Guess."

        }

        guess(){
          if (this.guessNumber != null && this.correctNumber !=null){

            this.count++
            var absValue = Math.abs(this.correctNumber - this.guessNumber);

            if(absValue >= 40){
              this.result = "COLD"
            }

            if(absValue>=20 && absValue <= 39){
              this.result = "COOL"
            }

            if(absValue>=10 && absValue <= 19){
              this.result = "WARM"
            }

        if(absValue>=1 && absValue <= 9){
              this.result = "HOT"
            }

            if(this.correctNumber == this.guessNumber){
              this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
              this.count = 0
            }

              this.guessNumber = ""
            }

          }
}
