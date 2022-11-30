import './css/main.css';

/*==============================================
=========== Javascript for Responsive Menu ========
=============================================== */

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
document.getElementById('myTopnav').addEventListener('click', toggleResponsive);
console.log(import.meta.env.VITE_GMAIL_DOMAIN);
function toggleResponsive() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

/*================================================================================
   This Javascript is required for IE and Android browsers. It seems that they do not
   respect the opacity property on load so need a hack to make it work...        
  ================================================================================ */

if (window.matchMedia('(max-width: 800px)').matches) {
    // the viewport is no more then 800 pixels wide so no modal =====
    const anchorElement = document.querySelector('.classInitials');
    anchorElement.setAttribute('href', './doc/resume.pdf');
    // Create and set a target attribute
    // anchorElement.createAttribute("target");
    anchorElement.setAttribute('target', '_blank');
} else {
    // the viewport is greater than 800 pixels wide and make .pdf popup in a modal ====
    let iframeElement = document.querySelector('#iframeDisplay');
    document.getElementById('initials').addEventListener(
        'click',
        function () {
            // Make iFrame appear on click
            iframeElement = document.querySelector('#iframeDisplay');
            iframeElement.setAttribute('src', 'doc/resume.pdf');
            document.getElementById('iframeDisplay').style.display = 'block';
        },
        false
    );
    // getElementsByClassName actually returns an HTMLCollection, even though
    // you have only one element with that classname in DOM, so you have to retrieve
    // it with index 0. Alternatively, since we only have one element with the classname,
    // you can safely use querySelector, which will return the first match element.
    const element = document.querySelector('.close');
    element.addEventListener(
        'click',
        function () {
            // Change iframe back to invisible and src to ""
            iframeElement.setAttribute('src', '');
            document.getElementById('iframeDisplay').style.display = 'none';
        },
        false
    );
}
