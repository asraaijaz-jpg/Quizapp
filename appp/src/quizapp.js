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
function optionvalue()
{
  so(co+1);
}

const showdata=()=> {

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
  so('');
  console.log(cq1);
  console.log(cq);
  console.log('hello');
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return(<div className='container' style={{backgroundColor:'#B1C5E7 '}}>

<Form1/>
<button onClick={showdata}>chec</button>
<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Add Questions</Button></div> 
<h3>Question Format</h3>

  <form>
 <center> <table class="table table-hover">  <thead>
    <tr>
      <th scope="col">Text</th>
      <th scope="col">Choices</th>
      <th scope="col">Type</th>
      <th scope="col">Points</th>
    </tr>
  </thead>
  <tbody>

{co1.map((traverse,index)=>{
return(<tr>

{cq1.map((data , index)=>{  return (
    <td>{data}</td>
  );
})}
{co1.map((data1 , index)=>{
  return (
    <td>{data1}</td>
  );
})}  
{ch1.map((data2 , index)=>{
  return (
    <td>{data2}</td>
  );
})}   
{cc1.map((data3 , index)=>{
  return (
    <td>{data3}</td>
  );
})} 

</tr>);

})} 

</tbody>
</table>
 </center>
</form>
<div className="d-flex flex-row-reverse m-3">
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Question</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Question" onChange={question} />
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
          <Button variant="secondary" onClick={optionvalue}>Add</Button>
          <Button variant="secondary" onClick={handleHide}>Close</Button>
             </Modal.Footer>
      </Modal>

</div>)    

}

export default Quizapp;
