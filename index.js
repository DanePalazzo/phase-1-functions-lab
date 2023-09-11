function distanceFromHqInBlocks(blocks) {
   if (blocks < 42){
    return 42 - blocks
   }
   else{
    return blocks - 42
   }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}


function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264
    }
    else{
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far"
    }
    else if (distanceTravelledInFeet(start, destination) > 2000){
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 400){
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else{
        return 0
    }

}
