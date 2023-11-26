import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS=[{
    id:'p1',
    price: 4,
    title: 'My First Book',
    description:'the first book I ever wrote'
  },
  {
    id:'p2',
    price: 6,
    title: 'My Second Book',
    description:'the second book I wrote'
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products)=>(
          <ProductItem
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
