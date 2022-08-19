/*
Thinking in react
Source:
https://reactjs.org/docs/thinking-in-react.html
*/
/*
Important notes:

Identify The Minimal (but complete) Representation Of UI State:

To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with state.
To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.
Think of all the pieces of data in our example application. We have:
The original list of products
The search text the user has entered
The value of the checkbox
The filtered list of products
Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:
Is it passed in from a parent via props? If so, it probably isn’t state.
Does it remain unchanged over time? If so, it probably isn’t state.
Can you compute it based on any other state or props in your component? If so, it isn’t state.
The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.
So finally, our state is:
The search text the user has entered
The value of the checkbox

Identify Where Your State Should Live:

For each piece of state in your application:
Identify every component that renders something based on that state.
Find a common owner component (a single component above all the components that need the state in the hierarchy).
Either the common owner or another component higher up in the hierarchy should own the state.
If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
Let’s run through this strategy for our application:
ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and checked state.
The common owner component is FilterableProductTable.
It conceptually makes sense for the filter text and checked value to live in FilterableProductTable

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