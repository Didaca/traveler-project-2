import { createContext } from "react";
import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { useLocalStorage } from '../hooks/useLocalStorage';
import { LoginU, RegU, LogOut } from "../services/UserService";



export const AuthorContext = createContext();


export const AuthorProvider = ({
    children
}) => {

    const navigate = useNavigate();

    const [author, setAuthor] = useLocalStorage('user', {});
    const [show, setShow] = useState(false);
    
    
    
    const onShowHandler = () => {
        setShow(!show);
    }

    const changeAuthor = () => {
        setAuthor({});
    }

    const onLogin = async (obj) => {
        try {

            const result = await LoginU(obj);

            if (result === 403) {
                alert('You don`t have an account! Go to SignUp!');
                return <Navigate to="/login" />;
            }
            setAuthor(result);
            navigate('/destinations');

        } catch (error) {

            alert(error);

        }
    }

    const onRegister = async (obj) => {
        try {

            const result = await RegU(obj);
            setAuthor(result);
            navigate('/destinations');

        } catch (error) {

            alert(error);

        }
    }

    const onLogout = (token) => {
        LogOut(token);
        changeAuthor();

        navigate('/');
    }

    const onEdit = async (obj) => {
        try {

            const newObj = Object.assign({}, author, obj)

            setAuthor(newObj);
            navigate(`/profile/${newObj._id}`);
            alert("Your profile has edit!");

        } catch (error) {

            alert(error);

        }
    }


    const allAuthorValuesProvider = {
        onLogin,
        onRegister,
        onLogout,
        onEdit,
        userId: author._id,
        userEmail: author.email,
        token: author.accessToken,
        firstname: author.firstname,
        lastname: author.lastname,
        password: author.password,
        profession: author.profession,
        picture: author.picture,
        isLogged: !!author.accessToken,
        onShowHandler,
        show
    }

    return (
        <>
            <AuthorContext.Provider value={allAuthorValuesProvider}>
                {children}
            </AuthorContext.Provider>
        </>
    );
}