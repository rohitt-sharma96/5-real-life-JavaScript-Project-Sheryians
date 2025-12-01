let elem = document.querySelectorAll('.elem');



let img = document.querySelector('#elem1 img');




elem.forEach(function (val) {

   // console.log(val.children)- dekne ke liye val ke andar children mein kya kya mil rha hai
   
   val.addEventListener('mousemove', (dets)=>{
      // val.children[1].style.top = dets.y+"px"
      val.children[1].style.left = dets.x+"px"
   })

   val.addEventListener('mouseenter', () => {
      
      val.children[1].style.opacity = 1;
   })

   val.addEventListener('mouseleave', () => {
      
      val.children[1].style.opacity = 0;



   })
})