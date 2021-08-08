import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import Questioncreator from './Questioncreator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { RadioGroup, Radio } from 'react-radio-group';
import { Table } from 'react-bootstrap';
import Form1 from './forrm';
import data from './json';
import dataa from './json';


function Quizapp()
{

  const [showre, setShowre] = useState(false);
  const handleShowre = () => setShowre(true);
  const handleclosere = () => setShowre(false);


  const [show, setShow] = useState(false);
  const [pop, setPop] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHide = () => setPop(false);
  const handlePop = () => setPop(true);

  const[cq,sq]=useState('Add Question');
  const[cq1,sq1]=useState([]);

  const[cc,sc]=useState('Add Points');  
  const[cc1,sc1]=useState([]);

  const[ch,sh]=useState('Add Type');
  const[ch1,sh1]=useState([]);

  const[co,so]=useState(0);
  const[co1,so1]=useState([]);

  const[counter,setcounter]=useState(0);
  const[json1,setjson]=useState([dataa]);

  console.log(dataa);

  function question(e)
  {
  sq(e.target.value);
  }
  function choice(e)
  {
   sc(e.target.value);  
  }
  function questionchoice(e)
{
sh(e.target.value);
}

const showdata=()=> {

setcounter(counter+1);
  sq1((olddata)=>{    
    return[...olddata,cq];
  });
  sq('');

  sc1((olddata1)=>{
    return[...olddata1,cc];
  });
  sc('');
  sh1((olddata2)=>{    
    return[...olddata2,ch];
  });
  sh('');

 so1((olddata3)=>{    
    return[...olddata3,co];
  });
so(0);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arraydata=[cq1 , co1 , ch1, cc1];


  return(<div className='container' style={{backgroundColor:'#B1C5E7 '}}>

<Form1/>
<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Add Questions</Button></div> <br></br>
<div className='row'>
  <div className='col-4'>
    <div className='p-5 m-5'>
    <i><h1>Questions</h1>
    <h1>Options</h1>
    <h1>Choices</h1>
    <h1>Points</h1></i>
      </div>
  </div>
  <div className='col-8'>
  {arraydata.map((data,index)=>{
return(
  <div className='text-center'>
  <h5 className='col' style={{margin:'10x'}}>{data[0]}</h5>
  <h5 className='col' style={{margin:'10x'}}>{data[1]}</h5>
  <h5 className='col' style={{margin:'10x'}}>{data[2]}</h5>
  <h5 className='col' style={{margin:'10x'}}>{data[3]}</h5>
  </div>
)
})}
  </div>

</div>


<div className="d-flex flex-row-reverse m-3">
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Question</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Question" onChange={question}/>
          <div className="d-flex justify-content-between">
            <div className="col-md-6">
              <h5>Question Type</h5>
              <RadioGroup name="choice" >
                <Radio value="Single Choice"  onChange={questionchoice}/> Single Choice
                <br />
                <Radio value="Multiple Choice" onChange={questionchoice} /> Multiple Choice
              </RadioGroup>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formGroupPoints">
                <Form.Label as="h5">Points</Form.Label>
                <Form.Control type="number" placeholder=""  onChange={choice}/>
              </Form.Group>
            </div>
          </div>
          <h3 className="text-center">Choices</h3>
          <Card>

            <Card.Body>
            <div className="text-center"><Button className="btn btn-primary" onClick={handlePop}>Add Choice</Button></div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={showdata}>Create</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          
        </Modal.Footer>
      </Modal>

      {/* get choices */}
      {/* <AddChoice /> */}
      <Modal show={pop} onHide={handleHide}>
        <Modal.Header closeButton>
          <h1>Choice</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Option" />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Correct Option" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>so(co+1)}>Add</Button>
          <Button variant="secondary" onClick={handleHide}>Close</Button>
             </Modal.Footer>
                   </Modal>

</div>)    

}

export default Quizapp;
