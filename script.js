function grabText(event) {
  if (event.key != "Enter") return
  words = ta.value.trim().split(/\s+/)
  localStorage.words = JSON.stringify(words)
  words.forEach(spanIt)
  translations = Array(words.length).fill("")

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

p.onclick = function (event) {
  for (let i=0; i<p.children.length; i++) {
    if (p.children[i] == event.target) {
      istealth.value = ""
      istealth.style.display = "block"
      istealth.focus()
      istealth.style.top = event.target.offsetTop - 19 + 'px'
      istealth.style.left = event.target.offsetLeft + "px"
      p.children[i].classList.add("selected")
    }
    else p.children[i].classList.remove("selected")
  } 
}

istealth.onkeydown = ftch

function ftch(event) {
  if (event.key != "Enter") return
  var i = [...p.children].indexOf(document.querySelector(".selected"))
  translations[i] = istealth.value
  localStorage.translations = JSON.stringify(translations)

}

// транслейшн переписывает пустой в локалсторадж, исправить?
// подсветка слов и перевод
// продолжить концепт (генерация комбинаций)