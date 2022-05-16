export class Clock {
    target = document;
    
    constructor(props={}) {
        if (props.target) this.target = props.target;
    }

    start = () => {

        const tick = () => {
            const date = new Date();
            let hours = date.getUTCHours();
            let minutes = date.getUTCMinutes();
            let seconds = date.getUTCSeconds();
            
            if (seconds < 10) seconds = String("0" + seconds);      
            if (minutes < 10) minutes = String("0" + minutes);
            if (hours < 10) hours = String("0" + hours);
            
            this.target.innerText = `${hours}:${minutes}:${seconds}`;
        };

        setInterval(tick, 1000);
    };
    

};
