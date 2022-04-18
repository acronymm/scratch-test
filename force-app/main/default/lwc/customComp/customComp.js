import { LightningElement } from 'lwc';

export default class CustomComp extends LightningElement {
    connectedCallback() {
        setTimeout(()=>{
            console.log('hi');
        }, 1000);
    }
}