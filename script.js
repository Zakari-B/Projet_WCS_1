// THEME SELECTOR //
let globalTheme = "dark";
 
function themeSwitch() {
    if (globalTheme == "dark") {
        globalTheme = "light"
        document.querySelector(".switch").textContent = "☾ Dark Mode";
    } else {
        globalTheme = "dark"
        document.querySelector(".switch").textContent = "☼ Light Mode";
    }
    document.querySelector(".mainPage").classList.toggle("lightMode");
    document.querySelectorAll(".text").forEach(el=>el.classList.toggle('textLightMode')); 
}

// QUIZ SELECTOR //
/*import firstQuiz from "./quiz.js";
import secondQuiz from "./quiz.js";
import thirdQuiz from "./quiz.js";*/

const slideUp = (div)=>{
    document.querySelector(div).classList.replace("hid-box","hid-box-hover")
}

const buttonValidator = document.querySelector(".launchQuizz")
buttonValidator.disabled = true
const selectQuizz = document.querySelectorAll(".quizzTheme");
let selectedQuizz = "";
let numSelected = 0;
let maxSelected = 1;


let logQuizTheme = "";

for(let i = 0;i<selectQuizz.length;i++){
    selectQuizz[i].addEventListener("click", function(){ 
        if(this.classList.contains("selected")){
            this.classList.remove("selected");
            numSelected--;
            selectedQuizz = document.querySelector(".selected")
            buttonValidator.disabled = true
            buttonClasses = selectedQuizz.classList;
        }
        else if(numSelected<maxSelected){
            this.classList.add("selected");
            numSelected++;
            selectedQuizz = document.querySelector(".selected")
            buttonValidator.disabled = false 
            buttonClasses = selectedQuizz.classList;
        }
        else {
            for(let j = 0;j<selectQuizz.length;j++){
                selectQuizz[j].classList.remove("selected");
            }    
            this.classList.add("selected");
            selectedQuizz = document.querySelector(".selected")
            buttonValidator.disabled = false 
            buttonClasses = selectedQuizz.classList;
        }
        function quizzUpdater() {
            if (buttonClasses.contains("firstQuizz")) {
                logQuizTheme = "firstQuizz";
            } else if (buttonClasses.contains("secondQuizz")) {
                logQuizTheme = "secondQuizz";
            } else  if (buttonClasses.contains("thirdQuizz")) {
                logQuizTheme = "thirdQuizz";
            }
        }
        quizzUpdater();
    });
}

const startGame = () => {
    generateQuizzAndSlide(0);
    createAnswersTable();
    if (usernameInput.value != "") {
        user.puserName = usernameInput.value;
    } else {
        user.puserName = "Player One";
    }
}
let currentQuestion = 0 
const generateQuizzAndSlide = i => {
    slideUp('.quizPage');
    if (logQuizTheme == "firstQuizz"){
        createQuestion(firstQuizz[i],i);
        toggleNavColor(i);
        removeQuestion(i-1);
        currentQuestion = i;
    } else if (logQuizTheme == "secondQuizz") {
        createQuestion(secondQuizz[i],i);
        toggleNavColor(i);
        removeQuestion(i-1);
        currentQuestion = i;
    } else {
        createQuestion(thirdQuizz[i],i);
        toggleNavColor(i);
        removeQuestion(i-1);
        currentQuestion = i;
    }
}

const removeQuestion = (i) => {
    document.getElementById(`card-${i}`)?.remove()
}

const toggleNavColor = (questionNumber) => {
    const menuItems = document.querySelectorAll("li");
    menuItems.forEach(item => item.classList.remove("activeToken"));
    menuItems[questionNumber].classList.add("activeToken");
}

// QUIZ FUNCTIONS //
const firstQuizz = [
    {
        question : "Who create Wild Code School ?",
        answers : {
            a : "Jean-François MORIN",
            b : "Anna Stépanoff",
            c : "Rasmus Lerdorf",
            d : "Martin Goodman"
        },
        correctAnswer : "answer-b"
    },
    {
        question : "How many campus are they in France ?",
        answers : {
            a : 3,
            b : 32,
            c : 13,
            d : 23
        },
        correctAnswer : "answer-c"
    },
    {
        question : "How many Project should we do ?",
        answers : {
            a : 1,
            b : 3,
            c : 5,
            d : 6
        },
        correctAnswer : "answer-b"
    },
    {
        question : "What shouldn't you wear?",
        answers : {
            a : "Sweat",
            b : "Jean",
            c : "Cap",
            d : "Shoes"
        },
        correctAnswer : "answer-d"
    },
    {
        question : "Who is our S.E.M ?",
        answers : {
            a : "Cloé",
            b : "Vicky",
            c : "Margot",
            d : "Anthony"
        },
        correctAnswer : "answer-a"
    },
    {
        question : "What adress should we must have ?",
        answers : {
            a : "Yahoo",
            b : "Lycos",
            c : "Orange",
            d : "Gmail"
        },
        correctAnswer : "answer-d"
    },
    {
        question : "How many times should we sign out in a day ?",
        answers : {
            a : 0,
            b : 1,
            c : 2,
            d : 3
        },
        correctAnswer : "answer-c"
    },
    {
        question : "What App should we use for talk with our S.E.M ?",
        answers : {
            a : "Slack",
            b : "Discord",
            c : "Facebook",
            d : "Meet"
        },
        correctAnswer : "answer-a"
    },
    {
        question : "What is the Wild Flash ?",
        answers : {
            a : "Space for snack",
            b : "A Wild Meet",
            c : "FAQ",
            d : "Wild Newsletter"
        },
        correctAnswer : "answer-d"
    },
    {
        question : "What is campus pass rate ?",
        answers : {
            a : "75%",
            b : "82%",
            c : "94%",
            d : "98%"
        },
        correctAnswer : "answer-c"
    }
]

const secondQuizz = [
    {
    question : "Which company developed JavaScript", 
    answers : {
        a : "Google",
        b : "Microsoft",
        c : "Netscape",
        d : "IBM"
    },
    correctAnswer : "answer-c"
},
{
    question : "In which year was Javascript Created ?",
    answers : {
        a : 1982,
        b : 1988,
        c : 1995,
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "Guido van Rossum",
        b : "Elton John",
        c : "Brendan Eich",
        d : 'Bill Gates'
    },
    correctAnswer : "answer-c"
},
{
    question : "Inside which HTML TAG do we put the JavaScript?",
    answers : {
        a : "javascript",
        b : "js",
        c : "script",
        d : "gogo-gadgeto-JS"
    },
    correctAnswer : "answer-c"
},
{
    question : "What is the correct syntax for referring to an external script ?",
    answers : {
        a : "script src=...",
        b : "script href=...",
        c : "js src=...",
        d : "link href=..."
    },
    correctAnswer : "answer-a"
},
{
    question : "How do you write 'Hello World' in an alert box?",
    answers : {
        a : "alertBox('Hello World')",
        b : "msg('Hello Wolrd')",
        c : "msgBox('Hello World')",
        d : "alert('Hello World')"
    },
    correctAnswer : "answer-d"
},
{
    question : "How do you create a function in JavaScript?",
    answers : {
        a : "function myFunction()",
        b : "function:myFunction()",
        c : "function = myFunction()",
        d : "The reponse D"
    },
    correctAnswer : "answer-a"
},
{
    question : "How can you add a comment in a JavaScript?",
    answers : {
        a : "!--This is a comment--",
        b : "//This is a comment",
        c : "'This is a comment'",
        d : "(This is a comment)"
    },
    correctAnswer : "answer-b"
},
{
    question : "What is the correct way to write a JavaScript array?",
    answers : {
        a : "const colors = 1 = ('red'), 2 = ('green'), 3 =('blue')",
        b : "const colors = ['red','green','blue']",
        c : "const colors = 'red,'green,'blue'",
        d : "const colors = (1:'red',2:'green',3:'blue')"
    },
    correctAnswer : "answer-b"
},
{
    question : "How do you call a function named 'myFunction'?",
    answers : {
        a : "myFuntion()",
        b : "call myFunction()",
        c : "call function myFunction()",
        d : "Hello myFunction come here !"
    },
    correctAnswer : "answer-a"
}
]

const thirdQuizz = [
    {
        question : "How many children does Sylvain has ?", // MAIS LOL
        answers : {
            a : 1,
            b : 2,
            c : 3,
            d: "Officiellement ou officieusement ?"
        },
        correctAnswer : "answer-c"
    },
    {
        question : "What was Paul's former Job ?", 
        answers : {
            a : "Mechanical Engineer",
            b : "Rubber Splecialist",
            c : "Logistician",
            d : "CEO of Amazon"
        },
        correctAnswer : "answer-b"
    },
    {
        question : "What is Lou's cat name?",
        answers : {
            a : "Malfoy",
            b : "Ron",
            c : "Hermione",
            d : "Potter"
        },
        correctAnswer : "answer-d"
    },
    {
        question : "Which sport did Marie played for a long time?",
        answers : {
            a : "Basket-Ball",
            b : "Ping-Pong",
            c : "Football",
            d : "K-pop"
        },
        correctAnswer : "answer-a"
    },
    {
        question : "What is the screen resolution of Zakari",
        answers : {
            a : "13 pouces",
            b : "15 pouces",
            c : "27 pouces",
            d : "32 pouces"
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Quand la série 'Derrick' s'est arrêtée, son scénariste avait :",
        answers : {
            a : "74 ans",
            b : "84 ans",
            c : "94 ans",
            d : "Honte"
        },
        correctAnswer : "answer-a"
    },
    {
        question : "A quel âge est mort ce bon vieux Mathusalem ?",
        answers : {
            a : "123 ans",
            b : "578 ans",
            c : "969 ans",
            d : "Il est toujours vivant et aurait été aperçu au VIP ROOM de St Tropez l’été dernier."
        },
        correctAnswer : "answer-c"
    },
    {
        question : "En 1951 Disney a sorti une BD dans laquelle...",
        answers : {
            a : "Mickey était soviétique.",
            b : "Dingo était marchand d’armes",
            c : "Mickey et Dingo étaient des dealers d’amphétamines",
            d : "Minnie rencontre des gens qu’elle ne connaissait pas et sympathise avec eux : 'Thank you Jackie and Mickey'"
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Comment l'hippopotame fait-il popo ?",
        answers : {
            a : "Il disperse ses crottes avec sa queue pour marquer son territoire.",
            b : " Il doit arrêter toute activité pour ne faire que ça, tellement c’est long et pénible.",
            c : "Il expulse un gros rondin d’un coup et c’est assez spectaculaire.",
            d : "Il ne fait jamais caca, d’où sa taille."
        },
        correctAnswer : "answer-a"
    },
    {
        question : "Parmi ces 4 voitures, laquelle a vraiment existé ?",
        answers : {
            a : "La Skoda 'Tapina'",
            b : "La Nissan 'Gigolo'",
            c : "La Mazda 'Laputa'",
            d : "La Fiat  '500 l’amour et 200 la pipe '"
        },
        correctAnswer : "answer-c"
    }
]
const createQuestion = (currentQuestion,questionNumber) => {
    //create the card that will contain question title and answers
    let index=questionNumber
    const quizz = document.querySelector(".quizz");
    const questionCard = document.createElement("div");
    questionCard.classList.add("card");
    questionCard.setAttribute('id',`card-${index}`);
    quizz.appendChild(questionCard);

    //create the card title that will hold the title
    const card=document.querySelector(".card")
    const questionTitle = document.createElement("h1");
    questionTitle.classList.add("questionTitle");
    questionTitle.innerHTML=`Question #${questionNumber+1} - ${currentQuestion.question}`;
    questionCard.appendChild(questionTitle);

  //create the div that will hold the answers
  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");
  questionCard.appendChild(answerContainer);

    //add a button for each answer
    for(letter in currentQuestion.answers){
        // console.log(currentQuestion.answers[letter])
        const answerLetter = document.createElement("label")
        const oneAnswer = document.createElement("button")
        oneAnswer.classList.add("cardButton");
        oneAnswer.setAttribute('id',"answer-"+letter);
        //oneAnswer.classList.add("color-2");
        oneAnswer.innerHTML=`${letter}: ${currentQuestion.answers[letter]}`;
        answerContainer.appendChild(oneAnswer);
    }

    //create the button
    const buttonNext = document.createElement("button");
    buttonNext.classList.add("neonButton");
    if (questionNumber == 9){
        buttonNext.innerHTML="See Results";
        buttonNext.setAttribute('id',"displayResults");
        buttonNext.onclick=() => {slideUp('.resultsPage');scoreCalculator()}; //rajouter ici la fonction pour les résultats de paul
        listenToAnswer()
    } else {
        buttonNext.setAttribute('id',"nextQuestion");
        buttonNext.innerHTML="Next Question";
        buttonNext.onclick=() => generateQuizzAndSlide(questionNumber+1);
        buttonNext.disabled = true;
        listenToAnswer()

    }
        questionCard.appendChild(buttonNext);
}

let goodAnswers = []
const createAnswersTable = () => {
    if (logQuizTheme === "firstQuizz"){
        firstQuizz.forEach(question => {
            goodAnswers.push(question.correctAnswer)});
    } else if (logQuizTheme === "secondQuizz"){
        secondQuizz.forEach(question => {
            goodAnswers.push(question.correctAnswer)});
    } else {
        thirdQuizz.forEach(question => {
            goodAnswers.push(question.correctAnswer)});
    }
    console.log(goodAnswers);
}

 // = good answers du quiz selectionné
    
let userAnswer = " "
let goodAnswer = " "
let allUserAnswers = []
let userScored = 0
function listenToAnswer(){
    const answerList = document.querySelectorAll(".cardButton");
    for(let j = 0;j<answerList.length;j++){
        answerList[j].addEventListener("click", function(){
            userAnswer = answerList[j].id
            allUserAnswers.push(userAnswer)
            const activeCard = document.querySelector(".activeToken");
            console.log(activeCard)
            console.log(userAnswer)
            console.log(goodAnswers[currentQuestion])
            if (userAnswer == goodAnswers[currentQuestion]) {
                userScored++
                activeCard.classList.add("successToken")


            } else {
                activeCard.classList.add("wrongToken")

            }
            console.log(userAnswer)
            const buttonNext = document.getElementById("nextQuestion");
            buttonNext.disabled = false;                 
    })
    }
}

const slideUp = (div)=>{
    document.querySelector(div).classList.replace("hid-box","hid-box-hover")
}



//// PAGE RESULTAT
//function 
// user.puserName = 
// user.userScore = userScored;
// scoreCalculator();
const usernameInput = document.querySelector("#username")

document.querySelector("#testABC").addEventListener("keydown", function (f) {
    if (f.keyCode == 13){
        f.preventDefault()
    }
}); 

document.querySelector('#username').addEventListener('keyup', function (e) {
    console.log(e.cancelable);
    e.preventDefault();
    // if (e.key === 'Enter') {
    //   user.puserName = userTestName.value
    // }
});

const user = {
    puserName: "Username",
    userScore: 0,
  };
  
  const userList = [
      {
      puserName: "Loris",
      userScore: 9,
      },
      {
      puserName: "Nicolas",
      userScore: 1,
      },
      {
      puserName: "Julien",
      userScore: 4,
      },
      {
      puserName: "Paul",
      userScore: 3,
      },
      {
      puserName: "Zakari",
      userScore: 5,
      },
  ];
  
 function scoreCalculator(){
    user.userScore = userScored;
  
  //affiche paragraphe "congrat" avec nom et score de l'user
  const pCongrats = document.querySelector("#congrats");
  pCongrats.textContent = `Congrats ${user.puserName}, you scored is ${user.userScore}/10.`;
  
  //récupère les résultat de l'user dans la liste de resultat
  userList.push(user);
  //trier la liste en fonction de userScore
  userList.sort(function (a, b) {
      return b.userScore - a.userScore;
      });
  let userRank = 0;
  for (const element of userList){
      if(element.puserName === user.puserName){
          userRank = userList.indexOf(element)+1;
      }
  }
  
  const pRank = document.querySelector("#rank");
  pRank.textContent = `You ranked #${userRank}.`;
  
  const firstUser = document.querySelector("#firstUserName");
  firstUser.textContent = `${userList[0].puserName}`;
  
  const firstScore= document.querySelector("#firstUserScore");
  firstScore.textContent = `${userList[0].userScore}/10`;
  
  const secondUser = document.querySelector("#secondUserName");
  secondUser.textContent = `${userList[1].puserName}`;
  
  const secondScore= document.querySelector("#secondUserScore");
  secondScore.textContent = `${userList[1].userScore}/10`;
  
  const thirdUser = document.querySelector("#thirdUserName");
  thirdUser.textContent = `${userList[2].puserName}`;
  
  const thirdScore= document.querySelector("#thirdUserScore");
  thirdScore.textContent = `${userList[2].userScore}/10`;
  
}
  // // FIN PAGE RESULTAT