import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';


@Injectable()
export class AccountService {
  public accounts: string[];
  public account: string;
  public accountObservable = new Subject<string>();

  constructor(private web3Service: Web3Service) {
    console.log(this);
    this.watchAccount();
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      console.log('Registered new accounts: ', accounts);
      this.accounts = accounts;
      this.account = accounts[0];
      this.accountObservable.next(this.account);
    });
  }
}