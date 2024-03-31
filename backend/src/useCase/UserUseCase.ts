import User from '../domain_entities/user'
import IuserRepository from './interface/IuserRepository'



class UserUseCase{

    private iUserRepository : IuserRepository;
    
    constructor(iUserRepository :IuserRepository){
        this.iUserRepository = iUserRepository;
    }

    async userSignUp (userData:User){
        try {
            
            const email = userData.email
            const isUser = await this.iUserRepository.findByEmail(email)
            if(isUser){
                return {success : false,message:'This Email is already exists'}
            }else{
                // const hashedPassword = 
                const userSave = await this.iUserRepository.saveUser(userData)
                if(!userSave){
                    return  {success:false,message:'Something error'}
                  }else{
                    return  {success:true,message:'User successfully signed up'}
                  }
            }
        } catch (error) {
            console.log('user singup error in UserUseCase :',error);
            
        }
    }
}

export default UserUseCase