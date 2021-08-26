import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface PartnershipsContent {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PartnershipsContentService {
  private PartnershipsContent: AngularFirestoreCollection<PartnershipsContent>;
  private PartnershipsContents: Observable<PartnershipsContent[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.PartnershipsContent = db.collection<PartnershipsContent>('partnershipsContent');
      this.PartnershipsContents = this.PartnershipsContent.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getPartnershipsContent() {
      return this.PartnershipsContents;
    }




}
