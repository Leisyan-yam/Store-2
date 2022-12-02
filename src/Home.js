import React from 'react';

import {
    Link,
  } from "react-router-dom";


const Home = () => {

    return(
        <div className="home">
            <h1>“Your diet is a bank account. Good food choices are good investments.”  </h1><span className='author'>Bethenny Frankel </span>
            <button className="Btn Home"> <Link className="Link" to='/Catalog'> open catalog </Link> </button>
        </div>
    )
}
export default Home