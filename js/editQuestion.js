/**
 * Created by xizhang on 6/11/15.
 */

function addNewAnswer(e){
	//fixme:should check if it reach max questions
	var newAnswer = createAnswer();
	this.parentNode.insertBefore(newAnswer, this);
}

function addNewQuestion() {
	var newQuestion = createQuestion();
	console.log($(this).closest('section'));
	$(newQuestion).insertAfter($(this).closest('section'));
}

function createAnswer() {
	var elem =  document.createElement('div');
	elem.className = 'input-group';
	var out='<span class="input-group-addon"> <input type="radio" aria-label="..."> </span> <input class="form-control" type="text" placeholder="Answer">';
	elem.innerHTML = out;
	return elem;
}

function createQuestion() {
	var section = document.createElement('section');
	var out='<form class="container-fluid form-horizontal"> <input class="form-control" type="text" placeholder="Title"> <div class="input-group"> <span class="input-group-addon"> <input type="radio" aria-label="..."> </span> <input class="form-control" type="text" placeholder="Answer"> </div> <div class="input-group"> <span class="input-group-addon"> <input type="radio" aria-label="..."> </span> <input class="form-control" type="text" placeholder="Answer"> </div> <button type="button" class="btn btn-default t-btn-add"> <span class="glyphicon glyphicon-plus"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-ok"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-chevron-down"></span> </button> <button type="button" class="btn btn-default t-btn-next"> <span class="glyphicon glyphicon-thumbs-up"></span> </button> </form>';
	section.innerHTML = out;
	return section;
}