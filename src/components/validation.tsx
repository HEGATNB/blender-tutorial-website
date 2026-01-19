
function validation(email: string, password: string) {
    let emailBool:boolean;
    let passwordBool:boolean;
    email.length > 10 ? emailBool=true : emailBool=false;
    password.length > 5 ? passwordBool=true : passwordBool=false;
    return ({emailBool,passwordBool})
    }

export default validation