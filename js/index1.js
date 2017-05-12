const sentence = document.querySelector('.sentence')
var h1=$("p.content")[0];
const h2 = document.querySelector('h2')

let wordsToArray = (str) => str.split('').map(e => e === ' ' ? '&nbsp;' : e)
function insertSpan(elem, letters, startTime) {
  elem.textContent = ''
  let curr = 0
  let delay = 10
  for(let letter of letters) {
    let span = document.createElement('span')
    span.innerHTML = letter
    span.style.animationDelay = (++curr / delay + (startTime || 0)) + 's'
    elem.appendChild(span)
  }
}

insertSpan(h1, wordsToArray(h1.textContent))
$("h2 img").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).css("animation","pound 0.5s ease-in infinite alternate");
});
