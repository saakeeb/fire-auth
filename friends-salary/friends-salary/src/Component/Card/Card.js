import React from 'react';
import './Card.css';

const Card = (props) => {

    const { img, name, mobile, job, age, income, address, zipCode, email} = props.friend
    return (

        <div className="row row-cols-1 row-cols-md-2 container-fluid" style={{display:'flex'}}>
            <div className="col mb-4" onClick={()=>props.handleAdd(props.friend)}>
                <div className="card" style={{width:'auto'}}>
                    <div>
                        <img src={img} className="card-img-top" alt="Friends" />
                        <h3  style={{textAlign:'center'}}>{name}</h3>
                    </div>
                    <div className="card-body" style={{display:'flex'}}>
                        
                        <section className='left'>
                            <h6>Age: {age}</h6>
                            <h6>Contact: {mobile}</h6>
                            <h6>Salary: ${income}</h6>
                            <h6>Email: {email}</h6>
                        </section>
                        <section className="right">
                            <h6>Job: {job}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Zip Code: {zipCode}</h6>
                        </section>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Card;