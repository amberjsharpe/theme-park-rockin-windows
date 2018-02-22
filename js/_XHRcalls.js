"use strict";

// Grab Area Data by key

let getAreaData = () => {
    // Area data in variable 
    var areaData = `https://rockin-windows.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${event.target.id}`;
    console.log(areaData);
    return new Promise((resolve, reject) => {
    
   // Create request
   let request = new XMLHttpRequest();

    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            resolve(data);       
        } 
    };
    request.open("GET", areaData);
    request.send();
    }).then(
        (resolve) => {
            // Call a function to show my parsed data
        },
        (reject) => {
            console.log("didn't load!");
        }
    );
};
 


let getTimeData = () => {
    return new Promise((resolve, reject) => {
    // Area data in variable
    var timeData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
    // Create request
    let request = new XMLHttpRequest();

    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            resolve(data);       
        } 
    };
    request.open("GET", timeData);
    request.send();
    });
};
getTimeData()  
    .then(
        (resolve) => {
            // Call a function to show my parsed data
        },
        (reject) => {
            console.log("didn't load!");
        }
    );

let getPOIData = () => {
    return new Promise((resolve, reject) => {
    // Area data in variable
    var POIData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
   // Create request
   let request = new XMLHttpRequest();

    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            resolve(data);       
        } 
    };
    request.open("GET", POIData);
    request.send();
    });
};
getPOIData()  
    .then(
        (resolve) => {
            // Call a function to show my parsed data
        },
        (reject) => {
            console.log("didn't load!");
        }
    );


module.exports = {getAreaData, getTimeData, getPOIData};