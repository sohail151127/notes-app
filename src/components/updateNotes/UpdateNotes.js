import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiArrowBack } from 'react-icons/bi';
import "./updateNotes.css";
import { IoCloseSharp } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import moment from 'moment';
import Note from "../note/Note.js";

// here i'm getting data from localStorage
const getlocalAddItem =()=>{
  let list = localStorage.getItem("lists")

  if(list){
    return JSON.parse(localStorage.getItem("lists")) 
  } else {
      return [];
  }
}


const UpdateNotes = (props) => {  

  const [addItem, setAddItem] = useState(
    getlocalAddItem
  ) 
 
  const [note, setNotes] = useState(
    {
      title: "",
      content: "",
      amount: ""
    }
  )

  const InputEvent =(e)=>{

    // const value = e.target.value;
    // const name = e.target.name;

    // above code is normal and the code below is destructured

    const {name, value} = e.target;

    setNotes((prevData)=>{
      return{
        ...prevData, 
        [name] : value,
      } 
    })
  }

  const addEvent =()=>{
    setAddItem((prevData)=>{
      return [...prevData, note]
    });
    setNotes({
      title: "",
      content: "",
      amount: ""
    })}

    const onDelete =(id)=>{
      setAddItem((oldData)=>{
        return oldData.filter((i,j)=>{
          return j !== id;  
        })
      }
        )         
    }

    // sum part.........................
    let store= addItem.map((x, i)=>{
      return  Number(x.amount)
    })
    let sum = store.reduce((a,b)=>a+b, 0)
    // ...................................


    // add data to localStorage
    useEffect(() => {
    localStorage.setItem("lists",JSON.stringify(addItem))
    }, [addItem]);

     // sending data to parent component App.js
     useEffect(() => {
      props.receiveUpdateNotesData(addItem)
     })
    

  return (
    <>
    {/* updateHeader part............. */}
    <Container fluid className='back__arrow1'>
        <Row className='back__arrow2'>  

            <Col xs={1} className='back__arrow3'>
            <Link className='back__arrow3__4' to="/HomePage"><BiArrowBack className='back__arrow4' /></Link>
             </Col>  

            <Col xs={11} className='header3'>
                Update Notes
            </Col>
        </Row>
    </Container>

    {/* EnterTitle part............. */}

    <Container className='container__title'>
        <Row className='row__title'>        
            <Col xs={12} className='col__title'>
                <input 
                className='input__title' 
                placeholder='Enter Title'
                value={note.title} 
                onChange={InputEvent} 
                type="text" 
                name="title"                 
                />
             </Col>
        </Row>
    </Container>

    {/* Sum part............. */}

    <Container className='sum'>
        <Row>        
            <Col xs={{span:1, offset:0.5}}>
                Sum:
             </Col>
             <Col xs={10}>
                {sum}
             </Col>
        </Row>
    </Container>

{/* saved data part on update page */}
    {
      addItem.map((val, index)=>{
        
        return <Note 
              key={index}
              id ={index}
              title={val.title}
              content={val.content}
              amount={val.amount}
              deleteItem= {onDelete}
            />
      })
    }
      
    
    {/* EnterData part............. */}


    <Container className='enterData1' >
        <Row className='enterData2'>
        
            <Col xs={1} className='checkbox__1'>     
            <input type="checkbox" className='checkbox' />
            </Col>

            <Col xs={6} className='input__text__1'>
              <input 
              type="text" 
              name="content" 
              value={note.content} 
              onChange={InputEvent} className='textArea' placeholder='Enter Notes' 
              autoComplete='off'
              />
            </Col>

            <Col xs={4} className='input__amount__1'>  
              <input 
              type="number" 
              value={note.amount} 
              onChange={InputEvent} className='input__amount' placeholder='Amount' 
              name="amount" 
              autoComplete='off'
              />
            </Col>

            <Col xs={1} className='close__button__1'> 
              <button type="submit" 
              
              className='close__button'> <IoCloseSharp className='close__button__background' /> </button>
            </Col>
            <Col xs={{ span: 11, offset: 1}} className='date__time__1'>
            <div className='date__time'> {moment().format('ddd ,D MMMM YY, hh:mm a')} </div>
            </Col>
        </Row>
    </Container>
      
    

{/* Footer part............. */}

    <footer className='plus__footer'>
      <button 
      onClick={addEvent} 
      type='submit' 
      className='plus__button'>
      <FiPlus className='plus' />
      </button>
    </footer>    
    </>
  )
}

export default UpdateNotes