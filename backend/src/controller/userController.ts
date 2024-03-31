import { Request,Response } from "express";
import { UserModel } from "../infrastructure/database/userModel";
import  PropertyModel  from "../infrastructure/database/propertyModel";
import UserUseCase from "../useCase/UserUseCase";



class UserController {
    
    private userCase : UserUseCase;
    constructor (userCase : UserUseCase){
        this.userCase = userCase;    
    }

    async signUpUser(req :Request, res:Response){
        try {
            
            let userData = req.body
            const userProfile = req.file
            const Profile = userProfile?.filename
            userData = {...userData,Profile}
            console.log('****===***===**==**=**=');
            
            const user = await this.userCase.userSignUp(userData)
            res.json(user)

            // const user = await UserModel.findOne({email:userData.email})
            // console.log('user:',user);
            
            // if(user){
            //     return res.send({success:false,message:'This user is already exists..!'})
            // }else{
            //     const signupUser = await UserModel.insertMany(userData)
            //     if(!signupUser){
            //       return  res.send({success:false,message:'Something error'})
            //     }else{
            //       return  res.send({success:true,message:'User successfully signed up'})
            //     }
            // }            
        } catch (error) {
            console.log('signup error : ',error);
            
        }
    }

    async signUpProperty(req :Request, res:Response){
        try {
            
            let propertyData = req.body
            let {license,PropertyProfile} = req.files as {
                license: Express.Multer.File[];
                PropertyProfile: Express.Multer.File[];
            };
            propertyData = {...propertyData,
                license:license[0].filename,
                PropertyProfile:PropertyProfile[0].filename
            }
            console.log('propertyFile :',license[0].filename);
            console.log('Property Data : ',propertyData);

            const property = await PropertyModel.findOne({email:propertyData.email})
            if(property){
                return res.send({success:false,message:'This property is already exists..!'})
            }else{
                const signupProperty = await PropertyModel.insertMany(propertyData)
                if(!signupProperty){
                  return  res.send({success:false,message:'Something error'})
                }else{
                  return  res.send({success:true,message:'Property successfully signed up'})
                }
            }
        } catch (error) {
            console.log('signup error : ',error);
            
        }
    }
}

export default UserController