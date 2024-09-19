const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const h = document.querySelector('h5');


add.addEventListener('click', function(){
      h.innerHTML = 'Friends';
      h.style.color = 'green';
})

remove.addEventListener('click', function(){
    h.innerHTML = 'Stranger';
    h.style.color = 'red';
})