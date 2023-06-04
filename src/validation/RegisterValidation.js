const errorsV = {
    firstnameL: "First name must be at least 2 letters!",
    firstnameM: "First name must contain only letters!",
    lastnameL: "Last name must be at least 2 letters!",
    lastnameM: "Last name must contain only letters!",
    passwordV: "Password must be at least six characters long!"
}




function RegisterValidation(element) {

    let err = '';
    let f_name = false;
    let l_name = false;
    let pass = false;

    const elementName = element.target.name;
    const elementV = element.target.value;

    const lastEl = elementV[elementV.length - 1];

    if (elementName === "firstname") {

        if (elementV.length < 2) {

            err = errorsV.firstnameL;
            f_name = true;

        } else {
            f_name = true;
        };

        if (/[^a-zA-Z]/.test(lastEl)) {

            err = errorsV.firstnameM;
            f_name = false;

        }
    };

    if (elementName === "lastname") {

        if (elementV.length < 2) {
            
            err = errorsV.lastnameL;
            l_name = true;
            
        } else {
            l_name = true;
        };

        if (/[^a-zA-Z]/.test(lastEl)) {
            err = errorsV.lastnameM;
            l_name = false;
        }
    };

    if (elementName === "password") {
        if (elementV.length < 6) {
            err = errorsV.passwordV;
            pass = true;
        }
    }

    return {
        err,
        f_name,
        l_name,
        pass
    }
};

export default RegisterValidation;