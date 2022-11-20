import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import "../addLines/addLines.css";
import _ from "lodash";

const AddLines = (props) => {
  const Navigate = useNavigate()

  // here i'm getting data from localStorage
const getlocalIsChecked =()=>{
  let isChecked = JSON.parse(localStorage.getItem("isChecked"))
// console.log("isCheckedinfnnn:",isChecked)
  if(isChecked === null){
    // return new Array(props.myData[1].DATA.length).fill(false);
    return _.fill(new Array(props.myData[1].DATA.length),(false));
  } else {
    return isChecked;
  }
}
  
  const [isChecked, setIsChecked] = useState(getlocalIsChecked);
  
  const handleOnChange=(position)=>{
    // console.log("position/index:",position)
    const updatedIsChecked = _.map(isChecked, (x,i)=>{
      return i === position? !x : x
    });
    setIsChecked(updatedIsChecked)
  }

// add data to localStorage
useEffect(() => {
  localStorage.setItem("isChecked",JSON.stringify(isChecked))
  }, [isChecked]);

  // console.log("value of is checked array is:",isChecked)
  // })

  return (
    <>
    {
      _.map(props.myData[1].DATA, (y,j)=>{
        return  <Col xs={12} key={j} className="main__colll" >
          <Row className='ssRow'>
                <Col xs={2} className="checkBox__col"> 
                      <input 
                          id={j} 
                          onChange={()=>{handleOnChange(j)}} 
                          checked={isChecked[j]}
                          // name={y.content}
                          // value={y.content}
                          type="checkbox" 
                          className="checkBox" 
                      />  
                </Col>
               
                <Col xs={6} 
                    
                    onClick={()=>Navigate(`UpdateNotes/${props.myData[0].ID}`)} 
                    className="content bg" 
                    style={{textDecoration: isChecked[j]? "line-through" : "none"}}> 
    
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