import { Component } from '@angular/core';
import { RegisterComponent} from './register.component';
@Component({

  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives:[RegisterComponent]
})
export class AppComponent {
  title = 'app works!';
}
