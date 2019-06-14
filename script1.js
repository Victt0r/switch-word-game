ta.onkeydown = function enterText(e) {
  if (e.which != 13) return
  e.preventDefault()
  p.innerHTML = ta.value.trim().split(/\s+/).map(word =>
    "<span>"+word+"</span>").join(" ")
}
function targetEl(e) {
  if (e.target = 
}

function setClass(el) {
  el.classList.add("bgyellow")
}
function removeClass(el) {
  el.classList.remove("bgyellow")
}

function под_курсором_ли(что, e) {
  return что == e.target
}

p.onmousemove = function highlight(e)  {
  console.dir(e)
}
// читай смотри слушай

             //  f    param      f             f
             function если(условие, что, действие_да, действие_нет, e) {
              if (условие(что, e)) действие_да(что)
              else действие_нет(что)
            }
            
            function под_курсором_ли(что, e) {
              return что == e.target
            }
            
            function добавить_класс_жёлтый(чему) {
              чему.classList.add('yellow')
            }
            
            function убрать_класс_жёлтый(чему) {
              чему.classList.remove('yellow')
            }
            
            p.onevent = function(e) {
              
              все_дети_р.forEach(ребёнок =>
                если(под_курсором_ли, ребёнок, добавить_класс_жёлтый, убрать_класс_жёлтый, e) )
            }