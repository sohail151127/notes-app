import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoCloseSharp } from 'react-icons/io5';
import "./note.css";

const Note = (props) => {
  const [line, setLine] = useState(false)

  const deleteNote =()=>{
    props.deleteItem(props.id);
  }

  const cutIt=()=>{

    // let value = line
    if (line === false) {
      setLine(true)
    } else {
      setLine(false)
    }
  }

  return (
    <>
<Container className='enterData1'>
        <Row className='enterData2'>

            <Col xs={1} className='checkbox__1'>     
            <input 
            type="checkbox" 
            onClick={cutIt}
            className='checkbox'  
            name="" 
            />
            </Col>

            <Col xs={8} className='saved__content' 
            style={{textDecoration: line? "line-through" : "none"}}
            >
              
              { props.content }
              
              
            </Col>

            <Col xs={2} className='input__amount__1'>  
              {props.amount}
            </Col>
            <Col xs={1} className='close__button__1'> 
              <button 
              type="submit" 
              className='close__button'
              onClick={deleteNote}
              > 
              <IoCloseSharp className='close__button__background' /> </button>
            </Col>
            <Col className='date__col__saved'>
              <Row className='date__row__saved'>
              {props.date}
              </Row>
            
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Note;