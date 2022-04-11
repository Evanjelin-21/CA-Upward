import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  // mapsFields = [
  //   new field('PRIMARY_OWNER_NAME', 'OWNER', 'Text'),
  //   new field('COUNTY', 'County Of', 'Text'),
  //   new field('APPLICATION_NUMBER', 'APPLICATION', 'Text'),
  //   new field('PERMIT_ID', 'PERMIT', 'Text'),
  //   new field('LICENSE_ID', 'LICENSE', 'Text'),
  //   new field('SECTION', 'PROJECTION', 'Text'),
  //   new field('TOWNSHIP', 'TOWNSHIP', 'Text'),
  //   new field('RANGE', 'RANGE', 'Text'),
  // ]

//   reportsOfLicenseFields: any = [
//     {
//         "column": "AMOUNT_EXTRACTED_YEAR",
//         "label": "Amount of GroundWater Extracted",
//         "type": "Numeric",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "AMOUNT_EXTRACTED_YEAR_UNIT",
//         "label": "AMOUNT_EXTRACTED_YEAR_UNIT",
//         "type": "Numeric",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "APPLICATION_NUMBER",
//         "label": "Applcatio Number",
//         "type": "Text",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "LICENSE_ID",
//         "label": "License Number",
//         "type": "Text",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "COMPLETELY_EMPTY_1",
//         "label": "Emptied Reservoir_1",
//         "type": "Text",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "COMPLETELY_EMPTY_2",
//         "label": "Emptied Reservoir_2",
//         "type": "Text",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "COMPLYING_WITH_ALL_TERMS",
//         "label": "Complying License",
//         "type": "Check Box",
//         "table": "",
//         "section": "compliance"
//     },
//     {
//         "column": "CONSERVATION_AMOUNT",
//         "label": "Water Consservation Amount",
//         "type": "Numeric",
//         "table": "",
//         "section": "compliance"
//     },
//     {
//         "column": "CONSERVATION_AMOUNT_UNIT",
//         "label": "Water Conservation Unit",
//         "type": "Text",
//         "table": "",
//         "section": "compliance"
//     },
//     {
//         "column": "COUNTY",
//         "label": "COUNTY LOCATION",
//         "type": "Text",
//         "table": "",
//         "section": "summary"
//     },
//     {
//         "column": "DOMESTIC",
//         "label": "Domestic",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "DUST_CONTROL",
//         "label": "Dust ocntrol",
//         "type": "Text",
//         "table": "",
//         "section": "compliance"
//     },
//     {
//         "column": "FEET_BELOW_AT_MAX_1",
//         "label": "Feet below spillway Max_1",
//         "type": "Numeric",
//         "table": "",
//         "section": "compliance"
//     },
//     {
//         "column": "FEET_BELOW_AT_MAX_2",
//         "label": "Feet below spillway Max_2",
//         "type": "Numeric",
//         "table": "",
//         "section": "rateOfDiversion"
//     },
//     {
//         "column": "FEET_BELOW_AT_MIN_1",
//         "label": "Feet below spillway Min_1",
//         "type": "Numeric",
//         "table": "",
//         "section": "rateOfDiversion"
//     },
//     {
//         "column": "FEET_BELOW_AT_MIN_2",
//         "label": "Feet below spillway Min_2",
//         "type": "Numeric",
//         "table": "",
//         "section": "rateOfDiversion"
//     },
//     {
//         "column": "FROST_PROTECTION",
//         "label": "Frost Protection",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "HEAT_PROTECTION",
//         "label": "Heat Protection",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "INDUSTRIAL",
//         "label": "Industrial",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "IRRIGATION",
//         "label": "Acreage Irrigation",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "LICENSE_ID",
//         "label": "License No:",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "MAX_ROD_REPORT_APR",
//         "label": "Maximum ROD APR",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_AUG",
//         "label": "Maximum ROD AUG",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_DEC",
//         "label": "Maximum ROD DEC",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_JAN_",
//         "label": "Maximum ROD Jan",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_JUL",
//         "label": "Maximum ROD JUL",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_JUN",
//         "label": "Maximum ROD JUN",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_MAY",
//         "label": "Maximum ROD May",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_NOV",
//         "label": "Maximum ROD NOV",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_OCT",
//         "label": "Maximum ROD OCT",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MAX_ROD_REPORT_SEP",
//         "label": "Maximum ROD SEPT",
//         "type": "Numeric",
//         "table": "currentAmountsOfWaterDiverted",
//         "section": "currentAmountsOfWaterDiverted"
//     },
//     {
//         "column": "MILLING",
//         "label": "Milling",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "MINING",
//         "label": "Mining",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "MUNICIPAL",
//         "label": "Municipal",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "NUMBER_OF_CROPS",
//         "label": "Total # Cropss",
//         "type": "Numeric",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "OTHER",
//         "label": "Other Uses Specify",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "OWNER_OF_RECORD",
//         "label": "Owner of record",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "POWER_GENERATION",
//         "label": "Power generation",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "PRIMARY_OWNER",
//         "label": "Owner(S) OF Record",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "REASON_FOR_NON_COMPLIANCE",
//         "label": "Remarks",
//         "type": "Text",
//         "table": "",
//         "section": "purposeOfUse"
//     },
//     {
//         "column": "RECLAMATION_AMOUNT",
//         "label": "Reclamation Amount",
//         "type": "Numeric",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "RECREATION",
//         "label": "Recreational",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "REQUEST_REVOCATION",
//         "label": "Request Revocation",
//         "type": "Check Box",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "REVIEWED_WATER_RIGHT_PERMIT",
//         "label": "Reviewed_License",
//         "type": "Check Box",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "SNOW_MAKING",
//         "label": "Snow making",
//         "type": "Text",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "SOURCE_OF_WATER",
//         "label": "Name(s) of sources of water",
//         "type": "Text",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "SPECIFY_FISH_AND_WILD_LIFE",
//         "label": "Specify Fish and WIld life",
//         "type": "Numeric",
//         "table": "",
//         "section": "waterBeneficiallyUsedAnnually"
//     },
//     {
//         "column": "SPECIFY_OTHER",
//         "label": "Specify Other",
//         "type": "Text",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "SPILLED_THIS_YEAR_1",
//         "label": "Reservoir Spilled this year_1",
//         "type": "Text",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "SPILLED_THIS_YEAR_2",
//         "label": "Reservoir Spilled this year_2",
//         "type": "Text",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "STOCK_WATERING",
//         "label": "Stock watering",
//         "type": "Text",
//         "table": "currentUseOfWater",
//         "section": "currentUseOfWater"
//     },
//     {
//         "column": "TOTAL_ACRES_IRRIGATED",
//         "label": "Total Acres irrigated",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_DOMESTIC",
//         "label": "Total Persons",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_DUST_CONTROL",
//         "label": "Total Dust Control",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_FIRE_PROTECTION",
//         "label": "TOTAL FiRE PROTECTION",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_FISH_CULTURE",
//         "label": "Total  Fish Culture",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_FROST_PROTECTION",
//         "label": "Total Frost Protection",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_HEAT_PROTECTION",
//         "label": "Total Heat Protection",
//         "type": "Numeric",
//         "table": "",
//         "section": "storage"
//     },
//     {
//         "column": "TOTAL_INDUSTRIAL",
//         "label": "Total Industrial",
//         "type": "Numeric",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "TOTAL_MILLING",
//         "label": "Total MILLING",
//         "type": "Numeric",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "TOTAL_MINING",
//         "label": "Total Mining",
//         "type": "Numeric",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "TOTAL_MUNICIPAL",
//         "label": "Total Population",
//         "type": "Numeric",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "TOTAL_RECREATION",
//         "label": "Total Nature of use",
//         "type": "Text",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "TOTAL_SNOW_MAKING",
//         "label": "Total Snow making",
//         "type": "Numeric",
//         "table": "",
//         "section": ""
//     },
//     {
//         "column": "TOTAL_STOCK_WATERING",
//         "label": "Total stock watering",
//         "type": "Numeric",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "USE_TYPE_CHANGE",
//         "label": "Intake location change",
//         "type": "Check Box",
//         "table": "",
//         "section": "conservationOfWater"
//     },
//     {
//         "column": "USE_TYPE_CHANGE_DESC",
//         "label": "Remarks",
//         "type": "Text",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "WATER_CONSERVATION",
//         "label": "Water Conservation ",
//         "type": "Check Box",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "WATER_CONSERVE_DESC",
//         "label": "Water Conservation desc",
//         "type": "Text",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "WATER_USED_EACH_MONTH_IN_AF",
//         "label": "Water Used IN Acre-Feet",
//         "type": "Check Box",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "WATER_USED_EACH_MONTH_IN_GALLONS",
//         "label": "Water Used IN Gallons",
//         "type": "Check Box",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "CONJUNCTIVE_AMOUNT",
//         "label": "Amount of groundwater used",
//         "type": "Numeric",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "CONJUNCTIVE_AMOUNT_UNIT",
//         "label": "Amount of groundwater used UNITS",
//         "type": "Text",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     },
//     {
//         "column": "CONJUNCTIVE_USE",
//         "label": "using groundwater in lieu of available surface water authorized under your permit?",
//         "type": "Text",
//         "table": "",
//         "section": "wasteWaterReclaimation"
//     }
// ]

  profileDetails: any = null;
  allFieldsFromProfileDetails: any = [];


  licenseReportsJson: any = [];

  reportsOfLicenseFields: any [];
  reportsForm: FormGroup;
  // progressReportFields = [
  //   {
  //       "column": "APPLICATION_NUMBER",
  //       "label": "APPLICATION",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "COMPLETELY_EMPTY",
  //       "label": "Emptied Reservoir",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "DOMESTIC",
  //       "label": "Domestic",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "INDUSTRIAL",
  //       "label": "Industrial",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "INSTALLED_CAPACITY",
  //       "label": "Installed Capacity",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "INTAKE_LOCATION_CHANGE",
  //       "label": "Intake Location",
  //       "type": "Text",
  //   },
  //   {
  //       "column": "IRRIGATION",
  //       "label": "Irrigation",
  //       "type": "Text",
  //   },
  //   {
  //       "column": "MINING",
  //       "label": "Mining",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "MUNICIPAL",
  //       "label": "Municipal",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "NUMBER_OF_CROPS",
  //       "label": "Number of crops",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "PERMIT_ID",
  //       "label": "PERMIT",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "POU_CHANGE",
  //       "label": "Place of Use Change",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "POWER_GENERATION",
  //       "label": "Power",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "PRIMARY_OWNER_NAME",
  //       "label": "Name of present Owner of permit",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "RECREATION",
  //       "label": "Recreation",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "REQUEST_REVOCATION",
  //       "label": "Project been abandoned",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "SOURCE_OF_WATER",
  //       "label": "SOURCE",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "STOCK_WATERING",
  //       "label": "Stock Watering",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "TOTAL_ACRES_IRRIGATED",
  //       "label": "Total Acres Irrigated",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_AMOUNT_DIRECT",
  //       "label": "Amount Of water Used",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_DOMESTIC",
  //       "label": "Specify Number of Persons, lawn/garden area, etc.",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_INDUSTRIAL",
  //       "label": "Nature OF Use",
  //       "type": "Text"
  //   },
  //   {
  //       "column": "TOTAL_MINING",
  //       "label": "TYpe of Mining",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_MUNICIPAL",
  //       "label": "Approximate Population",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_RECREATION",
  //       "label": "Specify boating, fishing, water contact sport, etc",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TOTAL_STOCK_WATERING",
  //       "label": "Number of Animals",
  //       "type": "Numeric"
  //   },
  //   {
  //       "column": "TYPES_OF_CROPS",
  //       "label": "types of Crops",
  //       "type": "Text"
  //   }
  // ];

  reportsOfLicenseFiltered: any = [];
  currentUseOfWaterTable: any = []
  currentAmountsOfWaterDivertedTable: any = [];
  tabsList: any = [];
  tableList: any = [];

  selectedTable = '';
  shouldDisplayForm = false;

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
  }

  tabChanged(e: any) {
  
    this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['section'] === e.tab.textLabel)
    for(let i = 0; i < this.tableList.length; i++) {
      if(e.tab.textLabel.includes(this.tableList[i].name)) {
        this.selectedTable = this.tableList[i].name;
        this.currentUseOfWaterTable = this.tableList[i].table;
        console.log(this.currentUseOfWaterTable);
        break;
        //TO DO: Need to give each table a name
      } else {
        this.selectedTable = '';
      }
    }
    
    // this.
    // this.reportsOfLicenseFiltered.forEach((element: any) => {
    //   if()
    // });
  }

  onClickInInput(field) {
    // this.cookieService.set( 'coordinates',JSON.stringify(field)); // To Set Cookie
    // let cookieValue = this.cookieService.get('coordinates'); // To Get Cookie
    // console.log(JSON.parse(cookieValue));
    console.log(field)
    if(field['page'] != null && field['bbox'] != null && field['page'] != undefined && field['bbox'] != undefined) {
      new drawHighlightsUsingBboxes(field['page'], field['bbox'])
    } else {
      new clearAllHighlights()
    }
      
  }

  async ngOnChanges() {
    if(this.selectedDoc === 'LicenseReports') {
      this.licenseReportsJson = await this.docService.getExtractedJson(this.vaultDocId).toPromise();
      this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
      //this.profileDetails = this.docService.getProfileDetails2();
      console.log(this.profileDetails, this.licenseReportsJson);
      this.shouldDisplayForm = true;
      this.populateReportsOfLicenseFieldsUsingProfileDetails();
      this.currentUseOfWaterTable = [];
      this.currentAmountsOfWaterDivertedTable = [];
      
      let tempArray = [] as any;
      this.populateReportsOfLicenseFields();
      //for(let i = 0; i < this.reportsOfLicenseFields.length; i++) {
        //let temp = this.reportsOfLicenseFields[i]['column']?.toLowerCase();

        // if(temp === 'irrigation' || temp === 'frost_protection' || temp === 'heat_protection' || temp === 'industrial'
        // || temp === 'stock_watering' || temp === 'municipal' || temp === 'domestic' || temp === 'power_generation' || temp === 'recreation' || temp === 'other') {
        //   this.currentUseOfWaterTable.push(this.reportsOfLicenseFields[i]);
        //   tempArray.push(i);
        // }

        // if(this.reportsOfLicenseFields[i]['table'] === 'currentUseOfWater') {
        //   this.currentUseOfWaterTable.push(this.reportsOfLicenseFields[i]);
        //   tempArray.push(i);
        // }

        // if(this.reportsOfLicenseFields[i]['table'] === 'currentAmountsOfWaterDiverted') {
        //   this.currentAmountsOfWaterDivertedTable.push(this.reportsOfLicenseFields[i]);
        //   tempArray.push(i);
        // }

        // if(this.reportsOfLicenseFields[i]['section'] != '') {
        //   if(!this.tabsList.includes(this.reportsOfLicenseFields[i]['section'])) {
        //     this.tabsList.push(this.reportsOfLicenseFields[i]['section']);
        //   }          
        // }
        // if(temp.includes('_jan')  || temp.includes('_feb') || temp.includes('_mar') || temp.includes('_apr')
        // || temp.includes('_may') || temp.includes('_jun') || temp.includes('_jul') || temp.includes('_aug') 
        // || temp.includes('_sep') || temp.includes('_oct') || temp.includes('_nov') || temp.includes('_dec')) {
        //   this.currentAmountsOfWaterDivertedTable.push(this.reportsOfLicenseFields[i]);
        //   tempArray.push(i);
        // }
      //}

      // for(let i = tempArray.length - 1; i >= 0; i--) {
      //   this.reportsOfLicenseFields.splice(i, 1);
      //   console.log(tempArray[i]);
      // }
      this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['table'] == '');
      this.tabChanged({
        "tab": {
          "textLabel": this.tabsList[0]
        }
      })
      //console.log(this.reportsOfLicenseFiltered, this.currentUseOfWaterTable,  this.currentAmountsOfWaterDivertedTable);
    } else if(this.selectedDoc === 'DiversionLicense') {
      this.licenseReportsJson = await this.docService.getExtractedJson(this.vaultDocId).toPromise();
      this.profileDetails = (await this.docService.getProfileDetails(this.licenseReportsJson['profile_id']).toPromise())['profile_definition']['properties'];
    
      console.log(this.profileDetails, this.licenseReportsJson);
      this.shouldDisplayForm = true;
      this.populateReportsOfLicenseFieldsUsingProfileDetails();
      this.currentUseOfWaterTable = [];
      this.currentAmountsOfWaterDivertedTable = [];
      
      let tempArray = [] as any;
      this.populateReportsOfLicenseFields();

      this.reportsOfLicenseFiltered = this.reportsOfLicenseFields.filter((element: any) => element['table'] == '');
      this.tabChanged({
        "tab": {
          "textLabel": this.tabsList[0]
        }
      })
      //console.log(this.reportsOfLicenseFiltered, this.currentUseOfWaterTable,  this.currentAmountsOfWaterDivertedTable);
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
            values[valueKeys[i]]['TE'][j]['display_label'] = Object.keys(values[valueKeys[i]]['TE'][j])[0];
            values[valueKeys[i]]['TE'][j]['page'] = i + 1;
            let allTableEntries = values[valueKeys[i]]['TE'][j][Object.keys(values[valueKeys[i]]['TE'][j])[0]];
            let headers = [];
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

              let tempFormGroup: any = {};
              for(let i = 1; i < rows.length; i++) {
                for(let j = 1; j < rows[i].length; j++) {
                  tempFormGroup[rows[i].length * i + j] = new FormControl(rows[i][j]);
                }
              }

              let key = values[valueKeys[i]]['TE'][j]['display_label'];
              
              
              let temFbGroup = {};
              temFbGroup[key] = new FormGroup(tempFormGroup)
              if(this.reportsForm === undefined) {
                this.reportsForm = this.fb.group(temFbGroup)
              } else {
                this.reportsForm.addControl(key, this.fb.group(tempFormGroup))
              }


              console.log(tempFormGroup);
             
              console.log(headings, rows, rows.length, rows[0].length)
              this.tableList.push({
                "name": values[valueKeys[i]]['TE'][j]['display_label'],
                "table": rows
              });
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

        temp['display_value'] = retArray[i]['display_value'];
        temp['bbox'] = retArray[i]['bbox'];
        if(retArray[i]['page'] == undefined) {
          console.log(retArray[i]);
        }
        temp['page'] = retArray[i]['page'];
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


    let key = this.selectedDoc;
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
