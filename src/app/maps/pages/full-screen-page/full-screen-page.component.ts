import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';

//import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

@ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;

ngOnInit(): void {
  config.apiKey = 'pa5ScdBybmd8hzoNzSOI';
}

ngAfterViewInit() {
  const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

  this.map = new Map({
    container: this.mapContainer.nativeElement,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  });
  new Marker({color: "#FF0000"})
  .setLngLat([139.7525,35.6846])
  .addTo(this.map);
}

  ngOnDestroy() {
    this.map?.remove();
  }
}
