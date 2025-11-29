let container = document.querySelector('#container');

let img = document.querySelector('img')

let like = document.querySelector('i');



container.addEventListener('dblclick', () => {

    like.style.transform = 'translate(-50%, -50% ) scale(1)'
    like.style.opacity = 0.8;
    like.style.color = 'red';
    

    setTimeout(function () {
        like.style.opacity = 0;
    }, 1500)

    setTimeout(function () {
        like.style.transform = 'translate(-50%, -50% ) scale(0)'

    }, 3000)


})

