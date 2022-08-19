// const btns = document.getElementsByClassName('btn');
// const storeProjects = document.getElementsByClassName("store-projects");

// for(i=0;i<btns.length;i++){
//     btns[i].addEventListener("click", (e)=>{
//         e.preventDefault();
//         const filter = e.target.dataset.filter;

//         storeProjects.forEach((project)=>{
//             if(filter=='all'){
//                 project.style.display="block"
//             }else{
//                 if(project.classList.contains(filter)){
//                     project.style.display="block"
//                 }else{
//                     project.style.display="none"
//                 }
//             }
//         })
//     })
// }
var header = document.getElementById("skillContainer");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}