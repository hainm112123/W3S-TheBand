var sliders = document.getElementsByClassName('slider');
// console.log(sliders);
function sliderShow() {
    var i = 0 ;
    setInterval(function() {
        // console.log(i);
        sliders[i].style.display = 'none';
        i = (i + 1) % sliders.length;
        sliders[i].style.display = 'block';
    } , 3000);
}

sliderShow();

// --------------------------------------------menu---------------------------------

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var currentHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = (header.clientHeight === currentHeight);
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// console.log(menuItems); 
for (var i = 0; i < menuItems.length; ++i) {
    var menuItem = menuItems[i];
    // console.log(menuItem);
    menuItem.onclick = function(event) {
        // console.log(this);
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
            // var sibling = 
            return;
        }
        header.style.height = null;
    }
}

// ---------------------------------------------buy ticket---------------------
var modal = document.querySelector('.buy-ticket-modal');
function openModal() {
    // console.log(modal);
    modal.style.display = 'flex';
}

// openModal();

function closeModal() {
    // console.log(modal);
    modal.style.display = 'none';
}

var buyBtns = document.querySelectorAll('.js-buy-ticket');
// console.log(buyBtns);
for (var i = 0 ; i < buyBtns.length; ++i) {
    var buyBtn = buyBtns[i];
    // console.log(buyBtn);
    buyBtn.onclick = openModal;
}

var closeBtn = document.querySelector('.buy-ticket-modal .modal-close');
closeBtn.onclick = closeModal;

modal.onclick = closeModal;
var modal_container = document.querySelector('.buy-ticket-modal .modal-container');
modal_container.onclick = function(event) {
    event.stopPropagation();
}
