var main = document.querySelector("#main");
var submitButton = document.querySelector("#submitButton");
var timer = 75;

var questionArr = [

    {
        question: "What is the correct syntax to close the <> element?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"

    },

    {
        question: "What is the difference between <h1> and <h2>?",
        answer: {
            a: 'h2 is bigger than h1',
            b: 'h1 is equal to h2',
            c: 'h1 is bigger than h2',
            d: 'no difference',
        },
        correctAnswer: 'h1 is bigger than h2'

    },

    {
        question: "What is the purpose of the <body> element?",
        answer: {
            a: 'Defines all of the visible elements that make up the body of the document.',
            b: 'Determines the style of the HTML.',
            c: 'Body element is used to display data on top of page.',
            d: 'Defines all of the visible elements that make up the header of the document.',
        },
        correctAnswer: 'Defines all of the visible elements that make up the body of the document.'
    },

    {
        question: "What does CSS stand for?",
        answer: {
            a: 'Cash Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Cascading Sheet Styles',
            d: 'Computer Science Sheets',
        },
        correctAnswer: 'Cascading Style Sheets'

    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: {
            a: '#',
            b: '!',
            c: '<br',
            d: '.',
        },
        correctAnswer: '<br'
    },
    {
        question: "Choose the correct HTML element to define bold text",
        answer: {
            a: '<b>',
            b: '<bt>',
            c: 'bold',
            d: '<BT>',
        },
        correctAnswer: '<b>'
    },
    {
        question: "How can you make an unordered list?",
        answer: {
            a: '<ol',
            b: '<uol>',
            c: '<li>',
            d: '<ul?',
        },
        correctAnswer: '<ul>'
    },
    {
        question: "How can you make a numbered list?",
        answer: {
            a: '<li>',
            b: '<ul>',
            c: '<ol>',
            d: '<nl>',
        },
        correctAnswer: '<ol>'
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: {
            a: '<script>',
            b: '<java>',
            c: '<javascript>',
            d: '<js>',
        },
        correctAnswer: '<script>'
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answer: {
            a: 'image',
            b: 'alt',
            c: 'read',
            d: 'display',
        },
        correctAnswer: "alt"
    },
]

function startTimer() {
    var clock = document.querySelector("#timer");
    var quizContent = document.querySelector(".quiz");

    var interval = setInterval(function () {
        timer--;
        clock.innerText = timer + " seconds remaining";
        if (timer === 0) {
            clearInterval(interval);
            clock.style.display = "none";
            quizContent.style.display = "none";
            var timeOutDiv = document.createElement("div");
            var timesUp = document.createElement("h1");
            timesUp.innerText = "Times up!";
            timeOutDiv.appendChild(timesUp);
            main.appendChild(timeOutDiv);
        }
    }, 1000)

}



var questionCounter = 0;
submitButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    event.preventDefault;
    startTimer();

    var initialContent = document.querySelector(".initialPage");
    initialContent.style.display = "none";
    var quizContent = document.querySelector(".quiz");
    var currentQuestion = questionArr[questionCounter].question;
    var questionContent = document.createElement("p");
    questionContent.innerText = currentQuestion;
    quizContent.appendChild(questionContent);

    var A = questionArr[questionCounter].answer.a;
    var answerContent = document.createElement("button");
    answerContent.addEventListener("click", function (event) {
        event.preventDefault;
        var correctAnswer = questionArr[questionCounter].correctAnswer;

        var notification = document.createElement("p");
        if (A === correctAnswer) {
            notification.innerText = "Correct!";
        } else {
            notification.innerText = "Wrong!";
        };

        questionCounter++;

        document.querySelector(".quiz").innerHTML = "";

        nextQuestion();

        quizContent.appendChild(notification);
    })
    answerContent.innerText = "a: " + A;
    quizContent.appendChild(answerContent);


    var B = questionArr[questionCounter].answer.b;
    var answerContent = document.createElement("button");
    answerContent.addEventListener("click", function (event) {
        event.preventDefault;
        var correctAnswer = questionArr[questionCounter].correctAnswer;

        var notification = document.createElement("p");
        if (B === correctAnswer) {
            notification.innerText = "Correct!";
        } else {
            notification.innerText = "Wrong!";
        };

        questionCounter++;

        document.querySelector(".quiz").innerHTML = "";

        nextQuestion();

        quizContent.appendChild(notification);
    })
    answerContent.innerText = "b: " + B;
    quizContent.appendChild(answerContent);


    var C = questionArr[questionCounter].answer.c;
    var answerContent = document.createElement("button");
    answerContent.addEventListener("click", function (event) {
        event.preventDefault;
        var correctAnswer = questionArr[questionCounter].correctAnswer;

        var notification = document.createElement("p");
        if (C === correctAnswer) {
            notification.innerText = "Correct!";
        } else {
            notification.innerText = "Wrong!";
        };

        questionCounter++;

        document.querySelector(".quiz").innerHTML = "";

        nextQuestion();

        quizContent.appendChild(notification);
    })
    answerContent.innerText = "c: " + C;
    quizContent.appendChild(answerContent);


    var D = questionArr[questionCounter].answer.d;
    var answerContent = document.createElement("button");
    answerContent.addEventListener("click", function (event) {
        event.preventDefault;
        var correctAnswer = questionArr[questionCounter].correctAnswer;

        var notification = document.createElement("p");
        if (D === correctAnswer) {
            notification.innerText = "Correct!";
        } else {
            notification.innerText = "Wrong!";
        };

        questionCounter++;

        document.querySelector(".quiz").innerHTML = "";

        nextQuestion();

        quizContent.appendChild(notification);
    })
    answerContent.innerText = "d: " + D;
    quizContent.appendChild(answerContent);
}