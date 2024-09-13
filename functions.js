function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const styleName = styleElement.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newStyle;
    if(styleName == "second_styles.css"){
         newStyle = "styles.css";
    }
    else{
         newStyle = "second_styles.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newStyle)

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    var savedStyle = localStorage.getItem("stylesheet");
    console.log(savedStyle);
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleElement = document.getElementById("mainStyleSheet");
    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
    if(savedStyle){
        styleElement.setAttribute("href", savedStyle);
        // check for the switch
        if(savedStyle == "second_styles.css"){
            document.querySelector("input[type='checkbox']").checked = true;
        }
    }
    
}