const values = [1,2,5,10,20,50,100,200];
var currentv;

function pixredirect(n){
    if(n == 0){
        alert("como?")
    }

    for (let i = 0; i < values.length; i++) {
        if (n == values[i]) {
            currentv = n;
        }
        
    }
}