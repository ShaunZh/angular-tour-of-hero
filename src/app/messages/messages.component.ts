import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  // 因为messageService需要在当前组件的html中使用，因此声明为public
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
