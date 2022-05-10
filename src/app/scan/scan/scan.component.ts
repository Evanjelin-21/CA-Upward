import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/_services/document.service';
import { loginService } from 'src/app/_services/login.service';
declare var startExecForScan: any;
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  vaultDocId: any;
  json
  constructor(private route: ActivatedRoute,
    private loginSvc: loginService,
    private docService: DocumentService,
    ) { }


  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }


  // @HostListener('window:message', ['$event'])
  // async OnDocumentSentForUpload(event: any) {
  //   console.log(event.data);
  //   if(event.data['file']) {
  //     let response = await this.docService.uploadDocumentFromImagetrustToVault(event.data).toPromise();
  //     //window.postMessage({"status": "successful", "response": response}, '*');
  //   }
  // }

  async ngOnInit() {
  // this.route.queryParams
  //   .subscribe(params => {
  //     console.log(params);
  //     if (params['vaultDocId']) {
  //       this.vaultDocId = params['vaultDocId'];
  //     }
  //   });

  if (!localStorage.getItem('token')) {
    this.json = await this.loginSvc.login().toPromise();
    console.log(this.json);
    if (this.json['token']) {
      localStorage.setItem('token', this.json['token']);
    }
  }

  new startExecForScan(this.vaultDocId, localStorage.getItem('token'));
}

}
