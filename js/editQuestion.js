/**
 * Created by xizhang on 6/11/15.
 */

 var config  = {

 	sysQustion: {
 	}, 
 	usrQustion: {
 		qNums : 3
 	},
 	server: {}
 }

function addNewAnswer(e){
	var newAnswer = createAnswer();
	this.parentNode.insertBefore(newAnswer, this);
}

function addNewQuestion() {
	//check if it reach max questions
	if (byClass('t2').length >= config.usrQustion.qNums) {
		alert('reach max!')
		return;
	}
	var newQuestion = createQuestion();
	$(newQuestion).insertAfter($(this).closest('section'));
	window.scrollTo(0,document.body.scrollHeight);
}

function createAnswer() {
	var elem =  document.createElement('div');
	elem.className = 'input-group';
	var out='<span class="input-group-addon"> <input type="radio"> </span> <input class="form-control" type="text" name="answers[]" placeholder="Answer">';
	elem.innerHTML = out;
	return elem;
}

function createQuestion() {
	var section = document.createElement('section');
	section.className = 't2';
	var out='<form class="container-fluid form-horizontal"> <input class="form-control" type="text" placeholder="Title"> <div class="input-group"> <span class="input-group-addon"> <input type="radio" aria-label="..."> </span> <input class="form-control" type="text" placeholder="Answer"> </div> <div class="input-group"> <span class="input-group-addon"> <input type="radio" aria-label="..."> </span> <input class="form-control" type="text" placeholder="Answer"> </div> <button type="button" class="btn btn-default t-btn-add"> <span class="glyphicon glyphicon-plus"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-ok"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-chevron-down"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-thumbs-up"></span> </button> </form>';
	section.innerHTML = out;
	return section;
}

function saveQuestions(){
	var forms = byClass('t-user-question'),
		data,
		err,
		;
	for (var i = 0; i < forms.length; ++i) {
		console.log(forms[i].checkValidity());
		data = $(forms[i]).serializeObject();
		if (!data.name) {
			alert('Title cannot be empty!');
			return;
		} else if (!data.answers.length == 0) {
			alert('Must have answers!');
			return;
		}
	}
}