// define some globals
// import documentService from '../app/_services/document.service';

var sampleDataJson;
var tabbedCntr = new TabbedCntr();
/** @type {HTMLInputElement} */
var elCustomFilterboxInput = undefined;
/** @type {HTMLInputElement} */
var elPanelResultsHeaderInput = undefined;
/** @type {HTMLDivElement} */
var elPanelResultsContainerClone = undefined;
/** @type {HTMLDivElement} */
var elCustomRedactBtn = undefined;
/** @type {HTMLDivElement} */
var elCustomMatchesPane = undefined;
/** @type {HTMLDivElement} */
var elCheckBoxTemplate = undefined;
var searchModeActive = false;
var customSearchTabInstalled = false;
var filteringText = "";

// var ithExamplesConfig = {
//     /**
//      * The URL of the HTML Service. Default: the current URL running on port 8199
//      */
//     srvBaseUrl: location.protocol + '//' + location.hostname + ':8080/server-itw/rest/v1.0/',
//     SupportsSearch: true,
// }


//Globals from DocOperations.html
var urlParams = new URLSearchParams(location.search);
var documentUrl = ""
var documentDetails
//var redactionApplied = false
//var hasDocumentSplit = false
//var annotationApplied = false
var docId
var token = "";
var user
var sfBaseUrl = ""
var docIdArray = []
var allDocumentDetails = []
var documentUrls = []
var hasMultipleDocuments = false
var hasLoadingFailed = false
var isInvalidDocument = false
var nodeNamesValues = {}; //remember custom node name values
var ithInstance = undefined;
var folderDiv
var spinnerDiv
var docuEdgeEndPoint = "https://dev-docuedge.fxedw.com"

var upwardEndPoint = "https://d2crn8n32ov6x6.cloudfront.net"

var uploadVersionButton;
var uploadNewButton;
// uploadNewButton.style.display = "none"
// uploadVersionButton.style.display = "none"

spinnerDiv = document.getElementById("spin")

var ithInstanceDiv; //= document.getElementById("ithParent")
var ithErrorDiv; //= document.getElementById("ithError")
var errorMsgDiv; //= document.getElementById("msg")
//ithErrorDiv.style.display = "none"
//$("#open-help").hide()

/**
 * This is the path of the demo PDF file that exists in the server. It will get used to import the PDF file later in the code
 *
 * @type {string}
 */
var demoPdfFilePath = "C:\\Users\\IAC.TRXHTML\\Desktop\\ImageTrust-TC-HTML-2.5.12-Windows\\demos\\deloitte\\3ce89626-8865-4d22-b169-883caba077ba.pdf";
var confidenceScoreLevel = 90;

/**
 * This is the relative URL of the json file with the demo data
 *
 * @type {string}
 */
//var jsonDataUrl = "https://internal-fx-edw-dev-docuedge-capture-alb-547014708.us-east-1.elb.amazonaws.com/document/redact/unredacted?vaultId=";
var jsonDataUrl = "https://dev-docuedge-capture.fxedw.com/document/redact/unredacted?vaultId="
var jsonDataPutUrl = "https://dev-docuedge-capture.fxedw.com";
var iframe = null;
var startExecToken = null;
//https://d2crn8n32ov6x6.cloudfront.net/categories

var customSizeButton = null;
var fitToPageButton = null;

var coordinatesToAnnotate = null;
/** @type {ITCDispatch}
 *
 * Will hold the created instance of the Transactional Client and its API.
 *
 */
var checkCookie = function () {

  var lastCookie = decodeURIComponent(document.cookie); // 'static' memory between function calls

  return function () {

    var currentCookie = decodeURIComponent(document.cookie);

    //console.log(currentCookie)

    if (currentCookie != lastCookie) {
      //console.log(currentCookie.split('='));
      // something useful like parse cookie, run a callback fn, etc.
      lastCookie = currentCookie; // store latest cookie
      var ca = lastCookie.split(';');
      coordinatesToAnnotate = JSON.parse(ca[0].split('=')[1]);
      console.log(coordinatesToAnnotate);
    }
  };
}();

window.setInterval(checkCookie, 100); // run every 100 ms



function tempFunction() {
  console.log('Calling Java Function');
}

window.addEventListener("message", (event) => {
  // extract the data from the message event
  if (!event['origin'] === 'http://localhost:8199') {
    console.log(event);

  }
  // display it in our textarea as formatted JSON

});

// start executing our integration code when the page has fully loaded.
function startExec(vaultId, token) {
  startExecToken = token || localStorage.getItem('token');
  docIdArray = [];
  docIdArray.push(vaultId);
  if (iframe == null) {
    iframe = window.parent;
    console.log(iframe)
  }

  console.log(window);
  // var iframe2 = document.getElementById('myframe');
  // iframe2.contentWindow.postMessage('hissssssss', '*');


  spinnerDiv = document.getElementById("spin")
  spinnerDiv.style.display = "none"

  ithInstanceDiv = document.getElementById("ithParent")
  ithInstanceDiv.style.border = "1px dashed";
  ithErrorDiv = document.getElementById("ithError")
  errorMsgDiv = document.getElementById("msg")
  ithErrorDiv.style.display = "none"
  //$("#open-help").hide()
  //DOCOPERATIONS CODE
  //Obtain data via url params
  tempCurrentUser = {
    "username": '',
    "token": ''
  };
  // if (urlParams.has('username') && urlParams.has('token')) {
  //   tempCurrentUser['username'] = urlParams.get('username')
  //   tempCurrentUser['token'] = urlParams.get('token')
  //   localStorage.setItem('currentUser', JSON.stringify(tempCurrentUser))
  // } else {
  //   ithInstanceDiv.style.display = "none"
  //   ithErrorDiv.style.display = "block"
  //   errorMsgDiv.innerHTML = "Unable to find the token<br><br>"
  //   hasLoadingFailed = true
  // }

  // if (urlParams.has('docid')) {
  //   docId = urlParams.get('docid')
  // } else {
  //   ithInstanceDiv.style.display = "none"
  //   ithErrorDiv.style.display = "block"
  //   errorMsgDiv.innerHTML = "Unable to find the state<br><br>"
  //   hasLoadingFailed = true
  // }

  // if (urlParams.has('dms_user')) {
  //   user = urlParams.get('dms_user')
  // } else {
  //   ithInstanceDiv.style.display = "none"
  //   ithErrorDiv.style.display = "block"
  //   errorMsgDiv.innerHTML = "Unable to find username of the performer<br><br>"
  //   hasLoadingFailed = true
  // }

  // if (docId.includes(",")) {
  //   hasMultipleDocuments = true
  //   docIdArray = docId.split(',')
  // } else {
  //   docIdArray.push(docId)
  // console.log(docId)
  // console.log(docIdArray)
  // }

  if (!hasLoadingFailed) {
    ithExamplesConfig.ThemeConfiguration = { base: '#104f7d' };
    // ith.createInstance(document.getElementById("ithContainer"), ithExamplesConfig)
    //ith.createInstance(document.getElementById('TCContainer'), ithExamplesConfig)
    ith.createInstance(document.getElementById("imageTrustDiv"), ithExamplesConfig)
      .then(transactionalClientCreated)
      .catch(function (error) {
        var msg = "Failed to load application.";
        console.error(msg);
        console.dir(error);
      });
  }

  // first of all load the json data from a file using an AJAX request and then create the Transactional Client instance.
  //doHttpRequest("GET", jsonDataUrl + docIdArray[0], jsonDataLoaded);

  // run after the json data has been fetched.
  // function jsonDataLoaded(xhr) {

  //   sampleDataJson = JSON.parse(xhr.responseText);

  //   console.log("Fetched sample data json: ", sampleDataJson);

  //   // create Transactional Client

  //   if (!hasLoadingFailed) {
  //     ithExamplesConfig.ThemeConfiguration = {base: '#104f7d'};
  //     // ith.createInstance(document.getElementById("ithContainer"), ithExamplesConfig)
  //     //ith.createInstance(document.getElementById('TCContainer'), ithExamplesConfig)
  //     ith.createInstance(document.getElementById("ithContainer"), ithExamplesConfig)
  //       .then(transactionalClientCreated)
  //       .catch(function(error) {
  //         var msg = "Failed to load application.";
  //         console.error(msg);
  //         console.dir(error);
  //       });
  //   }
  // }
}








//DocOperations Functions




function openInstructionPage() {
  window.open("https://in-ith-web.s3.us-east-2.amazonaws.com/help-docoperations.html", "_blank")
}

//Batch Structure Changes
function onBatchStructureChanged(batch) {
  isInvalidDocument = false
  updateDefaultNodeNames();

  /*  'hasMultipleDocument=true' indicates merge Documents logic is applied. Hence, 
  1. If the page count of document 1 is zero then mark as document invalid.
  2. Disable Upload Version Button
      'hasMultipleDocument=false' applies,
  1. Check page count of all documents
  2. Disable button if document is split
  */
  if (!hasMultipleDocuments) {
    batch.documents.forEach(document => {
      if (document.pageCount == 0) {
        isInvalidDocument = true
      }
    })
    if (batch.documents.length > 1) {
      uploadVersionButton.style.display = "none"
      //hasDocumentSplit = true
    } else {
      if (batch.documents.length > 0) {
        uploadVersionButton.style.display = "block"
        //hasDocumentSplit = false
      }
    }
  } else {
    if (batch.documents[0].pageCount == 0) {
      isInvalidDocument = true
    }
  }
}

function validateAndLoadDocument(batch) {
  //Validate the taken via server call
  /*var invokePromise = ithInstance.invokeOnServer("validateSecurityToken", JSON.stringify({
      authToken: token,
      url: sfBaseUrl
  }));*/
  // docIdArray = ['74e144b3-557f-44ce-8081-ac935c9be534']
  // invokePromise.then(function () {
  hideToolbarMenu(); //Hide Menus
  disableClickAction(); //Disable Click Action
  disableAction(); //Disable Action
  docIdArray.forEach(docId => {

    //Getting document Details from DocuEdge
    // var getDocumentDetailsPromise = ithInstance.invokeOnServer("getDocumentDetails", JSON.stringify({
    //   documentId: docId,
    //   dmsUser: user,
    //   endpoint: docuEdgeEndPoint,
    //   token: '03d00c844626e415c362ef243c20632f2b5302f1'
    //   //token: tempCurrentUser.token
    // }));
    // getDocumentDetailsPromise.then(function (data) {
    //   documentDetails = JSON.parse(data)
    //   allDocumentDetails.push(documentDetails)
    // }).catch(function () {
    //   spinnerDiv.style.display = "none"
    //   ithInstanceDiv.style.display = "none"
    //   ithErrorDiv.style.display = "block"
    //   errorMsgDiv.innerHTML = "Unable to retrieve Document Details. Please try again later<br><br>"
    //   hasLoadingFailed = true
    // });

    //Deletes the default document
    ithInstance.deleteNodes([batch.documents[0]]);

    //call DocuEdge to get the document URL
    // var getDocumentURLPromise = ithInstance.invokeOnServer("getDocumentUrl", JSON.stringify({
    //   documentId: docId,
    //   dmsUser: user,
    //   endpoint: docuEdgeEndPoint,
    //   token: getUserToken()
    //   //token: tempCurrentUser.token
    // }));
    getDocURL(startExecToken, docId).then(function (data) {
      /*To load the documents in the order of the document IDs*/
      console.log("Document URL >>" +  data)
      data = data.trim()
      documentUrl = data.slice(5);
      // documentUrls.push(documentUrl)
      console.log("URL >>" + documentUrl)
      /*To load the documents in the order of the document IDs*/

      ithInstance.importDocument(batch.folders[0], documentUrl, "client").then(function () {
        //Set document title to each of the documents
        //setDocumentTitles()
        console.log('Pages Loaded')
        let pageSelectors = document.getElementsByClassName("itw-pageViewer")[0];
        pageSelectors.click();
        let itwTab = (document.getElementsByClassName('itw-tab'));
        itwTab[1].click();
        let button = document.getElementById('custom-size')
        console.log(button);
        button.dispatchEvent(new Event('mouseenter'));
        let button2 = document.getElementById('fit-width')
        button2.click();
        button.dispatchEvent(new Event('mouseleave'));
        folderDiv[0].style.display = "block"
        spinnerDiv.style.display = "none"
        //changeToFitPage();
      }).catch(function () {
        alert("Failed to load doc ")
        spinnerDiv.style.display = "none"
        // hasLoadingFailed = true
        // //uploadNewButton.style.display = "none"
        // uploadVersionButton.style.display = "none"
        // ithInstanceDiv.style.display = "none"
        // ithErrorDiv.style.display = "block"

        //errorMsgDiv.innerHTML = "Unable to load all Documents. Please try again later<br><br>"
      });

    }).catch(function () {
      alert("Failed to get url")
      spinnerDiv.style.display = "none"
      // hasLoadingFailed = true
      // ithInstanceDiv.style.display = "none"
      // ithErrorDiv.style.display = "block"
      // errorMsgDiv.innerHTML = "Unable to retrieve Document. Please try again later<br><br>"
    });
  })
  // }).catch(function (error) {
  //     spinnerDiv.style.display = "none"
  //     ithInstanceDiv.style.display = "none"
  //     ithErrorDiv.style.display = "block"
  //     errorMsgDiv.innerHTML = "Invalid token, unable to verify. Please try again later<br><br>"

  // })

}


function setDocumentTitles() {
  //ithInstance.deleteNodes([ithInstance.currentBatch.documents]);
  //Logic to set the right document names to the documents
  if (docIdArray.length == ithInstance.currentBatch.documents.length) {
    var documentIds = Object.assign([], docIdArray)
    documentIds.reverse()
    documentIds.forEach((docId, index) => {
      allDocumentDetails.forEach(documentDetails => {
        if (docId == documentDetails.documentId) {
          nodeNamesValues[ithInstance.currentBatch.documents[index].uuid] = documentDetails.documentName;
          ithInstance.currentBatch.documents[index].setProperty("customname", documentDetails.documentName)
        }
      })
    })
    /*  Display the folder div to display the documents and stop the spinner. 
        Display the the required buttons*/
    folderDiv[0].style.display = "block"
    spinnerDiv.style.display = "none"
    if (!hasLoadingFailed) {
      //uploadNewButton.style.display = "block"
      //$("#open-help").show()
      if (!hasMultipleDocuments) {
        uploadVersionButton.style.display = "block"
      } else {
        setDropdown()
      }
    }
  }

}

//Set default names
function updateDefaultNodeNames() {
  var currentBatch = ithInstance.currentBatch;
  currentBatch.allNodes.forEach(function (node) {
    if (node.levelName !== "Job" && node.levelName !== "Batch") { //ignore job and batch level
      var nn = nodeNamesValues[node.uuid] || //check our stored node names
        node.levelName + ". " + (node.levelIndex + 1); //default: "<Node-Level-Name>. <Node-Level-Index> (Document. 5, Folder 3 etc.)"
      node.setProperty("customname", nn);
    }
  });
}

//Handler for uploading document as version
function uploadAsVersionHandler() {
  if (!isInvalidDocument) {
    SplitConfirm.show('Do you wish to upload as version to the document?', changeMetada);
  } else {
    SplitConfirm.show('Invalid Document. Do you wish to discard the changes?', reloadPage);
  }
}

//Handler for saving the document and not actually passing review
function saveHandler() {
  if (!isInvalidDocument) {
    SplitConfirm.show('Do you wish to save your work and come back to it later?', removeRedactedDataFromJson);
  } else {
    SplitConfirm.show('Invalid Document. Do you wish to discard the changes?', reloadPage);
  }
}

//Handler for saving the document and not actually passing review
function cancelHandler() {
  if (!isInvalidDocument) {
    SplitConfirm.show('Are you sure you wish to cancel redaction? Unsaved changes will be lost!', closeWindow);
  } else {
    SplitConfirm.show('Invalid Document. Do you wish to discard the changes?', reloadPage);
  }
}

//Handler for uploading document as new
function uploadAsNewHandler() {
  if (!isInvalidDocument) {
    SplitConfirm.show('Do you wish to upload as new document?', uploadAsNew);
  } else {
    SplitConfirm.show('Invalid Document. Do you wish to discard the changes?', reloadPage);
  }
}

function reloadPage() {
  window.location.reload()
}

//Confirm Dialog script
var SplitConfirm = new function () {
  this.show = function (msg, callback) {
    var dlg = document.getElementById('dialogCont');
    var dlgBody = dlg.querySelector('#dlgBody');
    dlg.style.top = '30%';
    dlg.style.opacity = 1;
    dlgBody.textContent = msg;
    this.callback = callback;
    document.getElementById('freezeLayer').style.display = '';
  };

  this.okay = function () {
    this.callback();
    this.close();
  };

  this.close = function () {
    var dlg = document.getElementById('dialogCont');
    dlg.style.top = '-30%';
    dlg.style.opacity = 0;
    document.getElementById('freezeLayer').style.display = 'none';
  }
}

function setErrorStyling() {
  //uploadNewButton.style.display = "none"
  uploadVersionButton.style.display = "none"
  ithInstanceDiv.style.display = "none"
  ithErrorDiv.style.display = "block"
  if (hasMultipleDocuments) {
    document.getElementById("dropdown").style.display = "none"
  }
}

//Sets the dropdown for the merge logic
function setDropdown() {
  var select = document.createElement("select");
  select.name = "metadata";
  select.id = "metadata";
  var documentIds = Object.assign([], docIdArray)
  documentIds.reverse()
  documentIds.forEach(docId => {
    allDocumentDetails.forEach(val => {
      if (docId == val.documentId) {
        var option = document.createElement("option");
        option.value = val.documentName;
        option.text = val.documentName.charAt(0).toUpperCase() + val.documentName.slice(1);
        select.appendChild(option);
      }
    })
  })
  var label = document.createElement("label");
  label.innerHTML = "Choose the Metadata From: "
  label.htmlFor = "metadata";

  document.getElementById("dropdown").appendChild(label).appendChild(select);
}


function changeMetada() {
  documentDetails['metadata']['properties']['Passed Review'] = true;
  uploadAsVersion()
}


function uploadAsVersion() {

  var progressModal = ithInstance.indeterminateProgress("Generating document...", "Document generation");
  var docUuids = []
  var docNames = []
  var title = documentDetails.documentName.substr(0, documentDetails.documentName.lastIndexOf("."))
  ithInstance.currentBatch.documents.forEach((element, index) => {
    docUuids.push(element.uuid)
    docNames.push(element.name)
  })

  ithInstance.invokeOnServerWithBatch("uploadAsDocumentVersion", JSON.stringify({
    docUuids: docUuids,
    docNames: docNames,
    title: title,
    docId: documentDetails.documentId,
    meta_data: JSON.stringify(documentDetails['metadata']['properties']),
    category_id: documentDetails.categoryId.toString(),
    tags: "",
    dmsUser: user,
    endpoint: docuEdgeEndPoint,
    token: getUserToken()
    //token: tempCurrentUser.token
  })).then(function () {
    progressModal.closeFn();
    //uploadNewButton.style.display = "none"
    uploadVersionButton.style.display = "none"
    ithInstanceDiv.style.display = "none"
    ithErrorDiv.style.display = "block"
    errorMsgDiv.innerHTML = "Document Version Updated<br><br>"
  }).catch(function () {
    progressModal.closeFn();
    //uploadNewButton.style.display = "none"
    uploadVersionButton.style.display = "none"
    ithInstanceDiv.style.display = "none"
    ithErrorDiv.style.display = "block"
    errorMsgDiv.innerHTML = "Unable to upload document. Please contact Administrator.<br><br>"
  });
}

/**
         * Sends the active batch to the DocuEdge webserver as a new document.
         *
         * After creating the blob using `downloadAsMultiDoc` we execute an http-POST request to the DocuEdge webserver
         * server to send the blob there.
         *
         * Please view the example hosting webserver's implementation of the `saveAsPdf`
         * endpoint for further information.
         */
function uploadAsNew() {
  var documentsCount = ithInstance.currentBatch.documents.length
  if (hasMultipleDocuments) {
    documentsCount = 1
    var s = document.getElementById("metadata");
    var selectedName = s.options[s.selectedIndex].value;
    allDocumentDetails.forEach(element => {
      if (selectedName == element.documentName) {
        documentDetails = element
      }
    })
  }
  var docUuids = []
  var docNames = []
  var title = documentDetails.documentName.substr(0, documentDetails.documentName.lastIndexOf("."))
  ithInstance.currentBatch.documents.forEach((element, index) => {
    if (documentsCount > index) {
      docUuids.push(element.uuid)
      docNames.push(element.name)
    }
  })
  var progressModal = ithInstance.indeterminateProgress("Generating document...", "Document generation");

  ithInstance.invokeOnServerWithBatch("uploadAsNewDocument", JSON.stringify({
    docUuids: docUuids,
    docNames: docNames,
    title: title,
    meta_data: JSON.stringify(documentDetails['metadata']['properties']),
    category_id: documentDetails.categoryId.toString(),
    tags: "",
    dmsUser: user,
    endpoint: docuEdgeEndPoint + "upload/direct"
  })).then(function () {
    progressModal.closeFn();
    //uploadNewButton.style.display = "none"
    uploadVersionButton.style.display = "none"
    ithInstanceDiv.style.display = "none"
    ithErrorDiv.style.display = "block"
    if (hasMultipleDocuments) {
      document.getElementById("dropdown").style.display = "none"
    }
    errorMsgDiv.innerHTML = "Document Uploaded Successfully<br><br>"
  }).catch(function () {
    progressModal.closeFn();
    //uploadNewButton.style.display = "none"
    uploadVersionButton.style.display = "none"
    ithInstanceDiv.style.display = "none"
    ithErrorDiv.style.display = "block"
    if (hasMultipleDocuments) {
      document.getElementById("dropdown").style.display = "none"
    }
    errorMsgDiv.innerHTML = "Unable to upload document. Please contact Administrator.<br><br>"
  });
}

// Store the element's current visibility
var toolbarVisibility = true,
  mainMenuVisibility = true,
  tasksViewVisibility = true,
  scanProfilesVisibility = true,
  settingsMenuVisibility = true,
  batchExplorerVisibility = true;

function hideToolbarMenu() {
  ithInstance.toggleToolbarScanProfiles(scanProfilesVisibility = !scanProfilesVisibility);
  ithInstance.toggleToolbarTasksView(tasksViewVisibility = !tasksViewVisibility);
  ithInstance.toggleToolbarMainMenu(mainMenuVisibility = !mainMenuVisibility);
  ithInstance.toggleToolbarSettingsMenu(settingsMenuVisibility = !settingsMenuVisibility);
  ithInstance.toggleToolbar(toolbarVisibility = toolbarVisibility);
}

function disableAction() {
  ithInstance.registerActionAllowCheck(ith_ActionType.IMPORT_DRAGGED_FILES, disallow);
  ithInstance.registerActionAllowCheck(ith_ActionType.ROTATE_PAGE, allow);
}

function allow(targetNode, selectedNodes) {
  return true;
}

function disallow(targetNode, selectedNodes) {
  return false;
}

function closeWindow() {
  window.close()
  iframe.postMessage("close window", "*")
}

function disableClickAction() {
  ithInstance.setActionVisibility(ith_ActionType.APPEND_NEW_DOCUMENT, true);
  ithInstance.setActionVisibility(ith_ActionType.APPEND_NEW_FOLDER, false);
  ithInstance.setActionVisibility(ith_ActionType.CCT_CONNECT_DISCONNECT, false);
  ithInstance.setActionVisibility(ith_ActionType.CCT_RECONNECT, false);
  ithInstance.setActionVisibility(ith_ActionType.CLOSE_BATCH_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.CREATE_DOCUMENT_FROM_SELECTED_PAGES, true);
  ithInstance.setActionVisibility(ith_ActionType.DELETE_BATCH_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.DELETE_SELECTED_NODES, true);
  ithInstance.setActionVisibility(ith_ActionType.DOWNLOAD_EDOC, false);
  ithInstance.setActionVisibility(ith_ActionType.DOWNLOAD_MULTI_TIF_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.DOWNLOAD_PDF_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.DUPLICATE_SELECTED_NODES, false);
  ithInstance.setActionVisibility(ith_ActionType.IMPORT_DRAGGED_FILES, false);
  ithInstance.setActionVisibility(ith_ActionType.MERGE_SELECTED_NODES, true);
  ithInstance.setActionVisibility(ith_ActionType.MERGE_WITH_NEXT_NODE, true);
  ithInstance.setActionVisibility(ith_ActionType.MERGE_WITH_PREVIOUS_NODE, true);
  ithInstance.setActionVisibility(ith_ActionType.MOVE_NODES, true);
  ithInstance.setActionVisibility(ith_ActionType.NEW_BATCH_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.NEW_DOCUMENT_AFTER, true);
  ithInstance.setActionVisibility(ith_ActionType.NEW_DOCUMENT_BEFORE, true);
  ithInstance.setActionVisibility(ith_ActionType.NEW_FOLDER_AFTER, false);
  ithInstance.setActionVisibility(ith_ActionType.NEW_FOLDER_BEFORE, false);
  ithInstance.setActionVisibility(ith_ActionType.OPEN_BATCH_ACTION, false);
  ithInstance.setActionVisibility(ith_ActionType.ROTATE_PAGE, true);
  ithInstance.setActionVisibility(ith_ActionType.SCAN_ALL_AND_APPEND, false);
  ithInstance.setActionVisibility(ith_ActionType.SCAN_ALL_AND_INSERT, false);
  ithInstance.setActionVisibility(ith_ActionType.SCAN_AND_REPLACE_PAGES, false);
  ithInstance.setActionVisibility(ith_ActionType.SCAN_SINGLE_AND_APPEND, false);
  ithInstance.setActionVisibility(ith_ActionType.SCAN_SINGLE_AND_INSERT, false);
  ithInstance.setActionVisibility(ith_ActionType.SPLIT_NODE, true);
  ithInstance.setActionVisibility(ith_ActionType.VIEW_PAGES, true);
}

function getUserToken() {
  let currUser = JSON.parse(localStorage.getItem("currentUser"))
  console.log(currUser);
  return currUser.token
}

function changeToFitPage() {
  if (customSizeButton === null) {
    customSizeButton = document.getElementsByClassName('itw-button')[6];

    customSizeButton.dispatchEvent(new Event('mouseenter'));
    console.log(customSizeButton);
  };
  if (fitToPageButton === null) {
    fitToPageButton = document.getElementsByClassName('itw-controls');
    console.log(fitToPageButton);
    fitToPageButton.click();
  };
  
}

// function getChangePageViewOption() {
//   if(customSizeButton === null) {
//     customSizeButton = document.getElementById('custom-size');
//     customSizeButton.dispatchEvent(new Event('mouseenter'));
//   };
//   if(fitToPageButton === null) {
//     fitToPageButton = document.getElementById('fit-width');
//   };
//   fitToPageButton.click();
//   // customSizeButton = document.getElementById('custom-size');
//   // customSizeButton.dispatchEvent(new Event('mouseenter'));
//   // fitToPageButton = document.getElementById('fit-width');
// }





//DocOperations Functions End

function transactionalClientCreated(dispatch) {
  document.getElementsByClassName('itw-panel itw-bep-panel itw-resizable')[0].style.display = 'none'
  ithInstance = dispatch;
  window.ithInstanceNew = ithInstance;
  performHtmlChanges();
  iframe.postMessage("client loaded", "*")
  // iframe.postMessage(ithInstance, "*")
  //iframe.postMessage(JSON.stringify(window), "*")
  //iframe.postMessage(JSON.stringify(iframe), "*")
  console.log("Trasactional Client loaded.");

  spinnerDiv.style.display = "block" //DO
  // install some helpful type in the global scope
  ithInstance.installGlobalTypes("ith_");
  ithInstance.JobEvents.batchStructureChanged = onBatchStructureChanged;  //DO
  // we are now ready to call our integration initialization code
  init();
}



function init() {

  // setup our listener functions to listen to Transactional Client API events
  setupListeners();

  // disallow actions
  function returnFalse() {
    return false;
  }
  //ithInstance.registerActionAllowCheck(ith_ActionType.ROTATE_PAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.ADJUST_BRIGHTNESS_CONTRAST, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.DESKEW_PAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.DESPECKLE_PAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.INVERT_PAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.RASTERIZE_IMAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.FILL_PUNCH_HOLES, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.FLIP_PAGE, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.REMOVE_BLACK_BORDER, returnFalse);
  ithInstance.registerActionAllowCheck(ith_ActionType.VIEW_PAGES, returnFalse);

  // Call API to create a new batch.

  //add true
  ithInstance.newBatch(true)
    .then(newBatchCreated)
    .catch(function (error) {
      console.log(error)
      var msg = "Failed to create new batch.";
      throw Error(msg);
    });

  function newBatchCreated(batch) {

    console.log("Batch Created");

    //ithInstance.setLevelName(ith_LevelName.Document, "${customname}");
    //Hide the folder div while the documents are loading
    folderDiv = document.getElementsByClassName('itw-folderViewer')
    folderDiv[0].style.display = "none"

    // load the document onto the viewer
    validateAndLoadDocument(batch);
    // remove the default empty document.
    // ithInstance.deleteNodes([ithInstance.currentBatch.documents[0]]);

    // do the import of the demo PDF file using the appropriate Transactional Client API method
    //ithInstance.importDocument(ithInstance.currentBatch, demoPdfFilePath, "server-fs");

  }
}

function performHtmlChanges() {
  //Add three buttons to itw-end-side and remove logo
  console.log("inside performHtmlChanges")
  let itwEndSide = (document.getElementsByClassName('itw-end-side'))[0];
  let imageTrustLogo = (document.getElementsByClassName('itw-watermark-logo'))[0];
  let itwMainToolbar = (document.getElementsByClassName('itw-main-toolbar'))[0];
  let itwIconMagnifyingGlass = (document.getElementsByClassName('itw-icon itw-icon-magnifying-glass'))[0];
  let itwTab = (document.getElementsByClassName('itw-tab'));
  let itwFolderViewerHeader = (document.getElementsByClassName('itw-folder-viewer-header'));
  let itwSearchButton = (document.getElementsByClassName('itw-search-button'))[0];
  let itwIconQueue = (document.getElementsByClassName('itw-icon itw-icon-queue'))[0];
  let itwFolderViewer = (document.getElementsByClassName('itw-folderViewer'))[0];



  if (itwEndSide != undefined) {
    let child = `<h1 class="row" style="align-self: center;">

      <button class="button" id="upload-version" onclick="uploadAsVersionHandler()" style="display: block; background-color: #104f7d; color: white">Complete</button>
      <button class="button" id="save-document" onclick="saveHandler()" style="background-color: #104f7d; color: white">Save</button>
      <button class="button" id="cancel-redact" onclick="cancelHandler()" style="background-color: #104f7d; color: white">Back</button>
      <span style="float: right;font-size: medium;" id="dropdown"></span>
    </h1>`
    itwEndSide.innerHTML = child + itwEndSide.innerHTML;
    console.log(itwEndSide);
  }

  if (itwFolderViewerHeader != undefined) {
    console.log('exists')
    console.log(itwFolderViewerHeader);
    for (let i = 0; i < itwFolderViewerHeader.length; i++) {
      itwFolderViewerHeader[i].style['background-color'] = "#104f7d"
    }

  }
  if (itwSearchButton != undefined) {
    itwSearchButton.style['background-color'] = "#104f7d"
  }
  if (itwIconQueue != undefined) {
    itwIconQueue.style['fill'] = "black !important"
    itwIconQueue.style['stroke'] = "black !important"
    console.log('itwQueue is defined', itwIconQueue)
  } else {
    console.log('itwQueue is undedefined', itwIconQueue)
  }


  if (imageTrustLogo != undefined) {
    imageTrustLogo.style.display = "none"

    // imageTrustLogo.parentElement.innerHTML = child2 + imageTrustLogo.parentElement.innerHTML 
    // imageTrustLogo.style['background-image'] = './Docuedge-logo.png'
  }



  if (itwMainToolbar != undefined) {
    itwMainToolbar.style['background-color'] = "#ebe9e9"
  }

  if (itwIconMagnifyingGlass != undefined) {
    itwIconMagnifyingGlass.style['fill'] = "#104f7d"
    itwIconMagnifyingGlass.style['stroke'] = "#104f7d"
  }

  for (let i = 0; i < itwTab.length; i++) {
    if (itwTab[i] != undefined) {
      itwTab[i].style['color'] = "#104f7d"
    }
    if (i == 1) {
      itwTab[i].addEventListener('click', changeToFitPage)
    }
  }

  if (itwFolderViewer != undefined) {
    itwFolderViewer.style['border-top'] = "1px solid #104f7d"
  }

  uploadVersionButton = document.getElementById("upload-version")
  //uploadNewButton = document.getElementById("upload-new")
  //uploadNewButton.style.display = "none"
  uploadVersionButton.style.display = "none"
  // let itwTabbedPanel = (document.getElementsByClassName('itw-tabbed-panel'))[0];
  // if(itwTabbedPanel != undefined) {
  //   let child2 = `<div class="itw-watermark-logo" style="background-image: url(https://dev-docuedge-review.fxedw.com/redaction-review/js/Docuedge-logo.png); width: 100%;height:85px;background-repeat:no-repeat;margin:0px; background-position:right;">
  //   </div>`
  //   itwTabbedPanel.innerHTML = child2 + itwTabbedPanel.innerHTML ;
  //   console.log(itwTabbedPanel);
  // }

}

function setupListeners() {
  /** @type {ISearchListener} */
  var searchListener = {};
  searchListener.searchModeDeactivated = onSearchModeDeactivated;
  searchListener.searchModeActivated = onSearchModeActivated;

  /** @type {IViewerListener} */
  var viewerListener = {};
  viewerListener.pageChanged = onPageChanged;
  viewerListener.pageUpdated = onPageUpdated;

  // add our listeners to Transaction Client
  ithInstance.AppEvents.addSearchListener(searchListener);
  ithInstance.AppEvents.addViewerListener(viewerListener);
}

function installSearchTabs() {
  var elSearchView = document.querySelector(".itw-search-view");
  if (elSearchView == null) {
    console.error("failed to get searchview element")
  }
  var elSearchViewCtnr = elSearchView.parentElement;
  if (elSearchViewCtnr == null) {
    console.error("failed to get container of searchview element")
  }

  var elPIIPnl = document.createElement("div");
  elPIIPnl.classList.add("pii-panel");

  var elPanelOptions = elSearchView.querySelector(".itw-search-options");
  if (elPanelOptions == null) {
    console.error("failed to get search options element")
  }
  /** @type {HTMLDivElement} */
  var elPanelOptionsClone = elPanelOptions.cloneNode(true);
  elPIIPnl.appendChild(elPanelOptionsClone);

  var elCustomFilterbox = elPanelOptionsClone.querySelector(".itw-search-field");
  if (elCustomFilterbox == null) {
    console.error("failed to get search box element")
  }

  elCustomFilterboxInput = elCustomFilterbox.querySelector("input");
  if (elCustomFilterboxInput == null) {
    console.error("failed to get search box input element")
  }

  elCustomFilterbox.classList.remove("itw-disabled");
  elCustomFilterboxInput.disabled = false;

  elCustomFilterboxInput.addEventListener("input", onFilterInput, true);

  var elCustomSearchOptions = elPanelOptionsClone.querySelector(".itw-search-options-button");
  if (elCustomSearchOptions == null) {
    console.error("failed to get search box options element")
  }

  elCustomSearchOptions.parentElement.removeChild(elCustomSearchOptions);

  var elPanelResultsHeader = elSearchView.querySelector(".itw-search-results-header");
  if (elPanelResultsHeader == null) {
    console.error("failed to get search header element")
  }
  /** @type {HTMLDivElement} */
  var elPanelResultsHeaderClone = elPanelResultsHeader.cloneNode(true);
  elPIIPnl.appendChild(elPanelResultsHeaderClone);

  var elPanelResultsHeaderCheckBox = elPanelResultsHeaderClone.querySelector(".itw-checkbox");
  if (elPanelResultsHeaderCheckBox == null) {
    console.error("failed to get checkbox element")
  }
  elPanelResultsHeaderCheckBox.classList.remove("itw-disabled");

  /** @type {HTMLDivElement} */
  elCheckBoxTemplate = elPanelResultsHeaderCheckBox.cloneNode(true);

  elPanelResultsHeaderInput = elPanelResultsHeaderCheckBox.querySelector("input");
  if (elPanelResultsHeaderInput == null) {
    console.error("failed to get input element")
  }

  elPanelResultsHeaderCheckBox.addEventListener("click", onHeaderCheckBoxClicked);

  var paneOptions = elPanelResultsHeaderClone.querySelectorAll(".itw-pane-option");
  for (var i = 0; i < paneOptions.length; i++) {
    paneOptions[i].parentElement.removeChild(paneOptions[i]);
  }

  var elPanelResultsContainer = elSearchView.querySelector(".itw-search-results-container");
  if (elPanelResultsContainer == null) {
    console.error("failed to get search results container element")
  }
  elPanelResultsContainerClone = elPanelResultsContainer.cloneNode(true);

  elCustomMatchesPane = elPanelResultsContainerClone.querySelector(".itw-matches-pane");
  if (elCustomMatchesPane == null) {
    console.error("failed to get matches pane element")
  }

  elPIIPnl.appendChild(elPanelResultsContainerClone);

  var elPanelActions = elSearchView.querySelector(".itw-search-actions-host");
  if (elPanelActions == null) {
    console.error("failed to get search actions element")
  }
  /** @type {HTMLDivElement} */
  var elPanelActionsClone = elPanelActions.cloneNode(true);

  elPIIPnl.appendChild(elPanelActionsClone);

  elCustomRedactBtn = elPanelActionsClone.querySelector(".itw-redact-marked");
  if (elCustomRedactBtn == null) {
    console.error("failed to get redact button element")
  }

  elCustomRedactBtn.addEventListener("click", redactBtnClicked);

  tabbedCntr.addTab(elPIIPnl, "Recommendations");
  tabbedCntr.addTab(elSearchView, "Search");
  tabbedCntr.switch(0);

  elSearchViewCtnr.appendChild(tabbedCntr.el);
  console.log('before processing PII Data');
  // finally process the PII data
  processPIIData();
}

/**
 * Apply the filtering and filter out the records from the panel
 */
function applyFilter() {
  piiRecords.forEach(function (record) {
    if (doesFilterMatches(record.text)) {
      record.el.classList.remove("itw-filtered-out");
      record.filteredOut = false;
    } else {
      record.el.classList.add("itw-filtered-out");
      record.filteredOut = true;
    }
  });
}

/**
 * Returns true if the filtering text matches the given string (case-insensitive)
 *
 * @param s {string}
 */
function doesFilterMatches(s) {
  return s.toLowerCase().indexOf(filteringText.toLowerCase()) > -1;
}

/*####################################
 * Event handlers
 ###################################*/

/**
 * Filtering of PII list
 *
 * @param ev {InputEvent}
 */
function onFilterInput(ev) {
  filteringText = elCustomFilterboxInput.value;
  applyFilter();

  // uncheck header checkbox
  elPanelResultsHeaderInput.checked = false;
}

/**
 * checks/unchecks all non-filtered non-redacted results
 *
 * @param ev {MouseEvent}
 */
function onHeaderCheckBoxClicked(ev) {
  elPanelResultsHeaderInput.checked = !elPanelResultsHeaderInput.checked;
  piiRecords.forEach(function (record, idx) {
    if (record.redacted || record.filteredOut) {
      return;
    }

    record.elCheckboxInput.checked = elPanelResultsHeaderInput.checked;
  });
  updateRedactBtn();
}

/*#########################################
 * Transactional Client API Event handlers
 #########################################*/

function onSearchModeActivated() {
  console.log("[Custom searchListener]: search mode activated");
  searchModeActive = true;
  if (!customSearchTabInstalled) {
    installSearchTabs();
  }
  customSearchTabInstalled = true;
  clearHighlights();
  var p = getSelectedPage();
  if (!p) {
    return;
  }
  console.log("[Custom searchListener]: redrawing highlights");
  drawHighlights(p.levelIndex + 1);
  if (typeof activeRecordId === "number" && activeRecordId > -1) {
    setActive(activeRecordId);
  }
}

function onSearchModeDeactivated() {
  console.log("[Custom searchListener]: search mode deactivated");
  searchModeActive = false;
  // clear any highlights
  clearHighlights();
}

function onPageChanged(viewer, currentPage, previousPage) {
  if (!searchModeActive) {
    return;
  }
  console.log("[Custom viewerListener]: pageChanged event. viewer.uuid=" + viewer.uuid + " viewer.heightPx=" + viewer.heightPx
    + ", currentPage.uuid=" + currentPage.uuid + ", previousPage.uuid=" + (previousPage ? previousPage.uuid : "undefined"));
  clearHighlights();
  drawHighlights(currentPage.levelIndex + 1);
  if (typeof activeRecordId === "number" && activeRecordId > -1) {
    setActive(activeRecordId);
  }
}

function onPageUpdated(viewer, page, action) {
  if (!searchModeActive) {
    return;
  }
  console.log("[Custom viewerListener]: pageUpdated event. viewer.uuid=" + viewer.uuid + " page.name=" + page.name
    + ", page.uuid=" + page.uuid + ", action=" + action);
  clearHighlights();
  drawHighlights(page.levelIndex + 1);
  if (typeof activeRecordId === "number" && activeRecordId > -1) {
    setActive(activeRecordId);
  }
}

/******************************************************
 * Integration helper "classes" and functions
 ******************************************************/
/** @type {any} */
var activeRecordId = undefined;

/** @type {PIIRecord[]}*/
var piiRecords = [];
function processPIIData() {
  if (!sampleDataJson || !sampleDataJson["Entities"]) { return }

  sampleDataJson["Entities"].forEach(function (ent) {
    console.log("ENT: INSIDE DataJson['Entities']", ent);
    var pageNum = ent["Page"];
    var boundingBoxes = ent["BoundingBoxes"];
    boundingBoxes.forEach(function (bbox) {
      console.log("ENT: INSIDE BoundingBoxes", bbox);
      var text = bbox.Value;
      var bboxValues = bbox["BoundingBox"];
      var recType = bbox["Type"];
      /** @type {{left: number, top: number, w: number, h: number}} */
      var boundingBox = {
        left: bboxValues["Left"],
        top: bboxValues["Top"],
        w: bboxValues["Width"],
        h: bboxValues["Height"]
      };
      var confidenceScore = bbox["Confidence Score"];
      console.log("creating new Pii record")
      var record = new PIIRecord(pageNum, text, boundingBox, confidenceScore, piiRecords.length, recType);
      // if(record.confidenceScore > confidenceScoreLevel) {
      //   record.elCheckboxInput.checked = true;
      // }
      if ((Math.random() * 100) > 50) {
        record.elCheckboxInput.checked = true;
        record.highConfidence = true;
      }
      piiRecords.push(record);
      console.log(record, record.el)
      elCustomMatchesPane.appendChild(record.el);
      console.log(record, record.el)
    });

  });
}

/**
 * A "class" for a PII record
 *
 * @param {number} pageNum
 * @param {string} text
 * @param {{left: number, top: number, w: number, h: number}} boundingBox
 * @param {number} confidenceScore
 * @param {number} id
 * @constructor
 */
function PIIRecord(pageNum, text, boundingBox, confidenceScore, id, recType) {
  this.id = id;
  this.highlight = undefined;
  this.pageNum = pageNum;
  this.text = text;
  this.boundingBox = boundingBox;
  this.confidenceScore = confidenceScore;
  this.redacted = false;
  this.filteredOut = false;
  this.selected = false;
  this.recType = recType;

  this.el = document.createElement("div");
  this.el.classList.add("itw-match-snippet-renderer");

  /** @type {HTMLDivElement} */
  this.elCheckbox = elCheckBoxTemplate.cloneNode(true);

  /** @type {HTMLInputElement} */
  this.elCheckboxInput = this.elCheckbox.querySelector("input");

  this.el.appendChild(this.elCheckbox);

  /** @type {HTMLDivElement} */
  this.elText = document.createElement("div");

  /** @type {HTMLDivElement} */
  this.elPageNum = document.createElement("page-number");
  this.elPageNum.classList.add("page-number");
  this.elPageNum.innerText = "Type: " + recType;

  this.elText.classList.add("itw-search-result-text");
  this.elText.innerText = text;
  this.elText.appendChild(this.elPageNum);
  this.el.appendChild(this.elText);

  this.elCheckbox.addEventListener("click", onCheckBoxClicked.bind(this));
  this.el.addEventListener("click", onClick.bind(this));
  this.el.addEventListener("dblclick", onCheckBoxClicked.bind(this));

  function onClick(ev) {
    if (!ithInstance) {
      console.error("Failed to open highlight. TCHTML instance is undefined");
      return;
    }

    var p = ithInstance.currentBatch.pages[this.pageNum - 1];
    if (!p) {
      console.error("Failed to open highlight. Page with number " + this.pageNum + " is undefined");
      return;
    }

    ithInstance.setSelectedNode(p, ith_ViewType.ACTIVE_PAGE);
    setActive(this.id);
    activeRecordId = this.id;
  }

  function onCheckBoxClicked(ev) {
    if (this.redacted) {
      return;
    }
    this.elCheckboxInput.checked = !this.elCheckboxInput.checked;
    this.selected = this.elCheckboxInput.checked;
    if (this.highlight) {
      if (this.selected) {
        this.highlight.normalState = states.selected;
        this.highlight.activeState = states.selectedActive;
      } else {
        this.highlight.normalState = states.normal;
        this.highlight.activeState = states.active;
      }
      applyStateToHighlight(this.highlight, this.highlight.normalState);
    }
    updateRedactBtn();
  }

}

/**
 * Returns the currently selected page, if any. Returns undefined if no page is selected.
 *
 * @return {INode|undefined}
 */
function getSelectedPage() {
  if (ithInstance.currentBatch == undefined ||
    !(ithInstance.currentBatch.pageCount > 0) ||
    ithInstance.getSelectedNodes().length == 0 ||
    ithInstance.getSelectedNodes()[0].levelName != "Page") {
    // ithInstance.alert("You must have a Page selected in order to add an annotation to it.");
    // throw "No page selected.";
    return undefined;
  }
  return ithInstance.getSelectedNodes()[0];
}

/**
 * Execute the redact of the selected redactions
 *
 * @param {MouseEvent} ev
 */
function redactBtnClicked(ev) {
  console.log("custom redact button clicked");
  if (ithInstance.currentBatch.pageCount < 0) {
    console.error("Failed redact. No pages exist in the batch");
    return;
  }

  piiRecords.forEach(
    /**
     * @param {PIIRecord} record
     * @param {number} idx
     */
    function (record, idx) {
      if (!record.elCheckboxInput.checked || record.elCheckboxInput.redacted) {
        return;
      }

      // find the corresponding page
      /** @var {IPage} */
      var page = undefined;
      ithInstance.currentBatch.pages.forEach(function (p, idx) {
        if (record.pageNum == (p.levelIndex + 1)) {
          page = p;
        }
      });

      if (!page) {
        return;
      }

      // page has been matched with the record. Perform do the redact.
      page.createRedactionAnnotation({
        xpos: record.boundingBox.left * 100,
        ypos: record.boundingBox.top * 100,
        width: record.boundingBox.w * 100,
        height: record.boundingBox.h * 100
      });

      record.redacted = true;
      record.el.classList.add("itw-disabled");
      record.elCheckboxInput.disabled = true;

      // remove the highlight as it is not needed anymore
      if (typeof record.highlight === "undefined") {
        return;
      }
      record.highlight.normalState = states.redacted;
      record.highlight.activeState = states.redactedActive;
      applyStateToHighlight(record.highlight, record.highlight.normalState);
    });

  // finally update the redact button
  updateRedactBtn();

  // unchecck the header checkbox
  elPanelResultsHeaderInput.checked = false;
}

/**
 * Sets the currently 'active', or hovered, highlight
 *
 * @param {number} recordId
 *  the record id of the highlight
 * @return {boolean}
 */
function setActive(recordId) {
  if (typeof recordId !== "number") {
    console.error("Failed to set active highlight. recordId is not a number");
    return;
  }

  if (typeof activeRecordId !== "undefined" && activeRecordId != recordId) {
    // reset the previous active highlight
    var prevActiveRecord = getRecordById(activeRecordId);
    if (prevActiveRecord.highlight) {
      applyStateToHighlight(prevActiveRecord.highlight, prevActiveRecord.highlight.normalState);
      prevActiveRecord.el.classList.remove("itw-selected");
    }
  }

  var record = getRecordById(recordId);
  if (!record) {
    console.error("Failed to scroll viewer to the active highlight. record with id " + recordId + " is undefined");
    return;
  }
  var bbox = record.boundingBox;
  ithInstance.imageViewerScrollTo({ x: bbox.left, y: bbox.top, width: bbox.w, height: bbox.h });

  // if(recordId == activeRecordId) {
  //   return;
  // }

  record.el.classList.add("itw-selected");

  if (!record.highlight) {
    // console.error("Failed to set active highlight. highlight is undefined");
    return;
  }
  if (!record.highlight.element) {
    console.error("Failed to set active highlight. highlight has no DOM element");
    return;
  }
  applyStateToHighlight(record.highlight, record.highlight.activeState);
}

/**
 * retrieves a record by its id. Undefined if not found.
 *
 * @param {number} rId
 * @return {PIIRecord}
 */
function getRecordById(rId) {
  /** @var {PIIRecord} */
  var found = undefined;

  piiRecords.forEach(function (record, idx) {
    if (record.id === rId) {
      // found it
      found = record;
    }
  });

  return found;
}

function updateRedactBtn() {
  var checked = false;
  piiRecords.forEach(function (record, idx) {
    if (!record.redacted && record.elCheckboxInput.checked) {
      checked = true;
    }
  });

  if (checked) {
    elCustomRedactBtn.classList.remove("itw-disabled");
    elCustomRedactBtn.disabled = false;
  } else {
    elCustomRedactBtn.classList.add("itw-disabled");
    elCustomRedactBtn.disabled = true;
  }
}

var states = {
  normal: {
    main: "rgba(255, 128, 0, 0.5)",
    outline: "rgba(0, 0, 0, 1)"
  },
  active: {
    main: "rgba(255, 255, 0, 0.5)",
    outline: "rgba(0, 0, 0, 1)"
  },
  selected: {
    main: "rgba(0, 112, 192, 0.5)",
    outline: "rgba(0, 0, 0, 1)"
  },
  selectedActive: {
    main: "rgba(91, 240, 255, 0.5)",
    outline: "rgb(0, 52, 255)"
  },
  redacted: {
    main: "rgba(0, 0, 0, 0)",
    outline: "rgba(0, 0, 0, 0)"
  },
  redactedActive: {
    main: "rgba(0, 0, 0, 0)",
    outline: "rgba(255, 0, 0, 1)"
  },
  highConfidenceNormal: {
    main: "rgba(0, 255, 0, 0.5)",
    outline: "rgba(0, 0, 0, 1)"
  },
  highConfidenceActive: {
    main: "rgba(0, 192, 0, 0.5)",
    outline: "rgba(0, 0, 0, 1)"
  },
}

/**
 * Applies the given state to the given highlight
 *
 * @param hl
 * @param state
 */
function applyStateToHighlight(hl, state) {
  if (!hl || !hl.element) { return; }
  hl.element.firstElementChild.setAttribute("style", "fill: " + state.main + "; stroke:" + state.outline);
}

/**
 * Draws the highlights of the PII records on the currently displayed page
 *
 * @param pageNum
 */
function drawHighlights(pageNum) {
  piiRecords.forEach(function (record, idx) {
    var bbox = record.boundingBox;
    if (record.pageNum == pageNum) {
      var state, activeState;
      if (record.redacted) {
        state = states.redacted;
        activeState = states.redactedActive;
      } else if (record.selected) {
        state = states.selected;
        activeState = states.selectedActive;
      } else if (record.highConfidence) {
        //if (record.confidenceScore > confidenceScoreLevel) {
        state = states.highConfidenceNormal;
        activeState = states.highConfidenceActive;
      } else {
        state = states.normal;
        activeState = states.active;
      }
      var hl = ithInstance.highlightZone(bbox.left, bbox.top, bbox.w, bbox.h, pageNum - 1, {
        absolute: false,
        color: state.main,
        outlineColor: state.outline,
        scrollToZone: false
      });
      hl.normalState = state;
      hl.activeState = activeState;
      record.highlight = hl;
    } else {
      removeHighlight(record.highlight);
      record.highlight = undefined;
    }
  });
}

function drawHighlightsUsingBboxes(pageNum, bbox, confidence) {
  ithInstance.clearHighlights();
  console.log(pageNum, bbox, confidence )
  var hl = ithInstance.highlightZone(bbox.left, bbox.top, bbox.width, bbox.height, pageNum - 1, {
    absolute: false,
    color: confidence != undefined && confidence < 50 ? 'rgba(255,0,0,.2)':'rgba(0,255,0,.2)',
    outlineColor: 'black',
    scrollToZone: false
  });
  // hl.normalState = state;
  // hl.activeState = activeState;
  //record.highlight = hl;
}

function removeHighlight(hl) {
  if (hl) {
    ithInstance.removeHighlight(hl);
  }
}

function clearAllHighlights() {
  ithInstance.clearHighlights();
}

function clearHighlights() {
  piiRecords.forEach(function (record) {
    record.highlight = undefined;
  });
  ithInstance.clearHighlights();
}

/**
 * Generic AJAX Request utility method.
 *
 * @param method - Method Type (GET, POST etc.)
 * @param url - Resource URL
 * @param xhrCallback - Callback function that receives an XMLHttpRequest object
 * @param data - Data object containing request parameters
 */
function doHttpRequest(method, url, xhrCallback, data) {
  data = data || null;
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  //xhr.setRequestHeader('Accept', 'application/xml');
  //xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  //xhr.setRequestHeader("Pragma", "no-cache");
  //xhr.setRequestHeader("Expires", "0");

  xhr.onreadystatechange = function () {
    if (xhrCallback && xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4)
      xhrCallback(xhr);
  };
  xhr.send(data);
}


function removeRedactedDataFromJson() {
  redactedRecords = [];
  piiRecords.forEach(
    /**
     * @param {PIIRecord} record
     * @param {number} idx
     */
    function (record, idx) {
      if (record.redacted) {
        if (redactedRecords.length === 0 || !redactedRecords.some(ele => ele['id'] === record.id && ele['pageNum'] === record.pageNum)) {
          redactedRecords.push(record)
        }
      }
    });

  // let combinedBoundingBoxData = []
  // for(let i = 0; i < sampleDataJson['Entities'].length; i++) {
  //   for(let j = 0; j < sampleDataJson['Entities'][i]['BoundingBoxes'].length; j++) {
  //     combinedBoundingBoxData.push(sampleDataJson['Entities'][i][j])
  //   }
  // }

  let newJsonData = [];
  //let combinedRedactedData = [];
  let count = 0;
  for (let i = 0; i < sampleDataJson['Entities'].length; i++) {
    console.log("count: ", count)
    let tempBoundingBoxes = sampleDataJson['Entities'][i]['BoundingBoxes'];
    let retBoundingBoxes = [];

    for (let j = 0; j < tempBoundingBoxes.length; j++) {
      const ind = redactedRecords.findIndex(ele => ele['text'] == tempBoundingBoxes[j]['Value'] && ele['pageNum'] == sampleDataJson['Entities'][i]['Page'] && count == ele['id'])
      console.log("index: ", ind)
      if (ind == -1) {
        retBoundingBoxes.push(tempBoundingBoxes[j])
      }
      count++;
    }
    newJsonData.push({
      "Page": sampleDataJson['Entities'][i]['Page'],
      "BoundingBoxes": retBoundingBoxes
    })
    console.log(newJsonData);
  }

  let payload = {
    "Pages": sampleDataJson['Pages'],
    "Entities": newJsonData
  }

  ithInstance.invokeOnServer("saveJsonData", JSON.stringify({
    documentId: docIdArray[0],
    endpoint: jsonDataPutUrl,
    jsonData: JSON.stringify(payload)
  })).then(function () {
    uploadAsVersion()
  }).catch(function () {
    //uploadNewButton.style.display = "none"
    uploadVersionButton.style.display = "none"
    ithInstanceDiv.style.display = "none"
    ithErrorDiv.style.display = "block"
    if (hasMultipleDocuments) {
      document.getElementById("dropdown").style.display = "none"
    }
    errorMsgDiv.innerHTML = "Unable to save json data. Please contact Administrator.<br><br>"
  });

}

async function getDocURL(token, vaultdocId) {
  var bearerToken = "Bearer " + token
  const header = {
    "Authorization": bearerToken
  }
  console.log(header);
  return new Promise(async function (resolve, reject) {
    var url = 'https://upward-docuedgevault.deloitte.com/documents/view/' + vaultdocId//74e144b3-557f-44ce-8081-ac935c9be534';
    const response = await fetch(url, { headers: header })
    const data = await response.json()
    console.log("Response", data)
    if (response.status == 200) {
      //localStorage.setItem('userGroups', JSON.stringify(data))
      resolve(data)
    } else {
      reject()
    }
  })
}
