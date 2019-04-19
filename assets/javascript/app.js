
//Variables for correct, incorrect, and unaswered questions.
var correct = 0;
var incorrect= 0;
var unanswered= 0;
//Variables for the timer
var timer = 15;
var intervalID;
var decreaseTime = false;
//A variable to make the question appear
var qAppear = [];
//Variables for the user guess
var userGuess ="";
var questionPick;
//Variable for all the trivia questions that will be asked
var tQuestion = [
    {
    question: "Who is the robot that contacts the rangers whenever there is trouble?",
    options: ["Zion 7","C3po","Johnny 5","Alpha 5",],
    answer: 4,
    image: "assets⁩/images⁩/Alpha5.gif"
},
{
    question: "Which Power Ranger is missing a finger in real life?",
    options: ["The Blue Ranger","The Black Ranger","The Green Ranger","The Yellow Ranger",],
    answer: 2,
    image: "assets⁩/images⁩/BlackRanger2.gif"
},
{
    question: "What are the names of the 2 local bullies that the rangers deal with comically on a daily basis??",
    options: ["Chuck and Buck","Bulk and Skull","Ben and Ted","Jeffrey and Peter",],
    answer: 2,
    image: "assets⁩/images⁩/BulkSkull.gif"
},
{
    question: 'Which Power Ranger received his last name on the show from "Breakin Bad" star Bryan Cranston?',
    options: ["Zack the Black Ranger","Tommy the Green/White Ranger","Jason the Red Ranger","Billy the Blue Ranger",],
    answer: 4,
    image: "assets⁩/images⁩/BlueRanger.gif"
},
{
    question: "Which ranger was played by a man in the Japanese version of the show?",
    options: ["The Yellow Ranger","The White Ranger","The Pink Ranger","Trick question, NONE",],
    answer: 1,
    image: "assets⁩/images⁩/YellowRanger2.gif"
},
{
    question: "What was the name of the Japanese television franchise that the American version of Power Rangers was loosely based on?",
    options: ["Naruto","Super Sentai","Pokemon","Super Saban",],
    answer: 3,
    image: "assets⁩/images⁩/SuperSentai.gif"
},
{
    question: "During what year did the Mighty Morphin Power Rangers premier on US television?",
    options: ["1991","1992","1993","1994",],
    answer: 3,
    image: "assets⁩/images⁩/MMPP.gif"
},
{
    question: "Which Ranger is the only Ranger to appear in every eipisode of the Mighty Morphin Power Rangers?",
    options: ["Kimberly","Tommy","Trini","Billy",],
    answer: 4,
    image: "assets⁩/images⁩/BlueRanger2.gif"
},
{
    question: "Who did Tommy give his Power Coin to in order to stop Rita from gaining the Green Ranger powers when he lost them the first time?",
    options: ["Jason","Zorodon","Kimberly","Zack",],
    answer: 1,
    image: "assets⁩/images⁩/GreenRed.gif"
},
{
    question: "Which Ranger was not an original member of the Mighty Morphin team?",
    options: ["Zack","Billy","Kimberly","Tommy",],
    answer: 4,
    image: "assets⁩/images⁩/Green.gif"
},
];
console.log(tQuestion)
$(document).ready(function() {
//On click function to begin the game
$('#retry').hide();
$('#start').on("click", function() {
    $('#start').hide();
    questionAppear();
    startTimer();
    for (var i = 0; i < tQuestion.length; i++) {
        qAppear.push(tQuestion[i]);
    }
});
//Function to start the timer
function startTimer() {
    if (!decreaseTime) {
        intervalID = setInterval(decrement,1000); 
        decreaseTime= true;
    }
};
//Function to stop the timer from decreasing and resetting
function stopTimer() {
	decreaseTime = false;
	clear(intervalId);
};
//Function to set the countdown of the timer within the HTML
//also sets the conditon of the HTML if the timer reaches zero and displays the info
function decrement() {
    $('#time').html("<h1>Hurry up Ranger. You have : " + timer +  "second left!!!</h1>");
    timer --;;
        if (timer===0) {
            unanswered++;
            $('#answer').html("<p>Time is up! The correct answer is: " + questionPick.choice[questionPick.answer] + "</p>");
            stopTimer();
        }
};
//Function to display the question and possible answers at random from an array
//also sets the conditon of the HTML and displays the question
function questionAppear() {
    questionChoice = Math.floor(Math.random()*tQuestion.length);
    questionPick = tQuestion[questionChoice];
    $('#question').html("<h1>" + questionPick.question + "</h1>");
    for (var i = 0; i < questionPick.options.lenght; i++) {
        var playerChoice = $("<div>");
        playerChoice.addClass('#playerChoice');
        playerChoice.html(questionPick[i]);
        //assign array position to it so can check answer
		playerChoice.attr("data-value", i);
		$('#answer').append(playerChoice);
    };
    //click function to compare userguess to answer and generate outcome
    $(".answer").on("click", function () {
	//grab array position from userGuess
	userGuess = parseInt($(this).attr("data-value"));
	    if (userGuess === questionPick.answer) {
		    correct++;
            userGuess="";
            stopTimer();
            $('#answer').html("<p>Correct!</p>");
        }
        else {
		    incorrect++;
            userGuess="";
            stopTimer();
		    $("#answer").html("<p>Ayyyaaayyyaayyyaaayyaa! The correct answer is: " + [questionPick.answer] + "</p>");
	
	    }
    });
};
$("#retry").on("click", function() {
	$("#retry").hide();
	$("#answer").empty();
	$("#question").empty();
	for(var i = 0; i < qAppear.length; i++) {
		tQuestion.push(qAppear[i]);
	}
	startTimer();
	questionAppear();

});
});