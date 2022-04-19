import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/assets/config/app-config';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  // licenseReportsJson = {
  //   "profile_id" : 7,
  //   "vault_doc_id": "4786fd70-f045-47f7-9c5e-786e3bcc2c2e",
  //   "values" : {
  //   "1": {
  //   "KV": [
  //   {
  //   "APPLICATION NO:": "A114361",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Application No"
  //   },
  //   {
  //   "PRIMARY CONTACT OR AGENT FOR MAIL & REPORTING": "ABCD Industries, Inc. - River Ranch West (Grace Ranch) PO BOX 2540 XYZ, CA 94558",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Primary Contact"
  //   },
  //   {
  //   "LICENSE NO:": "123456",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "License No"
  //   },
  //   {
  //   "CONTACT PHONE NO:": "702-252-8700",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Phone Number"
  //   },
  //   ],
  //   "SE": [
  //   {
  //   "the project has been abandoned": {
  //   "NO": "SELECTED",
  //   "YES": "[ ]",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Abondoned Project"
  //   },
  //   "display_label": "Abondoned Project"
  //   },
  //   {
  //   "i have currently reviewed": {
  //   "YES": "NOT_SELECTED",
  //   "NO": "SELECTED",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Currently Reviewed"
  //   },
  //   "display_label": "Currently Reviewed"
  //   },
  //   {
  //   "i am complying with all terms": {
  //   "YES": "SELECTED",
  //   "NO": "NOT_SELECTED",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Complying All Terms"
  //   },
  //   "display_label": "Complying All Terms"
  //   },
  //   {
  //   "i have changed the intake location": {
  //   "YES": "SELECTED",
  //   "NO": "NOT_SELECTED",
  //   "confidence":"99.93755231584821",
  //   "xmin":"125",
  //   "ymin":"191",
  //   "xmax":"271",
  //   "ymax":"200",
  //   "doc_width":"615.12",
  //   "doc_height":"787.92",
  //   "display_label": "Changed Intake Location"
  //   },
  //   "display_label": "Changed Intake Location"
  //   }
  //   ],
  //   "TE": [
  //   {
  //   "amount of water taken each month": {
  //   "1": [
  //   [
  //   "Year",
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  //   "Total"
  //   ],
  //   [
  //   "2007",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "0.5",
  //   "",
  //   "",
  //   "6.5"
  //   ],
  //   [
  //   "2008",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "0.5",
  //   "",
  //   "",
  //   "6.5"
  //   ],
  //   [
  //   "2009",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "1.2",
  //   "0.5",
  //   "",
  //   "",
  //   "6.5"
  //   ]
  //   ]
  //   },
  //   "display_label": "Water Taken Per Month"
  //   }
  //   ]
  //   },
  //   "2": {
  //   "KV": [
  //   null
  //   ],
  //   "SE": [
  //   {
  //   "during the period covered by this report": {
  //   "YES": "SELECTED",
  //   "NO": "NOT_SELECTED",
  //   "display_label": "period covered"
  //   }
  //   }
  //   ],
  //   "TE": []
  //   }
  //   }
  // }

  // licenseReportsJson = {
  //   "profile_id": 9,
  //   "vault_doc_id": "74e144b3-557f-44ce-8081-ac935c9be534",
  //   "values": {
  //     "1": {
  //       "KV": [
  //         {
  //           "OWNER(S) OF RECORD:": "SYAR Industries, Inc. - River Ranch West"
  //         },
  //         {
  //           "APPLICATION NO:": "A014061",
  //           "confidence": "62.0",
  //           "xmin": "276",
  //           "ymin": "351",
  //           "xmax": "341",
  //           "ymax": "365",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Application Number"
  //         },
  //         {
  //           "PRIMARY CONTACT OR AGENT FOR MAIL & REPORTING": "SYAR Industries, Inc. - River Ranch West (Grace Ranch) PO BOX 2540 NAPA, CA 94558",
  //           "confidence": "29.0",
  //           "xmin": "190",
  //           "ymin": "397",
  //           "xmax": "711",
  //           "ymax": "466",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Primary Contact"
  //         },
  //         {
  //           "LICENSE NO:": "005724",
  //           "confidence": "81.5",
  //           "xmin": "892",
  //           "ymin": "350",
  //           "xmax": "948",
  //           "ymax": "365",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "License Number"
  //         },
  //         {
  //           "CONTACT PHONE NO:": "707-252-8711",
  //           "confidence": "78.5",
  //           "xmin": "964",
  //           "ymin": "368",
  //           "xmax": "1065",
  //           "ymax": "384",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Phone Number"
  //         },
  //         {
  //           "COUNTY LOCATION": "Sonoma"
  //         },
  //         {
  //           "NAME(S) OF SOURCES OF WATER": "RUSSIAN RIVER UNDERFLOW"
  //         },
  //         {
  //           "MAX DIRECT DIVERSION RATE:": "0.33 Cubic Feet per Second",
  //           "confidence": "31.0",
  //           "xmin": "323",
  //           "ymin": "649",
  //           "xmax": "493",
  //           "ymax": "664",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Max Direct Diversion Rate",
  //           "MAX COLLECTION TO STORAGE": "AMOUNT: 0 AC-FT"
  //         },
  //         {
  //           "WATER RIGHT FACE VALUE:": "110 AC-FT",
  //           "confidence": "31.0",
  //           "xmin": "323",
  //           "ymin": "649",
  //           "xmax": "493",
  //           "ymax": "664",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Max Collection to Storage Amount",
  //           "MAX COLLECTION TO STORAGE": "AMOUNT: 0 AC-FT"
  //         },
  //         {
  //           "WATER RIGHT FACE VALUE:": "110 AC-FT",
  //           "confidence": "54.5",
  //           "xmin": "337",
  //           "ymin": "665",
  //           "xmax": "406",
  //           "ymax": "680",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Water Right Face Value"
  //         },
  //         {
  //           "ACRES": "(AC)|0.0|39.0"
  //         },
  //         {
  //           "DIRECT DIVERSION SEASON": "(month/day to month/day)|5/1 to 10/15"
  //         }
  //       ],
  //       "SE": [
  //         {},
  //         {
  //           "I have currently reviewed my water right license.": {
  //             "YES": "SELECTED",
  //             "confidence": "42.5",
  //             "xmin": "145",
  //             "ymin": "875",
  //             "xmax": "163",
  //             "ymax": "892",
  //             "doc_width": "1224",
  //             "doc_height": "1584",
  //             "display_label": "Water Right license Review",
  //             "NO": "["
  //           }
  //         },
  //         {
  //           "I am complying with all terms and conditions": {
  //             "YES": "SELECTED",
  //             "confidence": "41.5",
  //             "xmin": "145",
  //             "ymin": "893",
  //             "xmax": "163",
  //             "ymax": "909",
  //             "doc_width": "1224",
  //             "doc_height": "1584",
  //             "display_label": "Terms and Conditions Compliance",
  //             "NO": "NOT_SELECTED"
  //           }
  //         },
  //         {
  //           "I have changed the intake location, types of use,": {
  //             "NO": "SELECTED",
  //             "confidence": "83.5",
  //             "xmin": "208",
  //             "ymin": "910",
  //             "xmax": "224",
  //             "ymax": "926",
  //             "doc_width": "1224",
  //             "doc_height": "1584",
  //             "display_label": "Changed intake location, types of use, and/or place of use authorized by the license",
  //             "YES": "]"
  //           }
  //         },
  //         {},
  //         {}
  //       ],
  //       "TE": [
  //         {
  //           "Beneficial Use(s) of water": {
  //             "1": [
  //               [
  //                 "4. Current Use(s) of Water",
  //                 "2007",
  //                 "2008",
  //                 "2009"
  //               ],
  //               [
  //                 "4.a. Irrigation - specify no. of acres irrigated",
  //                 "39",
  //                 "39",
  //                 "31"
  //               ],
  //               [
  //                 "4.b. Frost Protection - specify no. of acres protected",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.c. Heat Control - specify no. of acres protected",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.d. Industrial - specify type",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.e. Stockwatering - specify no. & type of animals",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.f. Municipal - approx. population served",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.g Domestic specify no. of persons, lawn/garden area",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.h. Power Generation - installed capacity in kW. MW, or hp",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.i Recreational - specify (boating, fishing, water contact sports, etc.)",
  //                 "",
  //                 "",
  //                 ""
  //               ],
  //               [
  //                 "4.j. Other - specify (Examples: fire protection, snowmaking, mining, etc.)",
  //                 "",
  //                 "",
  //                 ""
  //               ]
  //             ]
  //           }
  //         },
  //         {
  //           "Amount of water taken from the source": {
  //             "1": [
  //               [
  //                 "Year",
  //                 "Jan",
  //                 "Feb",
  //                 "Mar",
  //                 "Apr",
  //                 "May",
  //                 "Jun",
  //                 "Jul",
  //                 "Aug",
  //                 "Sep",
  //                 "Oct",
  //                 "Nov",
  //                 "Dec",
  //                 "Total"
  //               ],
  //               [
  //                 "2007",
  //                 "",
  //                 "",
  //                 "",
  //                 "",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "0.5",
  //                 "",
  //                 "",
  //                 "6.5"
  //               ],
  //               [
  //                 "2008",
  //                 "",
  //                 "",
  //                 "",
  //                 "",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "0.5",
  //                 "",
  //                 "",
  //                 "6.5"
  //               ],
  //               [
  //                 "2009",
  //                 "",
  //                 "",
  //                 "",
  //                 "",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "1.2",
  //                 "0.5",
  //                 "",
  //                 "",
  //                 "6.5"
  //               ]
  //             ]
  //           }
  //         }
  //       ]
  //     },
  //     "2": {
  //       "KV": [
  //         {
  //           "During the period covered by this Report,": "DRIP IRRIGATION"
  //         },
  //         {
  //           "Date:": "JUNE 29 , 2010",
  //           "confidence": "74.0",
  //           "xmin": "685",
  //           "ymin": "1361",
  //           "xmax": "803",
  //           "ymax": "1400",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Date"
  //         },
  //         {
  //           "Phone No.:": "(707) 259-5848",
  //           "confidence": "84.5",
  //           "xmin": "911",
  //           "ymin": "1367",
  //           "xmax": "1072",
  //           "ymax": "1391",
  //           "doc_width": "1224",
  //           "doc_height": "1584",
  //           "display_label": "Phone Number"
  //         }
  //       ],
  //       "SE": [
  //         {
  //           "Conservation of water:": {
  //             "YES": "SELECTED",
  //             "confidence": "93.0",
  //             "xmin": "158",
  //             "ymin": "423",
  //             "xmax": "176",
  //             "ymax": "441",
  //             "doc_width": "1224",
  //             "doc_height": "1584",
  //             "display_label": "Water Conservation Efforts Implementation",
  //             "NO": "[ ]"
  //           }
  //         },
  //         {
  //           "Water quality and wastewater reclamation": {
  //             "YES": "[]",
  //             "NO": "SELECTED"
  //           }
  //         },
  //         {
  //           "During the period covered by this report, were you using groundwater in lieu of the surface water authorized": {
  //             "YES": "[ ]",
  //             "NO": "SELECTED"
  //           }
  //         }
  //       ],
  //       "TE": []
  //     }
  //   }
  // }


//   licenseReportsJson = {
//     "profile_id": "9",
//     "vault_doc_id": "2d752ff0-41b2-4734-9dfa-ffb3d4757226",
//     "values": {
//         "1": {
//             "KV": [
//                 {
//                     "OWNER(S) OF RECORD:": "SYAR Industries, Inc. - River Ranch West"
//                 },
//                 {
//                     "APPLICATION NO:": "A014061",
//                     "confidence": "62.0",
//                     "xmin": "276",
//                     "ymin": "351",
//                     "xmax": "341",
//                     "ymax": "365",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Application Number"
//                 },
//                 {
//                     "PRIMARY CONTACT OR AGENT FOR MAIL & REPORTING": "SYAR Industries, Inc. - River Ranch West (Grace Ranch) PO BOX 2540 NAPA, CA 94558",
//                     "confidence": "29.0",
//                     "xmin": "190",
//                     "ymin": "397",
//                     "xmax": "711",
//                     "ymax": "466",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Primary Contact"
//                 },
//                 {
//                     "LICENSE NO:": "005724",
//                     "confidence": "81.5",
//                     "xmin": "892",
//                     "ymin": "350",
//                     "xmax": "948",
//                     "ymax": "365",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "License Number"
//                 },
//                 {
//                     "CONTACT PHONE NO:": "707-252-8711",
//                     "confidence": "78.5",
//                     "xmin": "964",
//                     "ymin": "368",
//                     "xmax": "1065",
//                     "ymax": "384",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Phone Number"
//                 },
//                 {
//                     "COUNTY LOCATION": "Sonoma"
//                 },
//                 {
//                     "NAME(S) OF SOURCES OF WATER": "RUSSIAN RIVER UNDERFLOW"
//                 },
//                 {
//                     "MAX DIRECT DIVERSION RATE:": "0.33 Cubic Feet per Second",
//                     "confidence": "57.5",
//                     "xmin": "356",
//                     "ymin": "632",
//                     "xmax": "541",
//                     "ymax": "648",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Max Direct DIversion Rate"
//                 },
//                 {
//                     "MAX COLLECTION TO STORAGE": "AMOUNT: 0 AC-FT",
//                     "confidence": "31.0",
//                     "xmin": "323",
//                     "ymin": "649",
//                     "xmax": "493",
//                     "ymax": "664",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Max Collection To Storage Amount"
//                 },
//                 {
//                     "WATER RIGHT FACE VALUE:": "110 AC-FT",
//                     "confidence": "54.5",
//                     "xmin": "337",
//                     "ymin": "665",
//                     "xmax": "406",
//                     "ymax": "680",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Water Right Face Value"
//                 },
//                 {
//                     "ACRES": "(AC)|0.0"
//                 },
//                 {
//                     "DIRECT DIVERSION SEASON": "(month/day to month/day)|5/1 to 10/15"
//                 }
//             ],
//             "SE": [
//                 {},
//                 {
//                     "I have currently reviewed my water right license.": {
//                         "YES": "SELECTED",
//                         "confidence": "42.5",
//                         "xmin": "145",
//                         "ymin": "875",
//                         "xmax": "163",
//                         "ymax": "892",
//                         "doc_width": "1224",
//                         "doc_height": "1584",
//                         "display_label": "Water Right license Review",
//                         "NO": "["
//                     }
//                 },
//                 {
//                     "I am complying with all terms and conditions": {
//                         "YES": "SELECTED",
//                         "confidence": "41.5",
//                         "xmin": "145",
//                         "ymin": "893",
//                         "xmax": "163",
//                         "ymax": "909",
//                         "doc_width": "1224",
//                         "doc_height": "1584",
//                         "display_label": "Terms and Conditions Compliance",
//                         "NO": "NOT_SELECTED"
//                     }
//                 },
//                 {
//                     "I have changed the intake location, types of use,": {
//                         "NO": "SELECTED",
//                         "confidence": "83.5",
//                         "xmin": "208",
//                         "ymin": "910",
//                         "xmax": "224",
//                         "ymax": "926",
//                         "doc_width": "1224",
//                         "doc_height": "1584",
//                         "display_label": "Changed intake location, types of use, and/or place of use authorized by the license",
//                         "YES": "]"
//                     }
//                 }
//             ],
//             "TE": [
//                 {
//                     "Beneficial Use(s) of water": {
//                         "1": [
//                             [
//                                 "4. Current Use(s) of Water",
//                                 "2007",
//                                 "2008",
//                                 "2009"
//                             ],
//                             [
//                                 "4.a. Irrigation - specify no. of acres irrigated",
//                                 "39",
//                                 "39",
//                                 "31"
//                             ],
//                             [
//                                 "4.b. Frost Protection - specify no. of acres protected",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.c. Heat Control - specify no. of acres protected",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.d. Industrial - specify type",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.e. Stockwatering - specify no. & type of animals",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.f. Municipal - approx. population served",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.g Domestic specify no. of persons, lawn/garden area",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.h. Power Generation - installed capacity in kW. MW, or hp",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.i Recreational - specify (boating, fishing, water contact sports, etc.)",
//                                 "",
//                                 "",
//                                 ""
//                             ],
//                             [
//                                 "4.j. Other - specify (Examples: fire protection, snowmaking, mining, etc.)",
//                                 "",
//                                 "",
//                                 ""
//                             ]
//                         ]
//                     }
//                 },
//                 {
//                     "5.a. Amount of water taken each month": {
//                         "1": [
//                             [
//                                 "Year",
//                                 "Jan",
//                                 "Feb",
//                                 "Mar",
//                                 "Apr",
//                                 "May",
//                                 "Jun",
//                                 "Jul",
//                                 "Aug",
//                                 "Sep",
//                                 "Oct",
//                                 "Nov",
//                                 "Dec",
//                                 "Total"
//                             ],
//                             [
//                                 "2007",
//                                 "",
//                                 "",
//                                 "",
//                                 "",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "0.5",
//                                 "",
//                                 "",
//                                 "6.5"
//                             ],
//                             [
//                                 "2008",
//                                 "",
//                                 "",
//                                 "",
//                                 "",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "0.5",
//                                 "",
//                                 "",
//                                 "6.5"
//                             ],
//                             [
//                                 "2009",
//                                 "",
//                                 "",
//                                 "",
//                                 "",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "1.2",
//                                 "0.5",
//                                 "",
//                                 "",
//                                 "6.5"
//                             ]
//                         ]
//                     }
//                 }
//             ]
//         },
//         "2": {
//             "KV": [
//                 {
//                     "During the period covered by this Report,": "DRIP IRRIGATION"
//                 },
//                 {
//                     "Date:": "JUNE 29 , 2010",
//                     "confidence": "74.0",
//                     "xmin": "685",
//                     "ymin": "1361",
//                     "xmax": "803",
//                     "ymax": "1400",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Date"
//                 },
//                 {
//                     "Phone No.:": "(707) 259-5848",
//                     "confidence": "84.5",
//                     "xmin": "911",
//                     "ymin": "1367",
//                     "xmax": "1072",
//                     "ymax": "1391",
//                     "doc_width": "1224",
//                     "doc_height": "1584",
//                     "display_label": "Phone Number"
//                 }
//             ],
//             "SE": [
//                 {
//                     "Conservation of water:": {
//                         "YES": "SELECTED",
//                         "confidence": "93.0",
//                         "xmin": "158",
//                         "ymin": "423",
//                         "xmax": "176",
//                         "ymax": "441",
//                         "doc_width": "1224",
//                         "doc_height": "1584",
//                         "display_label": "Water Conservation Efforts Implementation",
//                         "NO": "[ ]"
//                     }
//                 },
//                 {
//                     "Water quality and wastewater reclamation": {
//                         "YES": "[]",
//                         "NO": "8"
//                     }
//                 },
//                 {
//                     "During the period covered by this report, were you using groundwater in lieu of the surface water authorized": {
//                         "YES": "[ ]",
//                         "NO": "x"
//                     }
//                 }
//             ],
//             "TE": []
//         }
//     }
// }

  // profileDetails = [{
  //   "id": 1,
  //   "annotations": [{
  //   "id": 8,
  //   "completed_by": 1,
  //   "result": [{
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 19.685659311926784,
  //   "y": 18.77045839696897,
  //   "width": 13.24074650743428,
  //   "height": 2.0402672170618463,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["application no | right"]
  //   },
  //   "display_label": "Application No",
  //   "id": "GgkrRku333",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 11.32308257038926,
  //   "y": 22.714975016621835,
  //   "width": 47.5621552174938,
  //   "height": 5.440712578831448,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["primary contact | down"]
  //   },
  //   "display_label": "Primary Contact",
  //   "id": "zby6SZFrV1",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 74.38960872904157,
  //   "y": 18.770458396968962,
  //   "width": 10.453220926921789,
  //   "height": 1.4961959591786878,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["license no | right"]
  //   },
  //   "display_label": "License No",
  //   "id": "UIND6vWDZS",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 80.66154128519341,
  //   "y": 20.26665435614739,
  //   "width": 14.111848251344835,
  //   "height": 1.7682315881203292,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["contact phone no | right"]
  //   },
  //   "display_label": "Phone Number",
  //   "id": "kt22DjQDkD",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 64.6332691972479,
  //   "y": 34.004453617697415,
  //   "width": 13.066526158652241,
  //   "height": 1.6322137736494824,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["county location | down"]
  //   },
  //   "display_label": "County Location",
  //   "id": "lfQFsD8RJi",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 6.271932556153078,
  //   "y": 33.868435803226625,
  //   "width": 39.54801917352081,
  //   "height": 2.720356289415797,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["name of sources of water | down"]
  //   },
  //   "display_label": "Sources of Water",
  //   "id": "Kr9buAeerw",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 25.085250023727117,
  //   "y": 40.805344341236896,
  //   "width": 10.279000578139765,
  //   "height": 1.4961959591786889,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["water right face value | right"]
  //   },
  //   "display_label": "Water Right Face",
  //   "id": "ntopTDvtzb",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 5.441669842160282,
  //   "y": 49.3336046820706,
  //   "width": 13.220326992475599,
  //   "height": 2.4526127327565352,
  //   "rotation": 0,
  //   "rectanglelabels": ["SE"]
  //   },
  //   "meta": {
  //   "text": ["the project has been abandoned | left"]
  //   },
  //   "display_label": "Abondoned Project",
  //   "id": "ezYAJzOjjz",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 7.667789655635848,
  //   "y": 55.77171310555651,
  //   "width": 11.050099056483067,
  //   "height": 1.2263063663782703,
  //   "rotation": 0,
  //   "rectanglelabels": ["SE"]
  //   },
  //   "meta": {
  //   "text": ["i have currently reviewed | left"]
  //   },
  //   "display_label": "Currently Reviewed",
  //   "id": "3mO2kFRQ7a",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 7.853659599490455,
  //   "y": 56.998019471934775,
  //   "width": 10.864229112628465,
  //   "height": 1.1241141691800818,
  //   "rotation": 0,
  //   "rectanglelabels": ["SE"]
  //   },
  //   "meta": {
  //   "text": ["i am complying with all terms | left"]
  //   },
  //   "display_label": "Complying All Terms",
  //   "id": "7iiaO8QHF-",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 7.853659599490455,
  //   "y": 58.22432583831305,
  //   "width": 10.864229112628465,
  //   "height": 1.124114169180075,
  //   "rotation": 0,
  //   "rectanglelabels": ["SE"]
  //   },
  //   "meta": {
  //   "text": ["i have changed the intake location | left"]
  //   },
  //   "display_label": "Changed Intake Location",
  //   "id": "DU05uRFhXi",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1709,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 6.079393792960335,
  //   "y": 82.1940315601867,
  //   "width": 90.43619923139885,
  //   "height": 6.42993304771002,
  //   "rotation": 0,
  //   "rectanglelabels": ["TE"]
  //   },
  //   "meta": {
  //   "text": ["amount of water taken each month | down"]
  //   },
  //   "display_label": "Water Taken Per Month",
  //   "id": "xjJZUfP5Jj",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }],
  //   "was_cancelled": false,
  //   "ground_truth": false,
  //   "created_at": "2022-03-25T08:11:09.397304Z",
  //   "updated_at": "2022-03-25T10:54:21.353305Z",
  //   "lead_time": 11302.779,
  //   "prediction": {},
  //   "result_count": 0,
  //   "task": 1,
  //   "parent_prediction": null,
  //   "parent_annotation": null
  //   }],
  //   "file_upload": "1aa8c3f8-originalFile_1.jpg",
  //   "drafts": [],
  //   "predictions": [],
  //   "data": {
  //   "image": "\/data\/upload\/4\/1aa8c3f8-originalFile_1.jpg"
  //   },
  //   "meta": {},
  //   "created_at": "2022-03-25T07:47:22.809170Z",
  //   "updated_at": "2022-03-25T10:54:21.473124Z",
  //   "project": 4,
  //   "updated_by": 1
  //   }, {
  //   "id": 2,
  //   "annotations": [{
  //   "id": 9,
  //   "completed_by": 1,
  //   "result": [{
  //   "original_width": 1710,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 8.534316889434269,
  //   "y": 24.211170975800552,
  //   "width": 11.672763368396007,
  //   "height": 1.3601781447078953,
  //   "rotation": 0,
  //   "rectanglelabels": ["SE"]
  //   },
  //   "meta": {
  //   "text": ["during the period covered by this report | left"]
  //   },
  //   "display_label": "Period Covered",
  //   "id": "fpx14Vc9L0",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }, {
  //   "original_width": 1710,
  //   "original_height": 2189,
  //   "image_rotation": 0,
  //   "value": {
  //   "x": 10.102300028472538,
  //   "y": 25.8433847494497,
  //   "width": 50.175460449224154,
  //   "height": 1.904249402591038,
  //   "rotation": 0,
  //   "rectanglelabels": ["KV"]
  //   },
  //   "meta": {
  //   "text": ["during the period covered by this report | down"]
  //   },
  //   "display_label": "Period Covered 1",
  //   "id": "N7F8DQymXM",
  //   "from_name": "label",
  //   "to_name": "image",
  //   "type": "rectanglelabels",
  //   "origin": "manual"
  //   }],
  //   "was_cancelled": false,
  //   "ground_truth": false,
  //   "created_at": "2022-03-25T10:10:32.939260Z",
  //   "updated_at": "2022-03-25T10:54:14.821061Z",
  //   "lead_time": 11296.31,
  //   "prediction": {},
  //   "result_count": 0,
  //   "task": 2,
  //   "parent_prediction": null,
  //   "parent_annotation": null
  //   }],
  //   "file_upload": "fa612370-originalFile_2.jpg",
  //   "drafts": [],
  //   "predictions": [],
  //   "data": {
  //   "image": "\/data\/upload\/4\/fa612370-originalFile_2.jpg"
  //   },
  //   "meta": {},
  //   "created_at": "2022-03-25T07:47:22.809170Z",
  //   "updated_at": "2022-03-25T10:54:14.933669Z",
  //   "project": 4,
  //   "updated_by": 1
  // }]
  // profileDetails = [
  //   {
  //     "id": 2,
  //     "annotations": [
  //       {
  //         "id": 8,
  //         "completed_by": 1,
  //         "result": [
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.572370847966774,
  //               "y": 14.110747527180855,
  //               "width": 25.792116496303358,
  //               "height": 1.366026910730139,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Owner(s) of Record: | down | Record Owner"
  //               ]
  //             },
  //             "id": "1Eymlvzjp6",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 19.58041958041958,
  //               "y": 18.72727272727273,
  //               "width": 6.75990675990676,
  //               "height": 1.6363636363636365,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Application No: | right | Application Number"
  //               ]
  //             },
  //             "id": "Cw629vZVyz",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 11.188811188811188,
  //               "y": 22.591626255037227,
  //               "width": 32.16783216783217,
  //               "height": 5.226555563144584,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Primary Contact or Agent for Mail & Reporting | down | Primary Contact"
  //               ]
  //             },
  //             "id": "-aZmxBkRr_",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 74.35897435897438,
  //               "y": 18.545454545454547,
  //               "width": 6.0606060606060606,
  //               "height": 1.4545454545454546,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "License No | right | License Number"
  //               ]
  //             },
  //             "id": "0BGvS39dJR",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 81.11888111888112,
  //               "y": 19.818181818181817,
  //               "width": 10.48951048951049,
  //               "height": 1.6363636363636365,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Contact Phone No: | right| Phone Number"
  //               ]
  //             },
  //             "id": "wLfYWNjr4a",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 63.86946386946387,
  //               "y": 34,
  //               "width": 6.993006993006993,
  //               "height": 1.2727272727272727,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Country Location | down | Country"
  //               ]
  //             },
  //             "id": "I7zvgcDiLR",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.779344622319828,
  //               "y": 33.74427976231133,
  //               "width": 20.315272005730304,
  //               "height": 1.775834983949184,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Name(s) of Sources of Water | down | Sources of Water"
  //               ]
  //             },
  //             "id": "_l1bNuKnvd",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 26.208364638116716,
  //               "y": 38.129226145755084,
  //               "width": 18.301257970679455,
  //               "height": 1.803155522163789,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Max Direct Diversion Rate: | right | Max Direct Diversion Rate"
  //               ]
  //             },
  //             "id": "fomfPYYTcu",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 33.7995337995338,
  //               "y": 39.63636363636363,
  //               "width": 6.0606060606060606,
  //               "height": 1.6363636363636365,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Max collection to storage amount: | right | Max Collection to Storage Amount"
  //               ]
  //             },
  //             "id": "8rJTFiTb6t",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 25.641025641025635,
  //               "y": 40.909090909090914,
  //               "width": 6.526806526806526,
  //               "height": 1.2727272727272727,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Water Right Face Value: | right | Water Right Face Value"
  //               ]
  //             },
  //             "id": "ddtoSW1pVR",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 40.28028070101697,
  //               "y": 43.1698654463493,
  //               "width": 5.572370847966768,
  //               "height": 4.470633526025924,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Acres | down | Acres"
  //               ]
  //             },
  //             "id": "ftU0BgvDgF",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 49.83291644038857,
  //               "y": 43.542418240184794,
  //               "width": 16.71711254390032,
  //               "height": 2.3595010276247876,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Direct Diversion Season | down | Direct Diversion Season"
  //               ]
  //             },
  //             "id": "zp29V0I8S1",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.361305361305361,
  //               "y": 49.63636363636363,
  //               "width": 12.587412587412587,
  //               "height": 2.3636363636363638,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "The project has been abandoned and I request recovation of my water right license. | left | Project Abandoned"
  //               ]
  //             },
  //             "id": "_XW1zSs7wP",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.779344622319828,
  //               "y": 55.60071033399359,
  //               "width": 12.609479175970534,
  //               "height": 1.2294242196571346,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "I have currently reviewed my water right license. | left | Water Right license Review"
  //               ]
  //             },
  //             "id": "WSbzERFuIJ",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.779344622319828,
  //               "y": 56.830134553650716,
  //               "width": 12.784610831192344,
  //               "height": 1.2294242196571243,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "I am complying with all terms and conditions | left | Terms and Conditions Compliance"
  //               ]
  //             },
  //             "id": "L1y3mDtK9y",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 5.361305361305361,
  //               "y": 57.999999999999986,
  //               "width": 12.820512820512818,
  //               "height": 1.090909090909091,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "I have changed the intake location, types of use, | left | Changed intake location"
  //               ]
  //             },
  //             "id": "oUmgrU6z_V",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 6.0606060606060606,
  //               "y": 61.63636363636363,
  //               "width": 89.04428904428904,
  //               "height": 18,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "TE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Beneficial Use(s) of water | down | Beneficial use of water"
  //               ]
  //             },
  //             "id": "wAtwHuK2Nv",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 6.0606060606060606,
  //               "y": 82.1818181818182,
  //               "width": 90.67599067599068,
  //               "height": 6.545454545454516,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "TE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Amount of water taken from the source | down | Amount of water taken from the source"
  //               ]
  //             },
  //             "id": "-FT8kK2V_6",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 41.50611472174208,
  //               "y": 81.0088108735742,
  //               "width": 29.77238138770819,
  //               "height": 1.5026296018031644,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Amount of water taken each month this license: | right | Units for the amount of water intake"
  //               ]
  //             },
  //             "id": "H5lo4AgWu6",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 66.08814312523077,
  //               "y": 90.43781162488901,
  //               "width": 23.244746965804257,
  //               "height": 1.366026910730139,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Check if amounts is same as 5.a | left | Amounts same as 5.a table"
  //               ]
  //             },
  //             "id": "lIvOPAl0Hj",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           }
  //         ],
  //         "was_cancelled": false,
  //         "ground_truth": false,
  //         "created_at": "2022-03-30T10:44:47.714135Z",
  //         "updated_at": "2022-04-01T07:49:50.334026Z",
  //         "lead_time": 68622.212,
  //         "prediction": {},
  //         "result_count": 0,
  //         "task": 2,
  //         "parent_prediction": null,
  //         "parent_annotation": null
  //       }
  //     ],
  //     "file_upload": "7ce617d1-ReportOFLicense_page-0001.jpg",
  //     "drafts": [],
  //     "predictions": [],
  //     "data": {
  //       "image": "/data/upload/7/7ce617d1-ReportOFLicense_page-0001.jpg"
  //     },
  //     "meta": {},
  //     "created_at": "2022-03-30T10:27:54.654535Z",
  //     "updated_at": "2022-04-01T07:49:50.466426Z",
  //     "project": 7,
  //     "updated_by": 1
  //   },
  //   {
  //     "id": 3,
  //     "annotations": [
  //       {
  //         "id": 9,
  //         "completed_by": 1,
  //         "result": [
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 6.129607932763453,
  //               "y": 23.908886005054317,
  //               "width": 13.310005796857785,
  //               "height": 1.775834983949184,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Conservation of water: | down | Water Conservation Efforts Implementation"
  //               ]
  //             },
  //             "id": "9JVNj1fcbi",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 20.512820512820515,
  //               "y": 25.63636363636363,
  //               "width": 12.820512820512818,
  //               "height": 2.909090909090909,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "During the period covered by this Report | down | Water Conservation method used"
  //               ]
  //             },
  //             "id": "rByzRY85VP",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 55.47785547785548,
  //               "y": 89.27272727272727,
  //               "width": 13.51981351981352,
  //               "height": 3.090909090909091,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Date | right | Date"
  //               ]
  //             },
  //             "id": "qoAD2ueqCE",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 76.45687645687646,
  //               "y": 89.63636363636364,
  //               "width": 15.151515151515152,
  //               "height": 2.5454545454545454,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "KV"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Phone No: | right | Phone Number"
  //               ]
  //             },
  //             "id": "GLnpvfHZYy",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 8.581451105868835,
  //               "y": 38.115565876647786,
  //               "width": 11.383557589417842,
  //               "height": 1.912437675022199,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "Water quality and wastewater reclamation | down | Water Quality and WasteWater Reclamation"
  //               ]
  //             },
  //             "id": "RFULbONyyY",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           },
  //           {
  //             "original_width": 1279,
  //             "original_height": 1639,
  //             "image_rotation": 0,
  //             "value": {
  //               "x": 8.915793356746839,
  //               "y": 51.11765838150648,
  //               "width": 10.985531100277353,
  //               "height": 2.1111324984011306,
  //               "rotation": 0,
  //               "rectanglelabels": [
  //                 "SE"
  //               ]
  //             },
  //             "meta": {
  //               "text": [
  //                 "During the period covered by this report, were you using groundwater in lieu of the surface water authorized | left | Groundwater usage in lieu of the surface water"
  //               ]
  //             },
  //             "id": "q6bBswUV4o",
  //             "from_name": "label",
  //             "to_name": "image",
  //             "type": "rectanglelabels",
  //             "origin": "manual"
  //           }
  //         ],
  //         "was_cancelled": false,
  //         "ground_truth": false,
  //         "created_at": "2022-03-30T12:30:59.263470Z",
  //         "updated_at": "2022-03-31T09:49:13.691529Z",
  //         "lead_time": 15924.256,
  //         "prediction": {},
  //         "result_count": 0,
  //         "task": 3,
  //         "parent_prediction": null,
  //         "parent_annotation": null
  //       }
  //     ],
  //     "file_upload": "f1148282-ReportOFLicense_page-0002.jpg",
  //     "drafts": [],
  //     "predictions": [],
  //     "data": {
  //       "image": "/data/upload/7/f1148282-ReportOFLicense_page-0002.jpg"
  //     },
  //     "meta": {},
  //     "created_at": "2022-03-30T10:27:54.654535Z",
  //     "updated_at": "2022-03-31T09:49:13.792074Z",
  //     "project": 7,
  //     "updated_by": 1
  //   }
  // ]


  licenseReportsJson = {
    "profile_id": 9,
    "vault_doc_id": "74e144b3-557f-44ce-8081-ac935c9be534",
    "values": {
      "1": {
        "KV": [
          {},
          {
            "APPLICATION NO:": "A014061",
            "confidence": "62.0",
            "xmin": "276",
            "ymin": "351",
            "xmax": "341",
            "ymax": "365",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Application Number"
          },
          {
            "COUNTY LOCATION": "Sonoma",
            "confidence": "99.25471496582031",
            "xmin": "781",
            "ymin": "564",
            "xmax": "837",
            "ymax": "577",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "County"
          },
          {
            "LICENSE NO:": "005724",
            "confidence": "81.5",
            "xmin": "892",
            "ymin": "350",
            "xmax": "948",
            "ymax": "365",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "License Id"
          },
          {
            "NAME(S) OF SOURCES OF WATER": "RUSSIAN RIVER UNDERFLOW",
            "confidence": "99.2311782836914",
            "xmin": "125",
            "ymin": "564",
            "xmax": "337",
            "ymax": "578",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Source Of Water"
          },
          {
            "OWNER(S) OF RECORD:": "SYAR Industries, Inc. - River Ranch West",
            "confidence": "96.99385833740234",
            "xmin": "125",
            "ymin": "279",
            "xmax": "396",
            "ymax": "296",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Primary Owner"
          },
          {
            "MAX DIRECT DIVERSION RATE:": "0.33 Cubic Feet per Second",
            "confidence": "57.5",
            "xmin": "356",
            "ymin": "632",
            "xmax": "541",
            "ymax": "648",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "MAX Direct Diversion Rate"
          },
          {
            "ACRES": "0.0",
            "confidence": "99.7271728515625",
            "xmin": "525",
            "ymin": "714",
            "xmax": "546",
            "ymax": "726",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Use Net Acreage"
          },
          {
            "(First 4 uses displayed below": "Irrigation",
            "confidence": "99.44178771972656",
            "xmin": "126",
            "ymin": "731",
            "xmax": "183",
            "ymax": "747",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Purpose Of Water Used"
          },
          {
            "COLLECTION TO STORAGE SEASON": "(month/day to month/day)",
            "confidence": "99.6983642578125",
            "xmin": "883",
            "ymin": "696",
            "xmax": "1050",
            "ymax": "712",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Storage Season"
          },
          {
            "DIRECT DIVERSION SEASON": "5/1 to 10/15",
            "confidence": "98.51481628417969",
            "xmin": "665",
            "ymin": "713",
            "xmax": "743",
            "ymax": "726",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Diversion Season"
          },
          {
            "MAX COLLECTION TO STORAGE": "AMOUNT: 0 AC-FT",
            "confidence": "31.0",
            "xmin": "323",
            "ymin": "649",
            "xmax": "493",
            "ymax": "664",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Max Collection to  Storage"
          },
          {
            "PRIMARY CONTACT OR AGENT FOR MAIL & REPORTING": "SYAR Industries, Inc. - River Ranch West (Grace Ranch) PO BOX 2540 NAPA, CA 94558",
            "confidence": "29.0",
            "xmin": "190",
            "ymin": "397",
            "xmax": "711",
            "ymax": "466",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Primary Contact"
          },
          {
            "CONTACT PHONE NO:": "707-252-8711",
            "confidence": "78.5",
            "xmin": "964",
            "ymin": "368",
            "xmax": "1065",
            "ymax": "384",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Contact Phone No"
          },
          {
            "WATER RIGHT FACE VALUE:": "110 AC-FT",
            "confidence": "54.5",
            "xmin": "337",
            "ymin": "665",
            "xmax": "406",
            "ymax": "680",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Water Right Face Value"
          }
        ],
        "SE": [
          {
            "The project has been abandoned": {
              "NO": "SELECTED",
              "YES": "NOT_SELECTED",
              "confidence": "94.0",
              "xmin": "187",
              "ymin": "795",
              "xmax": "205",
              "ymax": "812",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Request Revocation"
            }
          },
          {
            "I have currently reviewed": {
              "YES": "SELECTED",
              "confidence": "42.5",
              "xmin": "145",
              "ymin": "875",
              "xmax": "163",
              "ymax": "892",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Reviewed Water Right License",
              "NO": "NOT_SELECTED"
            }
          },
          {
            "I am complying": {
              "YES": "SELECTED",
              "NO": "NOT_SELECTED",
              "confidence": "41.5",
              "xmin": "145",
              "ymin": "893",
              "xmax": "163",
              "ymax": "909",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Complying With Terms"
            }
          },
          {
            "I have changed the intake location": {
              "NO": "SELECTED",
              "YES": "NOT_SELECTED",
              "confidence": "83.5",
              "xmin": "208",
              "ymin": "910",
              "xmax": "224",
              "ymax": "926",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Intake Location Change"
            }
          },
          {
            "Check if amounts are same as 5.a": {}
          },
          {
            "Amount of water taken each month under this license in": {
              "million gallons": "NOT_SELECTED"
            }
          }
        ],
        "TE": [
          {
            "BENEFICIAL USE(S) OF WATER": {
              "1": [
                [
                  "4. Current Use(s) of Water",
                  "2007",
                  "2008",
                  "2009"
                ],
                [
                  "4.a. Irrigation - specify no. of acres irrigated",
                  "39",
                  "39",
                  "31"
                ],
                [
                  "4.b. Frost Protection - specify no. of acres protected",
                  "",
                  "",
                  ""
                ],
                [
                  "4.c. Heat Control - specify no. of acres protected",
                  "",
                  "",
                  ""
                ],
                [
                  "4.d. Industrial - specify type",
                  "",
                  "",
                  ""
                ],
                [
                  "4.e. Stockwatering - specify no. & type of animals",
                  "",
                  "",
                  ""
                ],
                [
                  "4.f. Municipal - approx. population served",
                  "",
                  "",
                  ""
                ],
                [
                  "4.g Domestic specify no. of persons, lawn/garden area",
                  "",
                  "",
                  ""
                ],
                [
                  "4.h. Power Generation - installed capacity in kW. MW, or hp",
                  "",
                  "",
                  ""
                ],
                [
                  "4.i Recreational - specify (boating, fishing, water contact sports, etc.)",
                  "",
                  "",
                  ""
                ],
                [
                  "4.j. Other - specify (Examples: fire protection, snowmaking, mining, etc.)",
                  "",
                  "",
                  ""
                ]
              ]
            }
          },
          {},
          {}
        ]
      },
      "2": {
        "KV": [
          {
            "During the period covered by": "DRIP IRRIGATION",
            "confidence": "98.77470397949219",
            "xmin": "287",
            "ymin": "452",
            "xmax": "415",
            "ymax": "469",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Conservation Efforts"
          },
          {
            "Date:": "JUNE 29 , 2010",
            "confidence": "74.0",
            "xmin": "685",
            "ymin": "1361",
            "xmax": "803",
            "ymax": "1400",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Date"
          },
          {
            "Phone No.:": "(707) 259-5848",
            "confidence": "84.5",
            "xmin": "911",
            "ymin": "1367",
            "xmax": "1072",
            "ymax": "1391",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Phone Number"
          },
          {
            "LICENSEE (OR AGENT/DESIGNEE)": "TH TOBY GOTETE",
            "confidence": "39.5",
            "xmin": "229",
            "ymin": "1356",
            "xmax": "447",
            "ymax": "1393",
            "doc_width": "1224",
            "doc_height": "1584",
            "display_label": "Signature"
          },
          {
            "REMARKS: (Identify the item you are explaining; additional pages may be attached.)": "None"
          }
        ],
        "SE": [
          {
            "During the period covered by this Report, were you implementing": {
              "YES": "SELECTED",
              "confidence": "93.0",
              "xmin": "158",
              "ymin": "423",
              "xmax": "176",
              "ymax": "441",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Water Conservation Efforts",
              "NO": "NOT_SELECTED"
            }
          },
          {
            "During the period covered": {
              "YES": "NOT_SELECTED",
              "NO": "SELECTED",
              "confidence": "79.5",
              "xmin": "222",
              "ymin": "628",
              "xmax": "240",
              "ymax": "645",
              "doc_width": "1224",
              "doc_height": "1584",
              "display_label": "Reclaimed Water"
            }
          },
          {
            "conjunctive use of groundwater": {
              "YES": "NOT_SELECTED"
            }
          }
        ],
        "TE": [
          {
            "section 1011.5, please show the amount of groundwater used below": {
              "1": [
                [
                  "Future amendments to this claim will not be accepted.",
                  "2007",
                  "2008",
                  "2009"
                ],
                [
                  "Amount of groundwater used in lieu of surface water. Specify in acre-foet (AF) or million gallons (MG)",
                  "",
                  "",
                  ""
                ]
              ]
            }
          },
          {
            "your license as allowed by Water Code section 1010": {
              "1": [
                [
                  "Future amendments to this claim will not be accepted.",
                  "2007",
                  "2008",
                  "2009"
                ],
                [
                  "Amount of reclaimed, desalinated, or polluted water used. Specify in acre-feet (AF) or million gallons (MG)",
                  "",
                  "",
                  ""
                ]
              ]
            }
          },
          {
            "Water Code section 1011, please show the amount of water conserved below": {
              "1": [
                [
                  "Future amendments to this claim will not be accepted.",
                  "2007",
                  "2008",
                  "2009"
                ],
                [
                  "Amount of water conserved Specify in acre-feet (AF) or million gallons (MG)",
                  "",
                  "",
                  ""
                ]
              ]
            }
          }
        ]
      }
    }
  }
  profileDetails = [
    {
      "id": 26,
      "annotations": [
        {
          "id": 30,
          "completed_by": 1,
          "result": [
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 47.434209408846485,
                "y": 34.2973615821404,
                "width": 10.789478383312288,
                "height": 1.3342111073998255,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "POD Parcel No | down | POD Id"
                ]
              },
              "id": "TDoExRYV0z",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 19.487001816168114,
                "y": 18.6399628138624,
                "width": 7.716935623967781,
                "height": 1.7816032513196098,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Application No | right | Application Number"
                ]
              },
              "id": "HtCRRDHw3z",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 64.65311642966488,
                "y": 33.99904220453582,
                "width": 12.839490240309617,
                "height": 1.352626056878614,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "County Location | down | County"
                ]
              },
              "id": "SUeGMMEPJI",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 74.40196253559155,
                "y": 18.849230697374253,
                "width": 5.942945172041089,
                "height": 1.3995221406291962,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "License No | right | License Id"
                ]
              },
              "id": "_Tn7kcoWfp",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.089606827912592,
                "y": 33.99718528785635,
                "width": 22.183567730253014,
                "height": 1.3571123787919397,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Name(s) of sources of water | down | Source Of Water"
                ]
              },
              "id": "rZPxUNfRnz",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.072349289404797,
                "y": 14.194493310866541,
                "width": 25.32895839984894,
                "height": 1.4978819446284435,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Owner(s) of record | down | Primary Owner"
                ]
              },
              "id": "alI1VjARd1",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 26.695907075384053,
                "y": 38.53934017841775,
                "width": 17.003447636379306,
                "height": 1.3108471840604086,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Max Direct Diversion Rate | right | MAX Direct Diversion Rate"
                ]
              },
              "id": "Jo44P1TCob",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 40.81121826859605,
                "y": 44.49564549309589,
                "width": 4.240976183724831,
                "height": 2.5356711782965684,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Acres | down | Use Net Acreage"
                ]
              },
              "id": "CJzxgpUSxC",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.22800698309243,
                "y": 44.293959316442944,
                "width": 6.03029247569267,
                "height": 2.9301289996644444,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "(First 4 uses displayed below | down | Purpose Of Water Used"
                ]
              },
              "id": "0zohM9m8zb",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 70.81565049551301,
                "y": 44.442590881037546,
                "width": 23.085536370147985,
                "height": 2.35667261195459,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Collection to storage season | down | Storage Season"
                ]
              },
              "id": "343_FH6aF8",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 48.86314158245123,
                "y": 44.529255614895014,
                "width": 18.387449188177495,
                "height": 2.3598598632790724,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Direct Diversion Season | down | Diversion Season"
                ]
              },
              "id": "nNXcTRmOLM",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 33.908038019058786,
                "y": 39.975874474832196,
                "width": 7.018865012691469,
                "height": 1.0024125525167784,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "MAX Collection To Storage Amount | right | Max Collection to  Storage"
                ]
              },
              "id": "EzgEax5On-",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 11.973689425383139,
                "y": 22.640461768411658,
                "width": 31.31580311254051,
                "height": 5.3963707713141,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "PRIMARY CONTACT OR AGENT FOR MAIL & REPORTING | down | Primary Contact"
                ]
              },
              "id": "_sYSth27Ey",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 80.89472852125677,
                "y": 20.07159222854872,
                "width": 10.189478121996391,
                "height": 1.6143954399538178,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Contact Phone No | right | Contact Phone No"
                ]
              },
              "id": "zLYU4YxhvH",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 25.065778614174633,
                "y": 41.020002811265186,
                "width": 8.157898289821457,
                "height": 1.2826254152741645,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "WATER RIGHT FACE VALUE | right | Water Right Face Value"
                ]
              },
              "id": "17sesvhLqm",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.078950015963755,
                "y": 49.88710521398926,
                "width": 10.85526788564956,
                "height": 1.8063165761720834,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "The project has been abandoned | left | Request Revocation"
                ]
              },
              "id": "pqb08M7VyT",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 7.73852404330138,
                "y": 55.628932025671155,
                "width": 10.380011638487382,
                "height": 1.387955841946326,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "I have currently reviewed | left | Reviewed Water Right License"
                ]
              },
              "id": "6dGwvFs4cx",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 7.7615199185856065,
                "y": 57.07360415316995,
                "width": 10.457626837673239,
                "height": 1.0196186166731422,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "I am complying | left | Complying With Terms"
                ]
              },
              "id": "nk3i6WjVW7",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 7.7288398347178795,
                "y": 58.2015572478646,
                "width": 10.514816984441765,
                "height": 1.3318768180292966,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "I have changed the intake location | left | Intake Location Change"
                ]
              },
              "id": "eDWIeoUSEn",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.526806526806544,
                "y": 61.987820865530814,
                "width": 88.11188811188809,
                "height": 17.28490640719643,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "BENEFICIAL USE(S) OF WATER | down | Beneficial Uses of Water"
                ]
              },
              "id": "gWYRCyTdcv",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.526806526806535,
                "y": 82.48971305275657,
                "width": 90.44289044289036,
                "height": 6.23755967451608,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "5.a. Amount of water taken each month in |down | Face Value"
                ]
              },
              "id": "jidx_1C-t6",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 66.02869333857328,
                "y": 90.48324944372143,
                "width": 2.990431924421363,
                "height": 1.212919188545315,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "Check if amounts are same as 5.a | left | Check if amounts are same as 5.a."
                ]
              },
              "id": "kLmmJ78oyx",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 6.526806526806479,
                "y": 92.02190692579317,
                "width": 89.97668997668995,
                "height": 6.159911256024943,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "5.b. Amount actually used by direct diversion | down | Amount of Water Beneficially Used"
                ]
              },
              "id": "sbjeuU8vCD",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 41.68116210115513,
                "y": 81.21358471221488,
                "width": 29.578090307004057,
                "height": 1.0178342840939545,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "Amount of water taken each month under this license in | right | Face Value Unit"
                ]
              },
              "id": "5EDPw2oCEw",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            }
          ],
          "was_cancelled": false,
          "ground_truth": false,
          "created_at": "2022-04-04T05:44:44.437238Z",
          "updated_at": "2022-04-05T09:14:27.272889Z",
          "lead_time": 9789.118,
          "prediction": {},
          "result_count": 0,
          "task": 26,
          "parent_prediction": null,
          "parent_annotation": null
        }
      ],
      "file_upload": "cd53b82b-1.jpg",
      "drafts": [],
      "predictions": [],
      "data": {
        "image": "/data/upload/22/cd53b82b-1.jpg"
      },
      "meta": {},
      "created_at": "2022-04-04T05:25:02.662926Z",
      "updated_at": "2022-04-05T09:14:27.373114Z",
      "project": 22,
      "updated_by": 1
    },
    {
      "id": 27,
      "annotations": [
        {
          "id": 31,
          "completed_by": 1,
          "result": [
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 8.915793356746839,
                "y": 24.293857225350994,
                "width": 10.667109908964965,
                "height": 1.2418426461183107,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "During the period covered by this Report, were you implementing | left | Water Conservation Efforts"            ]
              },
              "id": "YA8Wv_eBQa",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 20.1400527846809,
                "y": 25.684720989003498,
                "width": 12.959742486414152,
                "height": 2.1856430571682237,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "During the period covered by | down | Conservation Efforts"
                ]
              },
              "id": "EVI51XZpu-",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 8.815793313194186,
                "y": 38.40262652798604,
                "width": 10.789478383312288,
                "height": 1.3342111073998342,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "During the period covered | left | Reclaimed Water"
                ]
              },
              "id": "bGWALl322T",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 55.86184465825079,
                "y": 88.71052139892446,
                "width": 12.013163126785509,
                "height": 2.93526443627965,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Date | right | Date"
                ]
              },
              "id": "qV4Qd6MFdI",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 76.27762124722716,
                "y": 89.69270603721802,
                "width": 16.398691352587946,
                "height": 2.359501027624798,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Phone No | right | Phone Number"
                ]
              },
              "id": "P1USrdqF9R",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 5.827505827505826,
                "y": 2.3636363636363638,
                "width": 90.9090909090909,
                "height": 10.545454545454545,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "PLEASE ANSWER ONLY THOSE QUESTIONS BELOW THAT ARE APPLICABLE TO YOUR WATER RIGHT PROJECT | up | Storage Projects"
                ]
              },
              "id": "mRHmKinIHd",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 13.51981351981352,
                "y": 88.36363636363636,
                "width": 27.505827505827504,
                "height": 3.6363636363636362,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Signature | right | Signature"
                ]
              },
              "id": "9Vs8fVVwTh",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 9.557109557109555,
                "y": 64,
                "width": 87.64568764568764,
                "height": 21.818181818181834,
                "rotation": 0,
                "rectanglelabels": [
                  "KV"
                ]
              },
              "meta": {
                "text": [
                  "Remarks: | down | Remarks"
                ]
              },
              "id": "Rs5syXalsA",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 9.324009324009324,
                "y": 57.09090909090909,
                "width": 88.11188811188813,
                "height": 3.8181818181818166,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "section 1011.5, please show the amount of groundwater used below | down | Claim Credit For Groundwater"
                ]
              },
              "id": "1b1qYNYSA6",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 9.38197790188774,
                "y": 45.27368349156479,
                "width": 87.82081930090945,
                "height": 4.1808619629806705,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "your license as allowed by Water Code section 1010 | down | Claim Credit For Substitution"
                ]
              },
              "id": "UIZaSkKMc3",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 9.090909090909093,
                "y": 31.636363636363637,
                "width": 88.11188811188813,
                "height": 4.909090909090909,
                "rotation": 0,
                "rectanglelabels": [
                  "TE"
                ]
              },
              "meta": {
                "text": [
                  "Water Code section 1011, please show the amount of water conserved below | down | Conservation Amount"
                ]
              },
              "id": "B4SffKoKy1",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            },
            {
              "original_width": 1279,
              "original_height": 1639,
              "image_rotation": 0,
              "value": {
                "x": 8.990699573060569,
                "y": 51.64286049611461,
                "width": 10.702727466681203,
                "height": 1.2107971072993513,
                "rotation": 0,
                "rectanglelabels": [
                  "SE"
                ]
              },
              "meta": {
                "text": [
                  "conjunctive use of groundwater | down | Conjuctive Use"
                ]
              },
              "id": "hzU1HA8hgQ",
              "from_name": "label",
              "to_name": "image",
              "type": "rectanglelabels",
              "origin": "manual"
            }
          ],
          "was_cancelled": false,
          "ground_truth": false,
          "created_at": "2022-04-04T06:26:52.304998Z",
          "updated_at": "2022-04-05T09:10:48.278464Z",
          "lead_time": 9570.115,
          "prediction": {},
          "result_count": 0,
          "task": 27,
          "parent_prediction": null,
          "parent_annotation": null
        }
      ],
      "file_upload": "4a9bc0a0-2.jpg",
      "drafts": [],
      "predictions": [],
      "data": {
        "image": "/data/upload/22/4a9bc0a0-2.jpg"
      },
      "meta": {},
      "created_at": "2022-04-04T05:25:02.678563Z",
      "updated_at": "2022-04-05T09:10:48.368321Z",
      "project": 22,
      "updated_by": 1
    }
  ]

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

  
  getProfileDetails2(){
   
    return this.profileDetails;
  }

  getDocumentDetails(): Observable<Document> {
    var url = 'https://km0gvq0iu0.execute-api.us-east-2.amazonaws.com/dev'+`/documents/get/` + '74e144b3-557f-44ce-8081-ac935c9be534'; //documentId;
    return this.http.get<Document>(url)
        .pipe();

  }
}
