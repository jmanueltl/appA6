import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'nav-banquito',
  templateUrl: './nav-banquito.component.html',
  styleUrls: ['./nav-banquito.component.css']
})
export class NavBanquitoComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}
}

