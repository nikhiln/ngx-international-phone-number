import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreventDoubleSubmitDirective } from './double-submit.directive';

export * from './double-submit.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PreventDoubleSubmitDirective
  ],
  exports: [
    PreventDoubleSubmitDirective
  ]
})
export class PreventDoubleSubmitModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PreventDoubleSubmitModule,
      providers: []
    };
  }
}
