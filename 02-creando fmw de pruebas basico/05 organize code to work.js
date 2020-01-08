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
       console.log(`ok ${title}`);
    }catch{
        throw new Error(`bad ${title}`)
    }
}

//index.html
// the manner to run this manually

src="./framework.js"
src="./app.js"
src="./app.spec.js"
