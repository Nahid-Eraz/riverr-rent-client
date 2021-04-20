import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = data => {
        const newAdmin = { ...admin };
        newAdmin[data.target.name] = data.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('name', admin.name);
        formData.append('email', admin.email);

        fetch('https://stark-shore-51397.herokuapp.com/makeAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pe-5 ms-2">
                    <h2 className="mt-3 text-center">Admin Joining Panel</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputName" name="name" class="form-label">Name</label>
                                <input onBlur={handleBlur} type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" name="email1" class="form-label">Email address</label>
                                <input onBlur={handleBlur} type="email" class="form-control" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <button type="submit" class="btn btn-main">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;