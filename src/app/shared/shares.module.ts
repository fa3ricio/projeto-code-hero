import { Loader } from './loader/loader';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SplitPipe } from './pipes/splitName';
import { ExcerptFilter } from './pipes/excerpt';

@NgModule({
  imports: [
    CommonModule
  ], declarations: [
    SplitPipe,
    Loader,
    ExcerptFilter

  ],
  exports: [
    SplitPipe,
    Loader,
    ExcerptFilter
  ]
})
export class SharedModule {}
