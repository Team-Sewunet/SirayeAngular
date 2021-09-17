import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoSrc = 'assets/images/logo.png'
  isCollapsed = false;
  url = "/";
  user_data: any;
  constructor(private router: Router) {
    router.events.subscribe((evt: any) => {
      if (evt instanceof NavigationEnd)
        this.url = evt.url;
    });
  }
  ngOnInit(): void {
    let temp = localStorage.getItem('user_data');
    if (temp == null && this.url.includes("/api/account/confirm-email")) {
      this.url = "/login";
      this.router.navigate(['/login']);
    }
    else {
      this.user_data = JSON.parse(temp ?? "");
      this.url = "/";
      this.router.navigate(['/']);

    }


  }
}
