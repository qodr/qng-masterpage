import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QNgMasterpageDirective } from './masterpage.directive';
import { QNgMasterpageService } from './masterpage.service';
import { QNgMasterpage } from './masterpage.class';

describe('MasterpageDirective', () => {
  let component: QNgMasterpageDirective;
  let fixture: ComponentFixture<QNgMasterpageDirective>;

  let masterpages: Array<QNgMasterpage> = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QNgMasterpageDirective ],
      providers: [
        QNgMasterpageService,
        { provide: 'QNG_DEAULT_MASTERPAGE', useValue: '' },
        { provide: 'QNG_MASTERPAGES', useValue: masterpages },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QNgMasterpageDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
