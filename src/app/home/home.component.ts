import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as ith from '../../assets/client-html/ith.js';
import { loginService } from '../_services/login.service';
//import * as deloitteIntegration from '../../assets/deloitte-integration-CA-Upward';
import { ActivatedRoute } from '@angular/router';
import { MapsFieldsComponent } from '../maps-fields/maps-fields.component';
import { DocumentService } from '../_services/document.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  popupMessage = '';
  disableButtons = false;
  @ViewChild('saveDataError', { static: false } ) popupDialog: TemplateRef<any>;
  constructor(
    private loginSvc:loginService,
    private route: ActivatedRoute,
    private docService: DocumentService,
    private cookieService: CookieService,
    private fb: FormBuilder,
    public dialog: MatDialog
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
  }

  cancel() {
    console.log('Canceling...')
  }

  disableAllButtons(val) {
    this.disableButtons = val;
  }

  addDocumentType(type) {
    this.documentType = type;
  }

  
  completeForm(save = false) {
    if(this.child.reportsForm.valid) {
      this.child.openCompletePopup(save);
    } else {
      this.popupMessage = save ? 'Please resolve all errors before saving the form' : 'Please resolve all errors before completing the form' 
      this.dialog.open(this.popupDialog, {width: '500px'})
    }
  }

}
