function UrlHandler(values: string[], types: string[])
{
    let baseUrl = '?';
    for (let x = 0; x < values.length; x++) {
        if (x != 0) {
            baseUrl += '&'
        }
        baseUrl += types[x] + '=' + values[x];
    }
    return baseUrl;

}

export default UrlHandler