import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { invalidStage, validStage } from '../mocks/mocks';
import { JobStageItemComponent } from './job-stage-form.component';
import { By } from '@angular/platform-browser';

describe('JobStageFormComponent', () => {
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

    component.jobStageForm = invalidStage;

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
  });

  it('should call createNewStage when required fields are truthy', () => {
    component.jobStageForm = validStage;
    component.isAddMode = true;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.save'));
    spyOn(component, 'createJobStage');
    de.nativeElement.click();
    expect(component.createJobStage).toHaveBeenCalled();
  });

  it('should not call createJobStage if required feild are empty', () => {
    component.isAddMode = true;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.save'));
    spyOn(component, 'createJobStage');
    de.nativeElement.click();
    expect(component.createJobStage).not.toHaveBeenCalled();
  })


});
