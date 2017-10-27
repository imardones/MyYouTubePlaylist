import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';


declare module "*.json" {
  const value: any;
  export default value;
  }
import * as data from '../../assets/feed.json';
const feed = (<any>data);

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

    this.videos = feed.items;
    this.items = [];

    this.sanitizer = sanitizer; //to allow for youTube embeds
    this.characterLimit = 250; //to limit the descriptions on the list view page
    this.months = "JanFebMarAprMayJunJulAugSepOctNovDec";
    this.videoCount = this.videos.length - 1;

    //truncating the description if it's longer than the characterLimit
    for(let i = 0; i < this.videoCount; i++) {
      this.description = this.videos[i].snippet.description;
      if ( this.description.length > this.characterLimit ) {
        this.trucateDescription = this.description.substring(0,this.characterLimit).concat("...");
      } else {
        this.trucateDescription = this.description;
      }

      this.videoURL = "https://www.youtube.com/embed/" + this.videos[i].snippet.resourceId.videoId;

      //checking to see if the entry has a published date (deleted videos don't)
      this.videos[i].contentDetails.videoPublishedAt ? this.date = this.videos[i].contentDetails.videoPublishedAt : this.date = this.videos[i].snippet.publishedAt;
      this.numMonth = (parseInt(this.date.slice(5,7)) * 3) - 3;

      this.package = {
        title: this.videos[i].snippet.title,
        month: this.months.slice(this.numMonth, this.numMonth + 3),
        day: parseInt(this.date.slice(8,10)),
        year: this.date.slice(0,4),
        description: this.description,
        trucatedDescription: this.trucateDescription,
      };
      //checking to see if the entry has resources (deleted videos don't)
        if (this.videos[i].snippet.description === "This video is unavailable.") {
          this.package.thumbnailMedium = "";
          this.package.thumbnailHigh = "";
          this.package.scrURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=NpEaa2P7qZI");
        } else {
          this.package.thumbnailMedium = this.videos[i].snippet.thumbnails.medium.url;
          this.package.thumbnailHigh = this.videos[i].snippet.thumbnails.high.url;
          this.package.scrURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
        }

      this.items.push(this.package);

    }

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
