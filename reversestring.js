//escrever a string ao contrário

function reverseAString (entrada){
    let stringReversa = []
    for (let i = entrada.length - 1; i>=0; i--){
        stringReversa.push(entrada[i]);
        /* stringReversa += entrada[i]*/
    }
    return stringReversa
}

console.log(reverseAString('abcdef'));
console.log(reverseAString('y'));