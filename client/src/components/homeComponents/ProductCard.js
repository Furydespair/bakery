import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const ProductCard = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.REACT_APP_API_URL + product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <Card.Text>
            {product.price}$
        </Card.Text>
        <div className='w-100 d-flex justify-content-around align-items-center'>
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
    );
};

export default ProductCard;