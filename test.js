let block = document.getElementById('cube')
let range = document.getElementById('range')

range.addEventListener('input', change) 

function change() {
    const newVal = range.value 

    block.style.width = document.getElementById('range').value + 'px'
    block.style.height = newVal + 'px'

}

