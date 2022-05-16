export class Alarm {
    target = null;
    
    constructor(props={}) {
        if (props.target) this.target = props.target;
        this.render();
    }

    render = () => {
        const alarm = document.createElement("div");
        const title = document.createElement("span");
        const clock = document.createElement("span");
        
        alarm.classList.add("alarm");

        title.innerText = "Alarm";
        title.classList.add("title");
        alarm.append(title);

        clock.innerText = "00:00:00";
        clock.classList.add("clock-time");
        alarm.append(clock);

        this.target.append(alarm);
    }
};