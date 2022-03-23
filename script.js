
// THEME SELECTOR //
// themeswitch() = {

 
// QUIZ SELECTOR //
import firstQuiz from "./quiz.js";
import secondQuiz from "./quiz.js";
import thirdQuiz from "./quiz.js";

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
    correctAnswer : "answer-a"
},
{
    question : "In which year was Javascript Created ?",
    answers : {
        a : 1982,
        b : 1918,
        c : 1929,
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
    question : "Inside which HTML element do we put the JavaScript?",
    answers : {
        a : "<javascript>",
        b : "<js>",
        c : "<script>",
        d : "<gogo-gadgeto-JS>"
    },
    correctAnswer : "answer-c"
},
{
    question : "What is the correct syntax for referring to an external script ?",
    answers : {
        a : "<script src=...>",
        b : "<script href=...>",
        c : "<js src=...>",
        d : "<link href=...>"
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
        a : "<!--This is a comment-->",
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
    question : "In which year was Zakari born ?", 
    answers : {
        a : 1982,
        b : 1918,
        c : "666 A.D.",
        d: 'the reponse d'
    },
    correctAnswer : "answer-a"
},
{
    question : "How long does it take for information to travel around the Earth?",
    answers : {
        a : "7 seconds",
        b : "50 seconds",
        c : "7 minutes",
        d : "1 day"
    },
    correctAnswer : "answer-a"
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
const slideUp = (div)=>{
    document.querySelector(div).classList.replace("hid-box","hid-box-hover")
}

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








