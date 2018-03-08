var code = location.href.split('?')[1] || '';

var theme = document.getElementById('theme');
var text = document.getElementById('text');

var news = [
['Создан репозиторий на GitHub','Мы запустили демо версию сайта на GitHub. Если вы желаете помочь проекту, то подождите, пока я добавлбю вкладку пожертвования :)'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...']
];

function toZero(a){
	if(a<0) return 0;
}

function addBlock(DOMelement,i){
	var block = document.createElement('div');
	block.className = 'blocksmall';
	block.onclick=function(){
		location.assign('news.html?new='+i);
	};
	
	var btheme = document.createElement('h1');
	var btext = document.createElement('div');
	btheme.innerHTML = news[i][0];
	btext.innerHTML = news[i][1].substring(0,40)+'...';
	block.appendChild(btheme);
	block.appendChild(btext);
	DOMelement.appendChild(block);
	console.log(block);
}

function createNewsList(page){
	for(i=toZero(news.length-20);i<news.length;i++)
	addBlock(text,i);
}

if(code!='' && code.split('=')[0]=='new'){
	var openNew = parseInt(code.split('=')[1]);
	theme.innerHTML = news[openNew][0];
	text.innerHTML = news[openNew][1]
}else if(code!='' && code.split('=')[0]=='page'){
	var page = parseInt(code.split('=')[1]);
	createNewsList(page);
}