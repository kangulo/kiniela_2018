import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { FeedEntry } from './model/feed.entry';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { Feed } from './model/feed';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private feedUrl: string = 'http://www.fifa.com/worldcup/news/rss.xml';
  feeds: Array<FeedEntry> = [];

  constructor (
    private feedService: NewsService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getFeedContent(this.feedUrl).delay(1000)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}
