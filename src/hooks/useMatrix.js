import { useState } from "react"
import RegisterValidation from "../validation/RegisterValidation";


export const useMatrix = (data) => {

    const [values, setValues] = useState(data);
    const [err, setErr] = useState('');
    const [hasErrorf_name, setHasErrorf_name] = useState(false);
    const [hasErrorl_name, setHasErrorl_name] = useState(false);
    const [haspasserror, setHaspasserror] = useState(false);



    const onInputHandler = (e) => {
        const { err, f_name, l_name, pass } = RegisterValidation(e);


        if (f_name || l_name) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));

            if (f_name) {
                setHasErrorf_name(true);
                setHasErrorl_name(false);
            } else {
                setHasErrorf_name(false);
                setHasErrorl_name(true);
            }

        } else if (err === '') {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));

            setHasErrorf_name(false);
            setHasErrorl_name(false);
        }

        if (!l_name) {
            setErr(err);
        } else {
            setErr(err);
        }

        if (pass) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setHaspasserror(true);
            setHasErrorf_name(false);
            setHasErrorl_name(false);
        }
    };

return {
    values,
    onInputHandler,
    err,
    hasErrorF: hasErrorf_name,
    hasErrorL: hasErrorl_name,
    hasErrorP: haspasserror
}
} 