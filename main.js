// // toggle icon navbar

// let nemuIcon = document.querySelector('menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('logo');
//     navbar.classList.toggle('navbar');
// }



// // scroll section active link

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a ');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height){
//             navLinks.forEach.apply(links => {
//                 links.classLists.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
      
//     });

// // sticky navbar

// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);

// // remove togglr icon and navbar 

// menuIcon.classList.remove('fa-xmark');
// navbar.classList.remove('active');

// };

// Menu toggle for small screens
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
