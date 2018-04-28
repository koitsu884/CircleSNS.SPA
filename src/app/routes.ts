import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberListComponent } from "./members/member-list/member-list/member-list.component";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./account/login/login.component";
import { CityListResolver } from "./_resolvers/citylist.resolver";
import { HomeTownListResolver } from "./_resolvers/hometownlist.resolver";

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'register', 
        component: RegisterComponent, 
        resolve: {
            cities:CityListResolver,
            hometowns:HomeTownListResolver
        }
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users:MemberListResolver}}
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];