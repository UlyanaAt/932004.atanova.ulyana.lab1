const left = document.getElementById('left');
const right = document.getElementById('right');
const both = document.getElementById('both');

left.addEventListener('click', () => {
    const f_block = document.querySelector('.first');
    f_block.style.width = "95%";
    const s_block = document.querySelector('.second');
    s_block.style.width = "5%";
    const cat = document.querySelector('.image1');
    cat.style.width = '80%';
    const dog = document.querySelector('.image2');
    dog.style.width = '0%';
})

right.addEventListener('click', () => {
    const f_block = document.querySelector('.first');
    f_block.style.width = "5%";
    const s_block = document.querySelector('.second');
    s_block.style.width = "95%";
    const cat = document.querySelector('.image1');
    cat.style.width = '0%';
    const dog = document.querySelector('.image2');
    dog.style.width = '70%';
})

both.addEventListener('click', () => {
    const f_block = document.querySelector('.first');
    f_block.style.width = "50%";
    const s_block = document.querySelector('.second');
    s_block.style.width = "50%";
    const cat = document.querySelector('.image1');
    cat.style.width = '90%';
    const dog = document.querySelector('.image2');
    dog.style.width = '90%';
})