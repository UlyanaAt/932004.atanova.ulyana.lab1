let save = document.getElementById('save');
let add = document.getElementById('add');

add.addEventListener('click', function() {
    let row = document.createElement('div');
    row.innerHTML = `<input type="text" class="text">
    <input type="number" class="number">
    <button onclick="up(this)">&uarr;</button>
    <button onclick="down(this)" >&darr;</button>
    <button onclick="deleteObj(this)" >&#215;</button>`;
    document.querySelector('.place').appendChild(row);
});

save.addEventListener('click', function() {
    let text = document.querySelectorAll('.text');
    let number = document.querySelectorAll('.number');
    let data = '';
    
    for(let i = 0; i < text.length; i++) {
        if(i == text.length-1) {data += `"${text[i].value}" : "${number[i].value}"`;} 
        else {data += `"${text[i].value}" : "${number[i].value}", `;}
    }

    document.querySelector('.result').innerHTML = `{${data}}`;
});

function up (el) {
    let parent = el.parentElement;
    let previous = parent.previousElementSibling;
    if (previous) {parent.after(previous);}
}

function down (el) {
    let parent = el.parentElement;
    let next = parent.nextElementSibling;
    if (next) {parent.before(next);}
}

function deleteObj (row) {
    row.parentNode.remove();
}