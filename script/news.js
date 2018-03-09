var code = location.href.split('?')[1] || '';

var theme = document.getElementById('theme');
var text = document.getElementById('text');
var pages = document.getElementById('pages');

var news = [
['Создан репозиторий на GitHub','Мы запустили демо версию сайта на GitHub. Если вы желаете помочь проекту, то подождите, пока я добавлю вкладку пожертвования :)'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...'],
['Coming Soon...','wait...']
];


var show_pages = 0;
var max_show_news_at_page=10;
var max_show_pages=8;
if(Math.ceil(news.length/max_show_news_at_page)<max_show_pages){
	max_show_pages = Math.ceil(news.length/max_show_news_at_page);
}


function toZero(a){
	if(a<0) return 0;

	return a;
}
function toOne(a){
	if(a<1) return 1;

	return a;
}
function biggest(a,b){
	if(a>b){
		return a;
	}else{
		return b;
	}
}


function news_at_page(neww){
	return (neww<Math.ceil(news.length/max_show_news_at_page)+1);
}



function generatePage(DOMelement,page,i,j){
	var block = document.createElement('div');
	if(i=='>'){
		var page_click = page+1;
		var text_page_click = '>';
	}else if(i=='<'){
		var page_click = page-1;
		var text_page_click = '<';
	}else if(i=='number'){
		var page_click = j;
		var text_page_click = j;
		show_pages-=1;
	}else{
		var page_click = page+show_pages;
		var text_page_click = page+show_pages;
	}
	if(page_click==page){
		block.className = 'smallbuttonchecked';
	}else{
		block.className = 'smallbutton';		
	}
	if(news_at_page(page_click,page)){
		block.innerHTML = text_page_click;
		block.onclick=function(){
			location.assign('news.html?page='+page_click);
		};
		DOMelement.appendChild(block);
		show_pages++;
	}
}
function addPages(DOMelement,page){
	var fp = (page==1);
	var lp = (page==Math.ceil(news.length/max_show_news_at_page));



	if(fp){
		for(i=0;i<max_show_pages/2+1;i++){
			generatePage(DOMelement,page,0);
		}			
		generatePage(DOMelement,page,'>');
	}else if(lp){
		generatePage(DOMelement,page,'<');
		for(i=toZero(page-max_show_pages/2)+1;i<page;i++){
			generatePage(DOMelement,page,'number',i);
		}
		generatePage(DOMelement,page,'number',page);
	}else{

		generatePage(DOMelement,page,'<');
		for(i=toZero(page-max_show_pages/2)+1;i<page;i++){
			generatePage(DOMelement,page,'number',i);
		}
		generatePage(DOMelement,page,'number',page);
		for(i=page+1;i<page+max_show_news_at_page/2;i++){
			generatePage(DOMelement,page,'number',i);
		}

			generatePage(DOMelement,page,'>');
	}


}

function addBlock(DOMelement,i){
	var block = document.createElement('div');
	block.className = 'blockbtn';
	block.onclick=function(){
		location.assign('news.html?new='+(i+1));
	};
	
	var btheme = document.createElement('h1');
	var btext = document.createElement('div');
	btheme.innerHTML = news[i][0];
	btext.innerHTML = news[i][1].substring(0,40)+'...';
	block.appendChild(btheme);
	block.appendChild(btext);
	DOMelement.appendChild(block);
}

function createNewsList(page){
	if(page!=1){
		theme.innerText = 'Новости страница: '+page;
	}
	var count = news.length-(max_show_news_at_page*page);
	for(i=toZero(count);i<count+max_show_news_at_page;i++){
		if(i>=news.length) continue;

		addBlock(text,i,page);
	}
	if(text.innerText.length==0){
		//location.assign('news.html?page=1');
	}
}

if(code!='' && code.split('=')[0]=='new'){
	var openNew = parseInt(code.split('=')[1])-1;
	theme.innerHTML = news[openNew][0];
	text.innerHTML = news[openNew][1]
}else if(code!='' && code.split('=')[0]=='page'){
	var page = parseInt(code.split('=')[1]);
	if(page>Math.ceil(news.length/max_show_news_at_page) || page<1){
		theme.innerText = 'Простите, страница не найдена (;_;)';
		text.innerText = 'Возможно страница удалена или недоступна.';
	}else{
		createNewsList(page);
		addPages(pages,page);
	}
}

