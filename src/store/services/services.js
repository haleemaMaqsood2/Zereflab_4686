import { postRequest,getRequest,putRequest} from "./api";

import {GET_OTP_BY_EMAIL,
GET_OTP_BY_PHONE_NUMBER,
    VERIFY_OTP
} from "./endpoints";
export const getOtpByphoneNumber = (data) => postRequest(GET_OTP_BY_PHONE_NUMBER, data);

export const getOtpByEmail = (data) => postRequest(GET_OTP_BY_EMAIL,data);
export const verifyOtp = (data,data1,data2) => postRequest(VERIFY_OTP,data,data1,data2);
