import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import {deleteNoteAction, listNotes } from '../actions/notesActions'
 function Home() {
  const card= [
    {
      id:1,
      title : "HEALTHY FOOD" ,
      heading: "Start Living Properly",
      img:"/images/healthyfood.jpg"
    },
    {
      id:2,
      title : "EVENTS" ,
      heading: "Foodies,Save the Date",
      img:"/images/cake.jpg"
    },
    {
      id:1,
      title : "SWEETS" ,
      heading: "The Best Desserts Ideas",
      img:"/images/icecream.jpg"
    },
  ]
 const dispatch = useDispatch();
 const noteList = useSelector(state => state.noteList)
 const{loading,notes,error} = noteList;
 const noteCreate = useSelector((state) => state.noteCreate);
 const { success: successCreate } = noteCreate;
 const noteUpdate = useSelector((state) => state.noteUpdate);
 const { success: successUpdate } = noteUpdate;

let navigate = useNavigate();

const noteDelete = useSelector((state) => state.noteDelete);
const {
  loading: loadingDelete,
  error: errorDelete,
  success: successDelete,
} = noteDelete;


 
  console.log(notes);
  const deleteHandler=(id)=>{
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }

  }
 

  useEffect(() => {
  dispatch(listNotes());
    
  }, [dispatch,successCreate,successUpdate,successDelete])

  return (
    <div className='min-w-full max-w-max min-h-screen max-h-max bg-[#F6F9F5]'>
       <Navbar/>
      <div className='flex flex-row justify-center '>
        <img src ="/images/paris.jpg" className='w-[490px] h-[400px]'></img>
        <div className='h-[400px] w-[490px] bg-white text-[#2f2e2e] text-center'><p className='font-grotesk  p-10'><u>AROUND THE WORLD</u></p>
        <p className='font-playfair font-bold text-3xl p-10'>Food culture is the practices, beliefs, attitudes around the production, distribution, and consumption of food.</p></div>
      </div>

      <div className='flex flex-row h-[500px] p-20 items-start justify-center'>
        {
          card.map((card)=>(
            <div className='bg-white w-[290px] h-[148px] border-2 relative'>
            <div className='font-grotesk text-[#2f2e2e] text-center p-4'><u>{card.title}</u></div>
            <div className='text-[#2f2e2e] bg-white  text-center text-3xl font-playfair p-2 absolute font-bold'>{card.heading}</div>
            <img src={card.img} className='object-cover'></img>
            </div>

          ))
        }
      </div>
      <p  className="text-center text-5xl mt-10 font-playfair">Blogs</p>
      <div className='grid grid-cols-2'>
        {
          notes?.map((note)=>(
            <div className=' mt-10 ml-10 bg-white  w-[640px] '>
             
               <img src={note.imageURL} className='w-[652px] h-[360px] p-4'></img>
               <div className='flex flex-col p-6 justify-center '>            
                <div className='flex  flex-row gap-4 '>
                  <img src ="/images/icons8-user-30.png" className='rounded-full object-cover '></img>
                  <p className='text-[#2f2e2e] font-grotesk'>Admin • 1 min read</p>
                </div>
                <div className='text-[#2f2e2e] hover:text-[#deb941] mt-2 text-3xl font-bold font-playfair'>{note.title}</div>
                <p className='text-sm text-[#2f2e2e] hover:text-[#deb941] font-grotesk mt-2'>{note.content}.</p>
                <div className='w-600px] h-[2px] mt-2 bg-[#c4c2c2]'></div>
                <div className='flex flex-row gap-4 mt-2'>
                  <a href = {`/note/${note._id}`} >
                <button className='border-2 border-[#a8a6a6] font-semibold shadow-lg rounded-lg p-2 text-[#2f2e2e] bg-[#deb941]' > EDIT </button></a>
                <button className='border-2 border-[#a8a6a6] font-semibold shadow-lg rounded-lg p-2 text-[#2f2e2e] bg-[#deb941]' onClick={() => deleteHandler(note._id)}> DELETE </button>
                </div>
               </div>
            </div>

          ))
        }

      </div>
      <div class="flex justify-end ">
      <Link to ="/createnote"> <button className='hover:scale-110 transition duration-300 ease-in-out border-2 border-[#a8a6a6] font-grotesk font-semibold shadow-lg rounded-lg p-2 mt-10 text-[#2f2e2e] bg-[#deb941] text-center mb-10 mr-10' > CREATE POST </button></Link>
</div>
<Footer/>
    
    </div>
  )
}

export default Home;
