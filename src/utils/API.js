import axios from "axios";

export default {
    search: function (numResults) {
        return axios.get("https://randomuser.me/api/?results=" + numResults);
    }
}