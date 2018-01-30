var width = viewportSize.getWidth();

if(width <= 390){
    document.querySelector(".navbar-toggler").classList.add("mx-auto");
    document.querySelector(".embed-responsive").classList.remove("embed-responsive-16by9");
    document.querySelector(".embed-responsive").classList.add("embed-responsive-1by1");
}
