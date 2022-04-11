import { Component, OnInit } from '@angular/core';
import * as ith from '../../assets/client-html/ith.js';
import { loginService } from '../_services/login.service';
//import * as deloitteIntegration from '../../assets/deloitte-integration-CA-Upward';
import { ActivatedRoute } from '@angular/router';
declare var ith: any;
declare var startExec: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  documentsList = ['Maps', 'LicenseReports', 'ProgressReport', 'DiversionLicense', 'AppropriateUnap']
  selectedDocument = '';
  ithInstance = null;
  vaultDocId= '';
  json; 
  constructor(
    private loginSvc:loginService,
    private route: ActivatedRoute
  ) { }

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

    if(this.json && this.json['token']) {
      new startExec(this.vaultDocId, this.json['token']);
    } else {
      new startExec(this.vaultDocId, null);
    }
    
     
  }

  // transactionalClientCreated(dispatch) {

  //   this.ithInstance = dispatch;
  //   performHtmlChanges();
  //   console.log("Trasactional Client loaded.");
   
  //   spinnerDiv.style.display = "" //DO
  //   // install some helpful type in the global scope
  //   ithInstance.installGlobalTypes("ith_");
  //   ithInstance.JobEvents.batchStructureChanged = onBatchStructureChanged;  //DO
  //   // we are now ready to call our integration initialization code
  //   init();
  // }

}
