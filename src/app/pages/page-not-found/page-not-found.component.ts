import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
import { Location } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule,MaterialModule,MatIconModule,RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  redirectionUrls: any = [];
  show: boolean = false;
  constructor(private route: ActivatedRoute , private location: Location , private router: Router , public urlService: UrlService) {}

  
  ngOnInit() {
  }

  homepage(){
    this.router.navigate(['/in'])
  }

}
