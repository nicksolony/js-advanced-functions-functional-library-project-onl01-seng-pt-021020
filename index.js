const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      newCollection.forEach(callback);
      return collection;
    },

    map: function(collection,callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      return newCollection.map(e=>callback(e))
    },

    reduce: function(collection,callback,initial) {
      let result=0;
      let array=[];
      debugger
      if (!!initial) {
       result = initial
       array = collection
      } else {
        result = collection[0]
        array = collection.slice(1)
      }
      array.forEach(e=>{
        // debugger
        result = callback(result,e)
      })
        return result
    },

    // reduce: function(c = [], callback = () => {}, acc) {
		// 	let collection = c.slice(0)
    //   debugger
		// 	if (!acc) {
		// 		acc = collection[0]
		// 		collection = collection.slice(1)
		// 	}

		// 	let len = collection.length;

		// 	for (let i = 0; i < len; i++) {
		// 		acc = callback(acc, collection[i], collection)
		// 	}
		// 	return acc;
		// },
    find: function (collection, predicate) {
      debugger
      // let a=predicate;
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      // const newObj = (a instanceof Object) ? Object.values(a):a;
      let result;
      for (let index = 0; index < newCollection.length; index++) {
         if (predicate(newCollection[index])) {
          result = newCollection[index]
          break
        } 
      }        
      return result;
    },

    filter: function (collection, predicate) {
      let result=[];
      collection.forEach(element => {
        if (predicate(element)) {
          result.push(element)
        }
      });
      return result;
    },
    size: function (collection) {
      const newCollection = (collection instanceof Array) ? collection : Object.keys(collection);
      return newCollection.length;
    },
    first: function (array,n) {
      if (n) {
        return array.slice(0,n)
      } else {
        return array[0]
      }
    },

    last: function (array,n) {
      if (n) {
        return array.slice(-n)
      } else {
        return array[array.length-1]
      }
    },
    // compact: function (array) {
    //   debugger
    //   newArray=[];
    //   array.forEach(element => {
    //     if (!!element) {
    //       newArray.push(element)
    //     }
    //   });
    //   return newArray;
    // },
    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    keys: function (object) {
     return Object.keys(object);
    },

    values: function (object) {
      return Object.values(object);
     },

     functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },
  } 
})();

fi.libraryMethod()
