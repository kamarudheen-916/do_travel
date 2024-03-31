export interface UserFormData {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    isBlocked:boolean,
    gender:string;
    DOB:string;
    Country:string;
    State:string;
    MobileNumber:string;
    City:string;
    favoritePlace:string[] ;
    Profile: string; 
    
}

export interface PropertyFormData {
   
    PropertyName: string;
    email: string;
    password: string;
    isBlocked:boolean;
    startedDate:string;
    Address:string;
    TypeOfStay:string[];
    Speciality:string[];
    MobileNumber:string;
    license: string; 
    PropertyProfile: string; 
  
}
