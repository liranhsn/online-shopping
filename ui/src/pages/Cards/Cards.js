import { useEffect, useContext, useState } from 'react';

import { GlobalContext } from '../../context/GlobalContext';
import Card from '../../components/Card/Card';
import { getShirts } from '../../actions/shirtsAction';

import './Cards.scss';

function Categories() {
    const { setIsLoadingApp } = useContext(GlobalContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchShirts = async () => {
            setIsLoadingApp(true);
            const res = await getShirts();

            if (!res) {
                alert.error('Error loading data');
            }
            setData(res);
            setIsLoadingApp(false);
        };

        fetchShirts();
    }, [setIsLoadingApp]);

    const cards = data.map(item => {
        return <Card key={item._id} {...item} />;
    });

    return (
        <>
            <div className="container">
                <section className="cards-list">{cards}</section>
            </div>
        </>
    );
}

export default Categories;
