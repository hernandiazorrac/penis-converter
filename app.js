let input = document.getElementById('inputText')
let buttonGo = document.getElementById('buttonGo')
let buttonClear = document.getElementById('buttonClear')
let appContainer = document.getElementById('appContainer')
let output = document.getElementById('output')
let outputText = document.getElementById('outputText')
let backToTopButton = document.getElementById('btn-back-to-top')
let toast = document.getElementById('toastAlert')
let option = {animation: true, delay: 4000}

const dickWord = () => {
    if(input.value.length === 1){
        output.style.display = "flex"
        outputText.innerHTML = `The penis is ${input.value.length} = long.`
    }else{
        output.style.display = "flex"
        outputText.innerHTML = `The penis is ${input.value.length} ='s long.`
    }

    if(input.value.length === 0){
        output.style.display = "none"
        outputText.style.display = "none"
        outputText.innerHTML = `The penis is too short, type something.`

        let toastAlert = new bootstrap.Toast(toast, option)
        toastAlert.show()
    }else{
        output.style.display = "flex"
        outputText.style.display = "flex"
        output.innerHTML = "8" + "=".repeat(input.value.length) + "D"
    }
}

const clear = () => {
    input.value = ""
}

const scrollFunction = () => {
    if(appContainer.scrollTop > 250){
        backToTopButton.style.display = "block"
    }else{
        backToTopButton.style.display = "none"
    }
}

const backToTop = () => {
    appContainer.scrollTop = 0;
}

appContainer.onscroll = () => {
    scrollFunction()
}


buttonGo.addEventListener('click', dickWord)
buttonClear.addEventListener('click', clear)
backToTopButton.addEventListener('click', backToTop)
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        buttonGo.click()
    }
})