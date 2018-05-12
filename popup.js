

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkout").addEventListener("click", checkout);
});
  

function checkout() {
  chrome.storage.sync.get('value', function(msg){
    chrome.storage.sync.get('dev_id',function(ur){
      $.getJSON('http://192.168.240.106:8000/CHECKOUT/'+ur.dev_id+'/',function(data){
  	   var data2 = data;
  	   chrome.storage.sync.set({'value': data2.books} );
	     if (data2.patron!=""){
		      chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
    	     chrome.tabs.update(tab.id, {url: "http://192.168.240.106:8080/cgi-bin/koha/circ/circulation.pl?borrowernumber="+data2["patron"][0][0]+"&batch=1" });
          });
        }
      else if (data2.patron=="") {
    	
    	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      		chrome.tabs.update(tab.id, {url: "http://192.168.240.106:8080/cgi-bin/koha/circ/circulation.pl" });
     			 });
    	alert("No 'patron ID' is present!. Please scan or enter the 'barcode'");
      }
});
});
});
}
