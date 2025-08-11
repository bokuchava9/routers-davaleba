import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details {
  product: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.product = {
        id: params['id'],
        name: params['name'],
        price: params['price'],
        image: params['image']
      };
    });
  }
}