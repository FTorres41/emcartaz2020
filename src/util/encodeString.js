const encodeString = (value) => {
    var encoded = encodeURI(value);
    var decoded = decodeURI(encoded);

    return decoded;
}

export default encodeString;