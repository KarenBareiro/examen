import{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';



const SongsForm = () =>{
const [formValues, setFormValues] = useState({title:"", author:"", classification:"", comments:""});
const [song, setSong] = useState ({});
const {_id}= useParams();

useEffect (() =>{
if (_id){}
},[_id])

const handleChange = (e) => {
    const {value,name} = e.target;
    setFormValues({...formValues, [name]: value})
}

const handleSubmit = async (e) =>{
    e.preventDefault();
let newComment = {autor: formValues.author, review: formValues.classification, comment:formValues.comments}    


if(_id){
    try {
        const response = await axios.post ("http://localhost:8080/song/create", newSong);
        console.log(response);
        
    } catch (error) {
        console.log(error);
    } 
}
else {let newSong = {title: formValues.title, comentarios: newComment}
try {
    const response = await axios.post ("http://localhost:8080/song/create", newSong);
    console.log(response);
    
} catch (error) {
    console.log(error);
}}

}
    return(
        <>
   <h2> Agregar Cancion </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">
                        Title:
                    </label>
                    <input type="text"
                           id="title"
                           name="title"
                           value={formValues.title}
                           onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="author">
                        Author:
                    </label>
                    <input type="text"
                           id="author"
                           name="author"
                           value={formValues.author}
                           onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="classification">
                        Classification:
                    </label>
                    <input type="text"
                           id="classification"
                           name="classification"
                           value={formValues.classification}
                           onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="comments">
                        Comments:
                    </label>
                    <input type="text"
                           id="comments"
                           name="comments"
                           value={formValues.comments}
                           onChange={(e) => handleChange(e)} />
                </div>
                <button> Agregar Cancion </button>
            </form>
        </>
    )
}
export default SongsForm;