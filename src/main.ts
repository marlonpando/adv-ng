import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable } from 'rxjs';
// import { map, filter, take } from 'rxjs/operators';

// const o = new Observable<number>(subscriber => {

//   let counter = 0

//   const h = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(h);
//       return;
//     }

//     subscriber.next(counter++);

//   }, 500);

//   setTimeout(() => {
//     clearInterval(h);
//     //subscriber.complete();
//     subscriber.error('something went wrong...')
//   }, 10000);

// });

// const ops = [
//   map((num: number) => num * 2),
//   filter(num => num > 4),
//   take(3)
// ]

// const subscription = o.pipe(...ops as []).subscribe({
//   next: num => console.log(num),
//   error: err => console.log(err),
//   complete: () => console.log('All done')
// });


