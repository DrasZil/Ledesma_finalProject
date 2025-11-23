document.addEventListener('DOMContentLoaded', () => { 
 //projects.css
        /*Adding click events to make the 
    lightbox feature work in the projects page */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');

    if(lightbox && lightboxImg && closeBtn){

    //Selecting all project images
    document.querySelectorAll('.projects .slider .items img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src; //set clicked image
            lightbox.classList.add('active'); //show lightbox with fade style
        });
    });

    //close lightbox on click
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    //Can close by clicking outside the image
    lightbox.addEventListener('click', e =>{
        if(e.target === lightbox) lightbox.classList.remove('active');
    });

    }

    //for all html files
    /*Dropdown menu for the website, this will be appear and 
    be usable when the screen size is smaller */
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.nav-bar');

    if(menuIcon && navbar){
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bi-x-lg');
            menuIcon.classList.toggle('bi-list');
            navbar.classList.toggle('active');
        }
    }
});
