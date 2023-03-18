// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
const headquartersLocation = 42;
const numberOfBlocksFromHeadquarters = Math.abs(pickupLocation - headquartersLocation);
return numberOfBlocksFromHeadquarters;}
//
function distanceFromHqInFeet(pickupLocation) {
const distanceBlocks = distanceFromHqInBlocks(pickupLocation);
const distanceFeet = distanceBlocks * 264;
return distanceFeet;}
//
function distanceTravelledInFeet(start, end) {
const distanceBlocks = Math.abs(start - end);
const distanceFeet = distanceBlocks * 264;
return distanceFeet;}
//
function calculatesFarePrice(startBlock, endBlock) {
const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * (0.02);
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
}