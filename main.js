setInterval(changeImage, 2000);
let index = 0;
function changeImage()
{
    var images = document.getElementsByClassName('slider__image');

    images[index].classList.remove("slider__image--active");
    index++;
    if (images.length <= index) {
        index = 0;
    }
    images[index].classList.add("slider__image--active");
}