
const swiper = new Swiper('.swiper-company', {
    spaceBetween: 30,
    loop:true,
    navigation:{
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
    },
    pagination:{
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
});
