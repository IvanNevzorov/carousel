import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public prevPosition = 0;
  public position = 0;
  title = "angular-courusel";

  public right() {
    this.prevPosition = this.position;
    this.position = this.position + 1;

    console.log(this.prevPosition, this.position);
  }

  public left() {
    this.prevPosition = this.position;
    this.position = this.position - 1;
    console.log(this.prevPosition, this.position);
  }
}
