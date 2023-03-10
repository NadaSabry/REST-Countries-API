import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
 
  constructor(private themeService:ThemeService){

  }
  toggleTheme(){
    this.themeService.toggleMode();
  }


}
