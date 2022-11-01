// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const arr = [100, 300, 333, 444, 888, 777, 999, 120, 400];

const result = words.filter(function fun(word) {

    return word.length > 5;
});

console.log(result);

const evenArray = arr.filter(function(val){

    if(val % 2 == 0){
        return val;
    }
})
console.log(evenArray);

const oddArray = arr.filter(function(val){

    if(val % 2 != 0){
        return val;
    }
})
console.log(oddArray);