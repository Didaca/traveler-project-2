import styles from './EditProfile.module.css';
import { BsMailbox2 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useMatrix } from '../../../hooks/useMatrix';
import { useContext } from 'react';
import { AuthorContext } from '../../../contexts/AuthorContext';



export const EditProfile = () => {

    const {
        firstname,
        lastname,
        profession,
        userEmail,
        picture,
        onEdit
    } = useContext(AuthorContext)

    const { values, onInputHandler } = useMatrix({
        firstname: firstname,
        lastname: lastname,
        profession: profession,
        email: userEmail,
        picture: picture
    })

    const onSubmitEdit = (e) => {
        e.preventDefault();

        const obj = Object.fromEntries(new FormData(e.target));
        onEdit(obj);
    }

    return (
        <section className={styles.section_edit_prof}>
            <article className={styles.edit_prof_article}>
                <div className={styles.edit_prof_article_container}>
                    <div className={styles.prof_image}>
                        <img src={picture} alt="Profile" />
                    </div>
                    <div className={styles.prof_info}>
                        <form className={styles.edit_prof_form} onSubmit={onSubmitEdit}>
                            <div className={styles.form_head}>
                                <input type="text" name="firstname" disabled value={values.firstname} onChange={onInputHandler} />
                                <input type="text" name="lastname" disabled value={values.lastname} onChange={onInputHandler} />
                                <input type="text" name="profession" value={values.profession} onChange={onInputHandler} />
                            </div>
                            <div className={styles.form_main}>
                                <BsMailbox2 /><input type="email" name="email" value={values.email} onChange={onInputHandler} />
                                <CgProfile /><input type="url" name="picture" value={values.picture} onChange={onInputHandler} />
                            </div>
                            <button type="submit" className={styles.edit_button}>Edit</button>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    );
}