import commonAPI from "./commonAPI"
import SERVERURL from './serverURL'

// guest user api

// register api - called by auth component when register btn clicked , content type :"application/JSON"
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}
// login api
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

// home page book api
// all career api

// authorised user api - user

// view all book
// view single book
// upload book
// profile update
// view selled book
// purchased books
// approved books



// authorised user api - admin

// add career
// update admin
// list books
// list users
// approve boooks
