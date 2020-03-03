import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // инициализация в конструкторе
  public messages: string[] = []; 
  // почему public ?
  // зачем DI в этом компоненте ?
  constructor(public messageService: MessageService) { }

  public ngOnInit(): void {
  }

}
