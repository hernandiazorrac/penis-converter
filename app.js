let input = document.getElementById('inputText')
let buttonGo = document.getElementById('buttonGo')
let buttonClear = document.getElementById('buttonClear')
let output = document.getElementById('output')
let outputText = document.getElementById('outputText')

const dickWord = () => {
    if(input.value.length === 1){
        output.style.display = "block"
        outputText.innerHTML = `The penis is ${input.value.length} character long.`
    }else{
        output.style.display = "block"
        outputText.innerHTML = `The penis is ${input.value.length} characters long.`
    }

    if(input.value.length === 0){
        output.style.display = "none"
        outputText.innerHTML = `The penis is too short, type something.`
    }else{
        output.style.display = "block"
        output.innerHTML = "8" + "=".repeat(input.value.length) + "D"
    }
}

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        buttonGo.click()
    }
})

const clear = () => {
    input.value = ""
}

buttonGo.addEventListener('click', dickWord)
buttonClear.addEventListener('click', clear)