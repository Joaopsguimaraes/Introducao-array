## Introducao-array
###Introducao ao array JavaScript
- Array é uma estrutura de dados
    - é capaz de armazenar e organizar outros dados
- Dados sao organizados em forma de lista
    - Cada valor fica numa determinada posicao
- Pode armazenar internamente qualquer otro tipo
    - Number, string, boolean etc.
    - E até outro array
### Exemplos para criacao de array
let listaDeNaves =["Helmet", "Supernova", "Elemental", 10, true]
//array pode ser usado entre [] assim como também pode ser usado como new array()
let listaNaves = new Array(1,2,3,4)
//observacao para o new Array() é melhor ser utilizado para caracteres, boolean e etc.
### Trabalhando com array
#### a funcao push é para adicionar um novo elemento, no final do array
let listaNaves = ["SuperNova", "Helmet", "Andromeda"]
console.log(listaNaves)
listaNaves.push("Elemental")
console.log(listaNaves)

#### a funcao pop ela retira o ultimo elemento do array
listaNaves.pop()
console.log(listaNaves)

#### também da pra usar a seguinte sintaxe para mostrar o elemento removido pelo pop
let naveRemovida = listaNaves.pop()
console.log(naveRemovida)


#### a funcao shift remove o primeiro elemento no array
listaNaves.shift()
console.log(listaNaves)

#### e também da para ser verificado qual o elemento removido pelo shift
let primeiraNaveRemovida = listaNaves.shift()
console.log(primeiraNaveRemovida)

#### a funcao unshift ela insere valor no como primeiro elemento do array
listaNaves.unshift("Fenix")
console.log(listaNaves)

#### para visualizar o tamanho do seu array utiliza-se o length
console.log(listaNaves.length)

#### para inserir um elemento no array utiliza-se push
listaNaves.push("SuperNova")
console.log(listaNaves)

#### para verificar a posicao do elemento no array utiliza-se indexof
let superNovaPos = listaNaves.indexOf("SuperNova")
console.log(superNovaPos)