import React, { useState } from 'react';
const CRMContext = React.createContext([ {}, () => {} ]);

const CRMProvider = props => {
    const token = localStorage.getItem('token') || ''
    const rol = localStorage.getItem('rol') || ''
    const uid = localStorage.getItem('uid') || ''
    const name = localStorage.getItem('name') || ''

    const [auth, guardarAuth ] = useState({
        token: token,
        auth: !! token,
        rol: rol,
        uid: uid,
        name: name
    });

    return (
        <CRMContext.Provider value={[auth, guardarAuth]}>
            {props.children}
        </CRMContext.Provider>
    );
}

export { CRMContext, CRMProvider};
