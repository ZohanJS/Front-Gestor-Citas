import React, { useState } from 'react';
const CRMContext = React.createContext([ {}, () => {} ]);

const CRMProvider = props => {
    const token = localStorage.getItem('token') || ''
    const [auth, guardarAuth ] = useState({
        token: token,
        auth: !! token,
        rol: '',
        uid: '',
        name: ''
    });

    return (
        <CRMContext.Provider value={[auth, guardarAuth]}>
            {props.children}
        </CRMContext.Provider>
    );
}

export { CRMContext, CRMProvider};
