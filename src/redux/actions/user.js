import { AUTH_URI } from "../api"
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from "../constants";

export const postLogin = async ({ user_name, password }) => {
    const settings = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({user_name, password})
    };

    try {
        const resp = await fetch(`${AUTH_URI.login}`, settings);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        const parsedResp = await resp.json();
        return {
            type: USER_LOGIN_SUCCESS,
            payload: parsedResp
        };
    } catch (err) {
        console.log('login failed', err.message) // or is it statusText?
        return {
            type: USER_LOGIN_FAIL,
            error: err,
        }
    }

}