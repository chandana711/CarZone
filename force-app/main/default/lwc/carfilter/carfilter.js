import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';

//Car Schema
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

//Constants
const CATEGORY_ERROR = 'Error fetching categories';
const MAKE_ERROR = 'Error fetching make types';

export default class CarFilter extends LightningElement {

    categoryError = CATEGORY_ERROR;
    makeError = MAKE_ERROR;


    filters={
        searchKey:'',
        maxPrice:9999999
    }

    /**Fetching Category Options */
    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })   
    carObjectInfo

    @wire(getPicklistValues, { 
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId', 
        fieldApiName: CATEGORY_FIELD })categories

     /**Fetching Make Options */
    @wire(getPicklistValues, { 
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId', 
        fieldApiName: MAKE_FIELD })makeTypes


    handleSearchKeyChange (event) {
        console.log('Search Key: ', event.detail.value);
       // this.filters.searchKey = event.detail.value;
        this.filters = {...this.filters, "searchKey": event.detail.value};
    }

    handleMaxPriceChange (event) {
        console.log('Max Price: ', event.detail.value);
        this.filters.maxPrice = event.detail.value;
         this.filters = {...this.filters, "maxPrice": event.detail.value};
    }


  
    handleMakeChange(event){

    }

    handleCategoryChange(event) {
        const { name, value } = event.target.dataset;
        console.log('Name: ', name);
        console.log('Value: ', value);
    }
}