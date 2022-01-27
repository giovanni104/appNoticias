import { Component, OnInit , ViewChild} from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild( IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
public articles:Article[]=[];

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.getTopHeadlines()
      .subscribe(articles => this.articles.push(...articles)    );

  }

  loadData() {
    console.log("loadData");
    
    this.newService.getTopHeadlinesByCategory('business', true).subscribe(
      articles => {
        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
        }
        this.articles = articles;
        this.infiniteScroll.complete();
      });

  }


}
