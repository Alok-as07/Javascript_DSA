
const string = "geeksforgeeks"

class DuplicateChar{

    DuplicateCount(string){
        const array = string.split('');
        const mapvalue = new Map();
        for (let i = 0; i < array.length; i++) {
            if(mapvalue.has(array[i])){
                mapvalue.set(array[i],(mapvalue.get(array[i])+1));
            }
            else{
                mapvalue.set(array[i],1);
            }
            
        }

        for (let [it,it2] of mapvalue) { 
            if (it2 > 1)   
                console.log(it,", count = ",it2);
        }
    }
}

const class1 = new DuplicateChar();
class1.DuplicateCount(string);