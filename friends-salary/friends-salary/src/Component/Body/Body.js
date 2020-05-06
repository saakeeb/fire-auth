import React, { useState } from 'react';
import "./Body.css";
import fakeData from '../../FriendData';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';

const Body = () => {

    const first15 = fakeData.slice(0, 15);
    const [friends, setFriends] = useState(first15);

    const [cart, setCart] = useState([])

    const handleAdd = (friend) => {
        console.log("Friends Added", friend);
        const newCart = [...cart, friend];
        setCart(newCart);
    }

    return (
        <div className='container-fluid body'>
            
            <div className="card-body">
                {
                    friends.map(item=> 
                    <Card 
                        handleAdd={handleAdd}
                        friend={item}>

                    </Card> )
                }
            </div>
            <div className='card-side'>
                <Summary cart={cart}>

                </Summary>
            </div>
        </div>
    );
};

export default Body;