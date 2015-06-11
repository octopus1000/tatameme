/*global variables*/
var qt1 = []; //predefined questions fetched from internet
var qt2 = []; //user created questions

window.addEventListener("load",init);

/*init funciton*/
function init(){
	//change question type
	//document.getElementById("questionType").addEventListener("change", changeQuestionType);
	//jquery function
	$('#questionType').bootstrapToggle("off");
	$('#questionType').change(changeQuestionType);
	
	//load predefined questions
	//loadPredefinedQuestion("qs.json");
}

function loadPredefinedQuestion(url){
	var r = new XMLHttpRequest();
	r.open("GET", url, true);
	r.onreadystatechange = function () {
		if (r.readyState != 4 || r.status != 200) return;
		data = JSON.parse(r.responseText);
		for(var i = 0; i < data.questions.length; ++i){
			/*cause template only generate string, i have to create outer element myself*/
			var q = document.createElement('section');
			q.id = 'q'+ (i + 1);
			q.class= 't1';
			q.innerHTML = questionTmp(data.questions[i],i + 1,data.questions.length);
			qt1.push(q);
			document.body.appendChild(q);
		}
	};
	r.send();
}

/*generated through doT.js return a string*/
function questionTmp(it, i , num) { var out='<div class="list-group"><a class="list-group-item active"><h4>Q'+(i)+'. '+(it.title)+'</h4></a>';var arr1=it.answers;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+='<div class="radio list-group-item"><label><input type="radio" name="q'+(i)+'" value="'+(i)+'">'+(value)+'</label></div>';} } out+='</div><footer>';if(i < num){out+='<a class="next-link" href="#q'+(i+1)+'"><div><span>Next Question</span></div><div><span class="glyphicon glyphicon-menu-down"></span></div></a>';}if(i >= num){out+='<a class="next-link" href="#q'+(i+1)+'"><span>Submit</span></a>';}out+='</footer>';return out; }

function changeQuestionType(){
	//if qt1 = []? if qt2 = []?

	//reload predefined questions
	if(qt1.length == 0 && !this.checked){
		loadPredefinedQuestion("qs.json");
		return;
	}

	for(var i = 0; i < qt1.length; ++i){
		qt1[i].style.display = this.checked ? "none" : "block";
	}
}