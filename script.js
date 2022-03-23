// THEME SELECTOR //
// themeswitch() = {

 
// QUIZ SELECTOR //
const buttonValidator = document.querySelector(".launchQuizz")
buttonValidator.disabled = true
const selectQuizz = document.querySelectorAll(".quizzTheme");
let selectedQuizz = "";
let numSelected = 0;
let maxSelected = 1;


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
            console.log(selectedQuizz.classlist)
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
let logQuizTheme = "";


const generateQuizzAndSlide = i => {
    slideUp('.quizPage');
    if (logQuizTheme === "firstQuizz"){
        createQuestion(firstQuizz[i],i);
        toggleNavColor(i)
        removeQuestion(i-1)
    } else if (logQuizTheme ==="secondQuizz") {
        createQuestion(secondQuizz[i],i);
        toggleNavColor(i)
        removeQuestion(i-1)
    } else {
        createQuestion(thirdQuizz[i],i);
        toggleNavColor(i)
        removeQuestion(i-1)
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
    question: "In which year was Javascript Created ?",
    answers: {
      a: 1982,
      b: 1918,
      c: 1929,
      d: "the reponse d"
    },
    correctAnswer: "answer-a",
  },
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Magloire",
      b: "DJ Snake",
      c: "Brendan Eich",
      d: "the reponse d"
    },
  },
   { 
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
        },
        correctAnswer : "answer-c"
    },
    {
        question : "Who invented Javascript?",
        answers : {
            a : "lalalal",
            b : "DJ Snakakaajaje",
            c : "Brendan Eich",
            d: 'the reponse d'
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
        d: "IBM"
    },
    correctAnswer : "answer-a"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "Magloire",
        b : "DJ Snake",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "lalalal",
        b : "DJ Snakakaajaje",
        c : "Brendan Eich",
        d: 'the reponse d'
    },
    correctAnswer : "answer-c"
}
]

const thirdQuizz = [
    {
    question : "In which year was Zakari born ?", // MAIS LOL
    answers : {
        a : 1982,
        b : 1918,
        c : "666 A.D.",
        d: 'the reponse d'
    },
    correctAnswer : "answer-a"
},
{
    question : "Who invented Javascript?",
    answers : {
        a : "Magloire",
        b : "DJ Snake",
        c : "Brendan Eich",
        d: 'the reponse d'
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
        console.log(currentQuestion.answers[letter])
        const answerLetter = document.createElement("label")
        const oneAnswer = document.createElement("button")
        oneAnswer.classList.add("cardButton");
        oneAnswer.setAttribute('id',"answer-"+letter);
        //oneAnswer.classList.add("color-2");
        oneAnswer.innerHTML=`${letter}: ${currentQuestion.answers[letter]}`;
        answerContainer.appendChild(oneAnswer);
       
    }

    //create the button
    console.log(questionNumber===9)
    const buttonNext = document.createElement("button");
    buttonNext.classList.add("neonButton");
    if (questionNumber == 9){
        buttonNext.innerHTML="See Results";
        buttonNext.setAttribute('id',"displayResults");
        buttonNext.onclick=() => slideUp('.resultsPage');
    } else {
        buttonNext.setAttribute('id',"nextQuestion");
        buttonNext.innerHTML="Next Question";
        buttonNext.onclick=() => generateQuizzAndSlide(questionNumber+1);
    }
    questionCard.appendChild(buttonNext);
    // <button class="neonButton" id="displayResults" type="submit" onclick="slideUp('.resultsPage')">See Results</button>


}


// Etape 2 
// Stocker le resultat de l'input dans un object

//  const userInfo = {
//     score: 0,
//     name: ""
// }

// const selectTheme

//une fois que le user clique sur démarrer dans la div d'avant
//créer 3 tableaux par thème de question
//récupérer le thème du questionnaire dans une variable: mettre des boutons s




// inititalement quand on clique sur le bouton start
//lancer quizzFunc(return)
const quizzStart = (RETURN) => {
  createQuestion(RETURN[0], 0);
};

quizzStart(firstQuizz); // Test
// quizzStart(firstQuizz);
// Test
// let score = 0
// //Card .onclick ==>
// const checkAnswers = (labelCard,goodAnswer) => {
//     if (labelCard === goodAnswer){
//         score++
//         ajouter bordure verte
//     } else {
//         ajouter bordure rouge
//     }
//         colorier background des cartes
//         buttonNextApparait

// }
//modifier les dom (vert, rouge, +score)
//bouton next question qui apparait

// let question = 0

// func buttonNext = {
//     removeQuestion 0 0
//     question = question+1;
//     createQuestion
// }

//button .onclick
const slideUp = (div) => {
  document.querySelector(div).classList.replace("hid-box", "hid-box-hover");
};


// // PAGE RESULTAT

const user = {
  userName: "Toto",
  firstScore: 8,
  secondScore:6,
  thridScore: 4,
};

const userList = [
  {userName: "Loris",
  firstScore: 7,
  secondScore:6,
  thridScore: 2,
},

  {userName: "Nicolas",
  firstScore: 2,
  secondScore:1,
  thridScore: 3,
},

  {userName: "Julien",
  firstScore: 6,
  secondScore:1,
  thridScore: 2,
},

  {userName: "Paul",
  firstScore: 6,
  secondScore:2,
  thridScore: 3,
},
  
  {userName: "Zakari",
  firstScore: 1,
  secondScore:4,
  thridScore: 2,
},
];



//function scoreCalculator(numero du quizz / ){

  //affiche paragraphe "congrat" avec nom et score de l'user
  const pCongrats = document.querySelector("#congrats");
  pCongrats.textContent = `Congrats ${user.userName}, you scored is ${user.userScore}/10.`;

  //récupère les résultat de l'user dans la liste de resultat
  userList.push(user);
  //trier la liste en fonction de userScore
  // attention trier en fonction du bon quizz : key = first/second/third Score
  // userList.sort(function (a, b) {
  //   return b.[key] - a.[key]];
  // });
  
  for (const element of userList){
    if(userList.userName === user.userName){
      console.log(userList.userName);
      const userRank = userList.indexOf(element);
    }
  }
  // const pRank = document.querySelector("#rank");
  // pRank.textContent = `You ranked #${userList.indexOf(userList[])}.`;







//afficher les scores et les noms des 3 premiers dans le podium
//   const firstUser = document.querySelector("#firstUserName");
// firstUser.textContent = `${userList[0].userName}`;

// const firstScore= document.querySelector("#firstUserScore");
// firstScore.textContent = `${userList[0].[key]}/10`;

// const secondUser = document.querySelector("#secondUserName");
// secondUser.textContent = `${userList[1].userName}`;

// const secondScore= document.querySelector("#secondUserScore");
// secondScore.textContent = `${userList[1].[key]}/10`;

// const thirdUser = document.querySelector("#thirdUserName");
// thirdUser.textContent = `${userList[2].userName}`;

// const thirdScore= document.querySelector("#thirdUserScore");
// thirdScore.textContent = `${userList[2].[key]}/10`;


//}
// // FIN PAGE RESULTAT








