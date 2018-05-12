window.onload = function(){
	document.getElementById('submit').onclick = function() {
    	var dev_id = document.getElementById('deviceID').value;
    	chrome.storage.sync.set({'dev_id': dev_id} );
    	// alert(dev_id);

	}
}

function validateForm() {
   var x = document.forms["form"]["deviceID"].value;
   // if ( x == null || x == "" ) {
      alert("Device ID must be filled out");
      // return false;
   // }
}