import React, { useEffect, useState } from "react";
import { useParams} from 'react-router';

import { useDispatch, useSelector } from "react-redux";
import { updateNoteAction } from "../actions/notesActions";
import { useNavigate} from "react-router-dom";
import axios from 'axios';

export default function SingleNote() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageURL, setImageURL] = useState("");



 const dispatch = useDispatch();

   const noteUpdate = useSelector((state) => state.noteUpdate);
    const { loading, error } = noteUpdate;
    let params=useParams();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setImageURL(data.imageURL);
   
    };

    fetching();
  }, [params.id]);

  const resetHandler = () => {
    setTitle("");
    setImageURL("");
    setContent("");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    dispatch(updateNoteAction(params.id, title, content, imageURL));
    if (!title || !content || !imageURL) return;

    resetHandler();
   navigate("/home");
  };





  
  return (
    <div className='min-w-full max-w-max min-h-screen max-h-max bg-[#F6F9F5] p-10'>
         
  
      <div className="text-3xl text-[#091405] font-poppins font-medium">
         EDIT POST
      </div>
   
      <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#f6f9f5] w-1/2 h-[100px] border border-[#d5d5d5] rounded-md text-black py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
       placeholder="Title" 
        value={title}
       type="text"
       onChange={(event) => {
        setTitle(event.target.value);
      }}
                  />
       <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required bg-[#f6f9f5] w-1/2 h-[400px] border border-[#d5d5d5] break-all whitespace-normal overflow-ellipsis rounded-md text-black py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
       placeholder="Content" 
       type="textarea"
       value={content}
       onChange={(event) => {
        setContent(event.target.value);
      }}     
                  />           

      <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#f6f9f5] w-1/2 h-[50px] border border-[#d5d5d5] rounded-md text-black py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm" 
      placeholder="ImageURL" 
      type="text" 
      value={imageURL}
      onChange={(event) => {
        setImageURL(event.target.value);
      }}
     />

 
      

      <button  className="bg-[#f6f9f5] hover:bg-[#ffffff] border-2 border-black rounded-xl text-black font-poppins font-semibold py-2 px-4 mt-6 w-[300px] shadow-black  hover:scale-110 transition duration-300 ease-in-out" type="submit" onClick={updateHandler}>UPDATE POST</button>
    
    
   
     
   
         
        

      </div>
 
  )
}
