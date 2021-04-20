import React from 'react';
import { useForm } from "react-hook-form";

const BookRent = (props) => {
    const { name, charge, imageURL } = props.bookRent;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const bookRentData = {
            key: Math.floor(Math.random() * 100000000000000000000).toString(),
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            category: name,
            charge: charge,
            date: new Date().toDateString()
        };
        console.log(bookRentData)

        const url = `https://stark-shore-51397.herokuapp.com/dashboard/bookings`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(bookRentData)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('Rent booking successfully')
                
            }
        })
    };

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
                    <form action="/action_page.php">
                        <input Name type="radio" name="payment" id="1" value="Master Card"/>
                        <label for="card"> Master Card</label>
                        <input className="ms-4" type="radio" name="payment" id="2" value="bKash"/>
                        <label for="mBank"> bKash</label>
                    </form>
                    <br />
                    <br />
                    <input className="btn btn-main" type="submit" />
                </form>
            </div>
            <div className="col-md-3 img-fluid">
                <img src={imageURL} alt="" />
                <h4 className="text-warning">Category: {name}</h4>
                <h4>Require <span className="text-warning">${charge}</span> per hour</h4>
            </div>
        </div>
    );
};

export default BookRent;

