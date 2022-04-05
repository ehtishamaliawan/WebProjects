var qNumber = 0;
var score = 0;
var correctAns;
function start()
{
	  var element = document.getElementById("startButton");
	  if(element.innerHTML == "Start Quiz")
	  {
		  startQuiz();
	  }
	  else if(element.innerHTML == "Reset")
	  {
		   document.location.reload(true);
              alert("Quiz Ended Your Score Is : " + score + "/" + qNumber);
	  }
}
function startQuiz()
{
	  if(qNumber==0)
	  {
		  timeTrigger();
	  }
      var answer=Question();
	  correctAns = answer;
	  var array = choices(answer);
	  var shuffledArr = shuffleOptions(array);
	  var element = document.getElementById("choice1");
		element.innerHTML = shuffledArr[0];
		element.value=shuffledArr[0];
		var element = document.getElementById("choice2");
		element.innerHTML = shuffledArr[1];
		element.value=shuffledArr[1];
		var element = document.getElementById("choice3");
		element.innerHTML = shuffledArr[2];
		element.value=shuffledArr[2];
		var element = document.getElementById("choice4");
		element.innerHTML = shuffledArr[3];
		element.value=shuffledArr[3];
		var element = document.getElementById("startButton");
	    element.innerHTML = "Reset";
}

function Question()
{
	// show question
        var element = document.getElementById("question");
		var num1 = Math.floor(Math.random() * 10) + 1;
		var num2 = Math.floor(Math.random() * 10) + 1;
        element.innerHTML = num1 + " + " + num2;
		return num1+num2;
}

function choices(answer)
{
		var arr = ["option1","option2","option3","option4"];
		var dValue;
		arr[0] = answer;
	for(var x = 1; x < 4; x++)
	{
		 dValue = Math.floor(Math.random() * 5) + 1;
		 if(dValue % 2 == 0)
		 {
			 arr[x] = answer - dValue;
	     }
		 else
		 {
			 arr[x] = answer + dValue;
		 }
	}
	    return arr;
}

function shuffleOptions(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			  document.location.reload(true);
			 alert("TimeOut Your Score Is : " + score + "/" + qNumber);
        }
    }, 1000);
}

function timeTrigger() {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
}
 
function validateAns(e)
{
              qNumber++;
	if(e.value==correctAns)
	{
		score++;
		var element=document.getElementById("marks");
		element.innerHTML = score;
		startQuiz();
	}
	else{
		   startQuiz();
	}
}