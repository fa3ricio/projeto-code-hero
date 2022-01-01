import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  desenvolvedorAngular = 'Fabricio Soares';
  linkedin = 'https://www.linkedin.com/in/fabricio-soares-501835bb/';
  email = 'fabriciosoares.pr@gmail.com';
  profile = false;

  @ViewChild('menuProfile') menuProfile?: ElementRef;

  ngOnInit(): void { }

  openProfile() {
    this.profile = !this.profile;
    if (this.profile === true) {
      this.menuProfile?.nativeElement.classList.add('show');
    } else {
      this.menuProfile?.nativeElement.classList.remove('show');
    }
  }
}
