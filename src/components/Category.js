import React from 'react'
import { BrowserRouter,Link,Route } from 'react-router-dom';

const Category=({match})=> {
    return (
        <div>
        <ul>
            <li><Link to={`${match.url}/shoes`}>/Shoes</Link></li>
            <li><Link to={`${match.url}/boots`}>/boots</Link></li>
            <li><Link to={`${match.url}/footwear`}>/footwear</Link></li>
        </ul>

<Route
    path={`${match.path}/:name`}
     render={({match})=>(
    <h3>{match.params.name}</h3>
    )}
            
            
    />
            
        </div>
    );
}
export default Category;

