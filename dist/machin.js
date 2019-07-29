//return the total number of smiling faces in the array
function countSmileys(arr) {
    var i;
    for (i = 0; i < arr.length; i++) { 
        console.log(arr[i]);
        var value = arr[i]; 
        var valueSplitee = value.split(''); 
        if (valueSplitee[0] === ':' || ';') {
         console.log('first condition ok');
         if(valueSplitee.length === 3) {
           if (valueSplitee[1] === '-' || '~') {
           
           console.log('second condition ok avec un nez')
           
           } else if (valueSplitee.length === 2) {
             if(valueSplitee[1] ===')'||'D'){
             console.log('you are a noseless but valid smiley')}
           }
           
           
         
         }
        }
        
        
      }
    }