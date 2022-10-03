import React from 'react'
import Col from 'react-bootstrap/Col';

const AddLines = (props) => {

    // console.log(props.amount)
  return (
    <>
    <Col xs={2} className="box7 bg"> <input className="box bg" type="checkbox" name="" id="1" />  </Col>
    <Col xs={6} className="box8 bg"> {props.content} </Col>   
    <Col xs={4} className="box9 bg"> {props.amount} </Col>
    </>
  )
}

export default AddLines