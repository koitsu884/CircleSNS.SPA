import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberListComponent } from "./members/member-list/member-list/member-list.component";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
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