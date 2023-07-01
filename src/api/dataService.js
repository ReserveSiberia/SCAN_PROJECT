import axios from "axios";
import { BASE_URL, GENERAL_DATA_URL, DATA_URL, DATA_DETAILS_URL } from "../utils/constants.js";

async function getGeneralData(searchParametrs) {
  return await axios({
    baseURL: BASE_URL,
    url: GENERAL_DATA_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
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
    // console.log(res.data);
    return res
  });
}

async function getData(searchParametrs) {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_URL,
    method: "post",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhOTBlNmE4Yi1jZTgyLWVkMTEtODI3NS04NzJjODBhZjI3NTMiLCJuYmYiOjE2ODgwOTczOTksImV4cCI6MTY4ODE4Mzc5OSwiaXNzIjoiU2NhbkdhdGV3YXkiLCJhdWQiOiJzZl9zdHVkZW50NyJ9.Tb0pSDKoSqkn1R2Zvdg3Ykibzj1njYhOTeBQq79X8ZY",
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

async function getDetailData() {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_DETAILS_URL,
    method: "post",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhOTBlNmE4Yi1jZTgyLWVkMTEtODI3NS04NzJjODBhZjI3NTMiLCJuYmYiOjE2ODgwOTczOTksImV4cCI6MTY4ODE4Mzc5OSwiaXNzIjoiU2NhbkdhdGV3YXkiLCJhdWQiOiJzZl9zdHVkZW50NyJ9.Tb0pSDKoSqkn1R2Zvdg3Ykibzj1njYhOTeBQq79X8ZY",
    },
    data: {
      "ids": ["1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="]
    },
  }).then((res) => {
    //localStorage.setItem("TOKEN", res.data.accessToken);
    //localStorage.setItem("EXPIRE", res.data.expire);
    console.log(res.data);
  });
}

export { getGeneralData, getData, getDetailData }
