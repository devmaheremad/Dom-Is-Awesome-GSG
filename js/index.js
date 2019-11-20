const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here

// start edit in header

let newItem1 = document.createElement("a");

let newItem2 = document.querySelectorAll("header nav a")[0].cloneNode(true);

let myNav = document.getElementsByTagName("nav")[0];

let arr = newItem1.setAttribute("href", "#");

myNav.appendChild(newItem1);
myNav.appendChild(newItem2);

newItem1.textContent = "Who We Are?";
newItem2.textContent = "Donate Us";

document.querySelectorAll("header nav a")[0].textContent = siteContent["nav"]["nav-item-1"];
document.querySelectorAll("header nav a")[1].textContent = siteContent["nav"]["nav-item-2"];
document.querySelectorAll("header nav a")[2].textContent = siteContent["nav"]["nav-item-3"];
document.querySelectorAll("header nav a")[3].textContent = siteContent["nav"]["nav-item-4"];
document.querySelectorAll("header nav a")[4].textContent = siteContent["nav"]["nav-item-5"];
document.querySelectorAll("header nav a")[5].textContent = siteContent["nav"]["nav-item-6"];
document.getElementById("logo-img").setAttribute("src", siteContent["nav"]["img-src"])

document.querySelectorAll("header nav a").forEach(item => item.style = "color: green; font-weight: bolder;");

// End edit in header

// start edit in section 1

document.querySelector(".cta .cta-text h1").innerHTML = siteContent["cta"]["h1"];
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];
document.querySelector(".cta #cta-img").src = siteContent["cta"]["img-src"];

let btn = document.createElement("button");
btn.textContent = "Try To Click Here";
document.querySelector(".cta-text").appendChild(btn);
btn.onclick = function changeColour() {

  document.body.style.color = randomColour();
  
}

function randomColour() {

  let a = Math.floor((Math.random() * 255) + 1);
  let b = Math.floor((Math.random() * 255) + 1);
  let c = Math.floor((Math.random() * 255) + 1);
  return `rgb(${a}, ${b}, ${c})`;
  
}

// End edit in section 1

// start edit in section 2

document.querySelector(".main-content .top-content div:first-of-type h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".main-content .top-content div:first-of-type p").textContent =  siteContent["main-content"]["features-content"];

document.querySelector(".main-content .top-content div:last-of-type h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".main-content .top-content div:last-of-type p").textContent = siteContent["main-content"]["about-content"];

document.querySelector(".main-content .middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelector(".main-content .bottom-content div:first-of-type h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".main-content .bottom-content div:first-of-type p").textContent = siteContent["main-content"]["services-content"];

document.querySelector(".main-content .bottom-content div:nth-of-type(2) h4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".main-content .bottom-content div:nth-of-type(2) p").textContent = siteContent["main-content"]["product-content"];

document.querySelector(".main-content .bottom-content div:last-of-type h4").textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".main-content .bottom-content div:last-of-type p").textContent = siteContent["main-content"]["vision-content"];

// End edit in section 2

// start edit in section 3

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].innerHTML = siteContent["contact"]["address"];
document.querySelectorAll(".contact p")[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(".contact p")[2].textContent = siteContent["contact"]["email"];


// End edit in section 3

// start edit in footer

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

// End edit in footer
