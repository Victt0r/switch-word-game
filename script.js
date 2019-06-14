ta.onkeydown = grabText
function grabText(event) { //функция хватайТекст из текстариал
  if (event.key != "Enter") return
  words = ta.value.trim().split(/\s+/)
  localStorage.words = JSON.stringify(words)
  words.forEach(spanIt)

  function spanIt(word, i, arr) {
    arr[i] = "<span>"+word+"</span>"

  translations = Array(words.length).fill("")
  }
  p.innerHTML = words.join(' ')
}


p.onmouseleave = p.onmousemove = function (event) {
  for (let i=0; i<p.children.length; i++) {
    if (p.children[i] == event.target)  p.children[i].classList.add("highlight")
    else p.children[i].classList.remove("highlight")
  }
}

p.onclick = function (event) {
  for (let i=0; i<p.children.length; i++) {
    if (p.children[i] == event.target) {
      input.value = ""
      input.style.display = "block"
      input.focus()
      input.style.top = event.target.offsetTop - 19 + 'px'
      input.style.left = event.target.offsetLeft + "px"
      p.children[i].classList.add("selected")
    }
    else p.children[i].classList.remove("selected")
  } 
}

input.onkeydown = ftch

function ftch(event) {
  if (event.key != "Enter") return
  var i = [...p.children].indexOf(document.querySelector(".selected"))
  translations[i] = input.value
  localStorage.translations = JSON.stringify(translations)

}

// транслейшн переписывает пустой в локалсторадж, исправить
// code review
// 1. подсветка слов и перевод слова над словом
// 2. поменять цвет ингл слова после ввода перевода 

// продолжить концепт (генерация комбинаций)