import { Component, OnInit, Inject, Input } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { IntentService } from '../../services/intent.service';
import {TrainingService} from '../../services/training.service'
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.scss']
})
export class IntentsComponent implements OnInit {



  intents: any;


  constructor(public intentService: IntentService, private _activatedRoute: ActivatedRoute,
     private _router: Router,private trainingService:TrainingService, private coreService: UtilsService) { }

  ngOnInit() {
    this.intentService.getIntents().subscribe(
      intent=> {this.intents=intent}
      )
  }


//---------------------------------------------  MINE  ---------------------------------------------------------
  save(){
    this.intentService.create_intent({
      "tag":  "love2",
      "patterns":  ["i love you","love you","i like you"],
      "responses":  ["oh, i love you too","love you more","me too honey"]
      }).subscribe(a=>{this.ngOnInit();});
      

  }

//--------------------------------------------------------------------------------------------------------------

  add() {
    this._router.navigate(["/agent/default/create-intent"])
  }

  edit(intent) {
    this._router.navigate(["/agent/default/edit-intent", intent.tag])
  }

  train(intent) {
    this._router.navigate(["/agent/default/train-intent", intent.tag])
  }

  delete(intent) {
    if (confirm('Are u sure want to delete this intent?')) {
      this.coreService.displayLoader(true);
      this.intentService.delete_intent(intent['tag']).subscribe(f=> {
        this.ngOnInit();
        this.coreService.displayLoader(false);
      });
    }
  }

  trainModels() {
    this.coreService.displayLoader(true);
    this.trainingService.trainModels().then((s: any) => {
      this.coreService.displayLoader(false);
    });
  }
}
