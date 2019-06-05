function grabText(event) {
  if (event.key != "Enter") return
  words = ta.value.split(' ')
  words.forEach(spanIt)

  function spanIt(word, i, arr) {
    arr[i] = "<span>"+word+"</span>"
  }
  p.innerHTML = words.join(' ')
}
ta.onkeydown = grabText

p.onmouseleave = p.onmousemove = function (event) {
  for (let i=0; i<p.children.length; i++) {
    if (p.children[i] == event.target)  p.children[i].classList.add("highlight")
    else p.children[i].classList.remove("highlight")
  }
}
