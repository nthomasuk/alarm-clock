import { Clock } from "./services/Clock.class";
import "./style.css";

const clock = new Clock({
    target: document.getElementsByClassName("clock")[0]
});

clock.start();


