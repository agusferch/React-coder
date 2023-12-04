import React from 'react'

//props: son argumentos que se pasan al componente desde su componente padre

const ItemListConteiner = ({greeting}) => {

console.log(greeting)
return (
    <div>{greeting}</div>
)
}

export default ItemListConteiner