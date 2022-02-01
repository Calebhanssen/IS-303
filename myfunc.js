function capIt(sPhrase) {
  var bConvert = false;
  var sNewPhrase = "";

  for (var iCount = 0; iCount < sPhrase.length; iCount++) {
    if (bConvert == true || iCount == 0) {
      sNewPhrase = sNewPhrase + sPhrase.charAt(iCount).toUpperCase();
    } else {
      sNewPhrase = sNewPhrase + sPhrase.charAt(iCount);
    }

    if (sPhrase.charAt(iCount) == " ") {
      bConvert = true;
    } else {
      bConvert = false;
    }
  }
  return sNewPhrase;
}
edited;
