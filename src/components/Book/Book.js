import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import BookRent from '../DashBoard/BookRent/BookRent';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const { key } = useParams();
    const [bookRent, setBookRent] = useState({});

    useEffect(() => {
        fetch(`https://stark-shore-51397.herokuapp.com/dashboard/book/` + key)
            .then(res => res.json())
            .then(data => setBookRent(data))
    }, [key])

    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pe-5 ms-2 text-center">
                    <h2 className="mt-3">Book Your Rent</h2>
                    <div className="mt-5">
                        <BookRent bookRent={bookRent}></BookRent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;