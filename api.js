import axios from 'axios';

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1/restaurant' ,
    headers:{
        Authorization : 'Bearer 06f38f27477366d2518e24f9abb2f526'
    }

}); 
