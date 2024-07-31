import axios from 'axios';

export const addComment= async (_id, newComment) => {
    try {
        const response = await axios.put (`http://localhost:8080/song/add/comment/${_id}`, newComment);
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
};
