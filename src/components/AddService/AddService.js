import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5 text-center">
                    <h2 className="mt-3">Add Service</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Category Name" required />
                            <br />
                            <br />
                            <input type="number" {...register("charge", { min: 18, max: 99 })} placeholder="Charge" required />
                            <br />
                            <br />
                            <input className="btn btn-main align-items-center" name="img" type="file" required />
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