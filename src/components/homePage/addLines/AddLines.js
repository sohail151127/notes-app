import React from 'react'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import "../addLines/addLines.css";
import _ from "lodash";

const AddLines = (props) => {
  const Navigate = useNavigate()

  return (
    <>
    {
      _.map(props.myData[1]?.DATA, (y,j)=>{
        return  <Col xs={12} key={j} className="main__colll" onClick={()=>Navigate(`UpdateNotes/${props.myData[0].ID}`)}>
          <Row className='ssRow'>
                <Col xs={2} className="checkBox__col"> 
                      <input 
                          id={j} 
                          checked={y.isChecked}
                          // name={y.content}
                          // value={y.content}
                          type="checkbox" 
                          className="checkBox" 
                      />  
                </Col>
               
                <Col xs={6} 
                    
                    onClick={()=>Navigate(`UpdateNotes/${props.myData[0].ID}`)} 
                    className="content bg" 
                    style={{textDecoration: y.isChecked? "line-through" : "none"}}> 
    
                    {y.content} 
                          
                </Col>

                <Col xs={3} onClick={()=>Navigate(`UpdateNotes/${props.myData[0].ID}`)} className="amount bg"> 
                  {y.amount} 
                </Col>
        </Row>
        </Col>
      })
    }
    
    </>
  )
}

export default AddLines;