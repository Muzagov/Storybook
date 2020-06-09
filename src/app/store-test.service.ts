import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  items = [
    {
      url: 'https://via.placeholder.com/150x150?text=Visit',
      titl: 'Report',
      text:
        'Explore Instagram Video: How to convert, engage. and get more instagra...',
      read: 'Read Report',
    },
    {
      url: 'https://via.placeholder.com/150x150?text=Visit',
      titl: 'Blog Post',
      text: 'How to make social video work for your marketing team',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/150x150?text=Visit',
      titl: 'Webinar',
      text: 'The video Forecast: 2019 predictions from industry leaders',
      read: 'Watch Webinar',
    },
    {
      url: 'https://via.placeholder.com/150x150?text=Visit',
      titl: 'Report',
      text: 'Winning strategies for digital video ',
      read: 'Read Report',
    },
  ];

  database = [
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Blog Post',
      text: '4 organic ways to improve your website KPIs',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Blog Post',
      text: 'How to turn your next event into a video content goldmine',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Blog Post',
      text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story',
    },
  ];

  forPopular = [
    {
      url: 'https://via.placeholder.com/150x130?text=Visit',
      titl: 'Read Story',
      text: 'Micro-influencers and B2C brand videos: A match in a heaven',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/150x130?text=Visit',
      titl: 'Watch Webinar',
      text: 'Webinar improwing marketing through visual storytelling',
      read: 'Watch Webinar',
    },
    {
      url: 'https://via.placeholder.com/150x130?text=Visit',
      titl: 'Read Report',
      text: 'How to reach audiences with social video: From Millennials to Gen Z',
      read: 'Read Report',
    },
  ];

  forUpcoming = [
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Webinar',
      text: 'The Basic: Distributing Your Video Across Different Channels',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Webinar',
      text: 'The Basic: Distributing Your Video Marketing Strategy',
      read: 'Read Story',
    },
    {
      url: 'https://via.placeholder.com/320x280?text=Visit',
      titl: 'Webinar',
      text: 'The Basic: Distributing Your Video Marketing Strategy',
      read: 'Read Story',
    },
  ];

  forSubscribe = [
    {
      titl: 'Ready to take test drive?',
      text:
        'We`ll help you elevate your video content strategy. Prices starting from $49 a month.See pricing',
      input: '@ Enter work email',
      button: 'Try it Free',
    },
  ];

  forThird = [
    {
      url: 'https://via.placeholder.com/250x250?text=Visit',
      titl: 'Announcing V.2.9.7 Release',
      name: 'Kirti Joshi',
      data: 'April 21. 2020',
      text:
        'At Froala, our mission has always been about pushing web editing beyond its concieved limits -- this vision has served as the guiding  philocophy for all Froala releases from Version 1.xto',
      keep: 'Keep Reading',
    },

    {
      url: 'https://via.placeholder.com/250x250?text=Visit',
      titl: 'Doing  Wonders With Images in the Froala Editor',
      name: 'Kirti Joshi',
      data: 'April 1. 2020',
      text:
        'Froala Editor can enhance your editing experience by providing methods to customize and manipulate creative images. Read more to laern what`s possible!',
      keep: 'Keep Reading',
    },

    {
      url: 'https://via.placeholder.com/250x250?text=Visit',
      titl: 'Quick and Easy Methods tj Adjust the Size of Your Froala Editor',
      name: 'Kirti Joshi',
      data: 'March 24. 2020',
      text:
        'Froala Editor offers developers the complete flexbility and creativity to adjust the loo and feel of the editor to suit their application. In a recent blog post, we discussed how',
      keep: 'Keep Reading',
    },

    {
      url: 'https://via.placeholder.com/250x250?text=Visit',
      titl: 'Using Multiple Froala Editors On a Signle Webage',
      name: 'Kirti Joshi',
      data: 'March 12. 2020',
      text:
        'Froala Editor is a lightweight WYSiWYG HTML Editor written in Javascript that enables rich text editing capabilities for yor applications. Froala Editor provides users with customizable features and parameters that',
      keep: 'Keep Reading',
    },
  ];

  forPost = [
    {
      url: 'https://via.placeholder.com/550x380?text=Visit',
      subtitle: 'Blog Post',
      titl: 'How to optimize your Facebook & Instagram video ads for success',
      text:
        'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and   entertaining, theyre loved by many ...',
      button: 'Read Story',
    },
  ];

  forExplore = [
    {
      titl: 'Ready to continue your video marketing journey?',
      text:
        ' Explore our latest report for all the best practices & insights you`ll need to easily navigate the video marketing ',
      button: 'Explore Report',
      url: 'https://via.placeholder.com/300x300?text=Visit',
    },
  ];

  forMailbox = [
    {
      titl: 'Recieve articles like this in your mailbox',
      text: 'Sign up to get weekly isights & inspiration  your inbox',
      input: '@ Enter work email',
      button: 'Try it Free',
      subtext: '6145 people are reading this newsletter every week',
    },
  ];

  forComment = [
    {
      name: 'Erik Mathes',
      text: ' Content Marketing Strategist ',
      subtext: 'Follow me on:',
      url: 'https://via.placeholder.com/80x80?text=Visit',
    },
  ];


  public sum(
    a1: number,
    b1: number,
  ): number {
    return a1 + b1;
  }


  constructor() { }
}
