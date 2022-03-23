
// THEME SELECTOR //
// themeswitch() = {
    const slideUp = (div)=>{
        document.querySelector(div).classList.replace("hid-box","hid-box-hover")
    }
 
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

function startGame() {
    createAnswersTable();
    generateQuizzAndSlide(0);
}

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
        question : "In which year was Javascript Created ?",
        answers : {
            a : 1982,
            b : 1918,
            c : 1929,
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
    const answerContainer=document.createElement("div");
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
        buttonNext.onclick=() => slideUp('.resultsPage'); //rajouter ici la fonction pour les résultats de paul
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

    /* 
    (créer les 4 cartes) et le choix d'une carte crée le bouton next question
    le bouton lance une fonction comparaison entre réponse et bonne réponse et change la vignette
    et le score puis question suivante
    */


let goodAnswers = []
const createAnswersTable = () => {
    if (logQuizTheme = "firstQuizz"){
        firstQuizz.forEach(question => {
            goodAnswers.push(question.correctAnswer)});
    } else if (logQuizTheme = "secondQuizz"){
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
let userScore = 0
function listenToAnswer(){
    const answerList = document.querySelectorAll(".cardButton");
    for(let j = 0;j<answerList.length;j++){
        answerList[j].addEventListener("click", function(){
            userAnswer = answerList[j].id
            allUserAnswers.push(userAnswer)
            const activeQuestion = document.querySelector(".activeToken");
            console.log(activeQuestion)
            console.log(allUserAnswers)
            if (userAnswer == goodAnswers[j]) {
                userScore++
                activeQuestion.classList.add("successToken")
                console.log(userScore)


            } else {
                activeQuestion.classList.add("wrongToken")
                console.log(userScore)

            }
            console.log(userAnswer)
            const buttonNext = document.getElementById("nextQuestion");
            buttonNext.disabled = false; 
            /*if (userAnswer = tableau[QUESTION])
                GREEN
            else
                rouge*/
                
    })
    }
}

// let score = 0
// const checkAnswer(userAnswer,goodAnswer){
//     if (userAnswer === goodAnswer){

//     }    
// }

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


//objet user {name:"",score,rank}
//a chaque question 
//on check si c'est la bonne reponse dans l'objet
//si oui j'increment le score
// a la fin des 10 questions
//see my results

//en global on a un tableau des scores

// on edit l'objet user pour mettre son score
// onclick on crée une nouvelle fonction qui check si le score de l'utiliateur est dans le tableau

//stocker de la donnée au niveau du navigateur
//si j'utilise l'app quelque part 
//local storage








