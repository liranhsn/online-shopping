import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { Button } from '@mui/material';
import { useAlert } from 'react-alert';

import { GlobalContext } from '../../context/GlobalContext';
import { CartContext } from '../../context/CartContext';
import Sizes from '../../components/Sizes/Sizes';
import ItemInformation from '../../components/ItemInformation/ItemInformation';
import { getShirtById } from '../../actions/shirtsAction';

import './CardInfo.scss';

const CardInfo = () => {
    const { cardId } = useParams();
    const cartContext = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const { setIsLoadingApp } = useContext(GlobalContext);
    const [cardData, setCardData] = useState(null);
    const alert = useAlert();

    useEffect(() => {
        const fetchCardById = async cardId => {
            setIsLoadingApp(true);
            const res = await getShirtById(cardId);

            if (!res) {
                alert.error('Error loading data');
            }
            setCardData(res);
            setIsLoadingApp(false);
        };

        fetchCardById(cardId);
    }, [setIsLoadingApp, cardId, alert]);

    const handleSizeSelect = sizeId => {
        setSelectedSize(sizeId);
    };

    /**
     * Handle adding to cart
     * @param {*} itemId
     */
    const handleAddToShoppingCardButton = itemId => {
        const isAlreadyExist = cartContext.cartContent.find(item => {
            return itemId === item.itemId && item.size === selectedSize;
        });
        if (isAlreadyExist) {
            alert.error(`${cardData.title} כבר קיים בסל הקניות`);
        } else {
            cartContext.setCartContent(prevState => {
                return [
                    ...prevState,
                    {
                        itemId: itemId,
                        size: selectedSize,
                        price: cardData.price,
                        title: cardData.title,
                        image: cardData.coverImg,
                    },
                ];
            });
            alert.success(`${cardData.title} התווסף לסל הקניות `);
        }
    };

    return (
        <>
            {cardData && (
                <>
                    {' '}
                    <div className="slide-container">
                        <Slide>
                            <div className="each-slide-effect">
                                <img
                                    src={`${cardData.images[0]}`}
                                    className="each-slide-effect--image"
                                    alt="each-slide-effect"
                                />
                            </div>
                            <div className="each-slide-effect">
                                <img
                                    src={`${cardData.images[1]}`}
                                    className="each-slide-effect--image"
                                    alt="each-slide-effect"
                                />
                            </div>
                            <div className="each-slide-effect">
                                <img
                                    src={`${cardData.images[2]}`}
                                    className="each-slide-effect--image"
                                    alt="each-slide-effect"
                                />
                            </div>
                        </Slide>
                    </div>
                    <div className="Data-contaier">
                        <h4>{cardData.description}</h4>
                    </div>
                    <div className="Sizes-container">
                        <Sizes
                            sizes={cardData.sizes}
                            handleClick={handleSizeSelect}
                            selectedSize={selectedSize}
                        />
                    </div>
                    <div className="Buttons-Container">
                        <Button
                            type="button"
                            variant="contained"
                            onClick={() => {
                                handleAddToShoppingCardButton(cardData._id);
                            }}
                            className="AddToCart"
                            color="primary"
                        >
                            הוספה לסל
                        </Button>
                    </div>
                </>
            )}
            <br />
            <div className="p-information">
                שליח עד הבית תוך 3 ימי עסקים
                <br />
                משלוח חינם בהזמנה מעל 299 ש"ח
                <br />
                שירות החלפות/החזרות נוח ומהיר
                <br />
            </div>
            <hr />
            <br />
            <ItemInformation />
        </>
    );
};

export default CardInfo;
