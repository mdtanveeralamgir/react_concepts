/*
Source:
*/

import React from 'react';
import ReactDOM from 'react-dom/client';



class ProductRow extends React.Component
{
    render()
    {        
        return(
            <tr>
                <td style={ this.props.product.stocked ? {color:"black"} : {color:"red"}}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
class ProductCategoryRow extends React.Component
{
    render()
    {
        return(
            <tr>
                <th>{this.props.category}</th>
            </tr>
        );
    }
}

class ProductTable extends React.Component
{
    render()
    {
        let rows = [];
        let lastCategory = null;
        
        this.props.products.forEach(product => {

            if (product.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            if(this.props.isStockOnly && !product.stocked)
            {
                return;
            }
            if(product.category != lastCategory)
            {
                rows.push(
                    <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
                );
                lastCategory = product.category;
            }  
            rows.push(
                <ProductRow
                product={product}
                key={product.name}
            />
            );

        });
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    onChangeHandler = (event) =>
    {
        this.props.onFilterTextChange(event.target.value);
    }
    onCheckedhandler = (event) =>
    {
        this.props.onIsStockOnlyChange(event.target.checked);
    }
    render()
    {
        return(
            <form>
                <input type="text" onChange={this.onChangeHandler} value={ this.props.filterText } />
                <p>
                    Only show products in stock
                    <input type="checkbox" onChange={this.onCheckedhandler} checked={ this.props.isStockOnly } />
                </p>
            </form>
        );
    }
}
  
  

  class FilterableProductTable extends React.Component
  {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            filterText: '',
            isStockOnly: false
        };

    }
    handleFilterTextChange =(filterText) =>
    {
        this.setState({filterText: filterText});
    }

    onIsStockOnlyChange =(isStockOnly) =>
    {
        this.setState({isStockOnly: isStockOnly});
    }

    render()
    {
        return(
            <div>
                <SearchBar 
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFilterTextChange}
                onIsStockOnlyChange={this.onIsStockOnlyChange}
                />
                <ProductTable 
                filterText={this.state.filterText}
                products={this.props.rawData}
                isStockOnly={this.state.isStockOnly}
                />
            </div>
        );
    }

} 



const rawData = 
[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilterableProductTable rawData={rawData}/>);