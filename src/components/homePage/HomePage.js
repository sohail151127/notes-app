import React from 'react'

import "./homePage.css"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';

const HomePage = (props) => {

  // let data = props.dataa
  // console.log(data)

  return (
    <>
{/* home page header part */}
    <Container fluid className='header'>
        <Row className='header__1'>        
            <Col xs={4} className='header3'>
               Notes
             </Col>

             <Col xs={{span:4, offset:4}} className='dots__icon'>
                <button type="submit" className='dot__background'><BiDotsVerticalRounded className='dot' /></button>
                <Link to="/UpdateNotes">Update</Link>
             </Col>
        </Row>
    </Container>

    {/* home page search bar part */}

    <Container >
    <Row>        
        <Col md={12} className="border__searchBar">
            
            <input type="text" placeholder='Search' className='input'/>

            <button type='submit' className='button'><AiOutlineSearch className='searchIcon__background'/></button>
        </Col>
    </Row>
    </Container> 

    {/* home page below search bar saved data  */}

    <Container className='box bg' >
        <Row className="box_1_1">   
   {/* iterate from here for new box */}

          <Col xs={5} className="box1 bg">
            <Row className="box2 bg">
            <Col xs={8} className="box3 bg"> gha </Col>
            <Col xs={{span:3, offset:1}} className="box4 bg"> 
            <button type="submit" className='box5'><BsThreeDotsVertical className="box6 bg" /></button>  
            </Col>
    {/* iterate from here for new checkbox lines */}
             <Col xs={2} className="box7 bg"> <input className="box bg" type="checkbox" name="" id="1" />  </Col>
             <Col xs={6} className="box8 bg"> gaja </Col>   
             <Col xs={4} className="box9 bg"> 50 </Col>
              
            </Row>
          </Col>

          
          <Col xs={5} className="box1 bg">
            <Row className="box2 bg">
            <Col xs={8} className="box3 bg"> gha </Col>
            <Col xs={{span:3, offset:1}} className="box4 bg"> 
            <button type="submit" className='box5'><BsThreeDotsVertical className="box6 bg" /></button>  
            </Col>
             <Col xs={2} className="box7 bg"> <input className="box bg" type="checkbox" name="" id="1" />  </Col>
             <Col xs={6} className="box8 bg"> gaja </Col>   
             <Col xs={4} className="box9 bg"> 50 </Col> 
            </Row>
          </Col>
         
           

        </Row>
    </Container>

{/* home page footer plus sighn for adding new data */}

  <footer className='plus__footer'>
      <button type='submit' className='plus__button'>
      <FiPlus className='plus' />
      </button>
    </footer>
{/* ...............................   */}

    </>
  )
}

export default HomePage