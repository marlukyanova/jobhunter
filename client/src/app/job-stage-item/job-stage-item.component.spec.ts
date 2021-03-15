import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { JobStageItemComponent } from './job-stage-item.component';
import { By } from '@angular/platform-browser';

describe('JobStageItemComponent', () => {
  let component: JobStageItemComponent;
  let fixture: ComponentFixture<JobStageItemComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobStageItemComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStageItemComponent);
    component = fixture.componentInstance;

    component.jobStageForm = new FormGroup({
      stage: new FormControl(''),
      createdat: new FormControl(new Date(Date.now())),
      date: new FormControl(''),
      addinfo: new FormControl(''),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should contain text "Save Changes"', () => {
    const de = fixture.debugElement.query(By.css('.save'));
    expect(de.nativeElement.textContent).toBe(' Save Changes ');
  });

  it('should call correct function once when button is clicked', () => {
    const de = fixture.debugElement.query(By.css('.save'));
    spyOn(component, 'saveChanges');
    de.nativeElement.click();
    expect(component.saveChanges).toHaveBeenCalledOnceWith();
  })


});
