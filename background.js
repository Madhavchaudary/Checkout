var context = "Change Device ID";
var title = "Change Device ID";
var id = chrome.contextMenus.create({
    "title": title,
    "contexts":[context],
    "id": "context" + context,
	contexts:["all"]}
    );  

chrome.contextMenus.onClicked.addListener(onClickHandler);
	function onClickHandler(info, tab) {
	var myUrl = "1.html";  
	chrome.tabs.create({ url: myUrl });

};