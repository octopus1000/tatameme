$(function(){
	/*show loading indicator*/
	$.mobile.loading("show");
	/*manually initate the panel else external panel wont work properly*/
	$("body > [data-role='panel']").panel();

	$("#qList").listview();
	/*load questions from json*/
	var url = "qs.json";
	$.ajax({
		dataType:"json",
		url: url,
		success:function(data){
			$.mobile.loading("hide");
			$.each(data.questions, function(i, item){
				loadQuestion(i, item, data.questions.length);
			});
		}
	});
});

function loadQuestion(i,item,num){
	/*create page frame*/
	var panelBtn = $('<a/>',{
		'text' : 'nav through Qs',
		'href' : '#qPanel'
	})
	var title = $('<h1/>',{
		"text" : "title"+(i+1)
	})
	var header = $('<div/>',{
		"data-role":'header'
	});
	var footer = $('<div/>',{
		"data-role":'footer'
	}); 
	var main = $('<div/>',{
		"class":"ui-content",
		"role":'main'
	}); 
	var page = $('<div/>',{
		id:"page"+i,
		"data-role":'page' 
	});
	var prev = $('<a/>',{
		text : 'prev',
		"href": i > 0 ? "#page"+ (i-1) : "#"
	});
	var next = $('<a/>',{
		text:'next',
		"href": i < num - 1 ? "#page" + (i+1) :"#"
	});
	
	/*create questions*/
	var qtitle = $('<label/>',{
		text:item.title
	});
	var as = [];
	$.each(item.answers,function(index,answer){
		var id = 'p' + i + 'a' + index;//page[i] answer[index] i= 0...n-1
		var name = 'p' + i;//page[i]
		var ansTag = $('<input/>',{
			'id' : id,
			'name' : name,
			'type' : 'radio'
		});
		var ansLabel = $('<label>',{
			'text' : answer,
			'for' : id
		});
		as.push(ansTag);
		as.push(ansLabel);
		as.push($('<br>'));
	});
	
	/*assemble elements and inject into dom*/
	header.append(panelBtn).append(title);
	footer.append(prev).append(next);
	main.append(qtitle).append(as);
	page.append(header).append(main).append(footer);
	$('body').append(page);

	/*update panel*/
	var li = $('<li/>');
	var a = $('<a/>',{
		'href' : '#page'+i,
		'text' : 'q' + (i + 1)
	}).appendTo(li);
	li.appendTo('#qList');
	$("#qList").listview('refresh');
	/*if(i == 0){
		$.mobile.pageContainer.pagecontainer("change", "#page0");
	}*/
}