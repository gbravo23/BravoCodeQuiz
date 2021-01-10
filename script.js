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
            a: 'jbkjb',
            b: 'big',
            c: 'h1 is bigger than h2',
            d: 'small',
        },
        correctAnswer: '<h1> is bigger than <h2>'

    },

    {
        question: "What is the purpose of the <body> element?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },

    {
        question: "What does CSS stand for?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"

    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },
    {
        question: "Choose the correct HTML element to define bold text",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },
    {
        question: "How can you make an unordered list?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },
    {
        question: "How can you make a numbered list?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answer: {
            a: '?',
            b: '!',
            c: '#',
            d: '/',
        },
        correctAnswer: "/"
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
