const box = document.querySelector('.menu__h2--box')
const specs = document.querySelector('.menu__h2--specs')

const boxSection = document.querySelector('.box')
const specsSection = document.querySelector('.specs')

boxSection.style.display = 'flex';
specsSection.style.display = 'none'

box.addEventListener('click', () => {
 if(boxSection.style.display === 'flex') { 
  return
 }
 if(boxSection.style.display === 'none') { 
  boxSection.style.display = 'flex'
  return
 }
})
 

specs.addEventListener('click', () => {
 if(specsSection.style.display === 'flex') {
  return
 }
 if(specsSection.style.display === 'none') { 
  specsSection.style.display = 'flex'
  return
 }
})

