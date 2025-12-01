let arr = [
   {
      dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1676576625429-e00537557449?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1682095763838-0ca2593193bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1626858707111-2fefbc9a848e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1566812086215-c29c82c4cf93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
]


let clutter = "";

arr.forEach((elem, idx) => {
   clutter += `
               <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
               </div>
              ` 
})

let stories = document.querySelector('.story-container')

stories.innerHTML = clutter;

stories.addEventListener('click', (dets)=>{
//   let GoldenValue = arr[dets.target.id].story
   document.querySelector('#full-screen').style.display = 'block';
   document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
   

   setTimeout(()=>{
   document.querySelector('#full-screen').style.display = 'none';

   },5000)
})
