const arr = [0,1,0,1,2,2,5,5];

function getdups(arr) {
const NumMap = {};
let dups = [];

for (let elem of arr) {
  if (NumMap[elem]) {
    NumMap[elem]++;
  } else {
    NumMap[elem] = 1;
  }
}

console.log(NumMap);

for (let val in NumMap) {
  if (NumMap[val] > 1) {
    // console.log(val);

    dups.push(val);
  }
}
// console.log(dups);
return dups;

}

getdups(arr);


// // Solution 2


// var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// var cache = {};
// var results = [];
// for (var i = 0, len = arr.length; i < len; i++) {
//   if(cache[arr[i]] === true){
//       results.push(arr[i]);
//    }else{
//        cache[arr[i]] = true;
//    }

// }
// console.log(results);//returns an array with 9 and 4



// // Solution 3


// var results, arr= [9, 9, 111, 2, 3, 4, 4, 5, 4, 7];

// if(arr.filter){
//     results= arr.filter(function(itm, i){
//         return arr.lastIndexOf(itm)== i && arr.indexOf(itm)!= i;
//     });
// }

// else// use your loop method

// alert(results)

// /*  returned value: (Array)
// 9,4
// */