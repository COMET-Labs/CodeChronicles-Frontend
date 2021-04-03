import React, { useState } from 'react';

import EditorScreen from './screens/EditorScreen';

import authStorage from './auth/storage';
import AuthContext from './auth/context';

function App() {

    const restoreUser = ()=>{
        const user = authStorage.getUser();
        if(user){
        setUser(user);
        }
    };
    const [user, setUser] = useState();
    restoreUser();

    return(
        <AuthContext.Provider value={{user, setUser}}>
            <EditorScreen />
        </AuthContext.Provider>
    );


}

export default App;