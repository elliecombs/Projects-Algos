//PUSH FRONT
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr,val) {
    for(let i =arr.length; i >= 0; i--){
        arr[i] = arr[ i - 1 ]
    }
    arr[0] = val
    return arr
}
console.log(pushFront([1,2,3,4],5))

//POP Front
//Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
//Save the first value of the array THEN loop through the array shifting all values left THEN decrease the length of the array and return value

function popFront(arr){
    let firstValue = arr[0]
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[ i + 1 ]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return firstValue
}
console.log(popFront([1,2,3,4]))

//INSERT AT
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]
//Loop through array shifting values to the right until the given index THEN set arr[index] equal to the given value & return array 

function insertAt(arr, index, value){
    for(let i = arr.length; i >= index; i--){
        arr[i] = arr[ i - 1 ]
    }
    arr[index] = value
    return arr
}
console.log(insertAt([100,200,300],2,400))
