import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { nanoid } from 'nanoid';

export default function ProductTable(props) {
  const products = props.products;
  
  const rows = [];
  let lastCategory;
  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          key={nanoid()}
          category={product.category}
        />
      );
    }
    rows.push(
      <ProductRow 
        key={nanoid()}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      />
    );
    lastCategory = product.category;
  })
  
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}