
let add = document.getElementById('add')

let h5 = document.querySelector('h5')


let flag = false;

add.addEventListener('click',()=>{
    if(flag === false){
        h5.innerHTML = "Friends"
        h5.style.color = 'green';
        add.innerHTML = "- remove"
        flag = true;
    } 
    else{
        h5.innerHTML = "Stranger"
        h5.style.color = "red"
        add.innerHTML = "+ add Friend"
        flag = false

    }
})

