import { TestService } from './test.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-online-order',
  templateUrl: 'online-order.page.html',
  styleUrls: ['online-order.page.scss']
})
export class OnlineOrderPage {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testService.getMenu();
  }
}
