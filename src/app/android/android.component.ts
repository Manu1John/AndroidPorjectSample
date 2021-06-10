import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  organization: string;
  Age: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '	Xi Jinping ', organization: 'China', Age: 67},
  {position: 2, name: 'Vladimir Putin ', organization: '	Russia', Age: 68},
  {position: 3, name: '	Donald Trump', organization: 'United States', Age: 74},
  {position: 4, name: '	Angela Merkel ', organization: '	Germany', Age: 66},
  {position: 5, name: 'Jeff Bezos ', organization: '	Amazon.com', Age: 57},
  {position: 6, name: '	Pope Francis ', organization: '	Roman Catholic Church', Age: 84},
  {position: 7, name: 'Bill Gates ', organization: '	Bill & Melinda Gates Foundation', Age: 65},
  {position: 8, name: '	Mohammed bin Salman Al Saud ', organization: '	Saudi Arabia', Age: 35},
  {position: 9, name: '		Larry Page ', organization: '	Alphabet', Age: 48},
  {position: 10, name: '	Jerome H. Powell', organization: 'United States', Age: 68},


];

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
