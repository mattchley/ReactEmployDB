import axios from "axios";

export default {
    search: function (numResults) {
        return axios.get("https://randomuser.me/api/?results=" + numResults);
    }
}
// i need image, name, phone, email, DOB

// // json format results
// "gender": "male",
//   "name": {
//   "title": "Mr",
//     "first": "Ken",
//       "last": "Cooper"
// },
// "location": {
//   "street": {
//     "number": 2430,
//       "name": "Walnut Hill Ln"
//   },
//   "city": "Lakewood",
//     "state": "Wyoming",
//       "country": "United States",
//         "postcode": 34760,
//           "coordinates": {
//     "latitude": "81.8751",
//       "longitude": "-54.8333"
//   },
//   "timezone": {
//     "offset": "-7:00",
//       "description": "Mountain Time (US & Canada)"
//   }
// },
// "email": "ken.cooper@example.com",
//   "login": {
//   "uuid": "9223f7f4-7479-47d3-b152-cbfcb8c9f9d8",
//     "username": "greendog830",
//       "password": "arctic",
//         "salt": "CsELDYpm",
//           "md5": "999c4580d232f72c9b4ad04b7852f299",
//             "sha1": "d33536ec248484981aedd6255144c2e39c7e021a",
//               "sha256": "69a26a4db5fd1da29faab4e4a5005429359c6c093cebc7ef6c9d714d612d53d6"
// },
// "dob": {
//   "date": "1983-02-09T01:38:35.216Z",
//     "age": 37
// },
// "registered": {
//   "date": "2019-06-15T01:26:29.603Z",
//     "age": 1
// },
// "phone": "(757)-695-8554",
//   "cell": "(543)-038-8608",
//     "id": {
//   "name": "SSN",
//     "value": "765-83-2368"
// },
// "picture": {
//   "large": "https://randomuser.me/api/portraits/men/81.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
// },
// "nat": "US"