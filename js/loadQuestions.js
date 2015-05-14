window.addEventListener("load",init);

function init(){

	/*perepare work*/

	var url = "qs.json";
	var r = new XMLHttpRequest();
	r.open("GET", url, true);
	r.onreadystatechange = function () {
		if (r.readyState != 4 || r.status != 200) return;
		data = JSON.parse(r.responseText);
		for(var i = 0; i < data.questions.length; ++i){
			loadQuestion(i+1, data.questions[i], data.questions.length);
		}
	};
	r.send();
}

/*generated through doT.js*/
function questionTmp(it, i , num)  { var out='<div class="list-group"><a class="list-group-item active"><h4>Q'+(i)+'. '+(it.title)+'</h4></a>';var arr1=it.answers;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+='<a class="list-group-item">'+(value)+'</a>';} } out+='</div><footer>';if(i < num){out+='<a class="next-link" href="#q'+(i+1)+'"><div class="row"><span>Next Question</span></div><div class="row"><span class="glyphicon glyphicon-menu-down"></span></div></a>';}if(i >= num){out+='<a class="next-link" href="#q'+(i+1)+'"><span>Submit</span></a>';}return out; }

function loadQuestion(i,item,num){
	/*cause template only generate string, i have to create outer element myself*/
	var q = document.createElement('section');
	q.id = 'q'+ i;

	q.innerHTML = questionTmp(item,i,num);
	document.body.appendChild(q);
}