import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  JobAppListStubComponent,
  DashboardStubComponent,
  RouterLinkDirectiveStub,
} from './mocks/test-stubs';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { JobAppListComponent } from './job-app-list/job-app-list.component';

import { routes } from './app-routing.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;
  let linkDebugElems: any;
  let routerLinks: any;
  // let location: Location;
  // let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      //declarations: [AppComponent, DashboardComponent, JobAppListComponent],
      declarations: [
        AppComponent,
        DashboardStubComponent,
        JobAppListStubComponent,
        RouterLinkDirectiveStub,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
    // router = TestBed.inject(Router);
    // location = TestBed.inject(Location);
    linkDebugElems = debugEl.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDebugElems.map((de: any) =>
      de.injector.get(RouterLinkDirectiveStub)
    );
    fixture.detectChanges();
    //console.log(`routerLinks`, routerLinks);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title client', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });

  //test for the correct router link in the routerLink attribute
  it('should call the correct router link', () => {
    fixture.detectChanges();
    const href = debugEl
      .query(By.css('li a'))
      .nativeElement.getAttribute('href');
    expect(expect(href).toEqual('/dashboard'));
  });

  //test for the correct text inside span
  it('should have a <span> with text "JobHunter"', () => {
    const span = element.querySelector('span');
    expect(span?.textContent).toEqual('JobHunter');
  });

  //test for the correct text inside second <li> element
  it('should have the second element <li> with an <a> tag with text "My Jobs"', () => {
    const spanDe: DebugElement = debugEl.query(By.css('li:nth-child(2) a'));
    const span: HTMLElement = spanDe.nativeElement;
    expect(span.textContent).toEqual('My Jobs');
  });

  //test that empty route redirects to JobAppListComponent
  // it('should navigate to JobAppListComponent when the route is "/" ', fakeAsync(() => {
  //   router.navigate(['']);
  //   tick();
  //   expect(location.path()).toBe('/');
  // }));

  //test that empty route redirects to JobAppListComponent
  // it('should navigate to DashboardComponent when the route is "/dashboard" ', fakeAsync(() => {
  //   router.navigate(['dashboard']);
  //   tick();
  //   expect(location.path()).toBe('/dashboard');
  // }));

  it('can get all routerLinks from template', () => {
    expect(routerLinks.length).toEqual(3, 'there should be 3 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/');
    expect(routerLinks[1].linkParams).toBe('/dashboard');
    expect(routerLinks[2].linkParams).toBe('/');
  });

  it('can click Dashboard link in template', () => {
    const dashboardLinkDe = linkDebugElems[1]; //dashboard link DebugElement
    const dashboardLink = routerLinks[1]; //dashboard link directive

    expect(dashboardLink.navigateTo).toBeNull('should not have navigated yet');
    dashboardLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(dashboardLink.navigateTo).toBe('/dashboard');
  });
});
