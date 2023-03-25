const review = [
    {
        id: 1,
        name: "mansih sathe",
        job: "web designer",
        img: "./pasport.jpg",
        text: "just remember one thing you are a good person.For some reason you are behaving.",
        


    },
    {
        id:2,
        name:"rahul patel",
        job: "web developer",
        img:"./beardless.jpg",
        text:"bhad me jao tum sab mera dimahg mat khao me vese hi paresan hu apni kismat ko lekar",

    },
    {
        id:3,
        name:"shivam kajle",
        job:"syber security",
        img:" ./withbeard.jpg",
        text: " i am a good boy and a kind human being",
    }

]


// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set startig item

let currentItem = 2;



// load  initial item 
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
    
});


// show person based item 
 function showPerson(person) {
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show nwext person 
nextBtn.addEventListener("click",function (){
    currentItem++;
    if (currentItem > review.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});


// show random person 
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random() * review.length);
    console.log (currentItem);
    showPerson();
});

