import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { JwtInterceptor } from './_helpers/jwt.interceptor'
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MapsFieldsComponent } from './maps-fields/maps-fields.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from 'src/assets/config/app-config';
import { FilterPipePipe } from './_helpers/filter-pipe.pipe';
export function initConfig(config: AppConfig) {
      return () => config.load();
} 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsFieldsComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    MatTreeModule,
    MatMenuModule,
    MatExpansionModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CookieService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
