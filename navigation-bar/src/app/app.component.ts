import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-bar';
  public subscription: Subscription | undefined;
  public singleSpaProps: SingleSpaProps | any;

  ngOnInit(){this.subscription = singleSpaPropsSubject.subscribe(
    props => {
      this.singleSpaProps = props;
    },
  );
    this.loadNavBar('dashboard');
  }

  loadNavBar(selectedTab){
    console.log('loading microapp : ',selectedTab);
    const event = new CustomEvent('tabLoaded', {detail: selectedTab});
    document.dispatchEvent(event);
  }
}
