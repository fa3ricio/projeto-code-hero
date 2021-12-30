import { Loader } from './loader/loader';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SplitPipe } from './pipes/splitName';

@NgModule({
  imports: [
    CommonModule
  ], declarations: [
    SplitPipe,
    Loader,
  ],
  exports: [
    SplitPipe,
    Loader
  ]
})
export class SharedModule {}
