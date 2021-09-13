import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from "firebase"
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface HomeownerApplication {
  AA_name: string;
  AB_address: string;
  AC_homePhone: string;
  AD_cellPhone: string;
  AE_email: string;
  AF_homeownerCondition: string[];
  AG_homeownerAge: string;
  AH_homeownerMonthlyIncome: string;
  AI_onlyPropertyOwned: string[];
  AJ_isWorking: string[];
  AK_employmentLocation: string;
  AL_isChurchMember: string[];
  AM_churchName: string;
  AN_isCommunityOrgMember: string[];
  AO_communityOrgName: string;
  AP_assistExplanation: string;
  AQ_workNeeded: string;
  AR_familyAndFriends: string;
  AS_homeownerAwareness: string[];
  AT_howLearnedAboutCIA: string;
  AU_nameOfPersonSubmitting: string;
  AV_agencyName: string;
  AW_phoneNumberOfSubmitter: string;
  AX_applicationSubmissionDate: number;
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
