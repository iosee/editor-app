import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text-service/text.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: [ './body.component.css' ]
})
export class BodyComponent implements OnInit {
  text: string;

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.getMockText().then(text => this.text = text);
  }
}
