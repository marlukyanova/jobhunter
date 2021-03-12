import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JobStageItemComponent } from './job-stage-item.component';

describe('JobStageItemComponent', () => {
  let component: JobStageItemComponent;
  let fixture: ComponentFixture<JobStageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobStageItemComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
