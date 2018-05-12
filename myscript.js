
chrome.storage.sync.get('value', function(msg){
	
	if(document.URL="http://192.168.240.106:8080/cgi-bin/koha/circ/circulation.pl?borrowernumber=[0-9]&batch=1"){

        var book_array = msg.value;
        var p = book_array.length;
        var c=0;
        //validation
        for(count = 0; count < 10; count++){
               if(book_array[count]=="") {
               	c = c+1;
               }
            }
        if(c==1){
    	   alert("attempted to read an empty tag or 'NO' tags are present in range");
            }
        else if(c>1){
    	   alert("attempted to read "+c+" empty tags");
            }
        //converts the book_array into a string 
        book_str=book_array.toString();
        //elements of book_array line by line
        book_lines = book_str.replace(/,/gi, "\n").replace(/^,/,"");
        // document.getElementsByClassName("button")[0].value = book_lines;
        document.getElementsByTagName('textarea')[0].innerHTML = book_lines;

       
        
}


    //clear the books data after clicking on "check out" button in koha staff interface
    document.getElementsByClassName("button")[0].addEventListener("click", cleardata);
    function cleardata(){  
            console.log("hi");
            chrome.storage.sync.set({'value': ""} );
        }   

});



