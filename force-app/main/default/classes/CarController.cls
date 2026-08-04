public with sharing class CarController {
    
    @AuraEnabled(cacheable=true)
    public static List<Car__C> getAvailableCars() {

        return [SELECT Id, Name, MSRP__c, Description__c, Category__c,Picture_URL__c FROM Car__C];

    }
}