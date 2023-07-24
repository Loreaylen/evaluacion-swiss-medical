const box = document.querySelector('.menu__h2--box')
const specs = document.querySelector('.menu__h2--specs')
const arrows = document.querySelector('.menu__h2--arrows')

const boxSection = document.querySelector('.box')
const specsSection = document.querySelector('.specs')

const articleDiv = document.querySelectorAll('.article__div')
const articleUl = document.querySelectorAll('.article__ul')

const boxLi = document.querySelectorAll('.box__li')
const boxLiIcon = document.querySelectorAll('.box__li--icon')
const boxImgCirculos = document.querySelectorAll('.box__img--circulos')

const cambiar = (mostrar, ocultar, resaltar, atenuar) => {
  if(!mostrar.classList.contains('visible')){
    mostrar.classList.add('visible')
  }
  if(mostrar.classList.contains('invisible')){
    mostrar.classList.replace('invisible', 'visible')
  }
  ocultar.classList.add('invisible')
  ocultar.classList.remove('visible')
  resaltar.classList.add('seleccionado')
  atenuar.classList.remove('seleccionado')

}

const dropdown = (clase) => {
  articleUl.forEach(ul => {
    if(ul.classList.contains(clase)) {
      ul.classList.contains('dropdown') ? ul.classList.remove('dropdown') : ul.classList.add('dropdown')
    }
  })
  }

  const mostrarCirculo = (clase) => {
    boxImgCirculos.forEach(img => {
      if(img.classList.contains(clase)){
        img.style.display = 'block'
      }
    })
  }

  const ocultarCirculo = (clase) => {
    boxImgCirculos.forEach(img => {
      if(img.classList.contains(clase)){
        img.removeAttribute('style')
      }
    })
  }

  const cambiarColor = (clase, opcion) => {
    boxLiIcon.forEach(icon =>{
      if(opcion && icon.classList.contains(clase)){
        icon.classList.add('cambiarColor')
        return
      }
      icon.classList.remove('cambiarColor')
    })
    
  }

specs.addEventListener('click', () => {
  cambiar(specsSection, boxSection, specs, box)
 
})
box.addEventListener('click', () => {
  cambiar(boxSection, specsSection, box, specs)
})

arrows.addEventListener('click', ()=>{
  if(specs.classList.contains('seleccionado')){
    cambiar(boxSection, specsSection, box, specs)
    return
  }
  cambiar(specsSection, boxSection, specs, box)
})



articleDiv.forEach(div => {
  const clase = div.classList[1]
  div.addEventListener('click', () => dropdown(clase))
})

boxLi.forEach(li => {
  const clase = li.classList[1]
  console.log(clase)
  li.addEventListener('mouseover', () => {
    mostrarCirculo(clase)
    cambiarColor(clase, true)
  })

  li.addEventListener('mouseout', () => {
    ocultarCirculo(clase)
    cambiarColor(clase, false)
  })

})
