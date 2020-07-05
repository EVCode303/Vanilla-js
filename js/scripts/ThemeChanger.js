export default class ThemeChanger {
    constructor(theme) {
        this.theme = theme;
    }

    setTheme(color) {
        switch (color) {
            case "green":
                this.theme.setAttribute("href", "css/green.min.css");
                break;
            case "red":
                this.theme.setAttribute("href", "css/red.min.css");
                break;
            case "blue":
                this.theme.setAttribute("href", "css/blue.min.css");
                break;
            default:
            alert("Ningun color ha sido seleccionado");
                break;
        }
    }
}