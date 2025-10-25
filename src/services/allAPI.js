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
export const getHomeBooksApi = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

// all career api 

// -----------authorised user api - user -------------------------------

// upload/add book - called by profile component
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

// view all book - called by allbooks when page is loaded
export const getAllBooksAPI = async (search,reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${search}`, {}, reqHeader)
}

// view single book - called by view component
export const getSingleBookAPI = async (bookId, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/books/${bookId}/view`, {}, reqHeader)
}

//  all user upload books - called by profile component
export const getAllUserUploadBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

//  all user purchased books - called by profile component
export const getAllUserPurchasedBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-bought-books`, {}, reqHeader)
}

//  remove user upload books - called by profile component
export const removeUserUploadBooksAPI = async (bookId,reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-books/${bookId}/remove`, {}, reqHeader)
}

// user profile update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}

// profile update


// -------------authorised user api - admin -------------------

// add career

// update admin

// list books

// list users

// approve boooks
