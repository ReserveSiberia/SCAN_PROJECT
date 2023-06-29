import axios from "axios";
import { BASE_URL, LOGIN_URL, LOGIN_INFO_URL, GENERAL_DATA_URL } from "../utils/constants.js";

// async function logIn(userName, password) {
//   return await axios({
//     baseURL: BASE_URL,
//     url: LOGIN_URL,
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       login: userName,
//       password: password,
//     },
//   }).then((res) => {
//     localStorage.setItem("TOKEN", res.data.accessToken);
//     localStorage.setItem("EXPIRE", res.data.expire);
//     console.log("token is set");
//   });
// }

// async function accountInfo(token) {
//   try {
//     return await axios({
//       baseURL: BASE_URL,
//       url: LOGIN_INFO_URL,
//       method: "get",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((res) => {
//       return res.data.eventFiltersInfo;
//     });
//   } catch (error) {
//     console.log("Account error details", error);
//   }
// }

// export { logIn, accountInfo };

async function getGeneralData(searchParametrs) {
    return await axios({
      baseURL: BASE_URL,
      url: GENERAL_DATA_URL,
      method: "post",
      headers: {
       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0NmY0NzM3My1jYzgyLWVkMTEtODI3NS04NzJjODBhZjI3NTMiLCJuYmYiOjE2ODc5ODA4NzAsImV4cCI6MTY4ODA2NzI3MCwiaXNzIjoiU2NhbkdhdGV3YXkiLCJhdWQiOiJzZl9zdHVkZW50MiJ9.GImAuI6VA5Joeprh75GTWrP5FuvqN0oeXYGIq_ZGMqg",
       },
      data: {
       "issueDateInterval": {
         "startDate": `${searchParametrs.startDate}`,
         "endDate": `${searchParametrs.endDate}`
       },
       "searchContext": {
         "targetSearchEntitiesContext": {
           "targetSearchEntities": [
             {
               "type": "company",
               "sparkId": null,
               "entityId": null,
               "inn": `${searchParametrs.inn}`,
               "maxFullness": true,
               "inBusinessNews": null
             }
           ],
           "onlyMainRole": `${searchParametrs.mainRole}`,
           "tonality": `${searchParametrs.tonality}`,
           "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
           "riskFactors": {
             "and": [],
             "or": [],
             "not": []
           },
           "themes": {
             "and": [],
             "or": [],
             "not": []
           }
         },
         "themesFilter": {
           "and": [],
           "or": [],
           "not": []
         }
       },
       "searchArea": {
         "includedSources": [],
         "excludedSources": [],
         "includedSourceGroups": [],
         "excludedSourceGroups": []
       },
       "attributeFilters": {
         "excludeTechNews": `${searchParametrs.technicalNews}`,
         "excludeAnnouncements": `${searchParametrs.announcements}`,
         "excludeDigests": `${searchParametrs.newsDigests}`
       },
       "similarMode": "duplicates",
       "limit": `${searchParametrs.documentCount}`,
       "sortType": "sourceInfluence",
       "sortDirectionType": "desc",
       "intervalType": "month",
       "histogramTypes": [
         "totalDocuments",
         "riskFactors"
       ]
     },
    }).then((res) => {
      //localStorage.setItem("TOKEN", res.data.accessToken);
      //localStorage.setItem("EXPIRE", res.data.expire);
      console.log(res.data);
    });
  }

  export default getGeneralData;
