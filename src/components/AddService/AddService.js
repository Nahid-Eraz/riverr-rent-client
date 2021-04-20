import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            key: Math.floor(Math.random() * 100000000000000000).toString(),
            charge: parseInt(data.charge),
            imageURL: imageURL
        };

        const url = `https://stark-shore-51397.herokuapp.com/dashboard/addService`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '95712b29d7c46d8877e22dbcbf22ddab');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pe-5 text-center bg-main">
                    <h2 className="mt-3">Add Service</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Category Name" required />
                            <br />
                            <br />
                            <input type="number" {...register("charge", { min: 1, max: 10000 })} placeholder="Charge" required />
                            <br />
                            <br />
                            <input className="btn btn-main align-items-center" name="img" type="file" onChange={handleImageUpload} required />
                            <br />
                            <br />
                            <input className="btn btn-main" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;