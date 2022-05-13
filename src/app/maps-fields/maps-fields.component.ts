import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../_services/document.service';
import { CookieService } from 'ngx-cookie-service';
import { loginService } from '../_services/login.service';
import { ActivatedRoute } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';
import { AppConfig } from 'src/assets/config/app-config';
import { MatDialog } from '@angular/material/dialog';
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
  licenseReportsJson: any = {};
  licenseReportsProperties = {};
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
  tableSection = null;
  shouldAddSections = true;
  staticLicenseReportsJson = {};
  staticProfileDetailsJson = [];
  keyForTableFormName = null;
  shouldDisplaySectionName = true;
  separateTableValuesForLicenseSummary = [];
  checkIfAmountsSameIsChecked = false;
  popupMessage = '';
  isProcessing = false;
  @Output() documentTypeEvent = new EventEmitter<string>();
  @Output() closeCaseEvent = new EventEmitter<void>();
  @Input() selectedDoc = 'Maps';
  @Input() vaultDocId = '';
  @Input() isCaseClosed = false;
  @Output() buttonsDisableEvent = new EventEmitter<boolean>();
  @ViewChild('popupDialog', { static: false } ) popupDialog: TemplateRef<any>;
  constructor(
    private docService: DocumentService,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private loginSvc:loginService,
    private route: ActivatedRoute,
    private config: AppConfig,
    public dialog: MatDialog,) { }

  async ngOnInit() {

    if (!this.isCaseClosed) {
      this.isProcessing = true;
      if (this.reportsForm != undefined) {
        this.reportsForm.reset();
      }

      if (this.selectedDoc === 'LicenseReports') {
        try {

          this.licenseReportsProperties = (await this.docService.getExtractedJson(this.vaultDocId).toPromise())['metadata']['properties']
          this.licenseReportsJson = this.licenseReportsProperties['Extracted Json'];
          this.staticLicenseReportsJson = cloneDeep(this.licenseReportsJson);
          this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
          this.staticProfileDetailsJson = cloneDeep(this.profileDetails);
          //this.profileDetails = this.docService.getProfileDetails2();
          this.isProcessing = false;
          console.log(this.profileDetails, this.licenseReportsJson);
          this.documentType = this.licenseReportsJson['docType'];
          this.profileId = this.licenseReportsJson['profile_id'];
          this.documentTypeChanged(this.documentType);
          this.populateReportsOfLicenseFieldsUsingProfileDetails();
          this.fullTableArray = [];
          this.tableSection = null;
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
        } catch (err) {
          console.log(err);
        } finally {
          this.isProcessing = false;
        }
      }
    }
  }

  documentTypeChanged(value: string) {
    this.documentTypeEvent.emit(value);
  }

  tabChanged(e: any) {
    this.shouldDisplaySectionName = true;
    this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['tab'] === e.tab.textLabel)
    this.selectedTableNames = [];
    this.fullTableArray = [];
    this.tableSection = null;
    for(let i = 0; i < this.tableList.length; i++) {
      if(e.tab.textLabel.includes(this.tableList[i].tab)) {
        this.selectedTableNames.push(this.tableList[i].name);
        console.log(this.selectedTableNames);
        this.tableSection = this.tableList[i].section;
        this.fullTableArray.push(this.tableList[i].full_table);
        console.log(this.fullTableArray);
        if(this.tableList[i].tab != 'Summary') {
          this.sectionList = this.tableList[i].sectionList ? this.tableList[i].sectionList : ['Main Section'];
          if(this.sectionList.length === 1 && this.sectionList[0] === 'Main Section') {
            this.shouldDisplaySectionName = false;
          }
        } else {
          if(this.profileId === 8) {
            this.sectionList = ["Applicant Details", "License Summary",  "1963", "1964", "1965", "Compliance"];
          } else if(this.profileId === 10) {
              this.sectionList = ["Applicant Details", "License Summary", "Diversion Point/Beneficial Use of Water"];
          } else if(this.profileId === 11) {
            this.sectionList = ["Applicant Details", "Compliance", "Water Usage", "Water Storage/Remarks"];
          } else if(this.profileId === 9) {
            this.sectionList = ["Applicant Details", "Source, Amount, Use, and Location of Diversion Works", "Description of Diversion Works", "Completion Schedule", "Description of Proposed Use", "General"];
          } else {
            this.sectionList = ["Applicant Details", "License Summary", "Compliance", "Conservation of Water/Water Quality/Conjunctive Use"];
          }
          
        }
        console.log(this.tableSection, this.tableList[i].section)
        this.onClickInInput(this.tableList[i].full_table);
        //break;
        //TO DO: Need to give each table a name
      }
    }
    
    if(this.selectedTableNames.length === 0) {
      if(this.profileId === 8) {
        this.sectionList = ["Applicant Details", "License Summary", "1963", "1964", "1965", "Compliance"];
      } else if(this.profileId === 10) {
        this.sectionList = ["Applicant Details", "License Summary", "Diversion Point/Beneficial Use of Water"];
      } else if(this.profileId === 11) {
        this.sectionList = ["Applicant Details", "Compliance", "Water Usage", "Water Storage/Remarks"];
      } else if(this.profileId === 9) {
        this.sectionList = ["Applicant Details", "Source, Amount, Use, and Location of Diversion Works", "Description of Diversion Works", "Completion Schedule", "Description of Proposed Use", "General"];
      } else {
        this.sectionList = ["Applicant Details", "License Summary", "Compliance", "Conservation of Water/Water Quality/Conjunctive Use"];
      }
      //this.sectionList = ["Applicant Details", "License Summary", "Compliance", "Conservation of Water/Water Quality/Conjunctive Use"];
    }
    // this.
    // this.reportsOfLicenseFiltered.forEach((element: any) => {
    //   if()
    // });
  }

  onClickInInput(field) {
    if(field['page'] != null && field['bbox'] != null && field['page'] != undefined && field['bbox'] != undefined) {
      new drawHighlightsUsingBboxes(field['page'], field['bbox'], field['confidence'])
    } else {
      new clearAllHighlights()
    }
  
  }

  

  onCheckboxChange(field, documentType, event) {
    if(event && field['display_label'].includes('During the period covered by this Report, were you implementing any water conservation efforts?')) {
      //alert()
      let conservationEfforts = this.reportsOfLicenseFields.find(licenseField => licenseField['display_label'].includes('Conservation Efforts'))
      if(event.target.checked) {
        let val = this.reportsForm.get(documentType).get(conservationEfforts['id']).value
        if(val == undefined || val == null || val == '') {
          this.reportsForm.get(documentType).get(conservationEfforts['id']).addValidators(Validators.required)
          this.reportsForm.get(documentType).get(conservationEfforts['id']).updateValueAndValidity();
          console.log(this.reportsForm.get(documentType).get(conservationEfforts['id']))
        }
      } else {
        this.reportsForm.get(documentType).get(conservationEfforts['id']).clearValidators();
        this.reportsForm.get(documentType).get(conservationEfforts['id']).updateValueAndValidity();
      }
    } 


    if(event && field['display_label'].includes('I have changed the intake location, type(s) of use, and/or place of use')) {
      let remarks = this.reportsOfLicenseFields.find(licenseField => licenseField['display_label'].includes('Remarks'))
      if(event.target.checked) {
        let val = this.reportsForm.get(documentType).get(remarks['id']).value
        if(val == undefined || val == null || val == '') {
          this.reportsForm.get(documentType).get(remarks['id']).addValidators(Validators.required)
          this.reportsForm.get(documentType).get(remarks['id']).updateValueAndValidity();
          console.log(this.reportsForm.get(documentType).get(remarks['id']))
        }
      } else {
        this.reportsForm.get(documentType).get(remarks['id']).clearValidators();
        this.reportsForm.get(documentType).get(remarks['id']).updateValueAndValidity();
      }
    } 

    if(event && field['display_label'].includes('Check if amounts are same')) {
  
      let newTableValues = this.reportsForm.value['Face Value'];
      let wholeTableFromList2 = this.tableList.find(ele => ele['name'].includes("Amount of Water Beneficially Used"))
      
      console.log(wholeTableFromList2)
      let key = wholeTableFromList2['name'];
      if(event.target.checked) {
        this.checkIfAmountsSameIsChecked = true;

        for (let m = 1; m < wholeTableFromList2['table'].length; m++) {
          for (let n = 1; n < wholeTableFromList2['table'][m].length; n++) {
            wholeTableFromList2['table'][m][n]['value'] = newTableValues[wholeTableFromList2['table'][m].length * m + n]
          }
        }
        wholeTableFromList2['full_table']['table'] = wholeTableFromList2['table'];

        let tempFormGroup: any = {};
        for (let a = 1; a < wholeTableFromList2['table'].length; a++) {
          for (let b = 1; b < wholeTableFromList2['table'][a].length; b++) {
            tempFormGroup[wholeTableFromList2['table'][a].length * a + b] = new FormControl(wholeTableFromList2['table'][a][b]['value']);
          }
        }
        console.log(tempFormGroup);
        
        let temFbGroup = {};
        temFbGroup[key] = new FormGroup(tempFormGroup)
        this.reportsForm.setControl(key, this.fb.group(tempFormGroup));
        console.log(this.reportsForm)
        this.reportsForm.get(key).updateValueAndValidity()
      } else {
        this.popupMessage = 'You are about to clear the table. You may lose the updated values. Do you want to proceed?';
        this.dialog.open(this.popupDialog,
          { width: '500px', data: {wholeTableFromList2: wholeTableFromList2, key: key, event: this.reportsForm.get(documentType).get(field['id'])} });
          //event.target.checked =true;
        // this.checkIfAmountsSameIsChecked = false;
        // let tempFormGroup: any = {};
        // for (let a = 1; a < wholeTableFromList2['table'].length; a++) {
        //   for (let b = 1; b < wholeTableFromList2['table'][a].length; b++) {
        //     tempFormGroup[wholeTableFromList2['table'][a].length * a + b] = '';
        //   }
        // }
        // this.reportsForm.get(key).reset(tempFormGroup);
        // this.reportsForm.get(key).updateValueAndValidity()
      }
    }

      //if check if amounts is turned off then clear the form and if it is turned on then copy the table again and recreate the formgroup
    ///if and during the period covered... is checked unchecked, make conservation efforts valid/invalid
    this.onClickInInput(field);
  }

  resetTable(data?, cancel?) {
    this.popupMessage = '';
    if (cancel) {
      data.event.setValue(!data.event.value)
      data.event.updateValueAndValidity();
      console.log(data.event.value);
      return;
    }
    if(data) {
      this.checkIfAmountsSameIsChecked = false;
      let tempFormGroup: any = {};
      for (let a = 1; a < data.wholeTableFromList2['table'].length; a++) {
        for (let b = 1; b < data.wholeTableFromList2['table'][a].length; b++) {
          tempFormGroup[data.wholeTableFromList2['table'][a].length * a + b] = '';
        }
      }

      this.reportsForm.get(data.key).reset(tempFormGroup);
      this.reportsForm.get(data.key).updateValueAndValidity()
    }

    
  }

  onClickInInputFieldInTable(field, tablePage, docWidth, docHeight) {
    console.log(docHeight, docWidth)
    if(!field['page'] || !field['bbox']) {
      field['page'] = tablePage;
      field['bbox'] = this.calculateBoundingBoxes(field['xmin'], field['ymin'], field['xmax'], field['ymax'], docWidth, docHeight);
    }
    console.log(field)
    if(field['page'] != null && field['bbox'] != null && field['page'] != undefined && field['bbox'] != undefined) {
      new drawHighlightsUsingBboxes(field['page'], field['bbox'])
    } else {
      new clearAllHighlights()
    }
  }

  prefillStaticJson() {
    let pageKeys = Object.keys(this.staticLicenseReportsJson['values'])
    for(let i = 0;  i < pageKeys.length; i++) {
      // let tempAllResultsByPage = allresults.filter(ele => ele['page'] == i + 1);
      // console.log(tempAllResultsByPage);
      // let tempAllResultsByPageKV = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('KV'));
      // let tempAllResultsByPageSE = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('SE'));
      // let tempAllResultsByPageTE = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('TE'));

      let keys = Object.keys(this.staticLicenseReportsJson['values'][pageKeys[i]]);
      for(let j = 0; j < keys.length; j++) {
        if(keys[j] === 'KV') {
          for(let k = 0; k < this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].length; k++) {
            let ele = this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]][k];
            ele['final_display_value'] = '';            
          }
        } else if(keys[j] === 'SE') {
          for(let k = 0; k < this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].length; k++ ) {
            let ele = this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]][k];
            let eleKeys = Object.keys(ele);
            if(eleKeys.length > 0) {
              console.log(ele, eleKeys, this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]])
              ele[eleKeys[0]]['final_display_value'] = false;
            }
            
          }
        } else if(keys[j] === 'TE') {
          for(let k = 0; k < this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].length; k++) {
            let ele =  this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]][k];
            let eleKeys = Object.keys(ele);
            if(eleKeys.length > 0) {
              ele[eleKeys[0]]['final_display_value'] = cloneDeep(ele[eleKeys[0]][1]);
            }
            
          }
        }
      }
    }
  }

  openCompletePopup(save) {
    if(save) {
      this.popupMessage = 'Are you sure you want to save the indexing data?'
      this.dialog.open(this.popupDialog, {width: '500px', data: {save: save} })
    } else {
      this.popupMessage = 'Are you sure you want to complete the indexing process? Note: This case will be closed'
      this.dialog.open(this.popupDialog, {width: '500px', data: {save: save} })
    }
  }

  async completeForm(save?) {
    this.isProcessing = true;
    this.buttonsDisableEvent.emit(true);
    let applicationID;
    let allresults: any = [];
    try {

      for (let i = 0; i < this.staticProfileDetailsJson.length; i++) {
        let tempResult = this.staticProfileDetailsJson[i]['annotations'][0]['result'].map(ele => {
          ele['page'] = i + 1;
          return ele;
        })
        allresults = allresults.concat(tempResult)
      }

      for (let i = 0; i < allresults.length; i++) {
        allresults[i]['display_label'] = allresults[i]['meta']['text'][0].split('|')[2].trim();
      }

      //Get and Store All values from documentTypeForm
      let keys = Object.keys(this.reportsForm.value[this.documentType])
      console.log(keys)
      for (let i = 0; i < allresults.length; i++) {
        for (let j = 0; j < keys.length; j++) {
          if (allresults[i]['id'] === keys[j]) {
            console.log('aaa')
            allresults[i]['final_display_value'] = this.reportsForm.value[this.documentType][keys[j]];
            break;
          }
        }
      }

      keys = Object.keys(this.reportsForm.value)
      for (let i = 0; i < keys.length; i++) {
        if (keys != this.documentType) {
          for (let j = 0; j < allresults.length; j++) {
            if (allresults[j]['display_label'] === keys[i]) {
              console.log('bbb')
              allresults[j]['final_display_value'] = this.reportsForm.value[keys[i]];
              break;
            }
          }
        }
      }
      console.log(this.tableList);

      this.prefillStaticJson()

      let pageKeys = Object.keys(this.staticLicenseReportsJson['values'])
      for (let i = 0; i < pageKeys.length; i++) {
        let tempAllResultsByPage = allresults.filter(ele => ele['page'] == i + 1);
        console.log(tempAllResultsByPage);
        let tempAllResultsByPageKV = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('KV'));
        let tempAllResultsByPageSE = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('SE'));
        let tempAllResultsByPageTE = tempAllResultsByPage.filter(ele => ele['value']['rectanglelabels'].includes('TE'));

        let keys = Object.keys(this.staticLicenseReportsJson['values'][pageKeys[i]]);
        for (let j = 0; j < keys.length; j++) {
          if (keys[j] === 'KV') {
            for (let k = 0; k < tempAllResultsByPageKV.length; k++) {
              this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].map(ele => {
                if (ele['display_label'] === tempAllResultsByPageKV[k]['display_label']) {
                  if (tempAllResultsByPageKV[k]['final_display_value'])
                    ele['final_display_value'] = tempAllResultsByPageKV[k]['final_display_value'];
                  if (save) {
                    ele['value'] = tempAllResultsByPageKV[k]['final_display_value'];
                  }

                  if (ele['display_label'].includes('Application Number')) {
                    applicationID = ele['final_display_value']
                  }
                } else {
                  let val = '';
                  let shouldAdd = false;
                  for (let a = 0; a < this.separateTableValuesForLicenseSummary.length; a++) {
                    let summaryEle = this.separateTableValuesForLicenseSummary[a];
                    if (summaryEle['name'] === ele['display_label']) {
                      shouldAdd = true;
                      if (val != '') {
                        if (summaryEle['display_value']) {
                          val += ('|' + summaryEle['display_value'])
                        } else {
                          if (summaryEle['value']) {
                            val += ('|' + summaryEle['value'])
                          } else {
                            val += ('|' + '')
                          }

                        }

                      } else {
                        if (summaryEle['display_value']) {
                          val = summaryEle['display_value']
                        } else {
                          if (summaryEle['value']) {
                            val = summaryEle['value']
                          } else {
                            val = ''
                          }

                        }

                      }
                    }
                  }
                  if (shouldAdd) {
                    if (val)
                      ele['tempVal'] = val;
                  }
                }
              })
            }
          } else if (keys[j] === 'SE') {
            //console.log(tempAllResultsByPageSE)
            for (let k = 0; k < tempAllResultsByPageSE.length; k++) {
              let SEKeys = this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]]
              this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].map(ele => {
                let eleKeys = Object.keys(ele)
                if (eleKeys.length > 0 && ele[eleKeys[0]]['display_label'] === tempAllResultsByPageSE[k]['display_label']) {
                  if (tempAllResultsByPageSE[k]['final_display_value'])
                    ele[eleKeys[0]]['final_display_value'] = tempAllResultsByPageSE[k]['final_display_value'];

                  if (save) {
                    if (ele[eleKeys[0]]['final_display_value']) {
                      ele[eleKeys[0]]['NO'] = 'NOT_SELECTED';
                      ele[eleKeys[0]]['YES'] = 'SELECTED';
                    } else {
                      ele[eleKeys[0]]['YES'] = 'NOT_SELECTED';
                      ele[eleKeys[0]]['NO'] = 'SELECTED';
                    }
                  }
                }
              })
            }
          } else if (keys[j] === 'TE') {
            let tempTable = null;
            let tempTableFromForm = null;
            for (let k = 0; k < this.tableList.length; k++) {
              for (let l = 0; l < tempAllResultsByPageTE.length; l++) {
                if (this.tableList[k]['name'] === tempAllResultsByPageTE[l]['display_label']) {
                  tempTable = cloneDeep(this.tableList[k]['full_table']);
                  tempTableFromForm = cloneDeep(tempAllResultsByPageTE[l]['final_display_value']);
                  console.log(tempTable, tempTableFromForm);

                  for (let m = 1; m < tempTable.display_value.length; m++) {
                    for (let n = 1; n < tempTable.display_value[m].length; n++) {
                      tempTable.display_value[m][n]['value'] = tempTableFromForm[tempTable.display_value[m].length * m + n]
                    }
                  }
                  if (tempTable["transposed"]) {
                    tempTable['display_value'] = cloneDeep((this.transpose(tempTable['display_value'])))
                  }
                  this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].map(ele => {
                    let eleKeys = Object.keys(ele);
                    if (eleKeys.length > 0 && ele[eleKeys[0]]['display_label'] === tempTable['display_label']) {
                      if (tempTable['display_value'])
                        ele[eleKeys[0]]['final_display_value'] = tempTable['display_value'];
                      if (save) {
                        ele[eleKeys[0]]['1'] = tempTable['display_value'];
                      }

                    }
                  })

                }
              }
            }
          }
        }

        for (let j = 0; j < keys.length; j++) {

          if (keys[j] === 'KV') {
            for (let l = 0; l < this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].length; l++) {
              let ele = this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]][l];
              if (ele['tempVal']) {
                ele['final_display_value'] = cloneDeep(ele['tempVal']);
                if (save) {
                  ele['value'] = cloneDeep(ele['tempVal']);
                }

              }

              if (ele['final_display_value'] == undefined) {
                ele['final_display_value'] = '';
                if (save) {
                  ele['value'] = '';
                }
              }
            }
          }

          if (keys[j] === 'SE') {
            //console.log(tempAllResultsByPageSE)
            for (let k = 0; k < this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]].length; k++) {
              let ele = this.staticLicenseReportsJson['values'][pageKeys[i]][keys[j]][k];
              let eleKeys = Object.keys(ele);
              if (eleKeys.length > 0 && ele[eleKeys[0]]['final_display_value'] == undefined) {
                ele[eleKeys[0]]['final_display_value'] = false;

                if (save) {
                  ele[eleKeys[0]]['NO'] = 'SELECTED';
                  ele[eleKeys[0]]['YES'] = 'SELECTED';
                }

              }
            }
          }

        }
      }

      let updatedMetadataProperties =  {...this.licenseReportsProperties};
      updatedMetadataProperties['Extracted Json'] = this.staticLicenseReportsJson
      let updateMetadataBody = {
        docId: this.staticLicenseReportsJson['vault_doc_id'],
        category_id: 1,
        properties: updatedMetadataProperties
      }
      console.log(updateMetadataBody);
      const updateMetadataResp = await this.docService.updateMetadata(updateMetadataBody).toPromise();
      console.log(updateMetadataResp)

      let updateJsonToCsv;
      if (!save) {
        let jsonToCsvBody = {
          vault_doc_id: this.staticLicenseReportsJson['vault_doc_id']
        }
        updateJsonToCsv = await this.docService.convertFromJsonToCsv(jsonToCsvBody).toPromise();
        console.log(updateJsonToCsv)
        
        this.isProcessing = false;
      }

      this.isProcessing = false;
      if (save && updateMetadataResp.toString().toLowerCase() === 'success') {
        this.popupMessage = 'Case Saved Successfully.'
        this.dialog.open(this.popupDialog, { width: '500px' })
      } else if (save && updateMetadataResp.toString().toLowerCase() != 'success') {
        this.popupMessage = 'Error saving indexing data.'
        this.dialog.open(this.popupDialog, { width: '500px' })
      }

      
      if(!save) {
        this.closeCaseEvent.emit();
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.isProcessing = false;
      this.buttonsDisableEvent.emit(false);
    }
  }


  changeFn(e, tname) {
    
    this.separateTableValuesForLicenseSummary.map(ele => {
      if(ele['place'] === e) {
        ele['display_value'] = this.reportsForm.controls[tname]['value'][e];
      }
    });
    console.log(this.separateTableValuesForLicenseSummary, e)
  }

  populateReportsOfLicenseFieldsUsingProfileDetails() {
    let allresults: any = [];
    console.log(this.profileDetails, this.profileDetails.length);
    for(let i = 0; i < this.profileDetails.length; i++) {
      if(this.profileId === 9) {
        this.profileDetails[i]['annotations'][0]['result'].forEach(element => {
          element['tempTab'] = 'Page ' + (i + 1)
        });
      }
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
        //HardCoded Section begins
        if(this.profileId === 8) {
          if(allresults[i]['display_label'].includes('License Id')) {
            allresults[i]['section'] = 'License Summary';
          }
          if(allresults[i]['display_label'].includes('1963')) {
            allresults[i]['section'] = '1963';
          }
          if(allresults[i]['display_label'].includes('1964')) {
            allresults[i]['section'] = '1964';
          }
          if(allresults[i]['display_label'].includes('1965')) {
            allresults[i]['section'] = '1965';
          }
        } else if(this.profileId === 7) {
          if(allresults[i]['display_label'].includes('1966')) {
            allresults[i]['tab'] = '1966: Face Value';
            allresults[i]['section'] = 'Main Section'
            //allresults[i]['section'] = '1966';
          }
          if(allresults[i]['display_label'].includes('1967')) {
            allresults[i]['tab'] = '1967: Face Value';
            allresults[i]['section'] = 'Main Section'
            //allresults[i]['section'] = '1967';
          }
          if(allresults[i]['display_label'].includes('1968')) {
            allresults[i]['tab'] = '1968: Face Value';
            allresults[i]['section'] = 'Main Section'
            //allresults[i]['section'] = '1968';
          }
        } else {
          allresults[i]['section'] = 'Conservation of Water/Water Quality/Conjunctive Use';
        }
        //HardCoded Section ends
        allresults[i]['columns'] = '2';
      }


      //HARDCODED SECTION STARTS
      if(this.profileId != 9 && this.profileId != 10 && this.profileId != 11) {
        let disLabel = allresults[i]['display_label'];
        if(disLabel === 'Primary Owner' || disLabel === 'MAX Direct Diversion Rate' || disLabel === 'Max Collection to  Storage' || disLabel === 'Max Collection to Storage' || disLabel === 'Water Right Face Value') {
          allresults[i]['columns'] = '1';
        }
        if(disLabel === 'Source Of Water' || disLabel === 'POD Id' || disLabel === 'County') {
          allresults[i]['columns'] = '3';
        }

        //this.licenseReportsJson['doc_type'] === '' && 
        if((allresults[i]['display_label'] === 'Date' || allresults[i]['display_label'].includes('Phone Number')  || allresults[i]['display_label'] === ('Phone Number') || allresults[i]['display_label'] === 'Signature')) {
          allresults[i]['section'] = 'P2';
        }

        if((allresults[i]['display_label'].includes('The project has been abandoned'))) {
          allresults[i]['section'] = 'License Summary';
        }

        if((disLabel.includes('I have currently reviewed my water right license') || disLabel.includes('I am complying with all terms') || disLabel.includes('I am complying with all terms') || disLabel.includes('I have changed the intake'))) {
          allresults[i]['section'] = 'Compliance';
          allresults[i]['columns'] = '1';
        }

        if(disLabel.includes('Primary Contact')) {
          allresults[i]['columns'] = '1';
        }
        

        if(this.profileId === 1) {
          if(disLabel.includes('Primary Contact')) {
            allresults[i]['columns'] = '1';
          }

          
            
          if(disLabel.includes('MAX Direct Diversion Rate') || disLabel.includes('Max Collection to Storage')) {
            allresults[i]['columns'] = '2';
          }
            
        }

        if(this.profileId === 2) {
          if(disLabel.includes('Primary Contact') ){
            allresults[i]['columns'] = '1';
          }
          if(disLabel.includes('MAX Direct Diversion Rate') || disLabel.includes('Max Collection to  Storage') || 
          disLabel.includes('Source Of Water') || disLabel.includes('County') ) {
            allresults[i]['columns'] = '2';
          }
        }

        if(this.profileId === 3) {
          if(disLabel.includes('Primary Contact')) {
            allresults[i]['columns'] = '1';
          }
          if(disLabel.includes('Conservation Efforts') ){
            console.log(allresults[i])
          }
          if(disLabel.includes('Max Collection to  Storage') || 
          disLabel.includes('Source Of Water') || disLabel.includes('County') ) {
            allresults[i]['columns'] = '2';
          }
        }

        if(this.profileId === 4) {
          if(disLabel.includes('Primary Contact')) {
            allresults[i]['columns'] = '1';
          }
         
          if(disLabel.includes('Max Collection to  Storage') || 
          disLabel.includes('Source Of Water') || disLabel.includes('County') ) {
            allresults[i]['columns'] = '2';
          }
        }

        if(this.profileId === 5) {
          // if(disLabel.includes('Primary Contact')) {
          //   allresults[i]['columns'] = '1';
          // }
          // if(disLabel.includes('Conservation Efforts') ){
          //   console.log(allresults[i])
          // }
          //if(disLabel.includes('Max Collection to  Storage') || 
          if(disLabel.includes('Source Of Water') || disLabel.includes('County') ) {
            allresults[i]['columns'] = '2';
          }
        }

        if(this.profileId === 6) {
          if(allresults[i]['display_label'] === 'Remarks' || allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'Primary Owner') {
            allresults[i]['columns'] = '1';
          }
        }

        if(this.profileId === 7) {
          if(allresults[i]['display_label'] === 'Remarks') {
            allresults[i]['columns'] = '1';
          }
        }

     


        // if((disLabel.includes('Face Value Unit'))) {
        //   allresults[i]['tab'] = 'Face Value'
        //   allresults[i]['section'] = 'Main Section';
        //   allresults[i]['columns'] = '1';
        // }

        // if((disLabel.includes('Face Value Unit'))) {
        //   allresults[i]['tab'] = 'Face Value'
        //   allresults[i]['section'] = 'Main Section';
        //   allresults[i]['columns'] = '1';
        // }
        if(this.profileId != 2 && this.profileId != 3 && this.profileId != 4 && this.profileId != 5) {
          if((disLabel.includes('did you use reclaimed water'))) {
            allresults[i]['tab'] = 'Claim Credit For Groundwater'
            allresults[i]['section'] = 'Claim Credit For Substitution';
            allresults[i]['columns'] = '1';
          }
          if((disLabel.includes('were you using groundwater in lieu'))) {
            allresults[i]['tab'] = 'Claim Credit For Groundwater'
            allresults[i]['section'] = 'Claim Credit For Groundwater';
            allresults[i]['columns'] = '1';
          }
          if((disLabel.includes('were you implementing any water conservation efforts') || disLabel.includes('Conservation Efforts'))) {
            allresults[i]['tab'] = 'Claim Credit For Groundwater'
            allresults[i]['section'] = 'Conservation Amount';
            allresults[i]['columns'] = '2';
          }
        }


        if((disLabel.includes('Check if amounts are same'))) {
          allresults[i]['tab'] = 'Amount of Water Beneficially Used'
          allresults[i]['section'] = 'Main Section';
          allresults[i]['columns'] = '1';
        }
        
        if(disLabel.includes('Conservation Efforts Used')) {
          allresults[i]['columns'] = '1';
        }

        if(disLabel.includes('Password')) {
          allresults[i]['section'] = 'Applicant Details';
        }

        if(disLabel.includes('full licensed amount of water')) {
          allresults[i]['tab'] = 'Face Value';
          allresults[i]['section'] = 'Main Section';
        }

        if(disLabel.includes('I request revocation of the license')) {
          allresults[i]['section'] = 'Compliance';
        }

        // if(allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'County' || allresults[i]['display_label'] === 'License Id'
        // || allresults[i]['display_label'] === 'Source Of Water' || allresults[i]['display_label'] === 'Primary Owner') {
        //   allresults[i]['section'] = 'Summary';
        // }

        // if(allresults[i]['display_label'] === 'Reviewed Water Right License' || allresults[i]['display_label'] === 'Complying With Terms' || allresults[i]['display_label'] === 'Request Revocation'
        // || allresults[i]['display_label'] === 'Remarks') {
        //   allresults[i]['section'] = 'Compliance';
        // }
      

        if(allresults[i]['display_label'] === 'Primary Owner' || allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'License Id'
        || allresults[i]['display_label'] === 'Primary Contact') {
          allresults[i]['section'] = 'Applicant Details';
        }

        if(allresults[i]['display_label'] === 'County' || allresults[i]['display_label'] === 'POD Id' || allresults[i]['display_label'] === 'Storage Season'
        || allresults[i]['display_label'] === 'Source Of Water' || allresults[i]['display_label'] === 'MAX Direct Diversion Rate' || allresults[i]['display_label'] === 'Use Net Acreage' || allresults[i]['display_label'] === 'Purpose Of Water Used'
        || allresults[i]['display_label'] === 'Diversion Season' || allresults[i]['display_label'] === 'Request Revocation' || allresults[i]['display_label'] === 'Max Collection to  Storage' || allresults[i]['display_label'] === 'Max Collection to Storage' || allresults[i]['display_label'] === 'Water Right Face Value') {
          allresults[i]['section'] = 'License Summary';
          //allresults[i]['tab'] = 'Claim Credit For Groundwater';
        }

        if(allresults[i]['display_label'] === 'Reviewed Water Right License' || allresults[i]['display_label'] === 'Complying With Terms'
        || allresults[i]['display_label'] === 'Intake Location Change' || allresults[i]['display_label'] === 'Remarks' || allresults[i]['display_label'].includes('reviewed my license') || allresults[i]['display_label'].includes('complying with the conditions of my license')) {
          allresults[i]['section'] = 'Compliance';
        }

        if(this.profileId === 8) {
          if(allresults[i]['display_label'] === 'Remarks' || allresults[i]['display_label'] === 'Source Of Water') {
            allresults[i]['columns'] = '1';
          }
          if(allresults[i]['display_label'].includes('License Id')) {
            allresults[i]['section'] = 'License Summary';
          }
        }

       
        

        // if(allresults[i]['display_label'] === 'Water Conservation Efforts' || allresults[i]['display_label'] === 'Conservation Efforts') {
        //   allresults[i]['section'] = 'P2';
        // }

        // if(allresults[i]['display_label'] === 'Reclaimed Water') {
        //   allresults[i]['section'] = 'P2';
        // }

        // if(allresults[i]['display_label'] === 'Conjuctive Use') {
        //   allresults[i]['section'] = 'P2';
        // }

        if(allresults[i]['display_label'] === 'Face Value Unit') {
        
          allresults[i]['section'] = 'P2';
        }


        if(this.profileId == 6 || this.profileId == 7) {
          // if(this.profileId == 7 && disLabel.includes('Primary Owner')) {
          //   allresults[i]['columns'] = '2';
          // }

          if(disLabel.includes('License Id')) {
           
            allresults[i]['section'] = 'License Summary';
            allresults[i]['columns'] = '1';
          }

          if(disLabel.includes('Source Of Water') || disLabel.includes('County') ) {
            allresults[i]['columns'] = '1';
          }
        }
  
      }

      if(this.profileId === 10) {
        let disLabel = allresults[i]['display_label'];
        if((disLabel.includes('Application Number') || disLabel.includes('Permit ID') || disLabel.includes('License Id'))) {
          // //allresults[i]['tab'] = 'Face Value'
          // allresults[i]['section'] = 'Main Section';
          allresults[i]['columns'] = '3';
        }

        if((disLabel.includes('Source Of Water') || disLabel.includes('Primary Owner') || (disLabel.includes('Date Of Inspection')) || (disLabel.includes('tributary to')) || (disLabel.includes('Purpose Of Water Used')) || (disLabel.includes('Point Of Diversion')) || (disLabel.includes('Place Of Use')))) {
          // //allresults[i]['tab'] = 'Face Value'
          allresults[i]['columns'] = '1';
        }

        if(disLabel.includes('Primary Owner') || allresults[i]['display_label'] === 'Application Number' || allresults[i]['display_label'] === 'License Id'
        || allresults[i]['display_label'] === 'Permit ID') {
          allresults[i]['section'] = 'Applicant Details';
        } else if(disLabel.includes('Date Of Inspection') || allresults[i]['display_label'] === 'Source Of Water' || allresults[i]['display_label'] === 'County'
        || allresults[i]['display_label'] === 'Tributary to' || disLabel.includes('Purpose Of Water Used') || allresults[i]['display_label'] === 'MAX Direct Diversion Rate' || allresults[i]['display_label'] === 'MAX Direct Diversion Rate UNITS') {
          allresults[i]['section'] = 'License Summary';
        } else {
          allresults[i]['section'] = 'Diversion Point/Beneficial Use of Water';
        }
      }

      if(this.profileId === 11) {
        let disLabel = allresults[i]['display_label'];
        allresults[i]['columns'] = '2';

        if((disLabel.includes('Permit ID')) || (disLabel.includes('Primary Owner')) || (disLabel.includes('Mailing Address')
         || (disLabel.includes('Approximate Cost of Construction')) || (disLabel.includes('Construction Details'))
         || (disLabel === 'Power') || (disLabel.includes('Pending construction Work')) 
         || (disLabel.includes('Months Water Used')) || (disLabel.includes('Use Water In Different Season'))
         || (disLabel.includes('Other Months Of use')) || (disLabel.includes('Water Used Under Permit'))
         || (disLabel.includes('Year intended To fully use water')) || (disLabel.includes('Intake Location Change')) || (disLabel.includes('Emptied Reservoir')) 
         || (disLabel.includes('Months Water Collected In reservoir')) || (disLabel.includes('Remarks')))) {
          // //allresults[i]['tab'] = 'Face Value'
          allresults[i]['columns'] = '1';
        }

        if((disLabel.includes('Irrigation')) || (disLabel.includes('Total Acres Irrigated')) || (disLabel.includes('Total # Crops'))) {
          // //allresults[i]['tab'] = 'Face Value'
          allresults[i]['columns'] = '3';
        }

        if(disLabel.includes('Source Of Water') || disLabel.includes('Application Number') || disLabel.includes('Permit ID')) {
          allresults[i]['section'] = 'Applicant Details';
        } else if((disLabel.includes('Use Of Water Commenced')) || (disLabel.includes('Amount of water Used')
         || (disLabel.includes('Irrigation')) || (disLabel.includes('Total Acres Irrigated'))
         || (disLabel.includes('Total # Crops')) || (disLabel.includes('Stock Watering')) || (disLabel.includes('Mining'))
         || (disLabel.includes('Industrial')) || (disLabel.includes('Recreational'))
         || (disLabel.includes('Domestic')) || (disLabel.includes('Total Persons'))
         || (disLabel.includes('Power')) || (disLabel.includes('Municipal'))  || (disLabel.includes('Total Population'))
         || (disLabel.includes('Months Water Used')) || (disLabel.includes('Use Water In Different Season'))  || (disLabel.includes('Other Months Of use'))
         || (disLabel.includes('Water Used Under Permit')) || (disLabel.includes('Year intended To fully use water'))  || (disLabel.includes('Intake Location Change')))) {
          // //allresults[i]['tab'] = 'Face Value'
          allresults[i]['section'] = 'Water Usage';
        } else if((disLabel.includes('Primary Owner')) || (disLabel.includes('Mailing Address')
        || (disLabel.includes('Approximate Cost of Construction')) || (disLabel.includes('Construction Details'))
        || (disLabel.includes('Pending construction Work')) || (disLabel.includes('Request Revocation')) || (disLabel.includes('Construction Commenced'))
        || (disLabel.includes('Construction Completed')) || (disLabel.includes('Estimated date Of Completion')))) {
         // //allresults[i]['tab'] = 'Face Value'
         allresults[i]['section'] = 'Compliance';
       } else {
        allresults[i]['section'] = 'Water Storage/Remarks';
       }
      }

      if(this.profileId === 9) {
        let disLabel = allresults[i]['display_label'];
        allresults[i]['columns'] = '2';

        allresults[i]['columns'] = '2';

        if((disLabel.includes('Application Number')) || (disLabel.includes('Point Of Diversion')) 
        || (disLabel.includes('Purpose Of Water Used')) || (disLabel.includes('Amount Of Water')) 
        || disLabel.includes('MAX Direct Diversion Rate') || (disLabel.includes('Primary Owner')) 
        || (disLabel.includes('County')) || (disLabel.includes('Source Of Water'))
        || (disLabel.includes('Diversion Type'))  || (disLabel.includes('Capacity Of Diversion Conduit'))
        || (disLabel.includes('Place Of Use')) || (disLabel.includes('Domestic Use')) 
        || (disLabel.includes('Irrigation Use')) || (disLabel.includes('Cost Of Diversion Conduit')) 
        || (disLabel.includes('Diverting Damn Measurement')) || (disLabel.includes('Reservoir Name'))
        || (disLabel.includes('Power Use')) || (disLabel.includes('Municipal Use')) || (disLabel.includes('Mining Use')) || (disLabel.includes('Industrial Use'))) {
          allresults[i]['columns'] = '1';
        }

        if((disLabel.includes('Pipe line Diameter')) || (disLabel.includes('Pipe Line Length')) 
        || (disLabel.includes('Pipe Line Grade')) || (disLabel.includes('Orchard Acres')) 
        || (disLabel.includes('Pasture Acres')) || (disLabel.includes('General Crops Acres'))) {
          allresults[i]['columns'] = '3';
        }


        if((disLabel.includes('Application Number')) || (disLabel.includes('Primary Owner')) || (disLabel.includes('County'))) {
          allresults[i]['section'] = 'Applicant Details';
        } else if((disLabel.includes('Source Of Water')) || (disLabel.includes('Point Of Diversion')) 
        || (disLabel.includes('Purpose Of Water Used')) || (disLabel.includes('Amount Of Water')) 
        || disLabel.includes('Direct Diversion') || (disLabel.includes('Collected season')) 
        || (disLabel.includes('Conduit Terminates')) || (disLabel.includes('MAX Collection to Storage UNITS'))) {
          allresults[i]['section'] = 'Source, Amount, Use, and Location of Diversion Works';
        } else if((disLabel.includes('Diversion Type'))  || (disLabel.includes('Diverting Damn Measurement')) || (disLabel.includes('Reservoir Name')) 
        || (disLabel.includes('Stream Bed')) || (disLabel.includes('Storage dam dimension')) 
        || disLabel.includes('Free') || (disLabel.includes('Pipe line Diameter')) || (disLabel.includes('Pipe Line Length')) 
        || (disLabel.includes('Pipe Line Grade')) || (disLabel.includes('Capacity Of Diversion Conduit'))
        || (disLabel.includes('Cost Of Diversion Conduit')) || (disLabel.includes('Intake to Outlet')) || (disLabel.includes('Pipe Line Kind'))) {
          allresults[i]['section'] = 'Description of Diversion Works';
        } else if((disLabel.includes('COnstruction work Begin  Date'))  || (disLabel.includes('Construction Completed')) 
        || (disLabel.includes('Proposed Use Date'))) {
          allresults[i]['section'] = 'Completion Schedule';
        } else if((disLabel.includes('Maps filed'))  || (disLabel.includes('Section Number')) 
        || (disLabel.includes('Township Direction')) || (disLabel.includes('Range Direction'))) {
          allresults[i]['section'] = 'General';
        } else {
          allresults[i]['section'] = 'Description of Proposed Use';
        }
      }
      //HARDCODED SECTION ENDS

    }

    allresults = allresults.filter(e => e['section'] != 'P2');
   
    this.allFieldsFromProfileDetails = [...allresults];
    console.log(allresults);
    if(this.profileId === 8) {
      this.sectionList = ["Applicant Details", "License Summary", "1963", "1964", "1965", "Compliance"];
    } else if(this.profileId === 10) {
      this.sectionList = ["Applicant Details", "License Summary", "Diversion Point/Beneficial Use of Water"];
    } else if(this.profileId === 11) {
      this.sectionList = ["Applicant Details", "Compliance", "Water Usage", "Water Storage/Remarks"];
    } else if(this.profileId === 9) {
      this.sectionList = ["Applicant Details", "Source, Amount, Use, and Location of Diversion Works", "Description of Diversion Works", "Completion Schedule", "Description of Proposed Use", "General"];
    } else {
      this.sectionList = ["Applicant Details", "License Summary", "Compliance", "Conservation of Water/Water Quality/Conjunctive Use"];
    }
    //this.sectionList = ["Applicant Details", "License Summary", "Compliance", "Conservation of Water/Water Quality/Conjunctive Use"];
  }

  callFormGroupFromReportsForm(name) : FormGroup {
    return this.reportsForm.get(name) as FormGroup;
  }

  populateReportsOfLicenseFields() {
    let knownKeys = ["confidence", "xmin", "ymin", "xmax", "ymax", "doc_width", "doc_height", "display_label"]
    let values = this.licenseReportsJson['values'];
    let pagesArr = [];
    console.log(values);
    let valueKeys = Object.keys(values);
    let retArray: any = [];
    this.tabsList = [];
    this.tableList = [];
    let table1: any;
    let docWidth, docHeight;
    for(let i = 0; i < valueKeys.length; i++) {
      if(values[valueKeys[i]]['KV']) {
        for(let j = 0; j < values[valueKeys[i]]['KV'].length; j++) {
          let tempV = values[valueKeys[i]]['KV'][j];
          if(tempV && Object.keys(values[valueKeys[i]]['KV'][j]).length != 0) {
            // let seObjKeys = Object.keys(values[valueKeys[i]]['KV'][j]);
            // for(let k = 0; k < seObjKeys.length; k++) {
            //   if(!knownKeys.includes(seObjKeys[k])) {
            //     values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j][seObjKeys[k]];
            //     break;
            //   }
            // }
            
            values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j]["value"];
            docWidth = tempV['doc_width'];
            docHeight = tempV['doc_height'];
            if(values[valueKeys[i]]['KV'][j]['display_label'].includes('Use Net Acreage')) {
          //IMPORTANT CONSOLE LOGS              
              console.log( values[valueKeys[i]]['KV'][j]['display_value'], values[valueKeys[i]]['KV'][j])
            }
            //values[valueKeys[i]]['KV'][j]['display_value'] = values[valueKeys[i]]['KV'][j][seObjKeys[0]];
            values[valueKeys[i]]['KV'][j]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
            retArray.push(values[valueKeys[i]]['KV'][j]);
          }
          values[valueKeys[i]]['KV'][j]['page'] = i + 1;
          if(!(pagesArr.includes(values[valueKeys[i]]['KV'][j]['page']))) {
            pagesArr.push(values[valueKeys[i]]['KV'][j]['page']);
          }
        }
      }
      if(values[valueKeys[i]]['SE']) {
        for(let j = 0; j < values[valueKeys[i]]['SE'].length; j++) {
    
          if(values[valueKeys[i]]['SE'][j]) {
            let seObjKeys = Object.keys(values[valueKeys[i]]['SE'][j]);
            if(seObjKeys.length != 0) {
              for (const [key, value] of Object.entries(values[valueKeys[i]]['SE'][j][seObjKeys[0]])) {
                if(!knownKeys.includes(key)) {
                  if(value === 'SELECTED') {
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_value'] = key.toLowerCase() === 'no' ? false : true;
                    let tempV = values[valueKeys[i]]['SE'][j][seObjKeys[0]]
                    docWidth = tempV['doc_width'];
                    docHeight = tempV['doc_height'];
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
                  } else {
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_value'] = key.toLowerCase() === 'no' ? true : false; 
                    let tempV = values[valueKeys[i]]['SE'][j][seObjKeys[0]]
                    docWidth = tempV['doc_width'];
                    docHeight = tempV['doc_height'];
                    values[valueKeys[i]]['SE'][j][seObjKeys[0]]['bbox'] = this.calculateBoundingBoxes(tempV['xmin'], tempV['ymin'], tempV['xmax'], tempV['ymax'], tempV['doc_width'], tempV['doc_height']);
                  }
                  values[valueKeys[i]]['SE'][j][seObjKeys[0]]['page'] = i + 1;
                  if(!(pagesArr.includes(values[valueKeys[i]]['SE'][j][seObjKeys[0]]['page']))) {
                    pagesArr.push(values[valueKeys[i]]['SE'][j][seObjKeys[0]]['page']);
                  }
                  break;
                }
              }

              if(values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_label'].includes('Check if amounts')) {
                if(values[valueKeys[i]]['SE'][j][seObjKeys[0]]['display_value']) {
                  this.checkIfAmountsSameIsChecked = true;
                } else {
                  this.checkIfAmountsSameIsChecked = false;
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
            values[valueKeys[i]]['TE'][j]['transposed'] = false;
            if(!(pagesArr.includes(values[valueKeys[i]]['TE'][j]['page']))) {
              pagesArr.push(values[valueKeys[i]]['TE'][j]['page']);
            }
            let allTableEntries = values[valueKeys[i]]['TE'][j][Object.keys(values[valueKeys[i]]['TE'][j])[0]];
            let headers = [];
            values[valueKeys[i]]['TE'][j]['display_label'] = allTableEntries['display_label'];
            console.log(allTableEntries)
            values[valueKeys[i]]['TE'][j]['bbox'] = this.calculateBoundingBoxes(allTableEntries['xmin'], allTableEntries['ymin'], allTableEntries['xmax'], allTableEntries['ymax'], docWidth, docHeight);
            values[valueKeys[i]]['TE'][j]['docWidth'] = docWidth;
            values[valueKeys[i]]['TE'][j]['docHeight'] = docHeight;
            console.log(values[valueKeys[i]]['TE'][j]['bbox'])
            if(allTableEntries && allTableEntries['1']) {
              console.log(allTableEntries, values[valueKeys[i]]['TE'][j])
              let [headings, ...rows] = allTableEntries['1'];
              console.log(headings, rows);


              //HARDCODED SECTION STARTS
              if(this.profileId == 5) {
            
                if(values[valueKeys[i]]['TE'][j]['display_label'] === 'Storage Projects') {
                  if((rows[rows.length - 1].filter(r => r['value'] === '')).length === rows[rows.length - 1].length) {
                    rows.splice(rows.length - 1, 1);
                  }
                }
              }
              //HARDCODED SECTION ENDS







              //Getting rid of NA/MA from tables

              for(let r1 = 0; r1 < rows.length; r1++) {
                
                for(let r2 = 0; r2 < rows[r1].length; r2++) {
                
                  if(rows[r1][r2] && (rows[r1][r2].value.includes('NA') || rows[r1][r2].value.includes('MA'))) {
                    rows[r1][r2].value = '';
                  }
                }
              }
              







              //For profiles where headers are not being passed
              //Adding a check to see if headers are passed
              if(headings.length === 4) {
                let count = headings.filter(e => Number(e['value']) > 1000).length;
                let count2 = headings.filter(e => e['value'] === '').length;
                if(count === 0) {
                  let temp;
                  count2 != 3 ? rows.unshift(headings) : temp = headings[0]['value'];
                  if (retArray[retArray.length - 1]['table'] != undefined) {
                    headings = retArray[retArray.length - 1]['table'][0];
                    headings[0]['value'] = count2 != 3 ? '': temp;
                  } else {
                    headings = [{value: ''}, {value: '2007'}, {value: '2008'}, {value: '2009'}];
                    count2 != 3 ? headings[0]['value'] = '': headings[0]['value'] = temp;
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
                if(headings[l]['value'] === '' && l != 0) {
                  headings.splice(l, 1)
                }
              }
              console.log(headings);
              for(let k = 0; k < rows.length; k++) {
                for(let l = rows[k].length - 1; l >= 0; l--) {
                  if(rows[k][l]['value'] === '') {
                    if(rows[k].length != headings.length)
                      rows[k].splice(l, 1)
                  }
                }
              }


              









              rows.unshift(headings);
              if(headings.length != 4) {
                rows = this.transpose(rows);
                values[valueKeys[i]]['TE'][j]['transposed'] = true;
              }







              //HardCoded Section Starts
              if(this.profileId == 7) {
                rows.unshift([{value: ''}, {value: ''}])
              }
              //HARDCODED Section Ends




              

              //Addition FOR Profile 3
              for(let m = 1; m < rows[0].length; m++) {
                console.log(rows[0][m], Number(rows[0][m]))
                if(isNaN(Number(rows[0][m]['value']))) {
                  let tArr = Array(rows[0].length).fill({value: ""});
                  console.log(tArr);
                  rows.unshift(tArr);
                  break;
                }
              }

              

              






              

              console.log(rows);
              //HARDCODED SECTION STARTS //this.licenseReportsJson['doc_type'] === '' && 
              let name = values[valueKeys[i]]['TE'][j]['display_label'];

              if(name === 'Claim Credit For Groundwater' || name === 'Claim Credit For Substitution' || name === 'Conservation Amount') {
                values[valueKeys[i]]['TE'][j]['section'] = name;
                values[valueKeys[i]]['TE'][j]['section_list'] = ['Conservation Amount', 'Claim Credit For Substitution', 'Claim Credit For Groundwater']
                values[valueKeys[i]]['TE'][j]['tab'] = 'Claim Credit For Groundwater';
              } else {
                values[valueKeys[i]]['TE'][j]['section'] = 'Main Section';
                values[valueKeys[i]]['TE'][j]['tab'] = name;
              }

              //HARDCODED SECTION ENDS
              console.log(headings, rows, rows.length, rows[0].length)
              retArray.push({
                "display_label": values[valueKeys[i]]['TE'][j]['display_label'],
                "table": rows,
                "page": i + 1,
                "section": values[valueKeys[i]]['TE'][j]['section'],
                "tab": values[valueKeys[i]]['TE'][j]['tab'],
                "bbox": values[valueKeys[i]]['TE'][j]['bbox'],
                "docWidth": values[valueKeys[i]]['TE'][j]['docWidth'],
                "docHeight": values[valueKeys[i]]['TE'][j]['docHeight'],
                "sectionList": values[valueKeys[i]]['TE'][j]['section_list'],
                "transposed": values[valueKeys[i]]['TE'][j]['transposed']
              })
            }
          }
        }
      }
      
    }

    let m = new Map();
    for(let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
      m.set(this.allFieldsFromProfileDetails[i]['display_label'], this.allFieldsFromProfileDetails[i])
    }

    console.log(m, retArray.length);

    for(let i = 0; i < retArray.length; i++) {
      if(m.has(retArray[i]['display_label'])) {
        let temp = m.get(retArray[i]['display_label']);

        if(temp['fieldType'] != 'table') {
          temp['display_value'] = retArray[i]['display_value'];
          
          if(temp['display_value'] === undefined) {
            console.log(temp)
          }
          temp['bbox'] = retArray[i]['bbox'];
          temp['confidence'] = retArray[i]['confidence'];
          if(retArray[i]['page'] == undefined) {
            console.log(retArray[i]);
          }
          temp['page'] = retArray[i]['page'];
          if(this.profileId === 9) {
            temp['tab'] = 'Page ' + temp['page'];
            if(!temp['page']) {
              //alert()
            }
          }
            
        } else if(temp['fieldType'] === 'table') {

          console.log(retArray[i]);
          if(temp['display_label'].includes('Amount of Water Beneficially Used') && this.checkIfAmountsSameIsChecked) {
            
            let wholeTableFromList = this.tableList.find(ele => ele['name'].includes("Face Value"))
            console.log(wholeTableFromList);
            temp['display_value'] = cloneDeep(wholeTableFromList['table']);
            retArray[i]['table'] = cloneDeep(wholeTableFromList['table']);
          } else {
            temp['display_value'] = retArray[i]['table'];
          }
          temp['page'] = retArray[i]['page'];
          temp['docWidth'] = retArray[i]['docWidth'];
          temp['docHeight'] = retArray[i]['docHeight'];
          temp['section'] = retArray[i]['section'];
          temp['sectionList'] = retArray[i]['sectionList'];
          temp['tab'] = retArray[i]['tab'];
          temp['transposed'] = retArray[i]['transposed'];

          let tempFormGroup: any = {};
          for (let a = 1; a < retArray[i]['table'].length; a++) {
            for (let b = 1; b < retArray[i]['table'][a].length; b++) {
              tempFormGroup[retArray[i]['table'][a].length * a + b] = new FormControl(retArray[i]['table'][a][b]['value']);
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

        
          temp['bbox'] = retArray[i]['bbox']

          // temp['bbox'] = {
          //   "width": temp['value']['width'],
          //   "height": temp['value']['height'],
          //   "left": temp['value']['x'],
          //   "top": temp['value']['y'],
          // }
          this.tableList.push({
            "name": retArray[i]['display_label'],
            "table": retArray[i]['table'],
            "section": retArray[i]['section'],
            "sectionList": retArray[i]['sectionList'],
            "tab": retArray[i]['tab'],
            "full_table": temp,
            "transposed":  retArray[i]['transposed'] 
          });
        }
      }
      //m.set(this.allFieldsFromProfileDetails[i]['display_label'], this.allFieldsFromProfileDetails[i])
    }

    //HARD CODED SECTION BEGINS - Creates a table from LicenseOfSummary
    if(this.documentType.includes('Report Of Licensee') && this.profileId != 8) {
      let newTable = this.changesToLicenseSummary(m);
      m = new Map(newTable['newMap']);
      delete newTable.newMap;
      newTable['name'] = 'LicenseToSummaryTable';
      newTable['table'] = newTable.rows;
      newTable['section'] = 'License Summary';
      newTable['sectionList'] = ['License Summary']
      newTable['tab'] = 'Summary';
      newTable['display_value'] = newTable.rows
      newTable['full_table'] = newTable;
  
      let newTempFormGroup = {};
      for (let a = 1; a < newTable['table'].length; a++) {
        for (let b = 0; b < newTable['table'][a].length; b++) {
          newTempFormGroup[newTable['table'][a].length * a + b] = new FormControl(newTable['table'][a][b]);
          console.log(newTempFormGroup);
          console.log( (newTable['table'][a].length * a) + b)
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

    if(this.profileId === 9) {
      this.tabsList = [];
      for (let i = 0; i < pagesArr.length; i++) {
        this.tabsList.push('Page ' + pagesArr[i]);
      }
    } else {
      this.tabsList = ["Summary"];
    }
    
    

    this.tableList.forEach(element => {
      // if(!this.tabsList.includes(element.section))
      //   this.tabsList.push(element.section);
      if(!this.tabsList.includes(element.tab))
        this.tabsList.push(element.tab);
    });
    

    this.allFieldsFromProfileDetails = [];
    for (const [key, value] of m.entries()) {
      if(value['fieldType'] != 'table')
        this.allFieldsFromProfileDetails.push(value)
    }
    if(this.profileId === 9) {
      for(let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
        if(this.allFieldsFromProfileDetails[i]['page'] == undefined) {
          this.allFieldsFromProfileDetails[i]['page'] = this.allFieldsFromProfileDetails[i]['tempTab'].split(' ')[1];
          this.allFieldsFromProfileDetails[i]['tab'] = this.allFieldsFromProfileDetails[i]['tempTab'];
        }
      }
    }
    
    console.log(this.allFieldsFromProfileDetails)
    this.reportsOfLicenseFields = [...this.allFieldsFromProfileDetails];
    

    //create sections (hard-coded)
    

    let tempFormGroup: any = {};
    this.reportsOfLicenseFields.forEach(element => {
      // if(element['display_label'] == 'Conservation Efforts') {
      //   element['display_value'] = undefined;
      // }
      if(element['display_value']) {
        if(element['display_label'].includes('Application Number')) {
          tempFormGroup[element.id] = new FormControl(element['display_value'] || '', Validators.required);
          // element['required'] = true;
        } else {
          tempFormGroup[element.id] = new FormControl(element['display_value'] || '');
        }
      } else {
        tempFormGroup[element.id] = new FormControl(element['fieldType'] === 'checkbox' ? false:'');
      }
    });

    this.reportsOfLicenseFields.forEach(element => {
      if (element['display_label'].includes('During the period covered by this Report, were you implementing any water conservation efforts?') && element['display_value'] == true) {
        let conservationEfforts = this.reportsOfLicenseFields.find(licenseField => licenseField['display_label'].includes('Conservation Efforts'))
        console.log(conservationEfforts, conservationEfforts['display_value'])

        if (conservationEfforts['display_value'] == undefined || conservationEfforts['display_value'] == null || conservationEfforts['display_value'] == '') {
          console.log(tempFormGroup, conservationEfforts['id']);
          // alert()
          tempFormGroup[conservationEfforts['id']].addValidators(Validators.required)
          tempFormGroup[conservationEfforts['id']].updateValueAndValidity();
        }
      }

      // if (element['display_label'].includes('During the period covered by this Report, were you implementing any water conservation efforts?') && element['display_value'] == true) {
      //   let conservationEfforts = this.reportsOfLicenseFields.find(licenseField => licenseField['display_label'].includes('Conservation Efforts'))
      //   console.log(conservationEfforts, conservationEfforts['display_value'])

      //   if (conservationEfforts['display_value'] == undefined || conservationEfforts['display_value'] == null || conservationEfforts['display_value'] == '') {
      //     console.log(tempFormGroup, conservationEfforts['id']);
      //     // alert()
      //     tempFormGroup[conservationEfforts['id']].addValidators(Validators.required)
      //     tempFormGroup[conservationEfforts['id']].updateValueAndValidity();
      //   }
      // }
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
    console.log(this.reportsForm.controls[this.documentType]['controls']['EVI51XZpu-']);
    //check if profile details KV match with these if the do take the value from the valueKeys thing and also calculate bounding boxes and add that as a new attribute.

    //Collect all SE data

    //Collect all TE data

    //Put all these together (KV, SE) Keep TE separate as a new attribute called tables: [TE1, TE2, ..] in licenseOfReportsFields

    console.log(retArray);
  }

  changesToLicenseSummary(m) {
    let newHeadings;
    let namesToCompareAgainst = [];
    if(this.profileId === 0 || this.profileId === 1 || this.profileId === 2) {
      newHeadings = ['Licensed Uses of Water', 'Acres', 'Direct Diversion Season', 'Collection To Storage Season']
      namesToCompareAgainst = ['Use Net Acreage', 'Diversion Season', 'Storage Season']
    }
    if(this.profileId === 3 || this.profileId === 4) {
      newHeadings = ['Licensed Uses of Water', 'Acres', 'Diversion/Storage Season']
      namesToCompareAgainst = ['Use Net Acreage', 'Diversion/Storage Season',]
    }
    if(this.profileId === 5 || this.profileId === 6 || this.profileId === 7 || this.profileId === 8) {
      newHeadings = ['Licensed Uses of Water', 'Acres']
      namesToCompareAgainst = ['Use Net Acreage']
    }
   
   
    let rows = [];
    let rowsWithData = []
    this.separateTableValuesForLicenseSummary = [];
    for(let i = 0; i < this.allFieldsFromProfileDetails.length; i++) {
      let name = this.allFieldsFromProfileDetails[i]['display_label']
      if(name === 'Purpose Of Water Used') {
        if(this.allFieldsFromProfileDetails[i]['display_value']) {
          console.log(this.allFieldsFromProfileDetails[i])
          let separateValues = this.allFieldsFromProfileDetails[i]['display_value'].split('|');
          console.log(separateValues)
          const numOfRows = separateValues.length;
  
          for(let j = 0; j < numOfRows; j++) {
            let newRow = [];
            let newRowWithData = [];
            newRow.push(separateValues[j])
            newRowWithData.push({
              id: this.allFieldsFromProfileDetails[i]['id'],
              name: name,
              index: j,
              value: separateValues[j]
            })
            this.separateTableValuesForLicenseSummary.push({
              "name": name,
              "id": this.allFieldsFromProfileDetails[i]['id'],
              "index": j,
              "value": separateValues[j]
            })
            rows.push(newRow);
            rowsWithData.push(newRowWithData);
          }
        } 
        
        this.allFieldsFromProfileDetails.splice(i, 1);
        
        
        if(m.has(name))
            m.delete(name) 
        console.log(m);   
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
              rowsWithData[j].push({
                name: name,
                id: this.allFieldsFromProfileDetails[i]['id'],
                index: j,
                value: separateValues[j] 
              })
              this.separateTableValuesForLicenseSummary.push({
                "name": name,
                "id": this.allFieldsFromProfileDetails[i]['id'],
                "display_value": separateValues[j],
                "index": j
              })
            } else {
              rows[j].push('')
              rowsWithData[j].push({
                name: name,
                id: this.allFieldsFromProfileDetails[i]['id'],
                index: j,
                value: '' 
              })
              this.separateTableValuesForLicenseSummary.push({
                "name": name,
                "id": this.allFieldsFromProfileDetails[i]['id'],
                "display_value": separateValues[j],
                "index": j
              })
            }
          }

          
          console.log( this.allFieldsFromProfileDetails[i]['display_value'], this.separateTableValuesForLicenseSummary)
          if(m.has(name))
            m.delete(name) 
        }
      }
    }
    rowsWithData.unshift(newHeadings)
    rows.unshift(newHeadings)
    for (let a = 1; a < rows.length; a++) {
      for (let b = 0; b <rows[a].length; b++) {
        console.log(rows[a].length * a + b, rows[a][b])
        //tempFormGroup[retArray[i]['table'][a].length * a + b] = new FormControl(retArray[i]['table'][a][b]['value']);
      }
    }

    for (let a = 1; a < rowsWithData.length; a++) {
      for (let b = 0; b <rowsWithData[a].length; b++) {
        this.separateTableValuesForLicenseSummary.map(ele => {
          if(ele['id'] === rowsWithData[a][b]['id'] && ele['index'] === rowsWithData[a][b]['index']) {
            ele['place'] = rowsWithData[a].length * a + b
          }
        })
      }
    }
    console.log(newHeadings, rows);
    console.log(newHeadings, rowsWithData);
    return {
      "rows": rows,
      "headings": newHeadings,
      "newMap": m
    }
    
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
