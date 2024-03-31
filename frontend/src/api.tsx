
import axios,{AxiosInstance} from "axios"
import {UserFormData,PropertyFormData} from './interfaces'

const axiosInstance : AxiosInstance =  axios.create({
    baseURL:'http://localhost:3000/api'
})

export const SignupApi = (FormData : UserFormData | PropertyFormData,route:string):Promise<any>=>{
    
   return  axiosInstance.post(`/user/${route}`,FormData,{
            headers:{
                'Content-Type' :'multipart/form-data'
            }
        })
}
