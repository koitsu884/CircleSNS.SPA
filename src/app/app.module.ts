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
import { BusinessHomeComponent } from './users/businesses/business-home/business-home.component';
import { BusinessEditComponent } from './users/businesses/business-edit/business-edit.component';
import { BusinessHomeResolver } from './_resolvers/business-home.resolver';
import { MemberGuard } from './_guards/member.guard';
import { BusinessGuard } from './_guards/business.guard';
import { MemberService } from './_services/member.service';
import { BusinessUserService } from './_services/businessuser.service';
import { BusinessDetailComponent } from './users/businesses/business-detail/business-detail.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { PasswordEditComponent } from './users/password-edit/password-edit.component';

export function getAccessToken(): string {
  return  localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserEditComponent,
    PasswordEditComponent,
    MemberHomeComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberEditComponent,
    BusinessHomeComponent,
    BusinessEditComponent,
    BusinessDetailComponent,
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
    MemberService,
    BusinessUserService,
    AlertifyService,

    AuthGuard,
    MemberGuard,
    BusinessGuard,

    MemberListResolver,
    MemberHomeResolver,
    MemberEditResolver,
    BusinessHomeResolver,
    CityListResolver,
    HomeTownListResolver,

    ErrorInterceptorProvider,
    //Third Party
    BsLocaleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
