import { isValidUsername  } from "6pp";


export const userNameValidator = ( username ) => {

    if(!isValidUsername(username)){
        return {
            isValid : false,
            errorMessage : " User Name is required "
        }
    }
    if(username.length < 3){
        return {
            isValid : false,
            errorMessage : " UserName must be at least 4 characters " 
        }
    }
    if(username.length > 10){
        return {
            isValid : false,
            errorMessage : " User name maximum length is 10 " 
        }
    }
}

