import {Component} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public url: string;

  constructor(private theInAppBrowser: InAppBrowser) {
    this.url = "https://www.trillo.io" //change this url to any Trillo application
  }

  ngOnInit() {
    const browser = this.theInAppBrowser.create(
        this.url,
        '_self',
        'hardwareback=no,' +
        'location=no,' +
        'toolbar=no,' +
        'clearcache=no,' +
        'clearsessioncache=no'
    );
  }
}
