import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, NewsRespose } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(): Observable<Article[]> {
    return this.http.get<NewsRespose>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,
      { params: { apiKey } }).pipe(map(({ articles }) => articles));
  }
}
