import React, {useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiArrowBack } from 'react-icons/bi';
import "./updateNotes.css";
import { IoCloseSharp } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import moment from 'moment';
import Note from "../note/Note.js";
import {v4 as uuid} from "uuid";


const UpdateNotes = ( ) => {
  const noteId = useParams()
  // console.log("useParms_noteId:",noteId)


  // here i'm getting data from localStorage
const getlocalAddItem =( )=>{
  if (noteId.id !== "new"){
    // console.log("noteId.id !== equal to new")
    let data3 = JSON.parse(localStorage.getItem(noteId.id))
    // console.log("localStorageMatchedDataWithNoteId:",data3)
    let data4 = data3[1].DATA
    return data4    

  } else if (noteId.id === "new"){
    // console.log("noteId.id === equal to new")
    return []
  }
}

  const [id, setId] = useState("")
  const [addItem, setAddItem] = useState(getlocalAddItem)


  useEffect(() => {
    setId(uuid())
  }, [])
  // console.log(id)

  const [note, setNotes] = useState(
    {
      title: "",
      content: "",
      amount: ""
    }
  )

  const InputEvent =(e)=>{
    const {name, value} = e.target;
    setNotes((prevData)=>{
      return{
        ...prevData, 
        [name] : value,
        date: `${moment().format('ddd ,D MMMM YY, hh:mm a')}`
      } 
    })
  }

  const addEvent =()=>{
    setAddItem((prevData)=>{
      return [...prevData, note]
    });
    setNotes({
      // title: "",
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


    // add data to localStorage
    useEffect(() => {
    localStorage.setItem("lists",JSON.stringify(addItem))
    }, [addItem]);

    //add data to unique "key" in localStorage
    const addKey=()=>{
      let data1 = JSON.parse(localStorage.getItem("lists"))
      if (data1.length > 0){
        if (noteId.id === "new"){
          let data2 = [{"ID":id},{"DATA":data1}]
          localStorage.setItem(id,JSON.stringify(data2))
        } else if (noteId.id !== "new"){
          let data5 = [{"ID":noteId.id},{"DATA":data1}]
          // localStorage.removeItem(noteId.id)
          localStorage.setItem(noteId.id,JSON.stringify(data5))
        }
      }
      setAddItem([])
    }


    return (
    <>
  <Container fluid className='m-0 p-0'>    
    {/* updateHeader part............. */}
    <Container fluid className='back__arrow1'>
        <Row className='back__arrow2'>  

            <Col xs={1} className='back__arrow3'>
            <Link className='back__arrow3__4' to="/notes-app" onClick={addKey}><BiArrowBack className='back__arrow4' /></Link>
             </Col>  

            <Col xs={11} className='header3'>
                Update Notes
            </Col>
        </Row>
    </Container>

    <Container className='allBelowUodateNotes'>

    {/* EnterTitle part............. */}

    <Container className='container__title'>
        <Row className='row__title'>        
            <Col xs={12} className='col__title'>
                <textarea 
                type="textarea" 
                className='input__title' 
                placeholder='Enter Title'
                value={note.title} 
                onChange={InputEvent} 
                name="title"                 
                />
             </Col>
        </Row>
    </Container>

    {/* Sum part............. */}

    <Container className='sum'>   
            <div xs={2} className="sum__name__row">
                Sum:
             </div>
             <div xs={9} className="sum__value__row">
                {sum}
             </div>        
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
              date={val.date}
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

            <Col xs={8} className='input__content'>     
              <textarea 
              type="textarea" 
              className='textArea0' 
              name="content" 
              value={note.content} 
              onChange={InputEvent} 
              placeholder='Enter Notes' 
              autoComplete='off'
              />
              </Col>

            <Col xs={2} className='input__amount__1'>  
              <input 
              type="number" 
              className='input__amount' 
              value={note.amount} 
              onChange={InputEvent} 
              placeholder='Amount' 
              name="amount" 
              autoComplete='off'
              />
            </Col>

            <Col xs={1} className='close__button__1'> 
              <button type="submit" 
              
              className='close__button'> <IoCloseSharp className='close__button__background' /> </button>
            </Col>
            <Col xs={11} className='date__col__input'>
            <Row className='date__row__input'> 
                {moment().format('ddd ,D MMMM YY, hh:mm a')} 
            </Row>
            </Col>
        </Row>
    </Container>

    <Container className='mt-4'>
      <Row>
        <Col className='archived'>
        <button className='archivedButton'>Show Archived</button>
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
  </Container>

  </Container>
    </>
  )
}

export default UpdateNotes