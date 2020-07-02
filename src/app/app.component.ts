import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String="";
  price:number=0;
  period:string="";
  freeFeatures = [
    { "name": "Single User", "available": "yes" },
    { "name": "5GB Storage", "available": "yes" },
    { "name": "Unlimited Public Projects", "available": "yes" },
    { "name": "Community Access", "available": "yes" },
    { "name": "Unlimited Private Projects", "available": "no" },
    { "name": "Dedicated Phone Support", "available": "no" },
    { "name": "Free Subdomain", "available": "no" },
    { "name": "Monthly Status Reports", "available": "no" }
  ];
  plusFeatures = [
    { "name": "5 Users", "available": "yes" },
    { "name": "50GB Storage", "available": "yes" },
    { "name": "Unlimited Public Projects", "available": "yes" },
    { "name": "Community Access", "available": "yes" },
    { "name": "Unlimited Private Projects", "available": "Yes" },
    { "name": "Dedicated Phone Support", "available": "Yes" },
    { "name": "Free Subdomain", "available": "Yes" },
    { "name": "Monthly Status Reports", "available": "no" }
  ];
  proFeatures = [
    { "name": "Unlimited Users", "available": "yes" },
    { "name": "150GB Storage", "available": "yes" },
    { "name": "Unlimited Public Projects", "available": "yes" },
    { "name": "Community Access", "available": "yes" },
    { "name": "Unlimited Private Projects", "available": "yes" },
    { "name": "Dedicated Phone Support", "available": "yes" },
    { "name": "Unlimited Free Subdomain", "available": "yes" },
    { "name": "Monthly Status Reports", "available": "yes" }
  ];
  
}
