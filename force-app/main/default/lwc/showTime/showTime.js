import { LightningElement } from 'lwc';

export default class ShowTime extends LightningElement {
  
    hours = '';
    minutes = '';
    seconds = '';
    
    getTimeString() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        this.hours = hours
        this.minutes = minutes;
        this.seconds = seconds;
    }
    connectedCallback() {
        
        this.getTimeString();
        setInterval(() => {
            this.getTimeString();
        }, 1000);
    }
}