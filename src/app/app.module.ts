import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component';
import { SchoolregComponent } from './schoolreg/schoolreg.component';
import { SchoollistComponent } from './schoollist/schoollist.component';
import { HeaderComponent } from './header/header.component';
import { SchooleditComponent } from './schoollist/schooledit/schooledit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListSchoolInchageComponent } from './list-school-inchage/list-school-inchage.component';
import { InchargeeditComponent } from './inchargeedit/inchargeedit.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultylistComponent } from './faculty/facultylist/facultylist.component';
import { PrincipalHeaderComponent } from './principal-header/principal-header.component';
import { FacultyHeaderComponent } from './faculty-header/faculty-header.component';
import { FacultyEditComponent } from './faculty/faculty-edit/faculty-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SchoolregComponent,
    SchoollistComponent,
    HeaderComponent,
    SchooleditComponent,
    ListSchoolInchageComponent,
    InchargeeditComponent,
    FacultyComponent,
    FacultylistComponent,
    PrincipalHeaderComponent,
    FacultyHeaderComponent,
    FacultyEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
