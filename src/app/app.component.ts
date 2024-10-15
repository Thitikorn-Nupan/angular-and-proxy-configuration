import {Component, OnInit} from '@angular/core';
import {ActorService} from "./service/actor.service";
import {Actor, ResponseActor} from "./entity/response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lab-ag-and-poxy-config-api';
  protected declare responseActor: ResponseActor
  protected declare actors: Actor[]
  protected disableTable : boolean = true
  protected enableCard: boolean = false
  protected declare actor : Actor
  constructor(private actorService: ActorService) {
  }

  ngOnInit(): void {
    setTimeout( () => {
      this.actorService.getAllActor().subscribe(response => {
        this.responseActor = response;
        console.log(this.responseActor);
        this.actors = this.responseActor.data
        console.log(this.actors);
        this.disableTable = false
      })
    }, 1500);
  }

  onClickedRow(actor: Actor) {
    this.enableCard = true;
    this.actor = actor
  }

  onClickedCard() {
    this.enableCard = false;
  }
}
