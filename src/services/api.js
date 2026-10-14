import axios from "axios";

const LOCAL_BACKEND_URL = "http://localhost:3000"

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || LOCAL_BACKEND_URL;

const API = axios.create({
    baseURL : "http://localhost:3000/api"
})

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

export const signupUser = (data) => {
    return API.post("/auth/signup", data)
}

export const loginUser = (data) =>{
  return API.post("/auth/login", data)
}

export const getProfile = () => {
    return API.get("/auth/profile");
}