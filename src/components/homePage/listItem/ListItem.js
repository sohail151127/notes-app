import React from 'react'
import AddLines from '../addLines/AddLines'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsThreeDotsVertical } from 'react-icons/bs';
import "../listItem/listItem.css";
import { useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';




const ListItem = (props) => {
  const navigate=useNavigate()
  let query = props.query

  const deleteThisNote=(e)=>{
   let boxId = e.currentTarget.id
   localStorage.removeItem(boxId)
    navigate("/");
  }
  
  let myData = props.x
  // console.log("ggg",props)
  return (
    <>
    
          <Col xs={5} className="col1 bg">
            
            <Row className='row1 bg'>
                <Col xs={8} onClick={()=>navigate(`UpdateNotes/${props.x[0].ID}`)} className="title bg"> 
                    {props.x[2]?.title} 
                </Col>
                <Col xs={4} className="col__3__dots"> 

                  <NavDropdown  title={<button 
                                type="submit" 
                                className='dotButton'>
                                <BsThreeDotsVertical className="dotIcon" />
                                </button>} 
                                id="basic-nav-dropdown" 
                                className="navDrop">

                        <NavDropdown.Item
                            onClick={deleteThisNote}
                            id={props.x[0].ID} 
                            className='navItem'>
                            Delete this note
                        </NavDropdown.Item>

                  </NavDropdown>
                </Col>
        {/* iterate from here for new checkbox lines */}
            
            <AddLines myData={myData} query={query} />

            </Row>
          
        </Col>
      
    </>
  )
}

export default ListItem;