import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Card_section({product}) {
  
  return (
    
    <Card className='shadow-2xl' id='card'>
      <Card.Img id='img_card' src={product.image} />
      <Card.Body>
        <Card.Title id='card_title'>{product.title}</Card.Title>
        <Card.Text>
          {product.category}
        </Card.Text>
        <Link className='btn bg-white text-dark rounded' to={`/productdetail/${product.id}`}>Details</Link>
      </Card.Body>
    </Card>
  );
}

export default Card_section;