import React from 'react';
import { useNavigate } from 'react-router';

import './Card.scss';

export default function Card(props) {
    const Navigate = useNavigate();
    return (
        <div className="card" onClick={() => Navigate(`cardInfo/${props._id}`)}>
            <img
                src={require(`../../assets/test/${props.coverImg}`)}
                className="card--image"
                alt="coverImg"
            />
            <div className="card--title">{props.title}</div>
            <div className="card--price">
                <span className="bold">{props.price} ₪</span>
            </div>
        </div>
    );
}
