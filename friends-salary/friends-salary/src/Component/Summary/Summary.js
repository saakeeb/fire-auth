import React from 'react';

const Summary = (props) => {
    const cart = props.cart;
    console.log(cart, 'sum')
    const totalIncome = cart.reduce ((total, inc) =>total + inc.income,0)

    const tax = (totalIncome / 6.67).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='container-fluid'>
            <h5>Summary Of Yearly Income</h5>
            <h6>Friends Added: {cart.length}</h6>
            <h6>Income: {totalIncome}</h6>
            <h6>Govt. Tax: {tax}</h6>
            <h6>Income after Tax: {formatNumber(totalIncome - tax)}</h6>

        </div>
    );
};

export default Summary;