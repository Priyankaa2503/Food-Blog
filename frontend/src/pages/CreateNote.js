import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../actions/notesActions"; 
import { useNavigate} from "react-router-dom";

export default function CreateNote() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageURL, setImageURL] = useState("");


  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle(""); 
    setContent("");
    setImageURL("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title || !content || !imageURL) return;
    dispatch(createNoteAction(title, content, imageURL));

    resetHandler();
    navigate("/home");
  };
  useEffect(() => {}, []);

  
  return (
    <div className='min-w-full max-w-max min-h-screen max-h-max bg-[#F6F9F5] p-10'>
         
  
      <div className="text-3xl text-[#091405] font-poppins font-medium">
         CREATE POST
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

 
      

      <button  className="bg-[#f6f9f5] hover:bg-[#ffffff] border-2 border-black rounded-xl text-black font-poppins font-semibold py-2 px-4 mt-6 w-[300px] shadow-black  hover:scale-110 transition duration-300 ease-in-out" type="submit" onClick={submitHandler}>CREATE POST</button>
    
    
   
     
   
         
        

      </div>
 
  )
}
