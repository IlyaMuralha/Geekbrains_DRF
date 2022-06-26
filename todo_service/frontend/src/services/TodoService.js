

class TodoService {
    _apiBase = 'http://0.0.0.0:8000/api';


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllElements = async (elemApi) => {
        const res = await this.getResource(`${this._apiBase}/${elemApi}/`);
        return res.results.map((elem) => this._transformElement(elem, elemApi))

    }

    // getElement = async (elemApi, id) => {
    //     const res = await this.getResource(`${this._apiBase}/${elemApi}/${id}`);
    //     return this._transformCharacter(res);
    // }

    _transformElement = (elem, elemApi) => {
        return {
            url: elem.url,
            id: `${elem.url.slice(`${this._apiBase}/${elemApi}/`.length, elem.url.length - 1)}`,
            username: elem.username ? `${elem.username}` : null,
            first_name: elem.firstName ? `${elem.firstName}` : null,
            last_name: elem.lastName ? `${elem.lastName}` : null,
            age: elem.age ? `${elem.age}` : null,
            email: elem.email ? `${elem.email}` : null,
            // project
            users: elem.users ? `${elem.users}` : null,
            name: elem.name ? `${elem.name}` : null,
            link: elem.link ? `${elem.link}` : null,
            // todoes
            // user: elem.user.firstName ? `${elem.user.firstName}` : null,
            // projectName: elem.project.name ? `${elem.project.name}` : null,
            title: elem.title ? `${elem.title}` : null,
            text: elem.text ? `${elem.text}` : null,
        }
    }
}

export default TodoService;
