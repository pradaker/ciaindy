import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from "firebase"
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface HomeownerApplication {
  name: string;
  email: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeownerApplicationService {
  private homeownerApplication: AngularFirestoreCollection<HomeownerApplication>;
  private homeownerApplications: Observable<HomeownerApplication[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.homeownerApplication = db.collection<HomeownerApplication>('homeownerApplications');
      this.homeownerApplications = this.homeownerApplication.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getHomeownerApplications() {
      return this.homeownerApplication;
    }

    addHomeownerApplication(homeownerApplication: HomeownerApplication) {
      return this.homeownerApplication.add(homeownerApplication)
    }



  
}
