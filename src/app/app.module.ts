import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BsDropdownModule, TabsModule, BsDatepickerModule, defineLocale, BsLocaleService } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MemberListComponent } from './users/members/member-list/member-list/member-list.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { AlertifyService } from './_services/alertify.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './account/login/login.component';
import { GlobalService } from './_services/global.service';
import { TimeAgoPipe } from 'time-ago-pipe';
import { CityListResolver } from './_resolvers/citylist.resolver';
import { HomeTownListResolver } from './_resolvers/hometownlist.resolver';
import { MemberHomeComponent } from './users/members/member-home/member-home.component';
import { MemberDetailComponent } from './users/members/member-detail/member-detail.component';
import { MemberHomeResolver } from './_resolvers/member-home.resolver';
import { FooterComponent } from './footer/footer.component';
import { MemberEditComponent } from './users/members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

export function getAccessToken(): string {
  return  localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MemberHomeComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberEditComponent,
    RegisterComponent,
    HomeComponent,
    TimeAgoPipe,
    FooterComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: getAccessToken,
        whitelistedDomains: ['localhost:5000']
      }
    })
  ],
  providers: [
    GlobalService,
    AuthService,
    UserService,
    AuthGuard,
    AlertifyService,
    MemberListResolver,
    MemberHomeResolver,
    MemberEditResolver,
    CityListResolver,
    HomeTownListResolver,
    BsLocaleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
