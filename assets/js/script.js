

function mathQuiz(){
	this.equation;
	this.answer;
}

let equation1 = new mathQuiz()
equation1.equation = "1+1"
equation1.answer = "2"

let equation2 = new mathQuiz()
equation2.equation = "100/3"
equation2.answer = "33.3"

let equation3 = new mathQuiz()
equation3.equation = "20*5"
equation3.answer = "100"

let equation4 = new mathQuiz()
equation4.equation = "20(10+3)/10"
equation4.answer = "26"

let equation5 = new mathQuiz()
equation5.equation = "9*3"
equation5.answer = "27"

let equation6 = new mathQuiz()
equation6.equation = "Find x: 2x+2=10"
equation6.answer = "4"

let equation7 = new mathQuiz()
equation7.equation = "50*66"
equation7.answer = "3300"

let equation8 = new mathQuiz()
equation8.equation = "√81"
equation8.answer = "9"

let equation9 = new mathQuiz()
equation9.equation = "√(16 + 9)"
equation9.answer = "5"


let equation10 = new mathQuiz()
equation10.equation = "0/10"
equation10.answer = "0"

let equation11 = new mathQuiz()
equation11.equation = "1*1200"
equation11.answer = "1200"

let mathEquations  = [equation1,
						equation2,
						equation3,
						equation4,
						equation5,
						equation6,
						equation7,
						equation8,
						equation9,
						equation10,
						equation1,
					
]

function startGames() {
	console.log(mainGame)
	startGame.style.display="none";
	gameScreen.style.backgroundColor= "white"
	// mainGame.style.backgroundColor= "white"
	mainGame.style.display= "block"
	failImg.style.display="none"
	passImg.style.display="none"

	wrongAns = 0
	mathQuestion = 0
	correctAns = 0
	score.innerHTML = 0

	mathEquations = [equation1,
						equation2,
						equation3,
						equation4,
						equation5,
						equation6,
						equation7,
						equation8,
						equation9,
						equation11,
						,
]

mathProblem()
}

let score = document.querySelector("#score")
let comments;
let wrongAns = 0
let mathQuestion = 0
let correctAns = 0


let correctmessages = ["Wow, You are Genius!", "How did you answer it?", "Nice, Your parents are proud of you"]
let wrongmessages = ["Uwi, Huwag puro bulakbol", "Tama na ang Inom, Mag-aral ka nalang", "Di ka yata pumapasok, ibalik mo sa Tuition Fee"]

function getAverage() {
	let average = (correctAns/mathQuestion)*100
	// console.log(mathQuestion)
	if(mathQuestion === 10){
		score.innerHTML = average+"%"
		if(average >= 90){
	startGame.style.display="none";
	mainGame.style.display= "none"
	passImg.style.display="block"
	passImg.style.width="100%"
	passImg.style.height="100%"
		return correctComments()

	} else {
	startGame.style.display="none";
	mainGame.style.display= "none"
	failImg.style.display="block"
	failImg.style.width="100%"
	failImg.style.height="100%"
		return wrongComments()
	}
	}

	if(wrongAns == 3) {
		startGame.style.display="none";
	mainGame.style.display= "none"
	failImg.style.display="block"
	failImg.style.width="100%"
	failImg.style.height="100%"
		return wrongComments()
	}


}

function correctComments() {
let msgcorrectLength = correctmessages.length
let randomCorrectMsg = Math.floor(Math.random()*msgcorrectLength)

let correctcomments = correctmessages[randomCorrectMsg];
return alert(correctcomments)
}

function wrongComments() {
let msgwrongLength = wrongmessages.length
let randomWrongMsg = Math.floor(Math.random()*msgwrongLength)

let wrongcomments = wrongmessages[randomWrongMsg];
return alert(wrongcomments)
}


let mathProblems;





function mathProblem(){

let length = mathEquations.length
let randomEquation = Math.floor(Math.random()*length)


mathProblems = mathEquations[randomEquation];




if(mathProblems!=null && mathEquations != null){
	mathQuestion++
	equation.innerHTML = mathProblems.equation


	
return mathProblems
} else if(mathEquations == null && mathEquations==null){

	return; 

}else {
	mathProblem()
		}
}



function solveMath() {
	// console.log(solveMath)


	// console.log(mathProblems.answer)
if(mathAnswer.value == mathProblems.answer){
		correctAns++
			
			score.innerHTML = score.innerHTML*1 + 1
			
			mathAnswer.value = ""
			getAverage()
		
			mathEquations[mathEquations.indexOf(mathProblems)] = null
			mathProblem()
			

			}else if(wrongAns <=3){
				wrongAns++
				console.log(wrongAns)
				wrongComments()
				getAverage()
				mathAnswer.value = ""
				
				mathProblem()
			} else {
				wrongComments()
				getAverage()
				mathAnswer.value = ""
				
				mathProblem()
			}


}

// submitBtn.addEventListener("click", solveMath)

mathAnswer.addEventListener("keypress", function(e) {
	if(e.keyCode === 13) solveMath()
})


//Start a Math Quiz



startGame.addEventListener("click", startGames)

failImg.addEventListener("click", startGames)
passImg.addEventListener("click", startGames)






