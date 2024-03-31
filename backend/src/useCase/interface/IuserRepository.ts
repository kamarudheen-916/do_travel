import User from "../../domain_entities/user";

interface IuserRepository {
    findByEmail(email:string):Promise<User|null>
    saveUser(user:User):Promise<User|null>
}

export default IuserRepository