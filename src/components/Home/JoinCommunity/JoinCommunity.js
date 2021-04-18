import React from 'react';

const JoinCommunity = () => {
    return (
        <div className="contact mt-5 py-5 bg-main">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h3 className="text-warning">Enter</h3>
                    <h1 className="text-dark">To Join Our Community</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Name >>"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Phone >>"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address >>"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Address >>"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message >>"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-warning"> Send Message </button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
    );
};

export default JoinCommunity;