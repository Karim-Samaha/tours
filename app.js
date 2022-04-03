var data = [
    {
        "id": "1",
        "name": "Mumbai",
        "img": "./assets/p-1.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "90.00",
        "oldPrice": "100.00"
    },
    {
        "id": "2",
        "name": "Hawaii",
        "img": "./assets/p-2.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "140.00",
        "oldPrice": "160.00"
    },
    {
        "id": "3",
        "name": "Sydney",
        "img": "./assets/p-3.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "120.00",
        "oldPrice": "140.00"
    },
    {
        "id": "4",
        "name": "Paris",
        "img": "./assets/p-4.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "150.00",
        "oldPrice": "180.00"
    },
    {
        "id": "5",
        "name": "Tokyo",
        "img": "./assets/p-5.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "140.00",
        "oldPrice": "160.00"
    },
    {
        "id": "6",
        "name": "Egypt",
        "img": "./assets/p-6.jpg",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, pharetra quis nulla sit.",
        "price": "250.00",
        "oldPrice": "300.00"
    }
];
var gallery = [
    "./assets/g-1.jpg",
    "./assets/g-2.jpg",
    "./assets/g-3.jpg",
    "./assets/g-4.jpg",
    "./assets/g-5.jpg",
    "./assets/g-6.jpg",
    "./assets/g-7.jpg",
    "./assets/g-8.jpg",
    "./assets/g-9.jpg"
]
var reviews = [
    {
        "id": "001",
        "name": "Alex Durden",
        "img": "./assets/pic1.png",
        "reivew": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem."
    },
    {
        "id": "002",
        "name": "Travis Bennett",
        "img": "./assets/pic2.png",
        "reivew": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem."
    },
    {
        "id": "003",
        "name": "Gary Duty",
        "img": "./assets/pic3.png",
        "reivew": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem."
    },
    {
        "id": "004",
        "name": "Janell Shrum",
        "img": "./assets/pic4.png",
        "reivew": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem."
    }
]

//Handling Videos
var bullets = document.querySelectorAll(".bullet");
bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
        bullets.forEach((bullet) => {
            bullet.classList.remove("active")
        })
        let video = document.getElementById("header-video")
        bullet.classList.add("active");
        video.src = bullet.attributes[1].value
    });
});

//Booking Form
document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
});
//Handle Packages
data.map((item) => {
    const { id, name, img, details, price, oldPrice } = item;
    document.querySelector(".packages-container").innerHTML += `<div key=${id} class="package-item">
        <img src=${img} alt=${name} />
        <h2>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
        ${name}</h2>
        <p>${details}</p>
        <h3>${price}$ <span>${oldPrice}$</span$</h3>
        <button>Book Now</button>
    </div>`
});
//Handle Gallery
gallery.map((item) => {
    document.querySelector(".gallery-container").innerHTML += `<div class="galleryItem">
    <div class="galleryLayout">
    <h2>Amazing Places</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button>Show More</button>
    </div>
    <img src=${item} alt="gallery img" />
    </div>`
});

//Rivews 
reviews.map((item) => {
    const { id, name, img, reivew } = item;
    document.querySelector(".review-section").innerHTML += `<div id=${id} key=${id} class="review-item">
        <img src=${img} alt=${name} />
        <h3>${name}</h3>
        <p>${reivew}</p>
    </div>`
}); 
//Review Section 

setInterval(() => {
    let elm = document.querySelector(".reivew-container");
    if (elm.scrollLeft <= 800) {
        elm.scrollLeft += 900;
    } else {
        elm.scrollLeft -= 900;
    }
}, 5000);


//Handle LogIn Moudle
var openIcon = document.getElementById("logIn");
var moudle = document.querySelector(".logIn");
openIcon.addEventListener("click", () => {
    document.body.scrollTo(0, 0);
    moudle.style.display = "block";
    var closeIcon = document.getElementById("closeLogIn");
    closeIcon.addEventListener("click", () => {
        moudle.style.display = "none";
    });
});
//Handle SearchBar 
var searchIcon = document.getElementById("search");
var openSearchIcon = document.getElementById("openSearchIcon");
var closeSearchIcon = document.getElementById("closeSearchIcon");
var searchBar = document.querySelector(".searchBar");
openSearchIcon.addEventListener("click", () => {
    searchBar.style.height = "60px";
    searchBar.style.opacity = "1";
    openSearchIcon.style.display = "none";
    closeSearchIcon.style.display = "block"
});
closeSearchIcon.addEventListener("click", () => {
    searchBar.style.height = "0";
    searchBar.style.opacity = "0";
    openSearchIcon.style.display = "block";
    closeSearchIcon.style.display = "none"
});

//Handle SideBar
let openSidebar = document.querySelector(".openSidebar");
let sidebarClose = document.querySelector(".sidebarClose");
let sidebarMoudle = document.querySelector("nav .sectionTwo");

openSidebar.addEventListener("click", () => {
    sidebarMoudle.style.left = "0%";
    openSidebar.style.color = "#FFA304";
});
sidebarMoudle.addEventListener("click", () => {
    sidebarMoudle.style.left = "-50%";
    openSidebar.style.color = "white";
});



