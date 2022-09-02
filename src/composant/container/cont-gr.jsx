import React from 'react';
import $ from 'jquery/dist/jquery.min.js';
import '../../style/public/style.css';
import data from "../../data.json";
import { convertTime } from '../../utils/convertTime';
import { funcContainer } from '../../utils/funcConctainer';

// $(document).ready(function () {
//     var zindex = 10;
//     $('div.card').click(function (e) {
//         e.preventDefault();
// debugger
//         var isShowing = false;

//         if ($(this).hasClass('show')) {
//             isShowing = true;
//         }

//         if ($('div.cards').hasClass('showing')) {
//             // a card is already in view
//             $('div.card.show').removeClass('show');
//             if (isShowing) {
//                 // this card was showing - reset the grid
//                 $('div.cards').removeClass('showing');
//             } else {
//                 // this card isn't showing - get in with it
//                 $(this).css({ zIndex: zindex }).addClass('show');
//             }

//             zindex++;
//         } else {
//             // no cards in view
//             $('div.cards').addClass('showing');
//             $(this).css({ zIndex: zindex }).addClass('show');

//             zindex++;
//         }
//     });
// });
function Cont_gr() {
    funcContainer() 
    return (
        <React.StrictMode>
            <div className="  cards  ">
                {data.map((data ,index) => (
                    <div key={`Gr-${index}`} className="card ">
                        <div className="card__image-holder">
                            <img
                                className="card__image"
                                src={data.image}
                                alt={data.headline}
                                 
                            />
                        </div>
                        <div className="card-title">
                            <a href="" className="toggle-info btn">
                                <span className="left"></span>
                                <span className="right"></span>
                            </a>
                            
                            <h3>
                                {data.headline } </h3>
                                <small> Update since : {convertTime(data.datetime )} </small>
                            
                        </div>
                        <div className="card-flap flap1">
                            <h4><small> Summary</small></h4>
                            <div className="card-description">
                                {data.summary}
                            </div>
                            <div className="card-flap flap2">
                                <div className="card-actions">
                                    <a href="" className="btn">
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
export default Cont_gr;
