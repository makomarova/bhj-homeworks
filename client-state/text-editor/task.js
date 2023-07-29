const editor = document.getElementById('editor');

let text = localStorage.getItem('text');

if( text ){
    editor.value = text;
} 

editor.addEventListener('keyup', () => {
    localStorage.setItem('text', editor.value);
});