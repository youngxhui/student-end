import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code404',
  templateUrl: './code404.component.html',
  styleUrls: ['./code404.component.scss'],
})
export class Code404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  returnIndex() {
    this.router.navigateByUrl('/');
  }
}
