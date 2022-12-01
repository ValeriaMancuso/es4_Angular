import { Injectable } from '@angular/core';
import { Post } from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];

  constructor() {}

  private getAllPosts() {
    return fetch("http://localhost:3000/posts").then((res): Promise<Post[]> => res.json())
  }

  fetchData() {
    let p = this.getAllPosts()
    p.then(res => {
      this.posts = res
    });
  }

  getPostFiltrati(a: boolean): Post[] {
    let newArray = this.posts.filter((e) => {
      return e.active == a
    })
    return newArray
  }

  attivaPost(id:number) {
    let postAttivato = this.posts.find((e)=>e.id==id)

    postAttivato!.active = true
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postAttivato)
    })

  }

  disattivaPost(id:number) {
    let postDisattivato = this.posts.find((e)=>e.id==id)

    postDisattivato!.active = false
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postDisattivato)
    })
    }

    elimina(id: number) {

      return fetch("http://localhost:3000/posts/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
      }).then(response => {
        return response.json( )
    });
    }
}
