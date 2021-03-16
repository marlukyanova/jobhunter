import { Component, Directive, HostListener, Input } from '@angular/core';

@Component({ selector: 'app-job-app-list', template: '' })
export class JobAppListStubComponent {}

@Component({ selector: 'app-dashboard', template: '' })
export class DashboardStubComponent {}

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigateTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigateTo = this.linkParams;
  }
}
