import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface FooterContent {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class FooterContentService {
  private FooterContent: AngularFirestoreCollection<FooterContent>;
  private FooterContents: Observable<FooterContent[]>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.FooterContent = db.collection<FooterContent>('footerContent');
      this.FooterContents = this.FooterContent.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

    getFooterContent() {
      return this.FooterContents;
    }




}
