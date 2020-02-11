import { Component, Input, ComponentFactoryResolver, ViewContainerRef, Inject, AfterViewInit } from '@angular/core';
import { QNgMasterpage } from './masterpage.class';
import { QNgMasterpageService } from './masterpage.service';

@Component({
  selector: '[qng-masterpage]',
  template: ''
})
export class QNgMasterpageDirective implements AfterViewInit {
  @Input('qng-masterpage') masterpages?: Array<QNgMasterpage> = new Array<QNgMasterpage>();

  constructor(
    private _factoryResolver: ComponentFactoryResolver,
    private _rootViewContainer: ViewContainerRef,
    private _masterpageService: QNgMasterpageService,
    @Inject('QNG_MASTERPAGES') private globalMasterpages: Array<QNgMasterpage>
  ) {}

  ngAfterViewInit(): void {
    if (this.masterpages == undefined || this.masterpages.length == 0) {
      this.masterpages = this.globalMasterpages;
    }
    this._masterpageService.afterMasterpageChange = masterpage => {
      this.removeDynamicComponent();
      if (this.masterpages && this.masterpages.length > 0) {
        const selectedMasterpage = this.masterpages.find(x => x.name == masterpage);
        if (selectedMasterpage) {
          this.addDynamicComponent(selectedMasterpage.component);
        } else {
          throw new Error('Masterpage does not exist');
        }
      }
    };
  }

  addDynamicComponent(dynamicComponent: any) {
    const factory = this._factoryResolver.resolveComponentFactory(dynamicComponent);
    const component = factory.create(this._rootViewContainer.parentInjector);
    this._rootViewContainer.insert(component.hostView);
  }

  removeDynamicComponent() {
    this._rootViewContainer.remove();
  }
}
