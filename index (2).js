var readlineSync= require("readline-sync");
const chalk=require("chalk");
var name=readlineSync.question(chalk.blue("Enter Your Name "));
var n1=name.toUpperCase();
console.log(chalk.red("WELCOME "+ n1 +" TO THE QUIZ"));
var score=0;
function quiz(ques,ans)
{
  var ans1=readlineSync.question(ques);
  if(ans1==ans)
  {
    console.log(chalk.green("congrats right answer"));
    score=score+1;
  }
  else
  {
    console.log(("wrong ans"));
    score=score-1;
  }
  console.log((("current score",score))); 
  if(score==5)
  {
    console.log(chalk.green("Congrats you have unlocked level 2"));
  }
  else 
  if(score==8)
  {
    console.log(("Congrats you have reached the end of the quiz!! You know me well"));
  }
}
var highscores=[
  {
    name:"Harsh",
    score:"7"
  }
]

var questions=[{
  ques:"Where do I live?",
  ans:"ghaziabad"
},{
  ques:"do i wear specs a)yes b)no",
  ans:"yes"
},{
  ques:"Which school am I from?",
  ans:"ingraham"
},{
  ques:"My favourite place to hangout",
  ans:"madan"
},{
  ques:"Am i on instagram?",
  ans:"no"
},{
  ques:"Cricket or football",
  ans:"cricket"
},{
  ques:"marvel or dc",
  ans:"marvel"

}
];
for(var i=0;i<questions.length;i++)
{
  var currentques=questions[i];
  quiz(currentques.ques,currentques.ans);
}
console.log(chalk.blue("Your final score",score));
console.log("hey check some highscores",highscores);