import Axios from "axios";
import Types from "../actions/types.js";
import * as Actions from "../actions/communication.js";

const api = "http://localhost:5000/api/";

export const axiosMiddleware = store => next => action => {

    switch(action.type) {

        case Types.AXIOS_POST:
            var {path, data, config, startCB, successCB, errorCB} = action;
            
            if(startCB) store.dispatch(startCB(path, data, action));
            /*
            Axios.post(api + path, {xd: "HEJSAN", DDDDDX: "HEEJDÅ"}, {'content-type': 'application/json'})
            .then(response => {
                console.log(response.data);
                if (!successCB) store.dispatch(Actions.axiosPostSuccess(path, response, action));
                else store.dispatch(successCB(path, response, action));
            }).catch(error => {
                console.error(error);
                if (!errorCB) store.dispatch(Actions.axiosPostError(path, error, action));
                else store.d    ispatch(errorCB(path, error, action));
            });
            */
           
            Axios({
               method: "post",
               url: api + path,
               headers: {},
               data: data
            }).then(response => {
                console.log(response.data);
                if (!successCB) store.dispatch(Actions.axiosPostSuccess(path, response, action));
                else store.dispatch(successCB(path, response, action));
            }).catch(error => {
                console.error(error);
                if (!errorCB) store.dispatch(Actions.axiosPostError(path, error, action));
                else store.dispatch(errorCB(path, error, action));
            })
            
            return;

        case Types.AXIOS_GET:
            
            var {path, data, config, startCB, successCB, errorCB} = action;

            if(startCB) store.dispatch(startCB(path, data, action));
            Axios.get(api + path, {data : data}, config)
            .then(response => {
                console.log(response.data);
                if (!successCB) store.dispatch(Actions.axiosGetSuccess(path, response, action));
                else store.dispatch(successCB(path, response, action));
            }).catch(error => {
                console.error(error);
                if (!errorCB) store.dispatch(Actions.axiosGetError(path, error, action));
                else store.dispatch(errorCB(path, error, action));
            });
            

           
/*
           Axios({
            method: "get",
            url: api + path,
            headers: {},
            data: data
         }).then(response => {
             console.log(response.data);
             if (!successCB) store.dispatch(Actions.axiosGetSuccess(path, response, action));
             else store.dispatch(successCB(path, response, action));
         }).catch(error => {
             console.error(error);
             if (!errorCB) store.dispatch(Actions.axiosGetError(path, error, action));
             else store.dispatch(errorCB(path, error, action));
         })
          */
        return;

        default:
            return next(action);
            
    }
}