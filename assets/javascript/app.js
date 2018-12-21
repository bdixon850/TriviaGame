$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year was the movie Sister Act 2 released?',
	possibleAnswers : ['A. 1988',
				 'B. 1990',
				 'C. 1993',
				 'D. 2001'],
	flags : [false, false, true, false],
	answer : 'C. 1993'
};

var q2 = {
	question: 'Who starred in the role of Alonzo Harris on the movie Training Day?',
	possibleAnswers: ['A. Martin Lawrence',
				 'B. Denzel Washington',
				 'C. Terry Long',
				 'D. Barry Unit'],
	flags : [false, true, false, false],
	answer : 'B. Denzel Washington'
};

var q3 = {
	question : 'Who was the 21st President of the United States?',
	possibleAnswers : ['A. Michael Lennon',
				 'B. Chester Authur',
				 'C. Barack Obama',
				 'D. Thomas Jefferson'],
	flags : [false, true, false, false],
	answer : 'B. Chester Authur'
};

var q4 = {
	question : 'What company created the first tablet?',
	possibleAnswers : ['Microsoft',
				 'B. Apple',
				 'C. LG',
				 'D. Dell'],
	flags : [true, false, false, false],
	answer : 'Microsoft'
};

var q5 = {
	question : 'What year was the first iPhone released?',
	possibleAnswers : ['A. 2004',
				 'B. 2007',
				 'C. 2010',
				 'D. 1999'],
	flags : [false, true, false, false],
	answer : 'B. 2007'
};

var q6 = {
	question : 'Who was the 34th Presidehnt of the United States?',
	possibleAnswers : ['A. Dwight Eisenhower',
				 'B. Bill Clinton',
				 'C. John F. Kennedy',
				 'D. Lyndon Johnson'],
	flags : [true, false, false, false],
	answer : 'A. Dwight Eisenhower'
};

var questionArray = [q1, q2, q3, q4, q5, q6];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
     answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


$('#start').click(countdownTimer.start);
});