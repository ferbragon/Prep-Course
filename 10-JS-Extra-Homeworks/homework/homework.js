// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let farray = [];
  let iarray = [];
  let j;
  let size = Object.keys(objeto);
  for(elem in objeto){
    iarray.push(objeto[elem]);
    }for(i = 0; i < size.length; i++){
        j = [size[i],iarray[i]];
        farray.push(j);
    } return farray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*let abc = {a: ,b: ,c: ,d: ,e: ,f: ,g: ,h: ,i: ,j: ,k: ,l: ,m: ,n: ,ñ: ,o: ,p: ,q: ,r: ,s: ,t: ,u: ,v: ,w: ,x: ,y: ,z:  }
};*/
  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  let obj = {a: 0,b: 0,c: 0,d: 0,e: 0,f: 0,g: 0,h: 0,i: 0,j: 0,k: 0,l: 0,m: 0,n: 0,ñ: 0,o: 0,p: 0,q: 0,r: 0,s: 0,t: 0,
    u: 0,v: 0,w: 0,x: 0,y: 0,z: 0};  
  /*string.forEach(function (x){
    abc.forEach(function (w){
      if(string[x] === abc[w]){
        obj[w] =+ 1;
      };
    });
  }); return obj;*/
  for (let i = 0; i < string.length; i++){
    for (let j = 0; j < abc.length; j++){
      if(string[i] === abc[j]){
        obj[abc[j]] = obj[abc[j]] + 1;
    };
    };
}; for(x in obj){
   if (obj[x] === 0){
    delete obj[x];
   }
};return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  let array = s.split("");
  let text = abc.join("");
  let TEXT = text.toUpperCase();
  let arrayM = TEXT.split("");
  let arraymr = [];
  let arrayMr = [];
     for (let i = 0; i < array.length; i++){
    for (let j = 0; j < abc.length; j++){
      if(array[i] === abc[j]){
        arraymr.push(array[i]);
    }    
   }
   }for (let x = 0; x < array.length; x++){
    for (let y = 0; y < arrayM.length; y++){
      if(array[x] === arrayM[y]){
        arrayMr.push(array[x]);
    }    
   }
   } return arrayMr.join("") + arraymr.join("");
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let espp = str.split(" ");
  let array = [];
  for (i = 0; i < espp.length; i++){
    array.push([...espp[i]].reverse().join(""));
  } return array.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString();
    if (str === [...str].reverse().join("")){
        return "Es capicua";
  } else {
        return "No es capicua";
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let array = cadena.split("");
  let arrayb = [];
  /*for (i = 0; i < array.length; i++){
    if (array[i] == "a" && array[i] == "b" && array[i] == "c") {
      return array.join("");
    } else if( array[i] == "a" || array[i] == "b" || array[i] == "c" ){
      arrayr = array.filter(x => x !== "a" && x !== "b" && x !== "c");
      return arrayr.join("");
    } else {
      return "Ingrese una string";
    }
  }
  for (i = 0; i < tam; i++){
    let arrayr = [];
    if(array[i] === "a"){
     array = array.filter(x => x !== "a"); 
    } else if (array[i] === "b"){
     array = array.filter(x => x !== "b");
    } else if (array[i] === "c"){
     array = array.filter(x => x !== "c"); 
    } else {
      arrayb.push(array[i]);
      continue;
    }
  } if (arrayb.join("") === cadena){
    return cadena;
  } else {
    return array.join("");
  }*/
   arrayb = array.filter(x => x !== "a" && x !== "b" && x !== "c");
   if (arrayb.join("") === cadena){
    return cadena;
   } else {
    return arrayb.join("");
   }
 }
       


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function comparar (a,b){
  return a.length - b.length;
  }
  return arr.sort(comparar);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let array = [];
  for(let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        array.push(arreglo2[j]);
        break;
      }
    }
  } return array; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

