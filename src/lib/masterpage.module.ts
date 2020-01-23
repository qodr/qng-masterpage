import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { RouterModule, Router, ActivationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QNgMasterpageDirective } from './masterpage.directive';
import { QNgMasterpageService } from './masterpage.service';
import { QNgMasterpage } from './masterpage.class';

@NgModule({
  declarations: [
    QNgMasterpageDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    QNgMasterpageDirective,
  ],
  providers: [
    QNgMasterpageService,
  ],
})
export class QNgMasterpagesModule {

  public static forRoot(defaultMasterpage?: string, masterpages?: Array<QNgMasterpage>): ModuleWithProviders {
    return {
      ngModule: QNgMasterpagesModule,
      providers: [
        { provide: 'QNG_MASTERPAGES', useValue: masterpages },
        { provide: 'QNG_DEFAULT_MASTERPAGE', useValue: defaultMasterpage || '' },
      ]
    };
  }

  constructor(private router: Router, private masterpageService: QNgMasterpageService,
    @Inject('QNG_DEFAULT_MASTERPAGE') defaultMasterpage: string) {

    router.events.subscribe(event => {
      // NavigationStart
      // RoutesRecognized
      // ActivationStart
      if (event instanceof ActivationStart) {
        if (event.snapshot.data) {
          this.masterpageService.setMasterpage(event.snapshot.data['masterpage'] || defaultMasterpage);
        } else {
          this.masterpageService.setMasterpage(defaultMasterpage);
        }
      }
      // ActivationEnd
      // NavigationEnd
      // NavigationCancel
      // NavigationError
    });
  }
}
