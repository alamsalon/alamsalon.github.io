import { HostListener } from "@angular/core";

export default class Utils {
    static deviceName;
    
    static getDevice() {
      return this.deviceName = ( window.innerWidth >= 768) ?"desktop" : "mobile"; 
     }
}