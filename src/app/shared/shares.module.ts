import { SplitPipe } from './pipes/splitName';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ], declarations: [
    SplitPipe
  ],
  exports: [
    SplitPipe
  ]
})
export class SharedModule {}
