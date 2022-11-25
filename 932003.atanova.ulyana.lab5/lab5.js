const news1 = document.getElementById('news1');
const news2 = document.getElementById('news2');
const news3 = document.getElementById('news3');

const open_news1 = document.getElementById('open_news1');
const open_news2 = document.getElementById('open_news2');
const open_news3 = document.getElementById('open_news3');

// const first = document.getElementById('first');

open_news1.addEventListener('click', 
function(a){
    a.preventDefault();
    news1.classList.add('active');}
)

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName==='Escape')
    {
        news1.classList.remove('active');
    }
})

open_news2.addEventListener('click', 
function(a){
    a.preventDefault();
    news2.classList.add('active');}
)

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName==='Escape')
    {
        news2.classList.remove('active');
    }
})

open_news3.addEventListener('click', 
function(a){
    a.preventDefault();
    news3.classList.add('active');}
)

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName==='Escape')
    {
        news3.classList.remove('active');
    }
})

first_news.onmouseover = function (){
    first_news.style.background = "red";
};

first_news.onmouseleave = function (){
    first_news.style.background = "rgb(164, 251, 251)";
};

second_news.onmouseover = function (){
    second_news.style.background = "red";
};

second_news.onmouseleave = function (){
    second_news.style.background = "rgb(164, 251, 251)";
};

third_news.onmouseover = function (){
    third_news.style.background = "red";
};

third_news.onmouseleave = function (){
    third_news.style.background = "rgb(164, 251, 251)";
};

