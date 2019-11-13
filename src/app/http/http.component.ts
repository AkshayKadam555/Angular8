import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }


  onCreatePost(postData: { title: string; content:string})  {
    this.http.post('https://ng-template-guide.firebaseio.com/posts.json', postData)
    .subscribe(responceData=> {
      console.log(responceData);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {

  }

  private fetchPosts() {
    this.http.get('https://ng-template-guide.firebaseio.com/posts.json')
    .pipe(map(responceData => {
      const postsArray = [];
      for (const key in responceData) {
        postsArray.push(responceData[key]) 
        {
          postsArray.push({...responceData[key], id: key});
        }
      }
      return postsArray;
    }))
    .subscribe( posts => {
        console.log(posts);
      });
  }
}
