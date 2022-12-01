import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  posts: Post[] = [];


  constructor(private postSrv: PostService) {

  }

  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(true)
  }

  onInactivePost(id: number) {
    this.postSrv.disattivaPost(id)
    this.posts = this.posts.filter(e=>!(e.id==id));

  }

  eliminaPost(id: number) {
    this.postSrv.elimina(id);
  }
}
