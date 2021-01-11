import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

export default{ 
    getAllEmployees:function(){    
        return axios.get(BASEURL + "?results=50", {
            headers: { 
                  'Access-Control-Allow-Origin' : '*'  // to fix cors error
                },
        });
    }
};