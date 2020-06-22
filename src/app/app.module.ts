import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import{ ServiceRequestService } from './service-http/service-request.service'
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetDirective } from './user-det.directive';
import { DateCountPipe } from './date-count.pipe';

const routes:Routes =[
  {path: 'input-name',component:UserDetailsComponent},
  {path:'',redirectTo:'/search-details',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
