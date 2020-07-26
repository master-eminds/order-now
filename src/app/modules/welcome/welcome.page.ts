import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../services";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  constructor(
    public translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {}

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
