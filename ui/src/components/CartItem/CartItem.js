import { Clear } from '@mui/icons-material';
import { useContext } from 'react';
import { useAlert } from 'react-alert';

import { CartContext } from '../../context/CartContext';

import './CartItem.scss';

const CartItem = props => {
    const cartContext = useContext(CartContext);
    const alert = useAlert();

    const handleRemoveButton = (id, title, size) => {
        cartContext.setCartContent(prevState =>
            prevState.filter(item => item.itemId !== id || item.size !== size),
        );
        alert.success(`
            ${title}
            מידה  ${size}
        הוסר מסל הקניות
        `);
    };
    return (
        <div className="cart--container">
            <img
                src={require(`../../assets/test/${props.image}`)}
                className="cart--container--image"
                alt="coverImg"
            />
            <div className="cart--left--container">
                <div className="cart--container--title">{props.title}</div>
                <br />
                <div className="cart--container--sizes">מידה: {props.size}</div>
                <br />

                <div className="cart--container--price">{props.price} ₪</div>
            </div>
            <Clear
                fontSize="small"
                className="cart--container--clear"
                onClick={() =>
                    handleRemoveButton(props.id, props.title, props.size)
                }
            ></Clear>
        </div>
    );
};

export default CartItem;
