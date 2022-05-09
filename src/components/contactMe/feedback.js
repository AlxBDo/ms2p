/**
 * Delete feedback message
 * @param {object} output - contains html element
 * @param {string} classToRemove 
 */
export function clearFeedback(output, classToRemove = false){ 
    output.textContent = "" 
    classToRemove ? output.classList.remove(classToRemove) : output.classList.remove(...Array.from(output.classList))
}

/**
 * Display feedback message
 * @param {object} output - contains html element 
 * @param {string} className 
 * @param {string} message 
 * @param {number} displayDuration 
 */
export function makeAFeedback(output, className, message = false, displayDuration = 5000){
    if(className){
        output.classList.add(className) 
        if(message) { output.textContent = message }
        setTimeout( () => { clearFeedback(output, className) }, displayDuration)
    }
}