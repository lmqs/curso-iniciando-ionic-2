import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {TestPage} from './pages/test/test';
import { ConnectionService } from './providers/connection-service/connection-service'
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';
import {InputTestPage} from './pages/input-test/input-test';



@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;
  alert: any = AlertPage;
  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title : 'Home', icon: 'home'},
      {component: MenuTestPage, title : 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title : 'Generated Page', icon: 'home'},

      {component: TestPage, title : 'Test Page', icon: 'home'},
      {component: AlertPage, title : 'Alert Page', icon: 'home'},
      {component: ButtonTestPage, title : 'Button Test Page', icon: ''},
      {component: CardTestPage, title : 'Card Test Page', icon: ''},
      {component: IconTestPage, title : 'Icon Test Page', icon: ''},
      {component: InputTestPage, title : 'Input Test Page', icon: ''}

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  clicou(): void{
    console.log('clicou')
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide)
    console.log('openPage')
  }

  menuOpened(): void{
    console.log("abriu menuOpened")
  }
}

ionicBootstrap(MyApp, [ConnectionService],
  {
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  }
);
