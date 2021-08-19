import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from "firebase"
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Application {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeownerApplicationService {
  private homeownerApplication: AngularFirestoreCollection<Application>;
  private applications: Observable<Application[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.homeownerApplication = db.collection<Application>('homeownerApplications');
      this.applications = this.homeownerApplication.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getApplications() {
      return this.applications;
    }




}
