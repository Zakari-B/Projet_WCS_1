// THEME SELECTOR //
// themeswitch() = {

// }

// QUIZ SELECTOR //
// firstTheme.addEventListener("click", function() {
//     if (firstTheme.classList[0] === "themeUnselected") {
//         firstTheme.classList.replace("themeUnselected", "themeSelected")
//     } else {
//         firstTheme.classList.replace("themeSelected", "themeUnselected")
//     }
//     console.log(firstTheme.classList)
// })
// secondTheme.addEventListener("click", function() {
//     if (secondTheme.classList[0] === "themeUnselected") {
//         secondTheme.classList.replace("themeUnselected", "themeSelected")
//     } else {
//         secondTheme.classList.replace("themeSelected", "themeUnselected")
//     }
//     console.log(secondTheme.classList)
// })

// thirdTheme.addEventListener("click", function() {
//     if (thirdTheme.classList[0] === "themeUnselected") {
//         thirdTheme.classList.replace("themeUnselected", "themeSelected")
//     } else {
//         thirdTheme.classList.replace("themeSelected", "themeUnselected")
//     }
//     console.log(thirdTheme.classList)
// })

// QUIZ FUNCTIONS //
const firstQuizz = [
  {
    question: "In which year was Javascript Created ?",
    answers: {
      a: 1982,
      b: 1918,
      c: 1929,
      d: "the reponse d",
    },
    correctAnswer: "answer-a",
  },
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Magloire",
      b: "DJ Snake",
      c: "Brendan Eich",
      d: "the reponse d",
    },
    correctAnswer: "answer-c",
  },
  {
    question: "Who invented Javascript?",
    answers: {
      a: "lalalal",
      b: "DJ Snakakaajaje",
      c: "Brendan Eich",
      d: "the reponse d",
    },
    correctAnswer: "answer-c",
  },
];

const secondQuizz = [];

const thirdQuizz = [];

const createQuestion = (currentQuestion, questionNumber) => {
  //create the card that will contain question title and answers
  const quizz = document.querySelector(".quizz");
  const questionCard = document.createElement("div");
  questionCard.classList.add("card");
  quizz.appendChild(questionCard);

  //create the card title that will hold the title
  const card = document.querySelector(".card");
  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("questionTitle");
  questionTitle.innerHTML = `Question #${questionNumber} - ${currentQuestion.question}`;
  questionCard.appendChild(questionTitle);

  //create the div that will hold the answers
  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");
  questionCard.appendChild(answerContainer);

  //add a button for each answer
  for (letter in currentQuestion.answers) {
    console.log(currentQuestion.answers[letter]);
    const answerLetter = document.createElement("label");
    const oneAnswer = document.createElement("button");
    oneAnswer.classList.add("cardButton");
    oneAnswer.setAttribute("id", "answer-" + letter);
    //oneAnswer.classList.add("color-2");
    oneAnswer.innerHTML = `${letter}: ${currentQuestion.answers[letter]}`;
    answerContainer.appendChild(oneAnswer);
  }
};

// Etape 2
// Stocker le resultat de l'input dans un object

//  const userInfo = {
//     score: 0,
//     name: ""
// }

// const selectTheme

//une fois que le user clique sur démarrer dans la div d'avant
//créer 3 tableaux par thème de question
//récupérer le thème du questionnaire dans une variable
// sylvain va return la constante nécessaire (first quizz, second etc)...

// inititalement quand on clique sur le bouton start
//lancer quizzFunc(return)
const quizzStart = (RETURN) => {
  createQuestion(RETURN[0], 0);
};

quizzStart(firstQuizz); // Test
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
  userScore: 8,
};

const userList = [
  {userName: "Loris",
  userScore: 7},

  {userName: "Nicolas",
  userScore: 2},

  {userName: "Julien",
  userScore: 9},

  {userName: "Paul",
  userScore: 6},
  
  {userName: "Zakari",
  userScore: 1},
];

userList.push(user);

userList.sort(function (a, b) {
  return b.userScore - a.userScore;
});

const pCongrats = document.querySelector("#congrats");
pCongrats.textContent = `Congrats ${user.userName}, you scored is ${user.userScore}/10.`;

// const pRank = document.querySelector("#rank");
// pRank.textContent = `You ranked #${userList.indexOf(userList[])}.`;

const firstUser = document.querySelector("#firstUserName");
firstUser.textContent = `${userList[0].userName}`;

const firstScore= document.querySelector("#firstUserScore");
firstScore.textContent = `${userList[0].userScore}/10`;

const secondUser = document.querySelector("#secondUserName");
secondUser.textContent = `${userList[1].userName}`;

const secondScore= document.querySelector("#secondUserScore");
secondScore.textContent = `${userList[1].userScore}/10`;

const thirdUser = document.querySelector("#thirdUserName");
thirdUser.textContent = `${userList[2].userName}`;

const thirdScore= document.querySelector("#thirdUserScore");
thirdScore.textContent = `${userList[2].userScore}/10`;



// // FIN PAGE RESULTAT
