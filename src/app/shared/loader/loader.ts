import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})


export class Loader {

  @Input() fullLoader = true;

}
