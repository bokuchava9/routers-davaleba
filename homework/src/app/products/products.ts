import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule,RouterLink,],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
 constructor(private router: Router) {}
    

products=[
    {id:1,name:"product1",description:"description1",price:100, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"},
    {id:2,name:"product2",description:"description2",price:200, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"},
    {id:3,name:"product3",description:"description3",price:300, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"},
    {id:4,name:"product4",description:"description4",price:400, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"},
    {id:5,name:"product5",description:"description5",price:500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"}
];
goToDetails(id:number){
  this.router.navigate(['/details',{
    queryParams:{
      id, name:String, price:Number, description:String
    }
  } ]);
}
    }