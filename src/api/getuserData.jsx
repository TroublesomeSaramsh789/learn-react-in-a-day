import axios from 'axios';

const getUserData = () => {
    // axios.get("url") returns a promise
    return axios.get("https://jsonplaceholder.typicode.com/users")
}
export default getUserData;