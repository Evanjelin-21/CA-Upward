import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../_services/document.service';
import { CookieService } from 'ngx-cookie-service';
import { loginService } from '../_services/login.service';
import { ActivatedRoute } from '@angular/router';
declare var drawHighlightsUsingBboxes: any;
declare var clearAllHighlights: any;
class field {
  column: string;
  label: string;
  type: string;

  constructor(column:string, label:string, type:string) {
    this.column = column;
    this.label = label;
    this.type = type;
   }
}


@Component({
  selector: 'app-maps-fields',
  templateUrl: './maps-fields.component.html',
  styleUrls: ['./maps-fields.component.scss']
})
export class MapsFieldsComponent implements OnInit {
  profileDetails: any = null;
  allFieldsFromProfileDetails: any = [];
  licenseReportsJson: any = [];
  reportsOfLicenseFields: any [];
  reportsForm: FormGroup;
  reportsOfLicenseFiltered: any = [];
  fullTableArray: any = []
  currentAmountsOfWaterDivertedTable: any = [];
  tabsList: any = [];
  tableList: any = [];
  selectedTableNames = [];
  shouldDisplayForm = false;
  sectionList = [];
  documentType = null;
  profileId = null;
  @Output() documentTypeEvent = new EventEmitter<string>();
  // @HostListener('window:message', ['$event'])
  // onClientLoadedAndWindowClosed(event: any): void {
  //   console.log(event.data)
  //   // if(event.data === 'client loaded') {
  //   //   event.source.postMessage('RETURNING A MESSAGE', '*')
  //   // }

  //   let ithInstance = event.data;
  // console.log(ithInstance);
  //   // if(event.data.includes('client loaded')) {

  //   // }
    
  //   // if(typeof(event.data) == "string" && event.data.includes('loaded')) {
  //   //   // this.onHideDocList(false);
  //   //   this.loading = false;
  //   // }

  //   // if(typeof(event.data) == "string" && event.data.includes('close')) {
  //   //   this.onHideDocList(false);
  //   // }
  // }


  
  diversionLicenseFields = [
    new field('APPLICATION_NUMBER', 'Application', 'Text'),
    new field('PERMIT_ID', 'Permit', 'Text'),
    new field('LICENSE_ID', 'License', 'Text'),
    new field('USE_CODE', 'for the purpose of', 'Text'),
    new field('DATE_OF_INSPECTION', 'Proof as of', 'DateStamp'),
  ]

  appropriateUnapFields = [
    new field('APPLICATION_NUMBER', 'APPLICATION NO.', 'Text'),
    new field('APPLICATION_ACCEPTANCE_DATE', 'Filed', 'Timestamp'),
    new field('DIRECT_DIV_SEASON_START', 'Beginning Date', 'Text'),
    new field('DIRECT_DIV_SEASON_END', 'Closing Date', 'Text'),
    new field('COUNTY', 'County of', 'Text'),
  ]

  @Input() selectedDoc = 'Maps';
  @Input() vaultDocId = '';
  constructor(
    private docService: DocumentService,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private loginSvc:loginService,
    private route: ActivatedRoute) { }

  async ngOnInit() {

    // let json = await this.loginSvc.login().toPromise();
    // if(json['token']) {
    //   localStorage.setItem('token', json['token']);
    // }
    // console.log(window.document.getElementById('sohamiframeid'));
    // console.log(this.selectedDoc);
    // this.route.queryParams
    // .subscribe(params => {
    //   console.log(params);
    //   if(params['vaultid']) {
    //     this.vaultId = params['vaultid'];
    //   }
    // });


    if(this.reportsForm != undefined) {
      this.reportsForm.reset();
    }

    if(this.selectedDoc === 'LicenseReports') {
      this.licenseReportsJson = (await this.docService.getExtractedJson(this.vaultDocId).toPromise())['metadata']['properties']['Extracted Json'];
      this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
      //this.profileDetails = this.docService.getProfileDetails2();
      console.log(this.profileDetails, this.licenseReportsJson);
      this.documentType = this.licenseReportsJson['docType'];
      this.profileId = this.licenseReportsJson['profile_id'];
      this.documentTypeChanged(this.documentType);
      this.populateReportsOfLicenseFieldsUsingProfileDetails();
      this.fullTableArray = [];
      this.currentAmountsOfWaterDivertedTable = [];
      
      let tempArray = [] as any;
      this.populateReportsOfLicenseFields();
      this.shouldDisplayForm = true;
      this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['table'] == '');
      this.tabChanged({
        "tab": {
          "textLabel": this.tabsList[0]
        }
      })
    }    
  }

  documentTypeChanged(value: string) {
    this.documentTypeEvent.emit(value);
  }

  tabChanged(e: any) {
  
    this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['tab'] === e.tab.textLabel)
    this.selectedTableNames = [];
    this.fullTableArray = [];
    for(let i = 0; i < this.tableList.length; i++) {
      if(e.tab.textLabel.includes(this.tableList[i].section)) {
        this.selectedTableNames.push(this.tableList[i].name);
        this.fullTableArray.push([...this.tableList[i].table]);
        console.log(this.fullTableArray);
        this.onClickInInput(this.tableList[i].full_table);
        //break;
        //TO DO: Need to give each table a name
      }
    }
    
    // this.
    // this.reportsOfLicenseFiltered.forEach((element: any) => {
    //   if()
    // });
  }

  onClickInInput(field) {
    console.log(field)
    if(field['page'] != null && field['bbox'] != null && field['page'] != undefined && field['bbox'] != undefined) {
      new drawHighlightsUsingBboxes(field['page'], field['bbox'], field['confidence'])
    } else {
      new clearAllHighlights()
    }
  }

  async ngOnChanges() {
    
    if(this.selectedDoc === 'LicenseReports') {
     
      //console.log(this.reportsOfLicenseFiltered, this.fullTableArray,  this.currentAmountsOfWaterDivertedTable);
    } else if(this.selectedDoc === 'DiversionLicense') {
      this.licenseReportsJson = await this.docService.getExtractedJson(this.vaultDocId).toPromise();
      this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
    
      console.log(this.profileDetails, this.licenseReportsJson);
      this.shouldDisplayForm = true;
      this.populateReportsOfLicenseFieldsUsingProfileDetails();
      this.fullTableArray = [];
      this.currentAmountsOfWaterDivertedTable = [];
      
      let tempArray = [] as any;
      this.populateReportsOfLicenseFields();

      this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['table'] == '');
      this.tabChanged({
        "tab": {
          "textLabel": this.tabsList[0]
        }
      })
      //console.log(this.reportsOfLicenseFiltered, this.fullTableArray,  this.currentAmountsOfWaterDivertedTable);
    }
  }

  populateReportsOfLicenseFieldsUsingProfileDetails() {
    let allresults: any = [];
    console.log(this.profileDetails, this.profileDetails.length);
    for(let i = 0; i < this.profileDetails.length; i++) {
      allresults = allresults.concat(this.profileDetails[i]['annotations'][0]['result'])
    }


    for(let i = 0; i < allresults.length; i++) {
      if(allresults[i]['value']['rectanglelabels'].includes('KV')) {
        allresults[i]['fieldType'] = 'text';
      } else if (allresults[i]['value']['rectanglelabels'].includes('SE')) {
        allresults[i]['fieldType'] = 'checkbox';
      } else if (allresults[i]['value']['rectanglelabels'].includes('TE')) {
        allresults[i]['fieldType'] = 'table';
        console.log(allresults[i]);
      }

      allresults[i]['display_label'] = allresults[i]['meta']['text'][0].split('|')[2].trim();
     
      if(allresults[i]['fieldType'] === 'table') {
        allresults[i]['tab'] = 'WaterUseTable';
      } else {
        allresults[i]['tab'] = 'Summary';
      }


      //HARDCODED SECTION STARTS

      // //this.licenseReportsJson['doc_type'] === '' && 
      // if((allresults[i]['display_label'] === 'Date' || allresults[i]['display_label'] === 'Phone Number' || allresults[i]['display_label'] === 'Signature')) {
      //   allresults[i]['section'] = 'P2';
      // }

      // // if(allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'County' || allresults[i]['display_label'] === 'License Id'
      // // || allresults[i]['display_label'] === 'Source Of Water' || allresults[i]['display_label'] === 'Primary Owner') {
      // //   allresults[i]['section'] = 'Summary';
      // // }

      // // if(allresults[i]['display_label'] === 'Reviewed Water Right License' || allresults[i]['display_label'] === 'Complying With Terms' || allresults[i]['display_label'] === 'Request Revocation'
      // // || allresults[i]['display_label'] === 'Remarks') {
      // //   allresults[i]['section'] = 'Compliance';
      // // }

      // if(allresults[i]['display_label'] === 'Primary Owner' || allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'License Id'
      // || allresults[i]['display_label'] === 'Primary Contact' || allresults[i]['display_label'] === 'Contact Phone No') {
      //   allresults[i]['section'] = 'Applicant Details';
      // }

      // if(allresults[i]['display_label'] === 'County' || allresults[i]['display_label'] === 'POD Id' || allresults[i]['display_label'] === 'Storage Season'
      // || allresults[i]['display_label'] === 'Source Of Water' || allresults[i]['display_label'] === 'MAX Direct Diversion Rate' || allresults[i]['display_label'] === 'Use Net Acreage' || allresults[i]['display_label'] === 'Purpose Of Water Used'
      // || allresults[i]['display_label'] === 'Diversion Season' || allresults[i]['display_label'] === 'Request Revocation' || allresults[i]['display_label'] === 'Max Collection to  Storage' || allresults[i]['display_label'] === 'Water Right Face Value') {
      //   allresults[i]['section'] = 'License Summary';
      //   //allresults[i]['tab'] = 'Claim Credit For Groundwater';
      // }

      // if(allresults[i]['display_label'] === 'Reviewed Water Right License' || allresults[i]['display_label'] === 'Complying With Terms'
      // || allresults[i]['display_label'] === 'Intake Location Change' || allresults[i]['display_label'] === 'Remarks') {
      //   allresults[i]['section'] = 'Compliance';
      // }

      // if(allresults[i]['display_label'] === 'Water Conservation Efforts' || allresults[i]['display_label'] === 'Conservation Efforts') {
      //   allresults[i]['section'] = 'P2';
      // }

      // if(allresults[i]['display_label'] === 'Reclaimed Water') {
      //   allresults[i]['section'] = 'P2';
      // }

      // if(allresults[i]['display_label'] === 'Conjuctive Use') {
      //   allresults[i]['section'] = 'P2';
      // }

      //HARDCODED SECTION ENDS

    }

    allresults = allresults.filter(e => e['section'] != 'P2');

    this.allFieldsFromProfileDetails = [...allresults];
    console.log(allresults);
    this.sectionList = ["Applicant Details", "License Summary", "Compliance"];
  }

  populateReportsOfLicenseFields() {
    let knownKeys = ["confidence", "xmin", "ymin", "xmax", "ymax", "doc_width", "doc_height", "display_label"]
    let values = this.licenseReportsJson['values'];
    console.log(values);
    let valueKeys = Object.keys(values);
    let retArray: any = [];
    this.tabsList = [];
    this.tableList = [];
    let table1: any;
    for(let i = 0; i < valueKeys.length; i++) {
      if(values[valueKeys[i]]['KV']) {
        for(let j = 0; j < values[valueKeys[i]]['KV'].length; j++) {
          let tempV = values[valueKeys[i]]['KV'][j];
          if(tempV && Object.keys(values[valueKeys[i]]['KV'][j]).length != 0) {
            let seObjKeys = Object.keys(values[valueKeys[i]]['KV'][j]);
            for(let k = 0; k < seObjKeys.length; k++) {
              if(!knownKeys.includes(seObjKeys[k])) {
                values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j][seObjKeys[k]];
                break;
              }
            }
            //values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j][seObjKeys[0]];
            values[valueKeys[i]]['KV'][j]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
            retArray.push(values[valueKeys[i]]['KV'][j]);
          }
          values[valueKeys[i]]['KV'][j]['page'] = i + 1;
        }
      }
      if(values[valueKeys[i]]['SE']) {
        for(let j = 0; j < values[valueKeys[i]]['SE'].length; j++) {
    
          if(values[valueKeys[i]]['SE'][j]) {
            let seObjKeys = Object.keys(values[valueKeys[i]]['SE'][j]);
            if(seObjKeys.length != 0) {
              for (const [key, value] of Object.entries(values[valueKeys[i]]['SE'][j][seObjKeys[0]])) {
                if(key.toLowerCase() === 'yes') {
                  if(value === 'SELECTED') {
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_value'] = true;
                    let tempV = values[valueKeys[i]]['SE'][j][seObjKeys[0]]
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
                  } else {
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_value'] = false; 
                    let tempV = values[valueKeys[i]]['SE'][j][seObjKeys[0]]
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
                  }
                  values[valueKeys[i]]['SE'][j][seObjKeys[0]]['page'] = i + 1;
                }
              }
              retArray.push(values[valueKeys[i]]['SE'][j][seObjKeys[0]])
            }
            
          }
        }
      }
      console.log(values[valueKeys[i]]['TE'])
      if(values[valueKeys[i]]['TE']) {
        for(let j = 0; j < values[valueKeys[i]]['TE'].length; j++) {
          if(values[valueKeys[i]]['TE'][j]) {
            //values[valueKeys[i]]['TE'][j]['display_label'] = Object.keys(values[valueKeys[i]]['TE'][j])[0];
            values[valueKeys[i]]['TE'][j]['page'] = i + 1;
            let allTableEntries = values[valueKeys[i]]['TE'][j][Object.keys(values[valueKeys[i]]['TE'][j])[0]];
            let headers = [];
            values[valueKeys[i]]['TE'][j]['display_label'] = allTableEntries['display_label'];
            if(allTableEntries && allTableEntries['1']) {
              console.log(allTableEntries, values[valueKeys[i]]['TE'][j])
              let [headings, ...rows] = allTableEntries['1'];
              console.log(headings, rows);







              //Getting rid of NA/MA from tables

              for(let r1 = 0; r1 < rows.length; r1++) {
                
                for(let r2 = 0; r2 < rows[r1].length; r2++) {
                
                  if(rows[r1][r2] && (rows[r1][r2].includes('NA') || rows[r1][r2].includes('MA'))) {
                    rows[r1][r2] = '';
                  }
                }
              }
              







              //For profiles where headers are not being passed
              //Adding a check to see if headers are passed
              if(headings.length === 4) {
                let count = headings.filter(e => Number(e) > 1000).length;
                let count2 = headings.filter(e => e === '').length;
                if(count === 0) {
                  let temp;
                  count2 != 3 ? rows.unshift(headings) : temp = headings[0];
                  if (retArray[retArray.length - 1]['table'] != undefined) {
                    headings = retArray[retArray.length - 1]['table'][0];
                    headings[0] = count2 != 3 ? '': temp;
                  } else {
                    headings = ['', '2007', '2008', '2009'];
                    count2 != 3 ? headings[0] = '': headings[0] = temp;
                  }
                }
              }







              //Addition FOR Profile 1. Does not suit some profiles where headers are not being passed
              //GETS Rid of empty spaces from headers and also from the corresponding rows
              // headings = headings.filter((element, i) => {
              //   if(i === 0) {
              //     return element;
              //   }
              //   return element !== '';              
              // });
              for(let l = headings.length - 1; l >= 0; l--) {
                if(headings[l] === '' && l != 0) {
                  headings.splice(l, 1)
                }
              }
              console.log(headings);
              for(let k = 0; k < rows.length; k++) {
                for(let l = rows[k].length - 1; l >= 0; l--) {
                  if(rows[k][l] === '') {
                    if(rows[k].length != headings.length)
                      rows[k].splice(l, 1)
                  }
                }
              }


              









              rows.unshift(headings);
              if(headings.length != 4) {
                rows = this.transpose(rows);
              }




              

              //Addition FOR Profile 3
              for(let m = 1; m < rows[0].length; m++) {
                console.log(rows[0][m], Number(rows[0][m]))
                if(isNaN(Number(rows[0][m]))) {
                  let tArr = Array(rows[0].length).fill("");
                  console.log(tArr);
                  rows.unshift(tArr);
                  break;
                }
              }

              

              







              

              console.log(rows);
          //NOW DONE BELOW
              // let tempFormGroup: any = {};
              // for(let i = 1; i < rows.length; i++) {
              //   for(let j = 1; j < rows[i].length; j++) {
              //     tempFormGroup[rows[i].length * i + j] = new FormControl(rows[i][j]);
              //   }
              // }

              // let key = values[valueKeys[i]]['TE'][j]['display_label'];
              
              
              // let temFbGroup = {};
              // temFbGroup[key] = new FormGroup(tempFormGroup)
              // if(this.reportsForm === undefined) {
              //   this.reportsForm = this.fb.group(temFbGroup)
              // } else {
              //   this.reportsForm.addControl(key, this.fb.group(tempFormGroup))
              // }
              // console.log(tempFormGroup);


              //HARDCODED SECTION STARTS //this.licenseReportsJson['doc_type'] === '' && 
              let name = values[valueKeys[i]]['TE'][j]['display_label'];

              if(name === 'Claim Credit For Groundwater' || name === 'Claim Credit For Substitution' || name === 'Conservation Amount') {
                values[valueKeys[i]]['TE'][j]['section'] = 'Claim Credit For Groundwater';
              } else {
                values[valueKeys[i]]['TE'][j]['section'] = name;
              }

              //HARDCODED SECTION ENDS
              console.log(headings, rows, rows.length, rows[0].length)
              retArray.push({
                "display_label": values[valueKeys[i]]['TE'][j]['display_label'],
                "table": rows,
                "page": i + 1,
                "section": values[valueKeys[i]]['TE'][j]['section']
              })
              // this.tableList.push({
              //   "name": values[valueKeys[i]]['TE'][j]['display_label'],
              //   "table": rows
              // });
            }
          }
        }
      }
      
    }

    const m = new Map();
    for(let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
      m.set(this.allFieldsFromProfileDetails[i]['display_label'], this.allFieldsFromProfileDetails[i])
    }

    console.log(m, retArray.length);

    for(let i = 0; i < retArray.length; i++) {
      if(m.has(retArray[i]['display_label'])) {
        let temp = m.get(retArray[i]['display_label']);

        if(temp['fieldType'] != 'table') {
          temp['display_value'] = retArray[i]['display_value'];
          temp['bbox'] = retArray[i]['bbox'];
          temp['confidence'] = retArray[i]['confidence'];
          if(retArray[i]['page'] == undefined) {
            console.log(retArray[i]);
          }
          temp['page'] = retArray[i]['page'];
        } else if(temp['fieldType'] === 'table') {

          console.log(retArray[i]);
          temp['display_value'] = retArray[i]['table'];
          temp['page'] = retArray[i]['page'];
          temp['section'] = retArray[i]['section'];
          

          let tempFormGroup: any = {};
          for (let a = 1; a < retArray[i]['table'].length; a++) {
            for (let b = 1; b < retArray[i]['table'][a].length; b++) {
              tempFormGroup[retArray[i]['table'][a].length * a + b] = new FormControl(retArray[i]['table'][a][b]);
            }
          }
          let key = retArray[i]['display_label'];
          
          let temFbGroup = {};
          temFbGroup[key] = new FormGroup(tempFormGroup)
          if(this.reportsForm === undefined) {
            this.reportsForm = this.fb.group(temFbGroup)
          } else {
            this.reportsForm.addControl(key, this.fb.group(tempFormGroup))
          }

        
          // temp['bbox'] = {
          //   "width": temp['value']['width'] / 100,
          //   "height": temp['value']['height'] / 100,
          //   "left": temp['value']['x'] / temp['value']['width'],
          //   "top": temp['value']['y'] / temp['value']['height'],
          // }

          temp['bbox'] = {
            "width": temp['value']['width'],
            "height": temp['value']['height'],
            "left": temp['value']['x'],
            "top": temp['value']['y'],
          }
          this.tableList.push({
            "name": retArray[i]['display_label'],
            "table": retArray[i]['table'],
            "section": retArray[i]['section'],
            "full_table": temp,
          });
        }
      }   
      //m.set(this.allFieldsFromProfileDetails[i]['display_label'], this.allFieldsFromProfileDetails[i])
    }

    //HARD CODED SECTION BEGINS - Creates a table from LicenseOfSummary
    if(this.documentType.includes('Report Of Licensee')) {
      let newTable = this.changesToLicenseSummary();
      newTable['name'] = 'LicenseToSummaryTable';
      newTable['table'] = newTable.rows;
      newTable['section'] = 'Summary';
      newTable['full_table'] = newTable;
  
      let newTempFormGroup = {};
      for (let a = 1; a < newTable['table'].length; a++) {
        for (let b = 0; b < newTable['table'][a].length; b++) {
          newTempFormGroup[newTable['table'][a].length * a + b] = new FormControl(newTable['table'][a][b]);
        }
      }
      let newkey =  newTable['name'];
      
      let newtemFbGroup = {};
      newtemFbGroup[newkey] = new FormGroup(newTempFormGroup)
      if(this.reportsForm === undefined) {
        this.reportsForm = this.fb.group(newtemFbGroup)
      } else {
        this.reportsForm.addControl(newkey, this.fb.group(newTempFormGroup))
      }
      this.tableList.push(newTable);
    }    
    //HARD CODED SECTION ENDS

    this.tabsList = ["Summary"];
    

    this.tableList.forEach(element => {
      if(!this.tabsList.includes(element.section))
        this.tabsList.push(element.section);
    });
    

    this.allFieldsFromProfileDetails = [];
    for (const [key, value] of m.entries()) {
      if(value['fieldType'] != 'table')
        this.allFieldsFromProfileDetails.push(value)
    }
    console.log(this.allFieldsFromProfileDetails)
    this.reportsOfLicenseFields = [...this.allFieldsFromProfileDetails];
    

    //create sections (hard-coded)
    

    let tempFormGroup: any = {};
    this.reportsOfLicenseFields.forEach(element => {
      if(element['display_value']) {
        tempFormGroup[element.id] = new FormControl(element['display_value'] || '', Validators.required);
      } else {
        tempFormGroup[element.id] = new FormControl(element['fieldType'] === 'checkbox' ? false:'', Validators.required);
      }
    });


    let key = this.documentType;
    if(this.reportsForm === undefined) {
      let tempParFormGroup = {};
      tempParFormGroup[key] = new FormGroup(tempFormGroup)
      this.reportsForm = this.fb.group(tempParFormGroup) 
      // this.reportsForm = this.fb.group({
      //   key: new FormGroup(tempFormGroup)
      // })
    } else {
      this.reportsForm.addControl(key, this.fb.group(tempFormGroup))
    }
    

    // this.reportsForm = new FormGroup(tempFormGroup);
    console.log(this.reportsForm);

    //check if profile details KV match with these if the do take the value from the valueKeys thing and also calculate bounding boxes and add that as a new attribute.

    //Collect all SE data

    //Collect all TE data

    //Put all these together (KV, SE) Keep TE separate as a new attribute called tables: [TE1, TE2, ..] in licenseOfReportsFields

    console.log(retArray);
  }

  changesToLicenseSummary() {
    let newHeadings;
    let namesToCompareAgainst = [];
    if(this.profileId === 0 || this.profileId === 1) {
      newHeadings = ['Licensed Uses of Water', 'Acres', 'Direct Diversion Season', 'Collection To Storage Season']
      namesToCompareAgainst = ['Use Net Acreage', 'Diversion Season', 'Storage Season']
    }
    if(this.profileId === 2 || this.profileId === 3 || this.profileId === 4) {
      newHeadings = ['Licensed Uses of Water', 'Acres', 'Diversion/Storage Season']
      namesToCompareAgainst = ['Use Net Acreage', 'Diversion/Storage Season',]
    }
    if(this.profileId === 5 || this.profileId === 6 || this.profileId === 7 || this.profileId === 8) {
      newHeadings = ['Licensed Uses of Water', 'Acres']
      namesToCompareAgainst = ['Use Net Acreage']
    }
   
   
    let rows = []
    for(let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
      let name = this.allFieldsFromProfileDetails[i]['display_label']
      if(name === 'Purpose Of Water Used' || name === 'Purpose Of Water Used') {
        if(this.allFieldsFromProfileDetails[i]['display_value']) {
          let separateValues = this.allFieldsFromProfileDetails[i]['display_value'].split('|');
          const numOfRows = separateValues.length;
  
          for(let j = 0; j < numOfRows; j++) {
            let newRow = [];
            newRow.push(separateValues[j])
            rows.push(newRow);
          }
        }     
      }
    }
    
    for (let index = 0; index < namesToCompareAgainst.length; index++) {
      for (let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
        let name = this.allFieldsFromProfileDetails[i]['display_label']
        if (name === namesToCompareAgainst[index]) {
          let separateValues = [];
          if (this.allFieldsFromProfileDetails[i]['display_value']) {
            separateValues = this.allFieldsFromProfileDetails[i]['display_value'].split('|');
            if (separateValues[0].includes('month/day')) {
              separateValues.splice(0, 1);
            }
          }
          for (let j = 0; j < rows.length; j++) {
            if (separateValues[j]) {
              rows[j].push(separateValues[j])
            } else {
              rows[j].push('')
            }
          }
        }
      }
    }

    rows.unshift(newHeadings)
    console.log(newHeadings, rows);
    return {
      "rows": rows,
      "headings": newHeadings
    }
    
  }

  completeForm() {
    console.log(this.reportsForm);
  }

  transpose (matrix) {
    let [row] = matrix
    console.log(matrix, row);
    return row.map((value, column) => matrix.map(row => row[column]))
  }

  calculateBoundingBoxes(xmin, ymin, xmax, ymax, doc_width, doc_height) {

        xmin = parseInt(xmin);
        xmax = parseInt(xmax);
        ymin = parseInt(ymin);
        ymax = parseInt(ymax);
        doc_width = parseInt(doc_width);
        doc_height = parseInt(doc_height);

        // console.log(xmin, xmax, ymin, ymax, doc_width, doc_height);
        let bbox_width = xmax - xmin;

        let bbox_height = ymax - ymin;

        let bbox_left = xmin;

        let bbox_top = ymin;

        let x_min = (bbox_left / doc_width)

        let y_min = (bbox_top / doc_height)

        let x_max = ((bbox_width / doc_width))

        let y_max = ((bbox_height / doc_height))

        return {
          "width": x_max,
          "height": y_max,
          "left": x_min,
          "top": y_min,
        };
  }

}
