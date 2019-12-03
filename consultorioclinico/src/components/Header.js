import React from 'react';

const Header = ({titulo}) =>  (  
    <div className="row">
        <div className="col-12 my-4">
            <h1 className="text-center text-light">
                {titulo}
            </h1>
        </div>
    </div>
);

 
export default Header;