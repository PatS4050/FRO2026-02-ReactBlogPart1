//referentie https://hatchjs.com/how-to-display-date-in-react-js/

function changeDate(tomato) {
    const date = new Date(tomato);
    return date.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default changeDate();