require('dotenv').config();

const setting = {
    dev: {
        apiUrl: 'http://192.168.1.6:3000/api'
    },
    prod: {
        apiUrl: 'http://192.168.1.6:3000/api'
    },
}

const getCurrentSettings = ()=>{

    if(process.env.STAGE === 'development') return setting.dev;
    else return setting.prod;
}

export default getCurrentSettings();