import React, { useEffect, useState } from 'react';
import Forex from '../composant/news/Forex';
import Loading from '../utils/loading';
import Header_news from '../utils/Header_news';
import General from '../composant/news/general';
import Crypto from '../composant/news/crypto';
import Merge from '../composant/news/merge';
import Nav_Gen from '../composant/container/nav/nav_gen';
import Nav_forex from '../composant/container/nav/nav-forex';
import Nav_cryp from '../composant/container/nav/nav-cryp';
import Nav_merge from '../composant/container/nav/nav-merg';

function Body() {
    // appel  api de la page generale

    const [loadingGr, setLoadingGr] = useState(true);
    const [DataGr, setDataGr] = useState({});

    useEffect(() => {
        setLoadingGr(true);
        fetch(
            'https://finnhub.io/api/v1/news?category=general&minId=10&token=cc5qskaad3i9rj8t1fpg'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataGr(data);
                setLoadingGr(false);
            })
            .catch((error) => {
                console.log({ error });
            });
    }, []);
    // appel  api de la page forex

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
    // appel de l'api de la page crypto

    const [loadingCr, setLoadingCr] = useState(true);
    const [DataCr, setDataCr] = useState({});

    useEffect(() => {
        setLoadingCr(true);
        fetch(
            'https://finnhub.io/api/v1/news?category=crypto&minId=10&token=cc5qskaad3i9rj8t1fpg'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataCr(data);
                setLoadingCr(false);
            })
            .catch((error) => {
                console.log({ error });
            });
    }, []);
    // appel de l'api de la page merge

    const [loadingMr, setLoadingMr] = useState(true);
    const [DataMr, setDataMr] = useState({});

    useEffect(() => {
        setLoadingMr(true);
        fetch(
            'https://finnhub.io/api/v1/news?category=merge&minId=10&token=cc5qskaad3i9rj8t1fpg'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataMr(data);
                setLoadingMr(false);
            })
            .catch((error) => {
                console.log({ error });
            });
    }, []);

    return (
        <React.StrictMode>
            {/* <Loading/>
            <General />
            <Forex />
            <Crypto />
            <Merge /> */} <Nav_Gen />
         <General/>
           
            {/* {loadingGr ? <Loading /> : <General data={DataGr} />} */}
            <Nav_forex />
            {loadingForex ? <Loading /> : <Forex data={Data} />}
            <Nav_cryp />
            {loadingCr ? <Loading /> : <Crypto data={DataCr} />}
            <Nav_merge />
            {loadingMr ? <Loading /> : <Merge data={DataMr} />}
        </React.StrictMode>
    );
}

export default Body;
