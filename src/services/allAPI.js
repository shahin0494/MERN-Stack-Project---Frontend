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
// google login api
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody)
}

// home page book api - called by home in useeffect
export const getHomeBooksApi = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/home-books`)
}

// all career api 

// -----------authorised user api - user -------------------------------

// view all book

// view single book

// upload/add book - called by profile component
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

// profile update

// view selled book

// purchased books

// approved books



// -------------authorised user api - admin -------------------

// add career

// update admin

// list books

// list users

// approve boooks
