import React from "react";

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="product">Product Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="product"
        list="products"
        type="text"
        className="form-control"
        placeholder="Search for a product!"
        id="product"
      />
      <datalist id="products">
        {props.products.map(product => <option value={product} key={product} />)}
      </datalist>
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;