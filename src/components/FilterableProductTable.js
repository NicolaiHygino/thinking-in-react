import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      inStockOnly: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
  }
  
  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  filterProduct(product) {
    if (this.state.inStockOnly) {
      return (product.name.includes(this.state.searchTerm) && 
      product.stocked === true)
    }
    return product.name.includes(this.state.searchTerm)
  }

  render() {  
    const products = this.props.products;
    const productsList = products
    .filter(product => this.filterProduct(product));

    return (
      <div className="filterable-product-table">
        <SearchBar 
          onInputChange={this.handleInputChange}
          searchTermValue={this.searchTerm}
          inStockOnly={this.inStockOnly} 
        />
        <ProductTable products={productsList}/>
      </div>
    );
  }
}
export default FilterableProductTable;