import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;
  private _productService: ProductService;

  constructor() { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
