import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})


export class StorageService {

  // private isAuthenticated = new BehaviorSubject<boolean>(this.isLoggednIn());
  private editProf = new Subject<void>();
  // isAuthenticated$ = this.isAuthenticated.asObservable();


  
  constructor(private router: Router , private state: LocalStorageService) {}

  private stepData: any[] = [];

  // setData(stepIndex: number, data: any) {
  //   this.stepData[stepIndex] = data;
  // }
  // sendEditEvent() {
  //   this.editProf.next();
  // }

  getEditEvent(): Observable<any> {
    return this.editProf.asObservable();
  }
  
  // getData(stepIndex: number): any {
  //   return this.stepData[stepIndex];
  // }

  // getStagingId() {
  //   return this.state.get("stagingJourneyId");
  // }
  // getToken() {
  //   return localStorage.getItem("token");
  // }

  // isToken() {
  //   return this.getToken() !== null;
  // }

  // isLoggednIn() {
  //   return this.getStagingId() !== null;
  // }

}
