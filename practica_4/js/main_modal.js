var modal = document.getElementById('simple_modal');
var modal_btn = document.getElementById('modal_btn');
var close_btn = document.getElementsByClassName('close_btn')[0];


modal_btn.addEventListener('click', open_modal);
close_btn.addEventListener('click', close_modal);
window.addEventListener('click', outside_click);

function open_modal(){
    modal.style.display = 'block';
}
function close_modal(){
    modal.style.display = 'none';
}
function outside_click(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}
