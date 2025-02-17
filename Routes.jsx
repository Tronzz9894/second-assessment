import react,{ useState, useEffect}
from 'react'
import axios from 'axios';
function secure() {
    const [message,setMessage]=useState('');

    useEffect(() => {
        const fetchprotectedData = async() =>
            {

            const token =
            localStorage.getItem('token');
            try{
                const res =await
                axios.get('http://localhost:3001/api/protected',{

                    headers:{Authorization:token},
                });
                setMessage(res.data.message);
            } catch (err) {
                setMessage('access denied for token expired');
            }
        };
        fetchprotectedData();
    },[]);
    return<div>{message}</div>;



}

export default secure;