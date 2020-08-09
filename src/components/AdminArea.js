import React from 'react';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import login from './login'
const AdminArea=()=> {
    return (
        <BrowserRouter>
        <div>
            <p>You must log in to view the page at /admin</p>
            <Link to="/admin"><button style={{marginTop:100,marginLeft:100}}>Log in</button></Link>

        </div>
        <Route path="/admin" component={login}></Route>
        </BrowserRouter>
    )
}
export default AdminArea;

