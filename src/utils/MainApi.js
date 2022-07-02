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
        return `Bearer ${localStorage.getItem('jwt')}`;
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

    tokenCheck() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getToken()
            }
        })
            .then(this._handleResponse)
    }

    createMovie(card) {
        return fetch(`${this.url}/movies`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getToken()
            },
            body: JSON.stringify({
                country: card.country || "No data",
                director: card.director || "No data",
                duration: card.duration || 0,
                year: card.year || 0,
                description: card.description || "No data",
                image: `https://api.nomoreparties.co/${card.image.url}`,
                trailerLink: card.trailerLink,
                nameRU: card.nameRU,
                nameEN: card.nameEN || "No data",
                thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
                movieId: card.id
              })
     })
     .then(this._handleResponse)
    }

    getSavedMovies() {
        return fetch(`${this.url}/movies`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getToken()
            },
     })
     .then(this._handleResponse)
    }

    removeMovie(id) {
        return fetch(`${this.url}/movies/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getToken()
            },
     })
     .then(this._handleResponse)
    }
    
    getUserProfile() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this.getToken(),
                'Content-Type': 'application/json'
            },
        })
        .then(this._handleResponse)
      }

    updateProfile(data) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.getToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._handleResponse)
    }

}

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';
const mainApi = new MainApi({
    url: BASE_URL,
});

export default mainApi;