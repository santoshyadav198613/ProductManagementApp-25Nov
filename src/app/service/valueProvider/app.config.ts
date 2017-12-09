import { InjectionToken } from '@angular/core';
import { IValueProvide, Color } from './ivalue.interface';



export let appConfig = new InjectionToken<IValueProvide>('app.config');

export const APPVALUES: IValueProvide = {
    pageOptions: [10, 20, 30],
    pageSize: 20,
    color: Color.red,
};
