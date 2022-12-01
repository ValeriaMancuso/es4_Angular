import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-no-active',
  templateUrl: './no-active.component.html',
  styleUrls: ['./no-active.component.scss']
})
export class NoActiveComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostService) {}


  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(false)
  }

  onActivePost(id: number) {
    this.postSrv.attivaPost(id)
    this.posts = this.posts.filter(e=>!(e.id==id));
}

}
