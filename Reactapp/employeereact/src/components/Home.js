import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {

    let history = useNavigate();
    //Silmek funksiyasi

    const EmployeeDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);
        Employees.splice(index, 1);
        history('/');
    };

    //Edit funksiyasi
    const EmployeeEdit = (id, name, surname, salary)=>{
        localStorage.setItem('Name', name);
        localStorage.setItem('Surname', surname);
        localStorage.setItem('Salary', salary);
        localStorage.setItem('id', id);
    };

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Link className='d-grid gap-2' to='/add'>
                    <Button>Add</Button>
                </Link>
                <br />
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Salary</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Surname}</td>
                                            <td>{item.Salary}</td>
                                            <td><Button id="btn-delete" onClick={() => EmployeeDelete(item.id)}>Delete</Button></td>
                                            <Link to={'/edit'}>
                                                <td><Button id="btn-edit" 
                                                onClick={() => EmployeeEdit(item.id,item.Name, item.Surname, item.Salary)}>Edit</Button></td>
                                            </Link>
                                        </tr>
                                    )
                                })
                                :
                                "No employee data"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}
export default Home;