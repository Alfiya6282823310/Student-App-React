import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallStudent = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/View").then(
            (response) => {
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Admission</th>
                                    <th scope="col">college</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td scope="row">{value.name}</td>
                                            <td>{value.rollno}</td>
                                            <td>{value.admno}</td>
                                            <td>{value.college}</td>
                                        </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewallStudent