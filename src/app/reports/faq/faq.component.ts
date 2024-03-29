import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { businessloansonlineJson } from 'src/app/pages/landing-page/lendingpage';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faq:any;
  faqs: any;

  ngOnInit(): void {
    this.getFAQ();
    console.log(businessloansonlineJson.Faqs.FAQs)
    
  }

  getFAQ(){
    this.faq = businessloansonlineJson;

    this.faqs = this.faq?.Faqs?.FAQs.map((res: { Question: any; Answer: any; }) =>({
      question: res?.Question,
      answer: res.Answer
    }));
    
  }

}
