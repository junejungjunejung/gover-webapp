import { Property } from './Property';
export class Inspection{
  time: string;
  status: string;
  property: Property;
  tenant: string;
  image: string;

  public constructor(theTime: string, theStatus: string, theProperty: Property, theTenant: string, theImage: string) { 
    this.time = theTime;
    this.status = theStatus;
    this.tenant = theTenant;
    this.property = theProperty;
    this.image = theImage;
  }
}