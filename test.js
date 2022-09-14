let block = document.getElementById('cube')
let range = document.getElementById('range')
let range2 = document.getElementById('range2')
let range3 = document.getElementById('range3')
let range4 = document.getElementById('range4')

range.addEventListener('input', change) 
range2.addEventListener('input', change) 
range3.addEventListener('input', change) 
range4.addEventListener('input', change) 

function change() {
    const newVal1 = range.value 
    const newVal2 = range2.value 
    const newVal3 = range3.value 
    const newVal4 = range4.value 

    block.style.borderTopLeftRadius = newVal1 + 'px'
    block.style.borderTopRightRadius = newVal2 + 'px'
    block.style.borderBottomLeftRadius = newVal3 + 'px'
    block.style.borderBottomRightRadius = newVal4 + 'px'
}

