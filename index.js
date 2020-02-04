function adjacentElementsProduct(inputArray) {
    var prodArr = [];
    for(var i=0; i<inputArray.length; i++){
        for(var j=0; j<inputArray.length; j++){
            if(inputArray[i] != inputArray[j]){
                prodArr.push(inputArray[i]*inputArray[j]);
            }
        }
    }

    return prodArr;

    // var largest= 0;

    // for (i=0; i<=largest;i++){
    //     if (prodArr>largest) {
    //         largest=prodArr[i];
    //     }
    // }

    // return largest;
}


console.log(adjacentElementsProduct([1,-2,3,6,-8,3,4,5]));


var n1 =10;
var n2=20;
const n3=30;
function num(){
    var n2 = 40;
    let n3 = 50;
    console.log(n1 + n2 + n3);
}

num()


function f1(x){
    return function f2(y){
        return function f3(z){
            console.log(x + y + z);
        }
    }
}


f1('a')('b')('c')

var count = [1, , 2]
console.log(count[1])