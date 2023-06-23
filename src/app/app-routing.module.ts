import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { NotfoundComponent } from "./error/notfound/notfound.component";

const routes: Routes = [
  {
      path:'login',
      component:LoginComponent
  },
  {
      path:'register',
      component:RegisterComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
  },
  {
      path:'',
      redirectTo:'/login',
      pathMatch:'full'
  },
  { 
      path: '**', 
      component: NotfoundComponent 
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }