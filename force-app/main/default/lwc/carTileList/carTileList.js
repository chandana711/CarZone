import { LightningElement,wire, track } from 'lwc';
import getAvailableCars from '@salesforce/apex/CarController.getAvailableCars';


export default class CarTileList extends LightningElement {
    
    cars;
    error;

    @wire(getAvailableCars) 
    carsHandler({data,error}){
        if(data){
           console.log('data',data);
          // this.cars = data.map(car => {}
            this.cars = data;

           
        }
        else if(error){
            console.error('error',error);
            this.error = error;
        }
}

}