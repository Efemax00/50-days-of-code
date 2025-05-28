function cutFruitPieces(fruitCount)    {
    return fruitCount * 4;
}

function makeJuice(apple, oranges)     {
    const applePieces = cutFruitPieces(apple);
    const orangesPieces = cutFruitPieces(oranges);

    return "juice with ${applePieces} apple pieces and ${orangepieces} orange pieces.";
}

console.log(makeJuice(50,90));