# ngx-prevent-double-submission

## Installation

To install this library, run:

```bash
$ npm install ngx-prevent-double-submission --save
```

## Consuming your library

Once you have installed it you can import `PreventDoubleSubmitModule` from `ngx-prevent-double-submission` in any application module. E.g.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { PreventDoubleSubmitModule } from 'ngx-prevent-double-submission';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Prevent double submission module
    PreventDoubleSubmitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once it is imported, you can use `prevent-double-submit` as attribute on your submit button:

```xml
<!-- app.component.html -->
<form name="sample-form" (ngSubmit)="submitName()" #f="ngForm">
  <input type="text" name="name" placeholder="Your name" [(ngModel)]="user.name" />

  <br />
  <p>Try to double click on the submit button and check into console. It should show message only once.</p>
  <button type="submit" prevent-double-submit>Submit</button>
</form>
```

## License

MIT © [Nikhil Navadiya](mailto:nikhil.navadiya@gmail.com)
