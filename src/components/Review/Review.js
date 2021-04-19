import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            key: Math.floor(Math.random() * 100000000000000000).toString(),
            name: data.name,
            company: data.company,
            position: data.position,
            quote: data.quote,
            imageURL: imageURL
        };

        const url = `http://localhost:5005/dashboard/review`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server',res))
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
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pe-5 text-center">
                    <h2 className="mt-3">Give Us Your Feedback</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Name" required />
                            <br />
                            <br />
                            <input {...register("company")} placeholder="Company" required />
                            <br />
                            <br />
                            <input {...register("position")} placeholder="Position" required />
                            <br />
                            <br />
                            <input style={{height:'100px'}} {...register("quote")} placeholder="Your Feedback" required />
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

export default Review;