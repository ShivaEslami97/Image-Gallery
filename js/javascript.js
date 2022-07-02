const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImg = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHtml([v]) {
    return `
    <div class="item v${v}">
      <img src="images/${randomNumber(12)}.jpg" />
      <div class="item__overlay">
       <button class="item__btn btn btn__secondary" >View</button>
      </div>
    </div>
    `
}
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}


//// a bunch of random arrays:  first item is how many columns it spans,
//// and the second thing is how many rows it's going to span.
/// [1,4]      1 => columns spans ,   4 => rows span.

const digits = (num) => Array.from({ length: num }, () => {
    return [randomNumber(4)];
});

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImg.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}
const images = digits(50);
const html = images.map(generateHtml).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);