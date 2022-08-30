import React, { useEffect, useState } from 'react';
import Forex from '../composant/news/Forex';
import Loading from '../utils/loading';
import Header_news from '../utils/Header_news';

function Body() {
    const [loadingForex, setLoading] = useState(true);
    const [Data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://finnhub.io/api/v1/news?category=forex&minId=10&token=cc5qskaad3i9rj8t1fpg'
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log({ error });
            });
    }, []);

    return (
        <React.StrictMode>
            <Header_news />,
            {loadingForex ? <Loading /> : <Forex data={Data} />}
        </React.StrictMode>
    );
}

export default Body;
