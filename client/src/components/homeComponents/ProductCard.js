import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const ProductCard = ({product}) => {
    return (
        <div className='item'>
        <Card  style={{ height: 550}}>
            <Card.Img variant="top" style={{height: 300, width: 450}} src={process.env.REACT_APP_API_URL + product.img} />
            <Card.Body >
                <Card.Title style={{height: 50}}>{product.name}</Card.Title>
                <Card.Text style={{height: 50}}>
                {product.description}
                </Card.Text>
                <Card.Text>
                    {product.price}$
                </Card.Text>
                <div style={{height: 50}} className='w-100 d-flex justify-content-around align-items-center'>
                    <Button>
                        -
                    </Button>
                    <span>
                        {product.quantity}
                    </span>
                    <Button>
                        +
                    </Button>
                </div>
            </Card.Body>
            </Card>
        </div>
        
    );
};

export default ProductCard;