import axios from 'axios';

// Create an Axios instance with a default base URL
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    // Optionally, you can set other default configurations here
    timeout: 40000, // 10 seconds timeout
    headers: {
   'Content-Type': 'application/json',
    }
});

const request = ({ ...options }) => {
    client.defaults.headers.common['Authorization'] = 'Bearer token'; // Replace 'token' with actual token

    // Success handler
    const onSuccess = (response) => {
        console.log('Request Successful:', response);
        return response;
    };
    const onError = (error) => {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request made and server responded with a status code outside 2xx range
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            // Request made but no response received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
        }

        // Optionally, you can throw error to be handled later
        return Promise.reject(error);
    };

    // Execute the request with provided options
    return client(options).then(onSuccess).catch(onError);
};

export default request;
