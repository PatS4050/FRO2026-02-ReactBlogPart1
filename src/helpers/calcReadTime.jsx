function calcReadTime(tomato) {
    const amountOfWords = tomato.split(' ').length;
    const readingTime = Math.round(amountOfWords / 100 * 0.3);
    console.log(`Het lezen van ${amountOfWords} woorden kost ${readingTime} minuten.`);
    return readingTime;
}

export default calcReadTime;