const btn = document.querySelector('#btn');
const model = document.querySelector('.model');
const closeM = document.querySelector('#closeM');

btn.addEventListener('click',function(){
    model.classList.remove('hidden');
    model.style.animationPlayState = 'running';
    
});

closeM.addEventListener('click', function(){
    model.classList.add('hidden');
});
