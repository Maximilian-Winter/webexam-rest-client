import { IdBaseClass } from '../base-classes/id.baseclass';

export class User extends IdBaseClass
{
    public username : String;
    public email : String;
    public password : String;
    public title : String;
    public firstname : String;
    public lastname : String;
    public birthdate : String;
}