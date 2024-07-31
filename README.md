I took the 30 JavaScript challenge with Wes Bos on [JavaScript30](https://javascript30.com/)

![alt text](image.png)

### Array.prototype.filter()
* `filter()` always returns an array 
* Iterates over each element of the original array
* For each element, it calls a provided callback function  
`array.filter(callback(element, index, array), thisArg)`
* If the callback function returns `true` for an element, this element is included in the array.

### Array.prototype.map()
* It doesn't modify the original array
* Creates a new array
* Applies a function to each original array element and adds each of them in the created array
* Returns the new array

### Array.prototype.sort()
* Unlike map(), sort() changes the original array.
* Sorts elements as strings in ascending order based on their UTF-16 code units.
* Accepts an optional comparison function to define custom sorting logic.

### Array.prototype.reduce()
*  Iterates over an array, accumulating a single value from it.
* Takes a callback function as an argument.
* This callback function is called for each element in the array.
* 