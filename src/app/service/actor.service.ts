import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private readonly baseUrl = environment.basePath;
  constructor(private http: HttpClient) { }

  public getAllActor() : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/actor/`)
  }

}
