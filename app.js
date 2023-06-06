function calculateinclusiveprice(exclusiveprice,taxrate){
    const inclusiveprice = exclusiveprice / taxrate + exclusiveprice

    return inclusiveprice
}


inclusiveprice = calculateinclusiveprice(500,20)
console.log(inclusiveprice)