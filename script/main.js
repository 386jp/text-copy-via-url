function copyText() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const text = urlParams.get('t')
    navigator.clipboard.writeText(text);
}
