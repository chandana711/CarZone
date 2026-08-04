import { LightningElement } from 'lwc';
import {getFieldValue} from 'lightning/uiRecordApi';


//car__c schema
//import CAR_OBJECT from '@salesforce/schema/Car__c';
import NAME_FIELD from '@salesforce/schema/Car__c.Name';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_URL__c';
import FULE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import SEAT_FIELD from '@salesforce/schema/Car__c.seats__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';



export default class CarCard extends LightningElement {

   // carObject = CAR_OBJECT;
   // nameField = NAME_FIELD;
    categoryField = CATEGORY_FIELD;
    makeField = MAKE_FIELD;
    msrpField = MSRP_FIELD;
   // pictureUrlField = PICTURE_URL_FIELD;
    fuelTypeField = FULE_FIELD;
    seatsField = SEAT_FIELD;
    controlField = CONTROL_FIELD;
    
    //Id of the car record to display
    recordId = 'a00dL00003W4HslQAF';

    //Car fields displayed with specific format
    carName
    carPictureUrl

    handleRecordLoad(event){
        console.log('Car Record Loaded');
        const {records} = event.detail;
        const recordData = records[this.recordId];
        console.log('Record Data: ', recordData);
        //this.carName = getFieldValue(recordData, NAME_FIELD);
       // this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD);
       this.carName = recordData.fields.Name.value;
         this.carPictureUrl = recordData.fields.Picture_URL__c.value;
        console.log('Car Name: ', this.carName);
        console.log('Car Picture URL: ', this.carPictureUrl);
    }

    handleSuccess(){
        console.log('Car Record fetched Successfully');
    }

    handleError(event){
        console.error('Error fetching Car Record', event.detail);
    }

}