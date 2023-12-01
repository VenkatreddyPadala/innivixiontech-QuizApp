const quizData = [{
    question : "What does HTML stand for?" ,
    a:"HyperText Markup Language",
    b:"Hyperlink and Text Markup Language",
    c:"High-Level Text Management Language",
    d:" HyperTransfer Markup Language",
    correct:"a",
},
{
    question : "Which property is used to change the text color in CSS?" ,
    a:" color",
    b:"text-color",
    c:"font-color",
    d:"textColor",
    correct:"a",
},
{
    question : "Which keyword is used to declare variables in JavaScript?" ,
    a:"var",
    b:"int",
    c:"string",
    d:"declare",
    correct:"a",
},
{
    question : "Which HTML tag is used for creating a table" ,
    a:"th",
    b:"tab",
    c:"table",
    d:"tr",
    correct:"c",
},
{
    question : "How can you center align text horizontally in CSS?" ,
    a:"align: center;",
    b:"text-align: center;",
    c:"horizontal-align: center;",
    d:"center-text: true;",
    correct:"b",
},
{
    question : "What is the purpose of the setTimeout function in JavaScript" ,
    a:"To measure the time taken by a function to execute",
    b:"To set the time of the system clock",
    c:"To stop the execution of a function",
    d:"To execute a function after a specified delay",
    correct:"d",
},
{
    question : "Which file extension is commonly used for a JavaScript file" ,
    a:".javascript",
    b:".js",
    c:" .java",
    d:".script",
    correct:"b",
},
{
    question : "In CSS, what does the acronym CSS stand for?" ,
    a:"Cascading Style Sheet",
    b:"Creative Style Sheet",
    c:"Computer Style Sheet",
    d:"Colorful Style Sheet",
    correct:"a",
},
{
    question : "How do you comment a single line of code in JavaScript?" ,
    a:"/* comment */",
    b:" comment",
    c:"// comment",
    d:" comment: single;",
    correct:"c",
},
{
    question : "Which function is used to print output in the console in JavaScript?" ,
    a:" display()",
    b:"log()",
    c:"print()",
    d:"console()",
    correct:"b",
},

];




const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const totalnumberofquestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerlabel = document.querySelectorAll(".answer-label");
const nextquestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitquiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
let currentQtn = 0;
let answered =0;

const loadQuiz  =() =>{
    countQuestion.innerHTML=`${currentQtn+1}`;
    totalnumberofquestion.innerHTML=quizData.length;
    questionNumber.innerHTML=`${currentQtn+1}`;
    questionTitle.innerHTML=quizData[currentQtn].question;
    answerlabel[0].innerHTML=quizData[currentQtn].a;
    answerlabel[1].innerHTML=quizData[currentQtn].b;
    answerlabel[2].innerHTML=quizData[currentQtn].c;
    answerlabel[3].innerHTML=quizData[currentQtn].d;
    reset();

    if(currentQtn == quizData.length-1){
        nextquestionbtn.style.display="none";
        submitquiz.style.display="block";
    }
}
const reset = ()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
}
nextquestionbtn.addEventListener("click",()=>{
    let answer = getSelected();
    if(answer){
        if(answer===quizData[currentQtn].correct){
            answered++;
        }
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
})
submitquiz.addEventListener("click",()=>{
    let answer = getSelected();
    if(answer === quizData[currentQtn].correct){
        answered++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML=`Questions answered Correctly ${answered}/ ${quizData.length};`
    }
})
const getSelected =()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
            answer = allInputs.value;
        }
    });
    return answer;
}
loadQuiz();
