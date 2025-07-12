import { useNavigate } from 'react-router-dom';

import { AnimatedText } from '../../components/AnimatedText/AnimatedText';

import './Home.scss';

function Home() {
    const Navigate = useNavigate();

    return (
        <>
            <div className="Home-header">
                <AnimatedText />
                <div
                    className="Home-header--image-container"
                    onClick={() => Navigate('/cards')}
                >
                    <img
                        src={require(`../../assets/test/base2.jpg`)}
                        className="Home-header--image"
                        alt="home-header"
                    />
                </div>
            </div>
            <div className="Home-body">
                <img
                    src={require(`../../assets/Home/clothes.png`)}
                    className="Home-body--image"
                    alt="home-clothes"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/pants.png`)}
                    className="Home-body--image"
                    alt="home-pants"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/buttonedUp.png`)}
                    className="Home-body--image"
                    alt="home-buttonedUp"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/Winter.png`)}
                    className="Home-body--image"
                    alt="home-Winter"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/Jackets.png`)}
                    className="Home-body--image"
                    alt="home-Jackets"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/boots.png`)}
                    className="Home-body--image"
                    alt="home-boots"
                    onClick={() => Navigate('/cards')}
                />
            </div>
            <div className="Home-body2">
                <img
                    src={require(`../../assets/Home/Suits.png`)}
                    className="Home-body--image"
                    alt="home-Suits"
                    onClick={() => Navigate('/cards')}
                />
                <img
                    src={require(`../../assets/Home/sale.png`)}
                    className="Home-body--image"
                    alt="home-sale"
                    onClick={() => Navigate('/cards')}
                />
            </div>
        </>
    );
}

export default Home;
