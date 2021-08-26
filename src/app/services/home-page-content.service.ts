import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface HomePageContent {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomePageContentService {
  private HomePageContent: AngularFirestoreCollection<HomePageContent>;
  private HomePageContents: Observable<HomePageContent[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.HomePageContent = db.collection<HomePageContent>('homeContent');
      this.HomePageContents = this.HomePageContent.snapshotChanges().pipe(
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
      return this.HomePageContents;
    }




}
