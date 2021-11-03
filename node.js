var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score=0;
var score2 = 5;

var userName = readlineSync.question('What is your name? ');
console.log(chalk.red('Welcome! ' + userName + ' to Do you know Himanshu Shukla ? '));
function play(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow(question))
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('yes! you are right. ')
    score = score+1;
  }
    else{
      console.log('oops! you are wrong. ')
      score = score-1;
    }
    console.log('And, your score is ', score);
    console.log('____________________________')
}
var questions = [{question: 'Is Himanshu older than 21?(only yes/no) ',
answer: 'yes'}, {
  question: 'Where does he live currently?  ' , answer: 'ghaziabad'},{ question: 'In which district his hometown is?  ', answer: 'jaunpur'},{ question: 'Is he a graduate? only(yes/no) ',answer: 'no'},{question: 'which food does he like most? ',answer: 'manchurian'}]
  for(var i=0; i< questions.length; i++){
    var curr = questions[i];
    play(curr.question,curr.answer);
  }
  console.log('your score is '+ score);
  console.log('Highest Score --> Himanshu shukla - 5')
  console.log('Second Highest Score - to be announced soon')
  var scores = [{ name: "Himanshu Shukla",
  scoreIs: 5,},{ name: "Aakash",
  scoreIs: 4,}]
  for(var i=0;i<scores.length;i++){
    if(score > scores[i].scoreIs){
     console.log(chalk.red("Hey it Looks like you have done very well and your score can be in the list of High Scores. Send me a SS. I will update it."))
    }
  }
  