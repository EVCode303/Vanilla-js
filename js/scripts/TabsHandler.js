export default class TabsHandler {
    constructor(btns, tabs) {
        this.btns = btns;
        this.tabs = tabs;
        this.setEvents();
    }

    setEvents(){
        this.btns.forEach((x, i) => {
            x.addEventListener("click", () => {
                this.startEvent(i);
            });
        })
    }

    startEvent(index) {
        this.btns.forEach(x => {
            x.className = x.className.replace("btn-active", "");
        }); 
        this.tabs.forEach(x => {
            x.className = x.className.replace(" active", "");
        });
        this.btns[index].className = "btn-active";
        this.tabs[index].className += " active";
    }
}