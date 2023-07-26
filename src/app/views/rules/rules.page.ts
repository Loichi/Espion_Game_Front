import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage  {

  constructor(private router: Router) { }



  onArrowClick(){
    this.router.navigate(['']);
  }
}
