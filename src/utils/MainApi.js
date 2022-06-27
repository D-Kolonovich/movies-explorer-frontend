class MainApi {
    constructor({ url }) {
        this.url = url;
    }
    // проверка ответа от сервера
    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getToken = () => {
        return `Bearer ${localStorage.getItem('token')}`;
    }

    register({ name, password, email }) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password, email })
        })
            .then(this._handleResponse);
    }

    login({ password, email }) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password, email })
        })
            .then(this._handleResponse);
    }

}

//const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
const mainApi = new MainApi({
    url: 'https://api.movies.kolonovich.nomoreparties.sbs/',
});

export default mainApi;