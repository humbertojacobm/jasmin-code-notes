throw new Error('something');
//this line can tell you  in console log in which file and which line

//your own expect, this is using closures.

function expect (actual) {
    return {
        toBe(expected){
            if(actual !== expected){
                throw new Error('Prueba no exitosa')
            }
        }
    };
}

function it(title, callback){
    try{
       callback();
       console.log('Successfull test');
    }catch{

    }
}