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

  getProfileDetails(id) {
    // console.log(id, this.config.getConfig('extractedJsonUrl'));
    // var url = this.config.getConfig('profileDetailsUrl') + id 
    // return this.http.get<any>(url)
    //     .pipe();
    //return this.profileDetails;
    return this.profile12
  }

  getProfileDetailsCoded() {
    // console.log(id, this.config.getConfig('extractedJsonUrl'));
    // var url = this.config.getConfig('profileDetailsUrl') + id 
    // return this.http.get<any>(url)
    //     .pipe();
    //return this.profileDetails;
    return this.profile12
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

  // convertFromJsonToCsv(body) {
  //   var url = this.config.getConfig('jsonToCsvUrl');
  //   return this.http.post(url, body)
  //       .pipe();
  // }

  // compliancePostCall(body) {
  //   var url = this.config.getConfig('complianceUrl');
  //   return this.http.post(url, body)
  //       .pipe();
  // }
























  profile12=[
        {
          "id": 28,
          "data": {
            "image": "/data/upload/23/f55e30d7-1.jpg"
          },
          "meta": {},
          "drafts": [],
          "project": 23,
          "created_at": "2022-04-04T06:46:45.413390Z",
          "updated_at": "2022-04-05T10:45:25.662484Z",
          "updated_by": 1,
          "annotations": [
            {
              "id": 32,
              "task": 28,
              "result": [
                {
                  "id": "YTJ4GL_IyJ",
                  "meta": {
                    "text": [
                      "Parcel No | down | POD Id"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 47.69606416004752,
                    "y": 32.61420295434367,
                    "width": 7.416156317568364,
                    "height": 1.900191977583621,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "Phe10-_TDz",
                  "meta": {
                    "text": [
                      "Application No | right | Application Number"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 74.6425379515974,
                    "y": 18.370799621780108,
                    "width": 6.129054807907728,
                    "height": 1.0263162364614145,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "kEhLq6A6Sq",
                  "meta": {
                    "text": [
                      "COUNTY LOCATION | down | County"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 69.49839750676387,
                    "y": 32.54545454545455,
                    "width": 12.234623570519537,
                    "height": 2.1818181818181825,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "33Xd1qz-Zh",
                  "meta": {
                    "text": [
                      "LICENSE NO. | right | License Id"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 74.83427576243304,
                    "y": 19.487285564215668,
                    "width": 5.3533633794559545,
                    "height": 1.1026538077684593,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "VxXuO-P-rE",
                  "meta": {
                    "text": [
                      "NAME(S) OF SOURCES OF WATER | down | Source Of Water"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 4.449648711943793,
                    "y": 32.90909090909091,
                    "width": 21.54566744730679,
                    "height": 1.8181818181818181,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "ALxYuE3eeF",
                  "meta": {
                    "text": [
                      "OWNER(S) OF RECORD: | down | Primary Owner"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 4.449648711943795,
                    "y": 12.181818181818182,
                    "width": 17.096018735362993,
                    "height": 2,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "o2nkJ-ELPs",
                  "meta": {
                    "text": [
                      "Max Direct Diversion Rate | right | MAX Direct Diversion Rate"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 25.206771526560686,
                    "y": 39.04920575695674,
                    "width": 9.742793593668257,
                    "height": 1.241842646118305,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "sH36g4vzQL",
                  "meta": {
                    "text": [
                      "Acres | down | Use Net Acreage"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 35.59718969555034,
                    "y": 45.09901493654467,
                    "width": 6.088992974238864,
                    "height": 2.3555305180009585,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "LKJvtbpcrM",
                  "meta": {
                    "text": [
                      "(First 4 uses displayed below) | down | Purpose Of Water Used"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 4.798689381955998,
                    "y": 44.919734629516014,
                    "width": 18.176853719530296,
                    "height": 2.2578957202151124,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "rV0c1iO51J",
                  "meta": {
                    "text": [
                      "Collection To Storage season | down | Storage Season"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 64.69198732442192,
                    "y": 44.53589235707945,
                    "width": 22.521848832646807,
                    "height": 1.6392322928761658,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "NtuwHBmqjg",
                  "meta": {
                    "text": [
                      "(month/day to month/day) | down | Diversion Season"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 43.52904007584722,
                    "y": 44.80683984350526,
                    "width": 13.959823656599275,
                    "height": 1.5805270041505848,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "k3o4csRa6V",
                  "meta": {
                    "text": [
                      "AC-FT | left | Max Collection to Storage"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 77.38962507303367,
                    "y": 38.38649141992497,
                    "width": 4.338524626755689,
                    "height": 1.9518422974471113,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "u9LEOdXkJZ",
                  "meta": {
                    "text": [
                      "contact Phone No | right | Contact Phone Number"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 74.85647414133511,
                    "y": 20.598362338156004,
                    "width": 9.048584527303808,
                    "height": 1.3359938595701528,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "Zp6RvL3Y_0",
                  "meta": {
                    "text": [
                      "Primary contact or agent for mail | down | Primary Contact"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 12.412177985948473,
                    "y": 22.248368529223658,
                    "width": 26.932084309133476,
                    "height": 5.751631470776329,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "gv8IElpNsd",
                  "meta": {
                    "text": [
                      "The project has been abandoned | left | Request Revocation"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 4.398798600126332,
                    "y": 51.366026910730135,
                    "width": 13.548299688389104,
                    "height": 2.049040366095214,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "PGMI20Q7Q5",
                  "meta": {
                    "text": [
                      "I have currently reviewed my water right license | left | Reviewed Water Right License"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.101400401319122,
                    "y": 57.65342168907345,
                    "width": 10.706726758911909,
                    "height": 1.2722928551174537,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "CNf2zLxuhE",
                  "meta": {
                    "text": [
                      "I am complying with all terms and conditions listed in the license | left | Complying With Terms"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.042711141804086,
                    "y": 59.042742606619946,
                    "width": 10.834940218160135,
                    "height": 1.0514816984441702,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "Hj3pyhuR8x",
                  "meta": {
                    "text": [
                      " I have changed the intake location, type(s) of use, and/or place of use authorized by the license | left |  Intake Location Change"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.210652715185571,
                    "y": 60.26316236461413,
                    "width": 10.597474445045458,
                    "height": 1.6115709498154422,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "gPYEcD2AEH",
                  "meta": {
                    "text": [
                      "4. Amount of water used each month under this license | down |  Face Value"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 5.620608899297424,
                    "y": 66.9090909090909,
                    "width": 91.10070257611241,
                    "height": 9.818181818181818,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "hnHLuTrUGR",
                  "meta": {
                    "text": [
                      "Complete for long-term storage projects only | down | Storage Projects"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 5.620608899297424,
                    "y": 81.45454545454545,
                    "width": 91.10070257611241,
                    "height": 12.181818181818182,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                },
                {
                  "id": "d0AZ-54I4l",
                  "meta": {
                    "text": [
                      "Amount of water used each month under this license in | right | Face Value Unit "
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 40.8774317921516,
                    "y": 64.75859711936248,
                    "width": 17.48037021863168,
                    "height": 1.7812099971644308,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1275,
                  "original_height": 1644
                }
              ],
              "lead_time": 15247.383,
              "created_at": "2022-04-04T06:50:02.913089Z",
              "prediction": {},
              "updated_at": "2022-04-05T10:45:25.578237Z",
              "completed_by": 1,
              "ground_truth": false,
              "result_count": 0,
              "was_cancelled": false,
              "parent_annotation": null,
              "parent_prediction": null
            }
          ],
          "file_upload": "f55e30d7-1.jpg",
          "predictions": []
        },
        {
          "id": 29,
          "data": {
            "image": "/data/upload/23/121ccc36-2.jpg"
          },
          "meta": {},
          "drafts": [],
          "project": 23,
          "created_at": "2022-04-04T06:46:45.413390Z",
          "updated_at": "2022-04-05T10:44:57.289530Z",
          "updated_by": 1,
          "annotations": [
            {
              "id": 33,
              "task": 29,
              "result": [
                {
                  "id": "W316OHyN-u",
                  "meta": {
                    "text": [
                      "Under the appropriate boxes below, explain how the water was used each | down | Beneficial Uses of Water"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 5.386416861826698,
                    "y": 5.818181818181818,
                    "width": 88.75878220140515,
                    "height": 19.090909090909093,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "89gWP7jrOe",
                  "meta": {
                    "text": [
                      "During the period covered | left | Water Conservation Efforts"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.845791041848169,
                    "y": 36.55525730235549,
                    "width": 10.840014581828973,
                    "height": 1.4368427310459786,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "vFI19_o3eY",
                  "meta": {
                    "text": [
                      "During the period covered by this Report, were you implementing any water conservation efforts | down | Conservation Efforts Used"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.025761124121764,
                    "y": 38.1907346120173,
                    "width": 92.0374707259951,
                    "height": 2.9001744788916883,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "3im86tq83t",
                  "meta": {
                    "text": [
                      "During the period covered by this report | left | Reclaimed Water"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.667327387147322,
                    "y": 51.128947860107544,
                    "width": 11.23660048116418,
                    "height": 1.4368427310459786,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "yDS7pRSLHv",
                  "meta": {
                    "text": [
                      "Date | right | Date"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 54.560737842354875,
                    "y": 90.76315387184725,
                    "width": 11.765381680277793,
                    "height": 2.9763170857381116,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "_zy-gJjGrs",
                  "meta": {
                    "text": [
                      "Phone No | right | Phone No."
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 74.94145199063233,
                    "y": 91.0909090909091,
                    "width": 20.843091334894616,
                    "height": 4,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "-GriAfffls",
                  "meta": {
                    "text": [
                      "Water Code section 1011, please show the amount of water conserved below | down | Conservation Amount"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 8.196721311475407,
                    "y": 44,
                    "width": 85.71428571428571,
                    "height": 5.090909090909091,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "zuKg0BHxEu",
                  "meta": {
                    "text": [
                      "your license as allowed by Water Code section 1010 | down | Claim Credit For Substitution"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.728337236533961,
                    "y": 58.18181818181818,
                    "width": 85.71428571428571,
                    "height": 4.181818181818182,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "Vz9TiN5kB7",
                  "meta": {
                    "text": [
                      "During the period covered by this Report, were you using groundwater | left | Conjuctive Use"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.799522686925725,
                    "y": 64.57369055775206,
                    "width": 10.70781928205057,
                    "height": 1.3342111073998342,
                    "rotation": 0,
                    "rectanglelabels": [
                      "SE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "eH918jF_cu",
                  "meta": {
                    "text": [
                      "Code section 1011.5. please show the amount of groundwater used below | down | Claim Credit For Groundwater"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 7.962529274004684,
                    "y": 70.36363636363637,
                    "width": 85.480093676815,
                    "height": 4.545454545454558,
                    "rotation": 0,
                    "rectanglelabels": [
                      "TE"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "JlqHoaeGR9",
                  "meta": {
                    "text": [
                      "Remarks | down | Remarks"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 4.918032786885237,
                    "y": 77.65419649676188,
                    "width": 88.29039812646356,
                    "height": 10.527621685056214,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                },
                {
                  "id": "XXYLYeAb4m",
                  "meta": {
                    "text": [
                      "Signature | right | Signature"
                    ]
                  },
                  "type": "rectanglelabels",
                  "value": {
                    "x": 12.646370023419205,
                    "y": 90.18181818181826,
                    "width": 36.065573770491795,
                    "height": 5.818181818181825,
                    "rotation": 0,
                    "rectanglelabels": [
                      "KV"
                    ]
                  },
                  "origin": "manual",
                  "to_name": "image",
                  "from_name": "label",
                  "image_rotation": 0,
                  "original_width": 1277,
                  "original_height": 1644
                }
              ],
              "lead_time": 15218.993,
              "created_at": "2022-04-04T07:06:10.118404Z",
              "prediction": {},
              "updated_at": "2022-04-05T10:44:57.189588Z",
              "completed_by": 1,
              "ground_truth": false,
              "result_count": 0,
              "was_cancelled": false,
              "parent_annotation": null,
              "parent_prediction": null
            }
          ],
          "file_upload": "121ccc36-2.jpg",
          "predictions": []
        }
      ]
}
