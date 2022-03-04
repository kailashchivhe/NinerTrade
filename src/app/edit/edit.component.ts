import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trade } from '../models/trade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  trade: Trade;
  tradeForm: FormGroup;

  constructor(private _tradeService: TradeServiceService, private router: Router) { }

  ngOnInit() {
    this.trade = this._tradeService.getSelectedTrade();
    this.tradeForm = new FormGroup({
      'firstName': new FormControl(this.trade.firstName,Validators.required),
      'lastName': new FormControl(this.trade.lastName,Validators.required),
      'description': new FormControl(this.trade.description,Validators.required),
      'quantity': new FormControl(this.trade.quantity,Validators.required),
    });
  }

  onEditClicked(){
    this.trade.description = this.tradeForm.get('description').value;
    this.trade.firstName = this.tradeForm.get('firstName').value;
    this.trade.lastName = this.tradeForm.get('lastName').value;
    this.trade.quantity = this.tradeForm.get('quantity').value;
    this._tradeService.setSelectedTrade(this.trade);
    if( this._tradeService.editTrade(this.trade) ){
      this.router.navigate(['/details']);
    }
    else{
      window.alert("Could not Edit");
    }
  }
}
