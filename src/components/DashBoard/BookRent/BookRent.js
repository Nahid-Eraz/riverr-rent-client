import React from 'react';
import { useForm } from "react-hook-form";

const BookRent = (props) => {
    const { name, charge, imageURL } = props.bookRent;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="row d-flex align-items-center">
            <div className="col-md-6 mt-5 pt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" required />
                    <br />
                    <br />
                    <input {...register("email")} placeholder="Email" required />
                    <br />
                    <br />
                    <input {...register("phone")} placeholder="Phone" required />
                    <br />
                    <br />
                    <input {...register("address")} placeholder="Address" required />
                    <br />
                    <br />
                    <input className="btn btn-main" type="submit" />
                </form>
            </div>
            <div className="col-md-6 img-fluid">
                <img src={imageURL} alt="" />
                <h4 className="text-warning">Category: {name}</h4>
                <h4>Require <span className="text-warning">${charge}</span> per hour</h4>
            </div>
        </div>
    );
};

export default BookRent;

