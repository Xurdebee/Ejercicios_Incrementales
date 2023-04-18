function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len ; i++) {
      for(let j = 0 ; j < len - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
      
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

let amigos = [
"Sergio", 
"Lorena",
"Carmen",
"Elias",
"Alejandro"
]


console.log(amigos)
console.log(bubbleSort(amigos))