export default class Login {
    constructor(name = "No especificado", email = "No especificado", password = "No especificado") {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    signIn() {
        let json = {
            name: this.name,
            email: this.email,
            password: this.password
        }
        localStorage.setItem(json.name, JSON.stringify(json));
        window.location.reload();
    }

    addInView(container) {
        let json;
        let existing = false;
        for (var i in localStorage) {
            if (typeof localStorage[i] === "string") {
                json = JSON.parse(localStorage[i]);
                existing = true;
            }
        }
        if (existing) {
            container.innerHTML = `
            <h4 class="field">${json.name}</h4>
            <h4 class="field">${json.email}</h4>
            <a href="" class="logout">Cerrar Sesión</a>
            `;
        }
    }
}