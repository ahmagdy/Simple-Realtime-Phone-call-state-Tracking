import { StartCallComponent } from './start-call/start-call.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallControlComponent } from './call-control/call-control.component';

const routes: Routes = [
  { path: 'home', component: StartCallComponent },
  { path: 'caller', component: CallControlComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
