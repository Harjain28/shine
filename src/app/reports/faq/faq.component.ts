import { Component, Input } from '@angular/core';
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
  faqs: any;

  @Input() faqsData :any;

  ngOnInit(): void {
    this.getFAQ();    
  }

  getFAQ(){
    this.faqs = this.faqsData.map((res: { Question: any; Answer: any; }) =>({
      question: res?.Question,
      answer: res.Answer
    }));
    
  }

}
