var c, d;
function table() {
   c = document.getElementById("number").value;
   d = document.getElementById("limit").value;  
   count()
}

function count() {
    alert('count')
    for(i=c; i<d; i++) { 
        var co = i * c;             
        console.log(co)
    }
}