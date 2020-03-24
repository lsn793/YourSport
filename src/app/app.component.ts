import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public router: Router) {}
  
  ngOnInit() {
    /* iframe http://localhost:4200/pictures?theme=flags
    http://localhost:4200/pictures?theme=presidents
    http://localhost:4200/6pictures?theme=flags
    */
    //?quiz=pictures&theme=flags
    let path =  window.location.href;
    let search = "?quiz=";
    let found = path.lastIndexOf(search);
    let found_ampersand = path.lastIndexOf("&");
    let quiz_name = path.slice(found + search.length, found_ampersand);
    this.router.navigate([quiz_name], {skipLocationChange: true});
  }
}
