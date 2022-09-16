const content = document.querySelector(".content");
const button = document.querySelector("button");




/* Adding event listener */

button.addEventListener('click',(e)=>{
    content.classList.toggle("all-content")
    button.innerHTML ="Show less"
    console.log(e)

    if (content.classList.contains("all-content")) {
        button.innerHTML = "Show less";
    }
    else {
        button.innerHTML = "Learn more";
    }
}) // The if statement allows the button to display "show less" when the content is large and learn more when the content is small
