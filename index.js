const back = document.querySelector("#back");
const next = document.querySelector("#next");

const photos = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg"];
let i = 0;

next.addEventListener("click",()=>{
    i++;
    if (i>photos.length-1) {
        i=0;
    }
    document.querySelector("#picture").src = photos[i];
})

back.addEventListener("click",()=>{
    i--;
    if (i<0) {
        i=photos.length-1;
    }
    document.querySelector("#picture").src = photos[i];
})