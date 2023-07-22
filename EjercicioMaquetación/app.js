const box = document.querySelector('.menu__h2--box')
const specs = document.querySelector('.menu__h2--specs')

const boxSection = document.querySelector('.box')
const specsSection = document.querySelector('.specs')

box.addEventListener('click', () => {
  if(!boxSection.classList.contains('visible')){
    boxSection.classList.add('visible')
  }

  if(boxSection.classList.contains('invisible')){
    boxSection.classList.replace('invisible', 'visible')
  }
  specsSection.classList.add('invisible')
  specsSection.classList.remove('visible')
})
 

specs.addEventListener('click', () => {
  console.log(specsSection.classList)
  if(!specsSection.classList.contains('visible')){
    specsSection.classList.add('visible')
  }
  if(specsSection.classList.contains('invisible')){
    specsSection.classList.replace('invisible', 'visible')
  }
  boxSection.classList.add('invisible')
  boxSection.classList.remove('visible')
})

//Si tiene la clase "visible", mantenerla.
//Si tiene la clase invisible, reemplazarla por visible
//sacarle la clase "visible" al otro contenedor
//ponerle la clase invisible al otro contenedor