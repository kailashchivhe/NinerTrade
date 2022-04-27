import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CreateTrade } from '../models/CreateTrade';
import { TradeServiceService } from '../services/trade-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  trade: CreateTrade;
  tradeForm: FormGroup;
  
  constructor(private _tradeService: TradeServiceService, private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.trade = new CreateTrade("","","","",0,"");
    this.tradeForm = new FormGroup({
      'firstName': new FormControl("",Validators.required),
      'lastName': new FormControl("",Validators.required),
      'description': new FormControl("",Validators.required),
      'quantity': new FormControl(0,Validators.required),
      'type': new FormControl("",Validators.required),
    });
  }

  onCreateClicked(){
    this.trade.firstName = this.tradeForm.get('firstName').value;
    this.trade.lastName = this.tradeForm.get('lastName').value;
    this.trade.description = this.tradeForm.get('description').value;
    this.trade.quantity = this.tradeForm.get('quantity').value;
    this.trade.type = this.tradeForm.get('type').value;
    this.trade.userId = this._authService.getCurrentUser()._id;
    if( this._tradeService.addData(this.trade) ){
      this.router.navigate(['/trade']);
    }
    else{
      window.alert("Could not Edit");
    }
  }
}
