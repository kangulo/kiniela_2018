import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Main App
import { AppComponent } from './components/app/app.component';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Common Componentes
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
// Components
import { AdminareaComponent } from './components/adminarea/adminarea.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MatchesComponent } from './components/matches/matches.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { PredictiongroupsComponent } from './components/predictions/predictiongroups/predictiongroups.component';

// Services
import { StadiumsService } from './components/stadiums/stadiums.service';
import { MatchesService } from './components/matches/matches.service';
import { PredictionsService } from './components/predictions/predictions.service';
import { AdminService } from './components/adminarea/admin.service';
import { LoginService } from './components/login/login.service';
import { RegisterService } from './components/register/register.service';
import { UtilityService } from './common/utility/utility.service';
import { GroupsService } from './components/groups/groups.service';
import { DashboardService } from './components/dashboard/dashboard.service';
import { NewsService } from './components/news/news.service'

// Guard
import { AuthGuard } from './auth.guard';

// Filters
import { GroupsPipe } from './common/filters/groups.filter';
import { RemoveSpaceBetweenPipe } from './common/filters/removewhitespacebetween.filter';
import { OnlynumbersDirective } from './common/directives/onlynumbers.directive';
import { OnlypositivesDirective } from './common/directives/onlypositives.directive';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SpinnerComponent } from './components/news/spinner/spinner.component';
import { FeedCardComponent } from './components/news/feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './components/news/pipe/strip-html-tags.pipe';
import { CountdownComponent } from './components/dashboard/countdown/countdown.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    GroupsComponent,
    MatchesComponent,
    StadiumsComponent,
    NewsComponent,
    PredictionsComponent,
    AdminareaComponent,
    LoginComponent,
    GroupsPipe,
    RemoveSpaceBetweenPipe,
    PredictiongroupsComponent,
    OnlynumbersDirective,
    LoginadminComponent,
    SpinnerComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    CountdownComponent,
    RegisterComponent,
    OnlypositivesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StadiumsService,
    MatchesService,
    PredictionsService,
    AdminService,
    LoginService,
    RegisterService,
    UtilityService,
    GroupsService,
    DashboardService,
    AuthGuard, 
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
