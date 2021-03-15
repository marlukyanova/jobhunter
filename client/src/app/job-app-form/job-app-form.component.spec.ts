import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { JobAppFormComponent } from './job-app-form.component';

describe('JobAppItemComponent', () => {
  let component: JobAppFormComponent;
  let fixture: ComponentFixture<JobAppFormComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAppFormComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JobAppFormComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.query('Save Changes')
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tick()
  //const valueServiceSpy = jasmine.createSpyObj('ApiService',['createJobApp', updateJobApp] )

  //1. fake services
  //2. emulate click
  //3. check if mock func is called w args passed and values of paramteres (check body if has props)
});
