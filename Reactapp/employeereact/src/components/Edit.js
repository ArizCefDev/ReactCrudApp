import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Salary, setSalary] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    //Guncellemek
    const EmployeeSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = Name;
        a.Surname = Surname;
        a.Salary = Salary;

        history("/");
    }

    //Yadda saxlamaq
    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setSurname(localStorage.getItem('Surname'));
        setSalary(localStorage.getItem('Salary'));
        setid(localStorage.getItem('id'));
    }, []);



    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlid="formName">
                    <Form.Control type="text" placeholder="Enter name" value={Name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlid="formSurname">
                    <Form.Control type="text" placeholder="Enter Surname" value={Surname} required onChange={(e) => setSurname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlid="formSalary">
                    <Form.Control type="text" placeholder="Enter Salary" value={Salary} required onChange={(e) => setSalary(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => EmployeeSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default Edit;