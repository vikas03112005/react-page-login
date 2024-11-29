import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Icon  from '../img/student.gif'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import "../App.css"
export default function New() {



 
//-------------Api-------------//
 const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [altnumber, setAltnymber] = useState('');
  const [gender, setGender] = useState('');
  const [student, setStudent] = useState('');
  const [image, setImage] = useState('');
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {


    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation(  );
    
    }
 
   

  
    e.preventDefault();

    axios.post('https://656b20fadac3630cf727baa7.mockapi.io/crud-form/',  {
      e_name: name,
      e_lastname: lastname,
      e_father: fathername,
      e_date: date,
      e_number: number,
      e_altnumber: altnumber,
      e_gender: gender,
      e_student: student,
      e_image:image ,

    }).then(() => {
      navigate('/History');
    }).catch((err) => {
      window.alert(err)
    })
  setValidated(true);
  }

  return (
    <div className="main">
       <div className="icon">
      <img src={Icon} alt="hello" width={"500px"} />
      </div>

    <div id='student'>
     
  
      <div className="heding">
    
        <h1 className='fs-1'>STUDENT REGISTRATION FORM </h1>
        <Link to='/History'>
        <button className='btn btn-primary  '>Show Data</button>
        </Link>
      </div>


      <div className="radio">
        <div class="form-check">
          <input class="form-check-input"  required value={"Student"} type="radio" name="flexRadioDefault" id="flexRadioDefault1"     onChange={(e) => setStudent(e.target.value)} />
          <label class="form-check-label" for="flexRadioDefault1">
            Student
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" value={"Parent"} required   type="radio" name="flexRadioDefault" id="flexRadioDefault2"    onChange={(e) => setStudent(e.target.value)} />
          <label class="form-check-label" for="flexRadioDefault2">
            Parent
          </label>
        </div>
      </div>
      <Form noValidate  validated={validated} onSubmit={handleSubmit} id='set'  >


        <Row className="mb-6 ">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label >First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              className='mb-3'
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" >
              Please Enter first Name
            </Form.Control.Feedback>
            <Form.Control.Feedback>Valid.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
             
              onChange={(e) => setLastname(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Last Name
            </Form.Control.Feedback>
            <Form.Control.Feedback>Valid.</Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Father name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Father name"
              className='mb-3'
              onChange={(e) => setFathername(e.target.value)} 
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Barth Date
            </Form.Control.Feedback>
            <Form.Control.Feedback>Vaid.</Form.Control.Feedback>
          </Form.Group>




          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Number</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="text"
                placeholder="Number"
                className='mb-3'
                onChange={(e) => setNumber(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Number
              </Form.Control.Feedback>
              <Form.Control.Feedback>Vaid.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>


          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>ALTNumber</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="text"
                placeholder="AltNumber"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => setAltnymber(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter AltNumber
              </Form.Control.Feedback>
              <Form.Control.Feedback>Vaid.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>



        </Row>



        <div class="col-md-2 mb-3">
          <label for="validationCustom04" class="form-label">Gender</label>
          <select class="form-select" id="validationCustom04"     onChange={(e) => setGender(e.target.value)} required>
            <option selected disabled value="">Choose...</option>
            <option required >Male</option>
            <option required >Female</option>
          </select>
          <div class="invalid-feedback">
            Please select Gender
          </div>
          <input type="file"  onChange={(e) => setImage(e.target.files)} />
        </div>




        <Button type="submit">Submit form</Button>
      </Form>
    </div>

    </div>
  );
}
