import { Component, OnDestroy, OnInit } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Video } from '@nstudio/nativescript-exoplayer';
import { Page, Utils } from '@nativescript/core';
registerElement('VideoPlayer', () => Video);

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private _videoPlayer: Video;
  constructor(private _page: Page) {
    this._videoPlayer = <Video>_page.getViewById('goldenGateVideo');
  }

  ngOnInit(): void {
    console.log('=========================================');
    console.log('video?', this._videoPlayer);
  }

  pauseVideo() {
    this._videoPlayer.pause();
  }

  playVideo() {
    this._videoPlayer.play();
  }

  // forward 5 seconds
  goToTime() {
    try {
      this._videoPlayer.seekToTime(5000);
    } catch (err) {
      console.log(err);
    }
  }

  muteVideo() {
    this._videoPlayer.mute(true);
  }

  unmuteVideo() {
    this._videoPlayer.mute(false);
  }

  /**
   * Get the video current time
   */
  getVideoCurrentTime() {
    try {
      const currentTime = this._videoPlayer.getCurrentTime();
      console.log('Current Time: ' + currentTime);
    } catch (err) {
      console.log(err);
    }
  }

  // opens URL in default browser
  openURL(URL: string) {
    Utils.openUrl(URL);
  }

  ngOnDestroy(): void {
    this.pauseVideo();
  }
}
