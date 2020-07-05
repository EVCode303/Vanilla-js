export default class DateManager{
    constructor(date){
        this.date = date;

    }

    getArticlesSpellDate(){
        return `Publicado el dia ${this.date.getDay() - 2} de ${months[this.date.getMonth()]} del año ${this.date.getFullYear()}`;
    }

    getTime(){
        let hour = this.date.getHours();
        let mins = this.date.getMinutes();
        let secs = this.date.getSeconds();
        let am_pm = false; // False = Am, True = pm

        if(hour > 12){
            hour = (hour - 12);
            am_pm = true;
        }
        if(hour < 10){
            hour = "0"+hour;
        }
        if(mins < 10){
            mins = "0"+mins;
        }
        if(secs < 10){
            secs = "0"+secs;
        }

        if(am_pm){
            return `${hour}:${mins}:${secs} PM`;
        }else{
            return `${hour}:${mins}:${secs} AM`;
        }
    }
}

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];