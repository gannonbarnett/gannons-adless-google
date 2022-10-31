var adsSaved = 0;

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    adsSaved += elements.length;
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
removeElementsByClass("uEierd");
document.getElementById("gag-ad-count").innerHTML = adsSaved;
