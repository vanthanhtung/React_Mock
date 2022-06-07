import {AllowedHTTPRequest, stopLoading} from "../commons/commons";
import {handleError} from "../commons/errors";
import {message} from 'antd';
import intl from 'react-intl-universal';
import axios from 'axios';

export default function makeRequest(request) {

    return new Promise((resolve, reject) => {
        const {url, method, data, headers, responseType} = request;
        if (!url || url === ``) {
            reject(`Invalid Request URL!`);
            return;
        }

        // axios default configs
        axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

        if (AllowedHTTPRequest.includes(method)) {
            const requestObj = {
                url,
                method,
                headers,
                data,
                responseType,
            };
            axios
                .request(requestObj)
                .then((response) => {
                    response?.status === 200 || response?.status === 201 || response?.status === 204 ? resolve(response) : reject(response);
                })
                .catch((error) => {
                    const errorObj =  error?.response?.data;
                    errorObj ? handleError(errorObj.message) : handleError(error?.response?.data?.rootCause ?? 'Something wrong, please try again !');
                    reject(error);
                })
                .finally(() => {
                    stopLoading();
                });
        } else {
            reject();
            stopLoading();
            message.error(intl.get('error.httpRequestNotAllowed'));
        }
    });
}