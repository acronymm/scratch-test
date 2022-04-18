import { LightningElement } from "lwc";

export default class ShowTime extends LightningElement {
    time = new Date();
    intervalId;

    connectedCallback() {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.intervalId = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    renderedCallback() {}

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }
}
