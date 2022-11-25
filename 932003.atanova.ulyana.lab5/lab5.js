const news1 = document.getElementById('news1');
const news2 = document.getElementById('news2');
const news3 = document.getElementById('news3');

const open_news1 = document.getElementById('open_news1');
const close_news1 = document.getElementsByClassName('content');
const open_news2 = document.getElementById('open_news2');
const open_news3 = document.getElementById('open_news3');

open_news1.addEventListener('click', 
function(a){
    a.preventDefault();
    news1.classList.add('active');}
)

document.addEventListener('keydown', function() {
	if( key == 27 ){ 
        code = String.fromCharCode(e.key);
        console.log(code);
		news1.classList.remove('active');
	}
});



open_news2.addEventListener('click', 
function(a){
    a.preventDefault();
    news2.classList.add('active');}
)

open_news3.addEventListener('click', 
function(a){
    a.preventDefault();
    news3.classList.add('active');}
)