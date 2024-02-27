const obj = {
    [Symbol.iterator]: function() {
        let step=0
        const iterator = {
            next:function(){
                step++
                if(step===1){
                    return {value:'hello',done:false}
                } else if (step === 2) {
                    return {value:'world',done:false}
                }
               return {value:undefined,done: true}
            }
        }
        return iterator
    }
}

for (const word of obj) {
    console.log(word)
}
console.log(obj)