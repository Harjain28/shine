import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

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

  getFAQ() {
    this.faqs = this.faqsData?.points?.map((res: { bullets: any; question: any; answer: any; }) => ({
      Question: res?.question,
      Answer: res?.answer,
      bullets: res?.bullets
    })) || this.faqsData?.map((res: { Question: any; Answer: any; bullets: any; }) => ({
      Question: res?.Question,
      Answer: res?.Answer,
      bullets: res?.bullets
    }));
  }
  

}
