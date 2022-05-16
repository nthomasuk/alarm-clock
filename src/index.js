import { Clock } from "./services/Clock.class";
import { Alarm } from "./services/Alarm.class";
import "./style.css";
import "./alarm.css";

const clock = new Clock({
    target: document.getElementsByClassName("clock")[0]
});

const alarmList = [
    
    new Alarm({
        target: document.getElementsByClassName("alarms")[0]
    })
    
];

clock.start();
