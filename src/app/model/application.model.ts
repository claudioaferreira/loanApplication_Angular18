export class Application {
  applicantID: number;
  fullName: string;
  applicationStatus: string;
  panCard: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  assets: string;
  dateApplied: Date;
  Loans: Loan[];

  constructor() {
    this.Loans = [];
    this.address = '';
    this.annualIncome = 0;
    this.applicationStatus = 'New';
    this.applicantID = 0;
    this.assets = '';
    this.city = '';
    this.creditScore = 0;
    this.dateApplied = new Date();
    this.dateOfBirth = '';
    this.email = '';
    this.employmentStatus = '';
    this.fullName = '';
    this.panCard = '';
    this.phone = '';
    this.state = '';
    this.zipCode = '';
  }
}

export class Loan {
  loanID: number;
  applicantID: number;
  bankName: string;
  loanAmount: number;
  emi: number;

  constructor() {
    this.applicantID = 0;
    this.bankName = '';
    this.emi = 0;
    this.loanAmount = 0;
    this.loanID = 0;
  }
}

export interface ApiResponseMOdel {
  result: boolean;
  message: string;
  data: any;
}
