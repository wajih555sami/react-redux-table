export default function formatToResponseShape(data){
    // data => response 

    return  {
        "name": {
          "common": data.name,
          "official": "None",
          "nativeName": {
            "ara": { "official": "None", "common": "None" }
          }
        },
        "tld": [".jo", "None"],
        "cca2": "None",
        "ccn3": "None",
        "cca3": "None",
        "cioc": "None",
        "independent": false,
        "status": "None",
        "unMember": false,
        "currencies": { "None": { "name": "None", "symbol": "None" } },
        "idd": { "root": "None", "suffixes": ["None"] },
        "capital": [data.capital],
        "altSpellings": [
          "None",
          "None",
          "None"
        ],
        "region": data.region,
        "subregion": "None",
        "languages": { "ara": "Arabic" },
        "translations": {},
        "latlng": [data.x, data.y],
        "landlocked": false,
        "borders": ["None"],
        "area": 0,
        "demonyms": {
          "eng": { "f": "None", "m": "None" },
          "fra": { "f": "None", "m": "None" }
        },
        "flag": "None",
        "maps": {
          "googleMaps": "https://goo.gl/maps/ko1dzSDKg8Gsi9A98",
          "openStreetMaps": "https://www.openstreetmap.org/relation/184818"
        },
        "population": data.population,
        "gini": { "None": 0 },
        "fifa": "None",
        "car": { "None": ["None"], "None": "None" },
        "timezones": ["None"],
        "continents": ["None"],
        "flags": {
          "png": "None",
          "svg": "None",
          "alt": "None"
        },
        "coatOfArms": {
          "png": "None",
          "svg": "None"
        },
        "startOfWeek": "None",
        "capitalInfo": { "latlng": [data.x, data.y] },
        "postalCode": { "format": "None", "regex": "None" }
      }
}