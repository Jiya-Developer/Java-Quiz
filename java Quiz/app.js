
const questions = [
    {
        question: "What is the output of `typeof NaN` in JavaScript?",
        options: ["a) 'number'", "b) 'NaN'", "c) 'undefined'", "d) 'object'"],
        answer: "a) 'number'"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["a) pop()", "b) shift()", "c) slice()", "d) splice()"],
        answer: "a) pop()"
    },
    {
        question: "What will be the result of `0.1 + 0.2 === 0.3` in JavaScript?",
        options: ["a) true", "b) false", "c) undefined", "d) NaN"],
        answer: "b) false"
    },
    {
        question: "How do you define a function in JavaScript?",
        options: ["a) function myFunction() {}", "b) define myFunction() {}", "c) func myFunction() {}", "d) function: myFunction() {}"],
        answer: "a) function myFunction() {}"
    },
    {
        question: "What does the `this` keyword refer to in a method of an object?",
        options: ["a) The object itself", "b) The global object", "c) The function that called the method", "d) The method's name"],
        answer: "a) The object itself"
    },
    {
        question: "Which of the following is a falsy value in JavaScript?",
        options: ["a) 0", "b) '' (empty string)", "c) false", "d) [] (empty array)"],
        answer: "a) 0"
    },
    {
        question: "What is the purpose of the `bind()` method in JavaScript?",
        options: ["a) To create a new function with a specific `this` value", "b) To merge two arrays", "c) To remove elements from an array", "d) To sort the elements of an array"],
        answer: "a) To create a new function with a specific `this` value"
    },
    {
        question: "What will the following code output: `console.log(2 + '2')`?",
        options: ["a) 4", "b) 22", "c) NaN", "d) undefined"],
        answer: "b) 22"
    },
    {
        question: "What is the default value of a function parameter in JavaScript if none is provided?",
        options: ["a) null", "b) undefined", "c) 0", "d) '' (empty string)"],
        answer: "b) undefined"
    },
    {
        question: "How do you create a new object in JavaScript?",
        options: ["a) var obj = Object.create();", "b) var obj = {};", "c) var obj = new Object();", "d) All of the above"],
        answer: "d) All of the above"
    }
];

function startQuiz() {
    let score = 0;
    let questionIndex = 0;

    function askQuestion() {
        if (questionIndex >= questions.length) {
            alert(`Quiz completed! You scored ${score} out of ${questions.length}.`);
            return;
        }

        const q = questions[questionIndex];
        const optionsString = q.options.join('\n');
        const userAnswer = prompt(`${q.question}\n${optionsString}`);

        if (userAnswer === q.answer) {
            score++;
        }

        questionIndex++;
        askQuestion(); // Ask the next question
    }

    askQuestion(); // Start the quiz
}s