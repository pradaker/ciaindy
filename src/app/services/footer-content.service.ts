import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface FooterContent {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class FooterContentService {
  private FooterContent: AngularFirestoreCollection<FooterContent>;

  constructor(
    private db: AngularFirestore,
    ) {
      this.FooterContent = db.collection<FooterContent>('footerContent');
    }

    getFooterContent() {
      return this.FooterContent;
    }




}
