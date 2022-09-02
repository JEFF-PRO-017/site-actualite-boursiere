import React from 'react';
import $ from 'jquery/dist/jquery.min.js';
import '../../style/public/style.css';
import { funcContainer } from '../../utils/funcConctainer';
import { convertTime } from '../../utils/convertTime';

// funcContainer()

function Cont_merge({data}) {
    
    return (
        <React.StrictMode>
            <div className="  cards  ">
                {data.map((data,index) => (
                    <div key={`Me-${index}`} className="card ">
                    <div className="card__image-holder">
                            <img
                                className="card__image"
                                src={data.image}
                                alt={data.headline}
                            />
                        </div>
                        <div className="card-title">
                            <a href='#' className="toggle-info btn">
                                <span className="left"></span>
                                <span className="right"></span>
                            </a>
                            <h2>
                                {data.headline}
                                <small> Update since : {convertTime(data.datetime )} </small>
                            </h2>
                        </div>
                        <div className="card-flap flap1">
                            <small> Summary</small>
                            <div className="card-description">
                                {data.summary}
                            </div>
                            <div className="card-flap flap2">
                                <div className="card-actions">
                                    <a href="#" className="btn">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.StrictMode>
    );
}
export default Cont_merge;
