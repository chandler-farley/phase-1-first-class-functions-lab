// Code your solution in this file!
const drivers = [];
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
function selectDifferentDrivers(drivers, funct) {
    return funct(drivers);
}