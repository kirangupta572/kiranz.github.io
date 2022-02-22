var i=0;
function move(){
    if(i==0){
        i=1;
        var elem=document.getElementById("mybar");
        var width=1;
        var id=setInterval(frame,10);
        function frame(){
            if(width>=100){
                clearInterval(id);
                i=0;
            }
            else{
                width++;
                elem.style.width=width + "%";
            }
        }        
    }

}




// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('section');

// let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//         if(activeLink != i){
//             links[activeLink].classList.remove('active');
//             link.classList.add('active');
//             sections[activeLink].classList.remove('active');

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             }, 1000);
//         }
//     })
// })