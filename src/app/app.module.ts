import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGooglePlacesAutocompleteModule } from '@codious/ngx-google-places-autocomplete';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({mode: 'md'}), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthGuardModule,
    NgxGooglePlacesAutocompleteModule.forRoot({
      key: 'AIzaSyBOtP4LG-2CXX84PT_1ygW2AmEJKiiGOq8', // your Google API key retrieved from the Google Developer Console
      language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
      libraries: 'places', // see https://developers.google.com/maps/documentation/javascript/libraries
      loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
      options: { types: ['geocode'] }, // see https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete
      region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
    }),
    ReactiveFormsModule,
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
  bootstrap: [AppComponent],
})
export class AppModule {}