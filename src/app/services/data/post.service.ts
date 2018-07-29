import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import {Post} from '../../models/user/post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number): Observable<Post> {
      const url = `${this.url}/${id}`;
      return this.http.get<Post>(url);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.url}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<Post>(url, httpOptions);
  }


}