var readlineSync= require("readline-sync");
const chalk=require("chalk");
var name=readlineSync.question(chalk.green(("Enter Your Name ")));
var n1=name.toUpperCase();
console.log(chalk.green("WELCOME "+ n1 +" TO THE ULTIMATE POTTER QUIZ"));
var score=0;
function quiz(ques,ans)
{
  var ans1=readlineSync.question(ques);
  if(ans1==ans)
  {
    console.log(chalk.magenta("congrats right answer"));
    score=score+1;
  }
  else
  {
    console.log(chalk.red("wrong ans"));
    score=score-1;
  }
  console.log(chalk.yellow(("current score",score))); 
  if(score==5)
  {
    console.log(chalk.bold.rgb(10,100,200)("Congrats you have unlocked level 2"));
  }
  else 
  if(score==8)
  {
    console.log(chalk.rgb(10,100,200).bold("Congrats you have reached the end of the quiz!! You are a True Potterhead"));
  }
}
var highscores=[
  {
    name:"Harsh",
    score:"8"
  }
]

var questions=[{
  ques:"Who gave harry invisibility cloak a)Dumbledore b)Hagrid c)Lupin",
  ans:"Dumbledore"
},{
  ques:"Did Hagrid ever had a dragon a)yes b)no",
  ans:"yes"
},{
  ques:"Who was the last owner of elder wand a)Harry b)Dumbledore c)Malfoy",
  ans:"Harry"
},{
  ques:"Who gave Harry his first broom a)Mac Gonaggal b)Lupin c)Sirius",
  ans:"Mac Gonaggal"
},{
  ques:"Who was Harry's father a)James b)Snape c)Lupin",
  ans:"James"
},{
  ques:"What was Voldeort's real name a)Tom b)Lucius c)Dolohov",
  ans:"Tom"
},{
  ques:"Which house was Harry in a)Gryffindoor b)Hufflepuff c)Slytherin",
  ans:"Gryffindoor"
},{
  ques:"Who killed Dumbledore a)Snape b)Malfoy c)Voldemort",
  ans:"Snape"
}
];
for(var i=0;i<questions.length;i++)
{
  var currentques=questions[i];
  quiz(currentques.ques,currentques.ans);
}
console.log("Your final score",score);
console.log("hey check some highscores",highscores);