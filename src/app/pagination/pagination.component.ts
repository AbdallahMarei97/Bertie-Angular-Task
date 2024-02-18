import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];
  total: number = 10;

  ngOnInit(): void {
    this.pages = this.range(1, this.total);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}