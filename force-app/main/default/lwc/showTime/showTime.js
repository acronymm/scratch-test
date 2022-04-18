import { LightningElement } from 'lwc';

export default class ShowTime extends LightningElement {
  
    time = new Date();
    intervalId;
    
    connectedCallback() {
        this.intervalId = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }
}