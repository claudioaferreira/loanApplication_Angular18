import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseMOdel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application : Application = new Application();
  loan : Loan = new Loan();

  private masterSrv = inject(MasterService);

  addLoan(){
    const loanstring = JSON.stringify(this.loan);
    const newloand = JSON.parse(loanstring);
  this.application.Loans.push(newloand);
  this.loan = new Loan();
  }


  onSubmit(){
    debugger;
    this.masterSrv.addNewApplication(this.application).subscribe((Result:ApiResponseMOdel) => {
      if(Result.result){
        alert("Loan Application Submitted Successfully");
      } else {
        alert("Failed to submit Loan Application");
      }
    }, error=>{
      alert("error");
    });
  }
}
