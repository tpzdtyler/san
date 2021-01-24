chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create("window.html",{
        "outerBounds":{
            "width":100000,
            "height":100000
        }
    });
});