let lista = ["Miguel", "Diana", "Diego", lista2, "Sergio", "Willmer", "Adrian", "Andrés", "Emmanuel", "Lozada"];
//let lista2 = {id:123};
let lista2 = ["bebebeb","uuuu"];
//let resultado = lista.pop();Elimina el último elemento de la lista
//let resultado = lista.push(100); Agrega al final de la lista
//let resultado = lista.shift();Elimina el primero de la lista
//let resultado = lista.unshift({nombre:"Profesor"}); Agrego al inicio de la lista
//let resultado = lista.splice(5,1,"prueba"); 
//let resultado = lista.sort();
//let resultado = lista.reverse();
//let resultado = lista.join("-");
//let resultado = lista.concat(lista2);
//let resultado = lista.slice(1,4);
let resultado = lista.some(data => data=="adrian");

console.log(`Lista original`);
console.log(lista);
console.log(``)