var p=$("p.triangle-isosceles")[0];

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

//insertSpan(p, wordsToArray(p.textContent));
//$(".door .rightDoor").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//	$(this).css({"animation":"openrightDoor 1s forwards","transform":"perspective(1000px) rotateY(-40deg)"});
//});
//$(".door .leftDoor").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//	$(this).css({"animation":"openleftDoor 1s 1 forwards","transform":"perspective(1000px) rotateY(40deg)"});
//});

