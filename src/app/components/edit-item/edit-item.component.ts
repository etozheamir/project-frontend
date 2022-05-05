import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  order
  orderInfo = {
    id: 0,
    status: ''
  }
  id = this.route.snapshot.paramMap.get('id')

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getOrder(this.id).subscribe(data => {
      this.order = data
      this.orderInfo.status = data.status
    })
  }

  update() {
    this.orderInfo.id = parseInt(this.id)
    this.bookService.updateOrder(this.orderInfo).subscribe()
    

    this.router.navigate(['manager-panel'])
  }
}
