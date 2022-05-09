function scrollFunction(scrollPosition){
    const menuClasslist = document.getElementById("cv-menu").classList
    if((scrollPosition < 130 && menuClasslist.contains("fix")) || (scrollPosition >= 130 && !menuClasslist.contains("fix"))){ 
        menuClasslist.toggle("fix") 
        document.getElementById("cv-page").classList.toggle("scrolling")
    }
}

export default scrollFunction