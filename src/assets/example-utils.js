/** @var {IthConfigTC} */
var ithExamplesConfig = {
  /**
   * The URL of the HTML Service. Default: the current URL running on port 8199
   */
  srvBaseUrl: 'https://internal-docuedge-capture-imagetrust-lb-639252354.us-west-2.elb.amazonaws.com/service-html/rest/v1.0/', //location.protocol + '//' + location.hostname + ':8199/service-html/rest/v1.0/',
  //srvBaseUrl: location.protocol + '//' + location.hostname + ':' + location.port + '/service-html/rest/v1.0/',
  //srvBaseUrl: location.protocol + '//' + location.hostname + ':8199/service-html/rest/v1.0/',
  // LogToServer: true,
  // ThemeConfiguration: {
  //   base: "#007700",
  //   accent: "#ffff00"
  // },
  // // GlobalStorageID: null,
  UseCCT: false,
  // RequireCCTOnStartup: false,
  // InitialCCTDetectDelayMs: 3000,
  // PromptForCCTDownload: false,
  // CCTUrl: 'cct-runtime/setup.exe',
  // MaxConcurrentServerOps: 3
};

/**
 * Generic AJAX Request utility method.
 * @param method - Method Type (GET, POST etc.)
 * @param url - Resource URL
 * @param xhrCallback - Callback function that receives an XMLHttpRequest object
 * @param data - Data object containing request parameters
 * @constructor
 */
function XHR(method, url, xhrCallback, data) {
  data = data || null;
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/xml');
  xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  xhr.setRequestHeader("Pragma", "no-cache");
  xhr.setRequestHeader("Expires", "0");

  xhr.onreadystatechange = function() {
    if(xhrCallback && xhr.status >= 200 && xhr.status < 300 && xhr.readyState == 4)
      xhrCallback(xhr);
  };
  xhr.send(data);
  return xhr;
}

/**
 * Takes a binary array and transforms it to base64. To account for large binary objects,
 * the transformation happens in chunks to avoid a `stack size` error.
 *
 * @param binary
 * @returns {string}
 */
function chunkedBinaryToBase64(binary) {
  var uintArray = new Uint8Array(binary);
  var index = 0;
  var CHUNK_SIZE = 0x7FFF;
  var charCodes = "";
  var slice;
  var length = uintArray.length;
  while(index < length) {
    slice = uintArray.slice(index, Math.min(index + CHUNK_SIZE, length));
    charCodes += String.fromCharCode.apply(null, slice);
    index += CHUNK_SIZE;
  }

  return window.btoa(charCodes);
}
