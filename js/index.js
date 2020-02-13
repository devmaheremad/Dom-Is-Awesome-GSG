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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street<br>Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2019"
    },
};

// Write Your Code Here


// Start Header Editor

document.querySelectorAll('header nav a')[0].textContent = siteContent['nav']['nav-item-1'];
document.querySelectorAll('header nav a')[1].textContent = siteContent['nav']['nav-item-2'];
document.querySelectorAll('header nav a')[2].textContent = siteContent['nav']['nav-item-3'];
document.querySelectorAll('header nav a')[3].textContent = siteContent['nav']['nav-item-4'];
document.querySelectorAll('header nav a')[4].textContent = siteContent['nav']['nav-item-5'];
document.querySelectorAll('header nav a')[5].textContent = siteContent['nav']['nav-item-6'];

let myFirstClone = document.querySelectorAll('header nav a')[5].cloneNode();

let mySecondClone = document.querySelectorAll('header nav a')[5].cloneNode();

myFirstClone.textContent = 'Our Teams';
mySecondClone.textContent = 'Donate Us';

document.querySelector('nav').appendChild(myFirstClone);
document.querySelector('nav').appendChild(mySecondClone);


document.querySelectorAll('header nav a').forEach(item => item.style.color = 'green');

document.getElementById('logo-img').src = siteContent['nav']['img-src'];

// End header Editor

// Start section Has Class cta Editor

document.querySelector('.cta .cta-text h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('.cta .cta-text button').textContent = siteContent['cta']['button'];

let myCloneButton = document.querySelector('.cta .cta-text button').cloneNode();
myCloneButton.textContent = 'Try To Click Here';
document.querySelector('.cta .cta-text').appendChild(myCloneButton);
myCloneButton.onclick = function getRandomColorOfPage() {
    document.body.style.color = `${getRandonColor()}`;
};

function getRandonColor() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('cta-img').src = siteContent['cta']['img-src'];

// End section Has Class cta Editor

// Start section Has Class main-content Editor

document.querySelectorAll('.main-content .top-content .text-content h4')[0].textContent = siteContent['main-content']['features-h4'];
document.querySelectorAll('.main-content .top-content .text-content p')[0].textContent = siteContent['main-content']['features-content'];

document.querySelectorAll('.main-content .top-content .text-content h4')[1].textContent = siteContent['main-content']['about-h4'];
document.querySelectorAll('.main-content .top-content .text-content p')[1].textContent = siteContent['main-content']['about-content'];

document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

document.querySelectorAll('.main-content .bottom-content .text-content h4')[0].textContent = siteContent['main-content']['services-h4'];
document.querySelectorAll('.main-content .bottom-content .text-content p')[0].textContent = siteContent['main-content']['services-content'];

document.querySelectorAll('.main-content .bottom-content .text-content h4')[1].textContent = siteContent['main-content']['product-h4'];
document.querySelectorAll('.main-content .bottom-content .text-content p')[1].textContent = siteContent['main-content']['product-content'];

document.querySelectorAll('.main-content .bottom-content .text-content h4')[2].textContent = siteContent['main-content']['vision-h4'];
document.querySelectorAll('.main-content .bottom-content .text-content p')[2].textContent = siteContent['main-content']['vision-content'];

// End section Has Class main-content Editor

// Start section Has Class contact Editor

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelectorAll('.contact p')[0].innerHTML = siteContent['contact']['address'];
document.querySelectorAll('.contact p')[1].innerHTML = siteContent['contact']['phone'];
document.querySelectorAll('.contact p')[2].innerHTML = siteContent['contact']['email'];

// End section Has Class contact Editor


// Start Footer Editor

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// End Footer Editor