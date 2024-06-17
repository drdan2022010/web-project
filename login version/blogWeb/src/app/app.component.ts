import { Component } from '@angular/core';
import { LocalStorageService } from './service/storage-service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blogWeb';
  constructor(public localStorageService: LocalStorageService) { }
  isLoggedIn = false;
  isAdminLoggedIn(): boolean {
    return LocalStorageService.isAdminLoggedIn();
  }
}
