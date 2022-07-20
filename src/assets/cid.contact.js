
// codes from cid.contact
const abc = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
];
var MSB = 0x80,
  REST = 0x7f;
function readVarint(buf, _offset) {
  var res = 0,
    offset = _offset || 0,
    shift = 0,
    counter = offset,
    b,
    l = buf.length;

  do {
    if (counter >= l || shift > 49) {
      readVarint.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB);

  readVarint.bytes = counter - offset;

  return res;
}

// official code (cid.contact):
function popProtocol(buf) {
  let code = readVarint(buf, 0);
  buf = buf.slice(readVarint.bytes);

  if (code == 0x900) {
    return ["Bitswap", buf];
  } else if (code == 0x910 || code == 4128768) {
    return ["Graphsync", buf];
  } else {
    return [code, buf];
  }
}
function toContext(code, buf) {
  if (code == "Graphsync") {
    try {
      const cbor = global.CBOR.decode(Uint8Array.from(buf).buffer);
      const cid = window.b2c(Uint8Array.from(cbor.PieceCID).subarray(1));
      let str = "In piece " + cid.toString();
      if (cbor.VerifiedDeal) {
        str += " (Stored as verified data)";
      }
      if (cbor.FastRetrieval) {
        str += " (Unsealed copy available)";
      }
      return [str, Uint8Array.from([])];
    } catch (e) {
      return ["Non-CBOR Context:" + e, buf];
    }
  }
  return ["", buf];
}
function base64ToBytesArr(str) {
  let result = [];
  for (let i = 0; i < str.length / 4; i++) {
    let chunk = [...str.slice(4 * i, 4 * i + 4)];
    let bin = chunk
      .map((x) => abc.indexOf(x).toString(2).padStart(6, 0))
      .join("");
    let bytes = bin.match(/.{1,8}/g).map((x) => +("0b" + x));
    result.push(
      ...bytes.slice(0, 3 - (str[4 * i + 2] == "=") - (str[4 * i + 3] == "="))
    );
  }
  return result;
}
export {
  readVarint,
  popProtocol,
  toContext,
  base64ToBytesArr
}