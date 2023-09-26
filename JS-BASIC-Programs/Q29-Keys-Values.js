// Write a JavaScript function to get a copy of the object 
// where the keys become the values and the values are the keys.

// This is like swapping [keys] = [values]
function keysValues(object){
    const swappingObjects = {}

    for(const key in object){
        // The hasOwnProperty() method of Object instances returns a boolean indicating whether 
        // this object has the specified property as its own property (as opposed to inheriting it)
        if(object.hasOwnProperty(key)){
            swappingObjects[object[key]] = key;
        }
    }
    return swappingObjects
}

const exampleObject = {'key1':'Value1', 'key2':'Value2'}
const result = keysValues(exampleObject)
console.log(result);