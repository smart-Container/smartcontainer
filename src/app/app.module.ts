import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContainersComponent } from './containers/containers.component';
import { TablesComponent } from './tables/tables.component';
import { AuthComponent } from './auth/auth.component';
import { AuthguardGuard } from "./authguard.guard";
import { EroorComponent } from './eroor/eroor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ContainersComponent,
    TablesComponent,
    AuthComponent,
    EroorComponent,
    WelcomePageComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    FixedPluginModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD6vBx8V6CNqd7TgTXIsOMYw1st3PAKeU4",
      authDomain: "smartcontainer-bc371.firebaseapp.com",
      projectId: "smartcontainer-bc371",
      storageBucket: "smartcontainer-bc371.appspot.com",
      messagingSenderId: "1085978307087",
      appId: "1:1085978307087:web:45a761650109ead832d17a"
    })
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
