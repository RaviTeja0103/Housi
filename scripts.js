
let a=[]
let ind=0;

for(let i =1;i<100;i++){
    a.push(i);
}

function shuffleArray(array) {
    let shuffledArray = array.slice(); 

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

a = shuffleArray(a);

 const test = document.getElementById("small_box1");


function handleClick() {
    const bigbox = document.getElementById("big_blocks");
    bigbox.textContent = a[ind]; 

    let t_id = "small_box" + a[ind];
    console.log(a[ind],t_id);
    const small_box = document.getElementById(t_id);
    console.log(small_box);
    small_box.childNodes[1].textContent = a[ind];
    small_box.style.backgroundColor = "red";

    ind++;
}


document.getElementById("start_button").addEventListener("click", handleClick);