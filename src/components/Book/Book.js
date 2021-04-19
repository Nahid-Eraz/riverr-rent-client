import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const Book = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5">
                    <h2 className="mt-3">Book Your Rent</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Name" required />
                            <br />
                            <br />
                            <input {...register("email")} placeholder="Email" required />
                            <br />
                            <br />
                            <input {...register("category")} placeholder="Category" required />
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

export default Book;