import styles from "./Registration.module.css";
import { useContext } from "react";
import { AuthorContext } from "../../../contexts/AuthorContext";
import { useMatrix } from "../../../hooks/useMatrix";

export const Registration = () => {

    const {onRegister} = useContext(AuthorContext);

    const {values, onInputHandler, err, hasErrorF, hasErrorL, hasErrorP} = useMatrix({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        profession: '',
        picture: ''
    });

    const onSubmitReg = (e) => {
        e.preventDefault()
        const obj = Object.fromEntries(new FormData(e.target));
        onRegister(obj);
    };


    return (
        <>
            <header className={styles.registration_header}>
                <div className={styles.box}>
                    <form className={styles.form} onSubmit={onSubmitReg}>
                        <h2>Sign Up</h2>
                        <div className={styles.inputbox}>
                            <input type="text" name="firstname" required="required" value={values.firstname} onChange={onInputHandler}/>
                            <label htmlFor="firstname">First Name</label>
                            <i></i>
                        </div>
                        {hasErrorF && (<p className={styles.reg_errors}>{err}</p>)}
                        <div className={styles.inputbox}>
                            <input type="text" name="lastname" required="required" value={values.lastname} onChange={onInputHandler}/>
                            <label htmlFor="lastname">Last Name</label>
                            <i></i>
                        </div>
                        {hasErrorL && (<p className={styles.reg_errors}>{err}</p>)}
                        <div className={styles.inputbox}>
                            <input type="email" name="email" required="required" value={values.email} onChange={onInputHandler}/>
                            <label htmlFor="email">Email</label>
                            <i></i>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="password" name="password" required="required" value={values.password} onChange={onInputHandler}/>
                            <label htmlFor="password">Password</label>
                            <i></i>
                        </div>
                        {hasErrorP && (<p className={styles.reg_errors}>{err}</p>)}
                        <div className={styles.inputbox}>
                            <input type="text" name="profession" required="required" value={values.profession} onChange={onInputHandler}/>
                            <label htmlFor="profession">Profession</label>
                            <i></i>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="url" name="picture" required="required" value={values.picture} onChange={onInputHandler}/>
                            <label htmlFor="picture">Picture</label>
                            <i></i>
                        </div>
                        <button>Signup</button>
                    </form>
                </div>
            </header>
        </>
    );
}