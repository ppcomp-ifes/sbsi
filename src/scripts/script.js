const setResource = (url,query) => {
    fetch(url)
        .then(response => response.text())
        .then(data => document.querySelector(query).innerHTML = data)
}
