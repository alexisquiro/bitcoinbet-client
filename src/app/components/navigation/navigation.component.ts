import { Component, OnInit , Input} from '@angular/core';
import {LoginService} from '../../services/login.service';
import{ LoginComponent}from '../login/login.component'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
   
  constructor(private loginservice :LoginService) { }

  ngOnInit() {
  }

}
