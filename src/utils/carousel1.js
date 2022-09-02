import React, { useState } from 'react';
import '../../style/public/style.css';

import data_fx from '../../data.json';

function Carousel1() { 
    return (
        <React.StrictMode>
            <div className="carousel1">
                <div class="container">
                    <div id="carousel">
                        
                        <figure>
                            <img
                                src={data_fx[0].image}
                                alt={data_fx[0].headline}
                            />
                            <span>{data_fx[0].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[1].image}
                                alt={data_fx[1].headline}
                            />
                             <span>{data_fx[1].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[2].image}
                                alt={data_fx[2].headline}
                            />
                             <span>{data_fx[2].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[3].image}
                                alt={data_fx[3].headline}
                            />
                             <span>{data_fx[3].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[4].image}
                                alt={data_fx[4].headline}
                            />
                             <span>{data_fx[4].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[5].image}
                                alt={data_fx[5].headline}
                            />
                             <span>{data_fx[5].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[6].image}
                                alt={data_fx[6].headline}
                            />
                             <span>{data_fx[6].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[7].image}
                                alt={data_fx[7].headline}
                            />
                             <span>{data_fx[7].headline} </span>
                        </figure>
                        <figure>
                            <img
                                src={data_fx[8].image}
                                alt={data_fx[8].headline}
                            />
                             <span>{data_fx[8].headline} </span>
                        </figure> 
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}
export default Carousel1;
