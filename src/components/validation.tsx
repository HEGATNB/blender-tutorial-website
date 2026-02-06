
function validation(email: string, password: string) {
    let emailBool:boolean;
    let passwordBool:boolean;
    emailBool = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    password.length > 5 ? passwordBool=true : passwordBool=false;
    return ({emailBool,passwordBool})
    }

export default validation