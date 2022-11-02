import React, { useState } from 'react'
import "./homePage.css"
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
// import AddLines from '../homePage/addLines/AddLines';
import ListItem from './listItem/ListItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = ( ) => {
  const navigate=useNavigate()
  const [query, setQuery] = useState("")

  //Removing "lists" key from localStorage
  localStorage.removeItem("lists")

  //Getting "array of keys" from localStorage
  var arrayOfKeys = []
    for (var i=0; i< localStorage.length; i++) {
      var key = localStorage.key(i);
      // var value = localStorage[key];
      arrayOfKeys.push(key)
  }
  // console.log("old:",arrayOfKeys)

  // Now I'm removing "isChecked" key from arrayOfKeys
  let filteredArrayOfKeys = arrayOfKeys.filter(x => x !== "isChecked")
  // console.log("new:",filteredArrayOfKeys)

  //Corresponding values of each Key from localStorage
  let data2 = filteredArrayOfKeys.map((x)=>{
    return (JSON.parse(localStorage.getItem(x)))
  })
  // console.log("keyValues",data2)

 const deleteAll=()=>{
  localStorage.clear()
  navigate("/")
 }

  return (
    <>
    <Container fluid className='m-0 p-0'>
{/* home page header part */}
    <Container fluid className='headerContainer'>
        <Row className='header__1'>        
            <Col xs={4} className='header3'>
               Notes
             </Col>

             <Col xs={8} className='dots__icon'>
             
                <NavDropdown 
                  title={<button className='header__button__dot'><BiDotsVerticalRounded className='dot' /></button>} 
                  id="basic-nav-dropdown" 
                  className="navDrop">

                  <NavDropdown.Item 
                    onClick={deleteAll}
                    
                    className='navItem'>
                      Delete all notes
                  </NavDropdown.Item>

                </NavDropdown>
              
            </Col>
        </Row>
    </Container>

<Container className='allBelowHomeNote'>
    {/* home page search bar part */}

    <Container className='searchFixed'>
    <Row className='searchFixedRow'>        
        <Col xs={11} className="border__searchBar">
            
            <input onChange={(e)=>setQuery(e.target.value)} value={query} type="text" placeholder='Search' className='input'/>

            <button type='submit' className='button'><AiOutlineSearch className='searchIcon__background'/></button>
        </Col>
    </Row>
    </Container> 

    {/* home page below search bar saved data  */}  
    <Container className='containerItems'>
      <Row className="main__row">     
   {
    data2.filter((a,i)=>a[1].DATA.some(d=>d.title?.toLowerCase().includes(query?.toLocaleLowerCase())) ||
    a[1].DATA.some(d=>d.content?.toLowerCase().includes(query?.toLocaleLowerCase())) ||
    a[1].DATA.some(d=>d.amount?.toLowerCase().includes(query?.toLocaleLowerCase()))
    ).map((x,i)=>{
      return <ListItem 
              x={x}
              key={i}
              id ={i}
              query={query}
      />
    })
   }
      </Row>
  </Container>

{/* home page footer plus sighn for adding new data */}

  <footer className='plus__footer'>
      <Link to="/UpdateNotes/new"
      
      type='submit' 
      className='plus__button'
      >
      <FiPlus className='plus' />
      </Link>
    </footer>
{/* ...............................   */}
</Container>
    </Container>
    </>
  )
}

export default HomePage