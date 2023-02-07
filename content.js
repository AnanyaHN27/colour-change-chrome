const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton')



redButton.addEventListener("click", function onClick(){
    let buttonColour = redButton.style.color;
    colourChange(buttonColour)
})

function colourChange(colour){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.color = ' + colour + ';'}
        );
    });
    storeColour(colour);
}

function storeColour(colour){
    chrome.storage.sync.set({color: colour});
}

/*
document.body.addEventListener('click', function (evt){
   let target = evt.target;
   if (target.nodeName === 'BUTTON'){
       chrome.storage.sync.clear(function (data){
           chrome.tabs.query({active: true, currentWindow: true}, function (tab){
               chrome.tabs.reload(tab[0].id)
           });
       });
       colourChange(target)
   }
});
*/
