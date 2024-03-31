interface User {
    id?: string,
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    isBlocked: boolean,
    gender:string,
    DOB: Date,
    Country:string,
    State:string,
    MobileNumber:string,
    City:string,
    favoritePlace:string[];
    Profile:string;
}
export default User