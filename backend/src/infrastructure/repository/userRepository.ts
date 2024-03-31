import User from "../../domain_entities/user";
import IuserRepository from "../../useCase/interface/IuserRepository";
import { UserModel } from "../database/userModel";

class UserRepository implements IuserRepository{
     async findByEmail(email: string) {
        try {
            const userExist = await UserModel.findOne({email:email})
            console.log('userExist :',userExist);
            
            if(userExist){
                return userExist
            }else{
                return null
            }
        } catch (error) {
            console.log('find by email error :' ,error);
            return null
        }
    }
    async saveUser(user: User) {
      try {
        const signupUser = await UserModel.create(user)
        return signupUser
      } catch (error) {
        console.log('save user error in userRepository:',error);
        return null
        
      }
    }
}

export default UserRepository 