import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLayoutSizeChange(size: string) {
    $('.size .btn').removeClass('active');
    $('.' + size).addClass('active');
    $('.layout-section').attr('data-layout-size', size);
  }

  onLayoutPositionChange(position: string) {
    $('.position .btn').removeClass('active');
    $('.' + position).addClass('active');
    $('.left-menu-section').attr('data-layout-placement', position);
  }

}
