import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navigation = [
    {
      name:"Home",
      url:"/app"
    },
    {
      name:"Men",
      url:"javascript:void(0)",
      children:[
        {
          name:"T-Shirts",
          url:"product-list.html"
        },
        {
          name:"Casual Shirts",
          url:"product-list.html"
        },
        {
          name:"Formal Shirts",
          url:"product-list.html"
        },
        {
          name:"Jeans",
          url:"product-list.html"
        },
        {
          name:"Casual Trousers",
          url:"product-list.html"
        }
      ]
    },
    {
      name:"Women",
      url:"javascript:void(0)",
      children:[
        {
          name:"kurtas-kurtis-suits",
          url:"product-list.html"
        },
        {
          name:"dresses-and-jumpsuits",
          url:"product-list.html"
        },
        {
          name:"jeans-jeggings",
          url:"product-list.html"
        },
        {
          name:"Shapewear",
          url:"product-list.html"
        }
      ]
    },
    {
      name:"Pages",
      url:"javascript:void(0)",
      children:[
        {
          name:"product-list",
          url:"product-list.html"
        },
        {
          name:"product single",
          url:"product-single.html"
        },
        {
          name:"about",
          url:"about.html"
        },
        {
          name:"cart",
          url:"cart.html"
        },
        {
          name:"account",
          url:"account.html"
        },
        {
          name:"checkout",
          url:"checkout.html"
        },
        {
          name:"404 error",
          url:"404-error.html"
        }
      ]
    },
    {
      name:"Blog",
      url:"javascript:void(0)",
      children:[
        {
          name:"Blog Default",
          url:"blog-default.html"
        },
        {
          name:"Blog Single",
          url:"blog-single.html"
        }
      ]
    },
    {
      name:"Contact Us",
      url:"contact"
    }
  ]

  ngOnInit() {
  }

}
