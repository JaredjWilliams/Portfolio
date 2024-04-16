import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { AboutComponent } from './views/about/about.component';
import { ResumeComponent } from './views/resume/resume.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ErrorComponent } from './views/error/error.component';
import { ProjectCardComponent } from './views/utility_views/project-card/project-card.component';
import { ContactMeComponent } from './views/contact_me/contact-me.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HeroSectionComponent } from './views/utility_views/hero-section/hero-section.component';
import { BlockTextRightPicLeftComponent } from './views/utility_views/block-text-right-pic-left/block-text-right-pic-left.component';
import { ThreeCircleCenterComponent } from './views/utility_views/three-circle-center/three-circle-center.component';
import { BlockImageSpanItemsArrayedComponent } from './views/utility_views/block-image-span-items-arrayed/block-image-span-items-arrayed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ErrorComponent,
    ProjectCardComponent,
    ContactMeComponent,
    HeroSectionComponent,
    BlockTextRightPicLeftComponent,
    ThreeCircleCenterComponent,
    BlockImageSpanItemsArrayedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
