import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { JobAppItemComponent } from './job-app-item.component';

describe('JobAppItemComponent', () => {
  let component: JobAppItemComponent;
  let fixture: ComponentFixture<JobAppItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAppItemComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tick()
  //const valueServiceSpy = jasmine.createSpyObj('ApiService',['createJobApp', updateJobApp] )

  //1. fake services
  //2. emulate click
  //3. check if mock func is called w args passed and values of paramteres (check body if has props)
});
