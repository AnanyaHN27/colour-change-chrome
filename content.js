document.addEventListener("DOMContentLoaded", function (){
    const redBtn = document.getElementById('nameRed');
    const blueBtn = document.getElementById('nameBlue');
    if (redBtn){
        console.log("red exists");
        redBtn.addEventListener("click", function (){
            document.body.innerText.fontcolor("red")

            chrome.tabs.insertCSS({
                code: ` *{
                color: red;
            }`
            })
        })
    }
    if (blueBtn){
        console.log("blue exists")
        blueBtn.addEventListener("click", function (){
            chrome.tabs.insertCSS({
                code: ` *{
                color: blue;
            }`
            })
        })
    }

})