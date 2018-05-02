import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberListComponent } from "./users/members/member-list/member-list/member-list.component";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./account/login/login.component";
import { CityListResolver } from "./_resolvers/citylist.resolver";
import { HomeTownListResolver } from "./_resolvers/hometownlist.resolver";
import { MemberHomeComponent } from "./users/members/member-home/member-home.component";
import { MemberEditComponent } from "./users/members/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberHomeResolver } from "./_resolvers/member-home.resolver";
import { MemberGuard } from "./_guards/member.guard";
import { BusinessGuard } from "./_guards/business.guard";
import { BusinessHomeComponent } from "./users/businesses/business-home/business-home.component";
import { BusinessHomeResolver } from "./_resolvers/business-home.resolver";
import { BusinessEditComponent } from "./users/businesses/business-edit/business-edit.component";

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
        canActivate: [MemberGuard],
        children: [
            {path: 'member', component: MemberHomeComponent, resolve: {member:MemberHomeResolver}},
            {
                path: 'member/edit',
                component: MemberEditComponent,
                resolve: {
                    member:MemberEditResolver,
                    cities:CityListResolver,
                    hometowns:HomeTownListResolver
                }
            },
            {path: 'members', component: MemberListComponent, resolve: {users:MemberListResolver}}
        ]
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [BusinessGuard],
        children: [
            {path: 'business', component: BusinessHomeComponent, resolve: {bisuser:BusinessHomeResolver}},
            {
                path: 'business/edit',
                component: BusinessEditComponent,
                resolve: {
                    //member:MemberEditResolver,
                    cities:CityListResolver,
                    hometowns:HomeTownListResolver
                }
            }
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];