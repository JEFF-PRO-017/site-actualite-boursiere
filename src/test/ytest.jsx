const [loadingMr, setLoadingMr] = useState(true);
const [DataMr, setDataMr] = useState({});

useEffect(() => {
    setLoadingMr(true);
    fetch(
        'https://finnhub.io/api/v1/news?category=crypto&minId=10&token=cc5qskaad3i9rj8t1fpg'
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

{loadingMr ? <Loading /> : <Forex data={DataMr} />}