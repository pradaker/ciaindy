import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface GetInvolvedContent {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetInvolvedContentService {
  private GetInvolvedContent: AngularFirestoreCollection<GetInvolvedContent>;
  private GetInvolvedContents: Observable<GetInvolvedContent[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.GetInvolvedContent = db.collection<GetInvolvedContent>('getInvolvedContent');
      this.GetInvolvedContents = this.GetInvolvedContent.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getHomePageContent() {
      return this.GetInvolvedContents;
    }




}
