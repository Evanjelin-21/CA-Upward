import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/assets/config/app-config';
import { loginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient,
    private config: AppConfig,
    private loginService: loginService) { }

  getExtractedJson(vaultId) {
    var url = this.config.getConfig('extractedJsonUrl') + vaultId
  //   return this.http.post<any>(url, {
  //     "vault_doc_id": vaultId
  // }).pipe();
    return this.http.get<any>(url).pipe();
  }

  getProfileDetails(id): Observable<any> {
    console.log(id, this.config.getConfig('extractedJsonUrl'));
    var url = this.config.getConfig('profileDetailsUrl') + id 
    return this.http.get<any>(url)
        .pipe();
    //return this.profileDetails;
  }

  getDocumentPresignedUrl(vaultDocId) {
    let token = this.loginService.getUserToken()
    let bearerToken = "Bearer " + token
    const header = {
      "Authorization": bearerToken
    }
    var url = this.config.getConfig('documentUrl') + vaultDocId
    return this.http.get<any>(url, {headers: header})
        .pipe();
  }

  updateMetadata(body) {
    var url = this.config.getConfig('updateMetadataUrl');
    return this.http.put(url, body)
        .pipe();
  }

  convertFromJsonToCsv(body) {
    var url = this.config.getConfig('jsonToCsvUrl');
    return this.http.post(url, body)
        .pipe();
  }

  compliancePostCall(body) {
    var url = this.config.getConfig('complianceUrl');
    return this.http.post(url, body)
        .pipe();
  }

  salesforceCaseCloseCall(body) {
    var url = this.config.getConfig('salesforceCaseUpdateUrl');
    return this.http.put(url, body)
        .pipe();
  }
}
