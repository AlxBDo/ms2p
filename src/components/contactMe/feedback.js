export function clearFeedback(output, classToRemove = false){ 
    output.textContent = "" 
    classToRemove ? output.classList.remove(classToRemove) : output.classList.remove(...Array.from(output.classList))
}

export function makeAFeedback(output, className, message = false, displayDuration = 5000){
    if(className){
        output.classList.add(className) 
        if(message) { output.textContent = message }
        setTimeout( () => { clearFeedback(output, className) }, displayDuration)
    }
}