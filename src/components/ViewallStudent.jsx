import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewallStudent = () => {
    const [data,changeData]=useState(
        [
        {"name":"Aju L M","admno":12222,"roll":12,"image":"https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk="},
        {"name":"Anu M M","admno":14444,"roll":13,"image":"https://t4.ftcdn.net/jpg/04/24/15/27/360_F_424152729_5jNBK6XVjsoWvTtGEljfSCOWv4Taqivl.jpg"},
        {"name":"Ammu P K","admno":15555,"roll":14,"image":"https://img.freepik.com/premium-photo/successful-indian-female-student-with-group-college-students-classroom-university_466689-95593.jpg"},
        {"name":"Ayan L K","admno":15678,"roll":35,"image":"https://images.shiksha.com/mediadata/images/articles/1669870914phpAXbrcr.jpeg"},
        {"name":"Renuka M P","admno":15123,"roll":36,"image":"https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg"},
        {"name":"Leena","admno":15345,"roll":38,"image":"https://i.pinimg.com/originals/aa/c9/4e/aac94e41310947cbcd5f38a41ccc0132.png"},
        {"name":"Mathew Thomas","admno":15456,"roll":39,"image":"https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-260nw-2071252046.jpg"},
        {"name":"Ambika Rajan","admno":15678,"roll":35,"image":"https://img.lovepik.com/free-png/20211216/lovepik-female-college-student-png-image_401684885_wh1200.png"}
        ]
    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img height="250 px"src={value.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Name:{value.name}</h5>
                                            <p class="card-text">admission No :{value.admno}</p>
                                            <p class="card-text">Roll No:{value.roll}</p>
                                            <a href="#" class="btn btn-primary">Remove</a>
                                        </div>
                                    </div>
                                </div>
                                }
                             )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewallStudent