import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/assets/config/app-config';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient,
    private config: AppConfig) { }

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

  getDocumentPresignedUrl(vaultDocId): Observable<Document> {
    var url = this.config.getConfig('documentUrl') + vaultDocId
    return this.http.get<any>(url)
        .pipe();
  }

  updateMetadata(body) {
    var url = this.config.getConfig('updateMetadataUrl');
    return this.http.post(url, body)
        .pipe();
  }
}
