import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from "firebase"
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface PageContent {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  private pageContent: AngularFirestoreCollection<PageContent>;
  private pageContents: Observable<PageContent[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.pageContent = db.collection<PageContent>('pageContent');
      this.pageContents = this.pageContent.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getPageContent() {
      return this.pageContents;
    }




}
