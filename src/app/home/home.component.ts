import { Component, OnInit, ViewChild } from '@angular/core';
import * as ith from '../../assets/client-html/ith.js';
import { loginService } from '../_services/login.service';
//import * as deloitteIntegration from '../../assets/deloitte-integration-CA-Upward';
import { ActivatedRoute } from '@angular/router';
import { MapsFieldsComponent } from '../maps-fields/maps-fields.component';
import { DocumentService } from '../_services/document.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var ith: any;
declare var startExec: any;

declare var drawHighlightsUsingBboxes: any;
declare var clearAllHighlights: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MapsFieldsComponent, {static : true}) child : MapsFieldsComponent;
  documentsList = ['Maps', 'LicenseReports', 'ProgressReport', 'DiversionLicense', 'AppropriateUnap']
  selectedDocument = 'LicenseReports';
  ithInstance = null;
  vaultDocId= '';
  json; 



  profileDetails: any = null;
  allFieldsFromProfileDetails: any = [];


  licenseReportsJson: any = [];

  reportsOfLicenseFields: any [];
  reportsForm: FormGroup;
  reportsOfLicenseFiltered: any = [];
  currentUseOfWaterTable: any = []
  currentAmountsOfWaterDivertedTable: any = [];
  tabsList: any = [];
  tableList: any = [];

  selectedTable = '';
  shouldDisplayForm = false;
  documentType = null;
  caseClosed = false;
  constructor(
    private loginSvc:loginService,
    private route: ActivatedRoute,
    private docService: DocumentService,
    private cookieService: CookieService,
    private fb: FormBuilder
  ) { }

  closeCase() {
    this.caseClosed = true;
  }

  async ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      if(params['vaultDocId']) {
        this.vaultDocId = params['vaultDocId'];
      }
    });

    if(!localStorage.getItem('token')) {
      this.json = await this.loginSvc.login().toPromise();
      console.log(this.json);
      if(this.json['token']) {
        localStorage.setItem('token', this.json['token']);
      }
    }


    if(!this.caseClosed) {
      if(this.json && this.json['token']) {
        new startExec(this.vaultDocId, this.json['token']);
      } else {
        new startExec(this.vaultDocId, null);
      }
    }
   

    // if(this.reportsForm != undefined) {
    //   this.reportsForm.reset();
    // }
   
    // if(this.selectedDocument === 'LicenseReports') {
    //   this.licenseReportsJson = await this.docService.getExtractedJson(this.vaultDocId).toPromise();
    //   this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
    //   //this.profileDetails = this.docService.getProfileDetails2();
    //   console.log(this.profileDetails, this.licenseReportsJson);
     
    //   this.populateReportsOfLicenseFieldsUsingProfileDetails();
    //   this.currentUseOfWaterTable = [];
    //   this.currentAmountsOfWaterDivertedTable = [];
      
    //   let tempArray = [] as any;
    //   this.populateReportsOfLicenseFields();
    //   this.shouldDisplayForm = true;
    //   this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['table'] == '');
    //   this.tabChanged({
    //     "tab": {
    //       "textLabel": this.tabsList[0]
    //     }
    //   })
    // }
    

    
     
  }

  saveForm() {
    console.log('Saving...')
  }

  cancel() {
    console.log('Cancelling...')
  }

  addDocumentType(type) {
    this.documentType = type;
  }

  tabChanged(e: any) {
  
    this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['section'] === e.tab.textLabel)
    for(let i = 0; i < this.tableList.length; i++) {
      if(e.tab.textLabel.includes(this.tableList[i].name)) {
        this.selectedTable = this.tableList[i].name;
        this.currentUseOfWaterTable = this.tableList[i].table;
        console.log(this.currentUseOfWaterTable);
        this.onClickInInput(this.tableList[i].full_table);
        break;
        //TO DO: Need to give each table a name
      } else {
        this.selectedTable = '';
      }
    }
  }


  onClickInInput(field) {
    console.log(field)
    if(field['page'] != null && field['bbox'] != null && field['page'] != undefined && field['bbox'] != undefined) {
      new drawHighlightsUsingBboxes(field['page'], field['bbox'])
    } else {
      new clearAllHighlights()
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

      // let rand = Math.floor(Math.random() * 3);
      // if(allresults[i]['fieldType'] === 'table') {
      //   allresults[i]['section'] = 'WaterUseTable';
      // } else if(rand === 0) {
      //   allresults[i]['section'] = 'Summary';
      // } else if (rand === 1) {
      //   allresults[i]['section'] = 'Compliance';
      // } else {
      //   allresults[i]['section'] = 'Storage';
      // }
      
      

      allresults[i]['display_label'] = allresults[i]['meta']['text'][0].split('|')[2].trim();
     
      if(allresults[i]['fieldType'] === 'table') {
        allresults[i]['section'] = 'WaterUseTable';
      } else {
        allresults[i]['section'] = 'P1';
      }

      if(allresults[i]['display_label'] === 'Date' || allresults[i]['display_label'] === 'Phone Number' || allresults[i]['display_label'] === 'Water Conservation Efforts Implementation' || allresults[i]['display_label'] === 'Groundwater usage in lieu of the surface water' || allresults[i]['display_label'] === 'Water Quality and WasteWater Reclamation') {
        allresults[i]['section'] = 'P2';
      }
    }

    this.allFieldsFromProfileDetails = [...allresults];
    console.log(allresults);
  }

  populateReportsOfLicenseFields() {
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
          values[valueKeys[i]]['KV'][j]['page'] = i + 1;
          let tempV = values[valueKeys[i]]['KV'][j];
          if(tempV && Object.keys(values[valueKeys[i]]['KV'][j]).length != 0) {
            let seObjKeys = Object.keys(values[valueKeys[i]]['KV'][j]);
            values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j][seObjKeys[0]];
            values[valueKeys[i]]['KV'][j]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
            retArray.push(values[valueKeys[i]]['KV'][j]);
          }
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
              console.log(headings);

              
              




              //Addition FOR Profile 1
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


              










              rows.unshift(headings)
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
             
              console.log(headings, rows, rows.length, rows[0].length)
              retArray.push({
                "display_label": values[valueKeys[i]]['TE'][j]['display_label'],
                "table": rows,
                "page": i + 1
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
          if(retArray[i]['page'] == undefined) {
            console.log(retArray[i]);
          }
          temp['page'] = retArray[i]['page'];
        } else if(temp['fieldType'] === 'table') {

          console.log(retArray[i]);
          temp['display_value'] = retArray[i]['table'];
          temp['page'] = retArray[i]['page'];



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
            "full_table": temp
          });
        } else {
          alert()
        }
      }   
      //m.set(this.allFieldsFromProfileDetails[i]['display_label'], this.allFieldsFromProfileDetails[i])
    }


    this.tabsList = ["P1", "P2"];

    this.tableList.forEach(element => {
      this.tabsList.push(element.name);
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


    let key = this.selectedDocument;
    if(this.reportsForm === undefined) {
      this.reportsForm = this.fb.group({
        key: new FormGroup(tempFormGroup)
      })
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

  completeForm(save = false) {
    this.child.openCompletePopup(save);
    //this.child.completeForm(save)
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
