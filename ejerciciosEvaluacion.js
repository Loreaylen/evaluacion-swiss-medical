/*1) Cree una función en Javascript "anagram" que reciba dos strings y retorne true si el primer string es un anagrama del segundo o false si no lo es.

Nota: un anagrama es un con junto de caracteres que resulta de la combinar los caracteres de otro conjunto de caracteres. 

anagram('alas', 'sala') => true
anagram('something', 'msohtng') => false */

const anagram = (palabra1, palabra2) => {
  const ordenada1 = palabra1.toLowerCase().split('').sort().join('')
  const ordenada2 = palabra2.toLowerCase().split('').sort().join('')
  return ordenada1 === ordenada2
  
}

console.log(anagram('something', 'msohtng'))
console.log(anagram('Lacteo', 'colEta'))
console.log(anagram('Nido', 'Odino'))


/*
2) Escriba una función en JavaScript "reverseInteger" que reciba un entero y devuelva otro entero con los dígitos invertidos. 

reverseInteger(123) => 321
reverseInteger(-4389) => -9834
*/

const reverseInteger = (num) => {
  const nuevoArr = []
  const arr = num.toString().split('').reverse()
  if(arr[arr.length -1] === '-'){
    nuevoArr.push(arr[arr.length -1])
    arr.pop()
    nuevoArr.push(...arr)
    return Number(nuevoArr.join(''))
  }
  return Number(arr.join(''))
}

console.log(reverseInteger(123))
console.log(reverseInteger(-4389))
console.log(reverseInteger(-300495))


