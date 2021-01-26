import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams(); // { productId: 2 }
  console.log(params);

  return (
    <div>
      <h2>Just one product</h2>
    </div>
  );  
};

export default Product;
