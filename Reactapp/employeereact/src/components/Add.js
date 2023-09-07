import React, { useState } from 'react';
import { Button, Form, FormGroup, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from 'uuid';
import {Link, useNavigate } from 'react-router-dom';

function Add() {
    const[Name, setName]=useState('');
    const[Surname, setSurname]=useState('');
    const[Salary, setSalary]=useState('');

    let history=useNavigate();

    //Elave etmek funksiyasi
    const EmployeeAdd=(e)=>{
        e.preventDefault();
        const ids =uuid();
        let avtoid=ids.slice(0,8);

        let a=Name,b=Surname,c=Salary;

        Employees.push({id:avtoid, Name: a, Surname: b, Salary:c});
        history("/");
    };

    return (
     <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlid="formName">
                <Form.Control type="text" placeholder="Enter name" required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formSurname">
                <Form.Control type="text" placeholder="Enter Surname" required onChange={(e)=>setSurname(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formSalary">
                <Form.Control type="text" placeholder="Enter Salary" required onChange={(e)=>setSalary(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>EmployeeAdd(e)} type="submit">Submit</Button>
        </Form>
     </div>
    )
}
export default Add;