import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//props: son argumentos que se pasan al componente desde su componente padre
const ItemListConteiner = ({ productsData }) => {
    console.log(productsData)

    return (
        <div>
            <div>
                {
                    productsData.map(products => {
                        return (
                            <Card key={products.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{products.Title}</Card.Title>
                                    <Card.Text>
                                        {products.description}
                                    </Card.Text>
                                    <div>{products.price}</div>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemListConteiner