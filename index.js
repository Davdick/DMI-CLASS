class StartApp{
    constructor(date, time){
        this.date = date;
        this.time = time
    }
    getDate(){
        return this.date;
    }
    getTime(){
        return this.time;
    }
}

const init = new StartApp(2024, 5);

console.log(init.getDate());
console.log(init.getTime());