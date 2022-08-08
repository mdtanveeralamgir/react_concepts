/*
Lists and Keys
Source:
https://reactjs.org/docs/lists-and-keys.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

function NumberList(props)
{
    const numbers = props.numbers;

    const listItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );
    return ( <ul>{listItems}</ul>);
}

//Keys Must Only Be Unique Among Siblings 
function Blog(props)
{
    const sidebar = (
        <ul>
            {props.posts.map((post)=>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );

    const content = props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.content}</h3>
        </div>
    );

    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

/*
Keys serve as a hint to React but they don’t get passed to your components.
 If you need the same value in your component, pass it explicitly as a prop with a different name:

 const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
*/


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
const numbers = [1,2,3];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts}/>);