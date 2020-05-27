import { of } from 'rxjs';

export class ErrorHandlerService {
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any) => {
        console.log('operation: ' + operation);
        console.log(error);
        return of(result as T);
      };
    }
}