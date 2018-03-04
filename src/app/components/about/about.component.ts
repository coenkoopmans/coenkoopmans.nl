import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age: number;
  private birthday: Date = new Date('1992-10-02');

  constructor() { }

  ngOnInit() {
    this.age = this.calculateAge(this.birthday);
  }

  private calculateAge(birthday: Date): number {
    const ageDifference = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
