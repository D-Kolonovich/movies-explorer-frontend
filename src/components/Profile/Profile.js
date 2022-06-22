import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <div className="profile__wrapper">
                <h2 className="profile__header">Привет, Дима!</h2>
                <div className="profile__info">
                    <div className="profile__info-wrapper">
                        <label className="profile__input-label" htmlFor="name">Имя</label>
                        <input id="name" type='text' className="profile__input profile__input_type_name" value='Dima' readOnly required minLength='2' maxLength='30'></input>
                    </div>
                    <div className="profile__info-wrapper">
                        <label className="profile__input-label" htmlFor="email">E-mail</label>
                        <input id='email' className="profile__input profile__input_type_email" value='Mamusy921' readOnly required></input>
                    </div>
                </div>
                <div className="profile__buttons-wrapper">
                    <button className="profile__button profile__button_type_edit">Редактировать</button>
                    <button className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;