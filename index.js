var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var userName = readLineSync.question(chalk.black.bgGreen.bold("Heyo! may i have your name please?\n"));

console.log(chalk.bgYellow.whiteBright("welcome to quickEarn quizz competition " + userName ));

console.log(chalk.yellowBright("\nThis quizz contains 30 questions for every right answer you will get 2INR and for every wrong answer you will loose 1INR. Attempt all question from all the level send me the proof of your score from every level on my Social media account i will provide you your reward.\n\n"))

easy = [
  {
    question : "Question 1 : Who is known as the Iron Man of India?\n" + "1. JawaharLal Nehru \n" + "2. Mahatma Gandhi \n" + "3. Sardar Vallabhbhai Patel\n" + "4. Narendra Modi \n",
    answer : 3
  },
  {
    question : "Question 2: Who was the first woman Prime Minister of India?\n" + "1. Kalpana Chawla \n" + "2. Indira Gandhi \n" + "3. Pratibha Patil \n" + "4.Kiran Bedi \n",
    answer : 2
  },
  {
    question : "Question 3: What is the National Flower of India? \n" + "1. Lotus \n" + "2. Rose \n" + "3. SunFlower \n" + "4. Jasmine \n",
    answer : 1
  },
  {question : "Question 4: In which continent is India located? \n" + "1. Antarctica \n" + "2. Asia \n" + "3. Africa \n" + "4. Europe \n",
  answer : 2
  },
  {
    question : "Question 5: Which is the hottest planet in our solar system? \n" + "1. Mercury \n" + "2. Jupiter \n" + "3. Saturn \n" + "4. Venus \n" ,
    answer : 4 
  }
]

intermediate = [
  {
    question : "Question 1:	The trident-shaped symbol of Buddhism does not represent \n" + "1. Nirvana \n" + "2. Sangha \n" + "3. Buddha \n" + "4. Dhamma \n",
    answer : 1
  },
  {
    question : "Question 2: Under Akbar, the Mir Bakshi was required to look after \n" + "1. military affairs \n" + "2. the state treasury \n" + "3. the royal household \n" + "4. the land revenue system \n",
    answer : 1
  },
  {question : "Question 3: The Battle of Plassey was fought in \n" + "1. 1748 \n" + "2. 1782 \n" + "3. 1757 \n" + "4. 1764 \n",
  answer : 3
  },
  {
    question : "Question 4: The theory of economic drain of India during British imperialism was propounded by \n" + "1. Jawaharlal Nehru \n" + "2. Dadabhai Naoroji \n" + "3. R.C. Dutt \n" + "4. M.K. Gandhi \n",
    answer : 2
  },
  {
    question : "Question 5: The use of Kharoshti in ancient Indian architecture is the result of India's contact with \n" + "1. Central Asia \n" + "2. Iran \n" + "3. Greece \n" + "4. China \n",
    answer : 3
  }
]

hard = [
  {
    question : "Question 1: The Homolographic projection has the correct representation of \n" + "1. shape \n" + "2. area \n" + "3. baring \n" + "4. distance \n",
    answer : 2
  },
  {
    question : "Question 2: The intersecting lines drawn on maps and globes are \n" + "1. latitudes \n" + "2. longitudes \n" + "3. geographic grids \n" + "4. None of the above \n",
    answer : 3
  },
  {
    question : "Question 3: The habitats valuable for commercially harvested species are called \n" + "1. coral reefs \n" + "2. sea grass bed \n" + "3. hot spots \n" + "4. None of the above \n",
    answer : 2
  },
  {
    question : "Question 4: 'Natya - Shastra' the main source of India's classical dances was written by \n" + "1. Nara Muni \n" + "2. Bharat Muni \n" + "3. Abhinav Gupt \n" + "4. Tandu Muni \n",
    answer : 2
  },
  {
    questioin : "Question 5: The Rath Yatra at Puri is celebrated in honour of which Hindu deity \n" + "1. Ram \n" + "2. Vishnu \n" + "3. Shiva \n" + "4. Jaganath \n",
    answer : 4
  }
]



function userChoice(){
  var userWords = readLineSync.question("Are you ready to Earn some money with us?" + chalk.bgMagenta.bold("yes/no \n"));
  if (userWords.toLowerCase() === "yes"){
    function motherSwear(){
      var Swear = readLineSync.question("Mother swear you will not cheat na?" + chalk.bgMagenta.bold("i will not/i will \n"));
      if(Swear.toLowerCase() === "i will not"){
        console.log(chalk.blue.bold("Best of luck\n"));
    chooseQuestion();
      } else{
        console.log(chalk.bgRed.bold("you are a f*cking cheater! we don't play with cheaters."));
      }
    }
    motherSwear();
    // console.log("Best of luck");
    // chooseQuestion();
  } else{
    console.log("Sorry to see you go. We will expect you soon!")
  }
}

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer == answer){
    console.log(chalk.green("Right answer"));
    score = score+1;
  } else{
    console.log(chalk.red("wrong answer"));
    console.log(chalk.green("correct answer is: " + answer));
    score = score-1;
  }
  console.log("current score: " + score);
  console.log("------------------");
}


function chooseQuestion(){
  var chooseOption = readLineSync.question(chalk.bgWhite.black('Enter your choice of number(1,2 or 3) .\n 1.Easy \n 2.Intermediate \n 3.Hard \n\n'));
  if(chooseOption == 1){
    for(var i =0; i<easy.length; i++){
  play(easy[i].question, easy[i].answer)}
  } else if(chooseOption == 2){
    for(var i =0; i<intermediate.length; i++){
      play(intermediate[i].question, intermediate[i].answer)
    }
  }  else if(chooseOption == 3){
      for(var i =0; i<hard.length; i++){
        play(hard[i].question, hard[i].answer)
      }
    }
    console.log(chalk.bgYellow.white("Your total score is: " + score))
}

userChoice();



//____________________________________________________________________


