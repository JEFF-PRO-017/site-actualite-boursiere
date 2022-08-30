import '../../style/public/style.css';
import React from 'react';
import Loading from '../../utils/loading';

const convertTime = (timeBrut) => {
    let dateObj = new Date(timeBrut * 1000);
    let utcString = dateObj.toUTCString();
    let time = utcString.slice(-11, -4);
    return time;
};

const Forex = ({ data, loading }) => {
    return (
        <React.StrictMode>
            <div className="forex">
                {data.map((Data) => (
                    <div className="forex-cth-with">
                        <div className="card mb-3 ">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={Data.image}
                                        className="img-fluid rounded-start"
                                        alt={Data.category}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {Data.headline}
                                        </h5>
                                        <p className="card-text">
                                            {Data.summary}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Last updated{' '}
                                                {convertTime(Data.datetime)}
                                            </small>
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Source
                                                <a href={Data.url}>
                                                    {Data.source}
                                                </a>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.StrictMode>
    );
};

export default Forex;
