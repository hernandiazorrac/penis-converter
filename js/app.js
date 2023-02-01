let input = document.getElementById('inputText')
let buttonGo = document.getElementById('buttonGo')
let buttonClear = document.getElementById('buttonClear')
let appContainer = document.getElementById('appContainer')
let output = document.getElementById('output')
let outputText = document.getElementById('outputText')
let backToTopButton = document.getElementById('btn-back-to-top')
let toast = document.getElementById('toastAlert')
let toastCopy = document.getElementById('toastAlertCopy')
let copyButtonContainer = document.getElementById('copyButtonContainer')
let option = {animation: true, delay: 2000}

const clear = () => {
    input.value = ""
    outputText.style.display = "none"
    output.style.display = "none"
    copyButtonContainer.style.display = "none"
}

const convertToPenis = () => {
    if(input.value.length === 1){
        copyButtonContainer.style.display = "flex"
        output.style.display = "flex"
        outputText.innerHTML = `The penis is ${input.value.length} = long.`
    }else{
        copyButtonContainer.style.display = "flex"
        output.style.display = "flex"
        outputText.innerHTML = `The penis is ${input.value.length} ='s long.`
    }

    if(input.value.length === 0){
        copyButtonContainer.style.display = "none"
        output.style.display = "none"
        outputText.style.display = "none"

        let toastAlert = new bootstrap.Toast(toast, option)
        toastAlert.show()
    }else{
        output.style.display = "flex"
        output.style.padding = "3em"
        outputText.style.display = "flex"
        output.innerHTML = "8" + "=".repeat(input.value.length) + "D"
    }
}

const scrollFunction = () => {
    if(appContainer.scrollTop > 250){
        backToTopButton.style.display = "block"
    }else{
        backToTopButton.style.display = "none"
    }
}

const backToTop = () => {
    appContainer.scrollTo({top: 0, behavior: 'smooth'})
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(output.innerHTML)

    let toastAlertCopy = new bootstrap.Toast(toastCopy, option)
        toastAlertCopy.show()
}

appContainer.onscroll = () => {
    scrollFunction()
}

buttonGo.addEventListener('click', convertToPenis)
buttonClear.addEventListener('click', clear)
backToTopButton.addEventListener('click', backToTop)
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        buttonGo.click()
    }
})