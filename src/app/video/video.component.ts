import { Component, OnInit } from '@angular/core'; 

@Component({
  template: '<youtube-player videoId="V2QWGNNDaeo"></youtube-player>',
  selector: 'app-video',
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    // tag.src = "https://www.youtube.com/embed/V2QWGNNDaeo?showinfo=0&enablejsapi=1&origin=http://localhost:4200";
    
    document.body.appendChild(tag);
  }
}