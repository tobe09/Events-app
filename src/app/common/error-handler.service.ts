import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ErrorHandlerService {
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any) => {
        console.log('operation: ' + operation);
        console.log(error);
        return of(result as T);
      };
    }
}