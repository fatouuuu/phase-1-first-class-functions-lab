// Code your solution in this file!
//returnFirstTwoDrivers
const returnFirstTwoDrivers = function (arrayOfDrivers){
    return arrayOfDrivers.slice(0, 2)
}

//returnLastTwoDrivers
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(drivers.length-2, drivers.length)
}

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}

//fareDoubler
const fareDoubler = createFareMultiplier(2);

//fareTripler
const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers
function selectDifferentDrivers(drivers, selector){
    return selector(drivers)
}