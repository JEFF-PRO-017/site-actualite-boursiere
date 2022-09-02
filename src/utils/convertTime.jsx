// import React , {Component } from "react";?
export const convertTime = (date) => {
    debugger;
    debugger;
    const timeActuelms = new Date().getTime();
    const timeActuel = timeActuelms / 1000;
    var minutes = Math.trunc((timeActuel - date) / 60);
    var heures = 0;
    var jours = 0;

    if (minutes < 60) {
        return minutes + ' min';
    } else {
        if (minutes < 360) {
            const rest = minutes % 60;
            heures = (minutes - rest) / 60;
            return heures + ' H ' + rest + ' min';
        } else {
            const reste = minutes % 360;
            jours = (minutes - reste) / 360;
            if (reste < 60) {
                return jours + ' J ' + reste + ' min';
            } else {
                const minutes = reste % 60;
                heures = (reste - minutes) / 60;
                return jours + ' J ' + heures + ' H ' + minutes + ' min';
            }
        }
    }

    // var offset = date.getTimezoneOffset() / 60;
    // var hours = date.getHours();

    // newDate.setHours(hours - offset);

    return minutes;
};
