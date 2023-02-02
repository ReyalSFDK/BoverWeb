import { makeAutoObservable } from "mobx";

import { RoomsApi, } from "../../api";
import { FindRoomShelf } from "../../shelves";

export class Store {
  private api = new RoomsApi({ basePath: "https://p01--api--sjtljr7v9y52.code.run" });

  public findRoomShelf: FindRoomShelf;

  constructor() {
    this.findRoomShelf = new FindRoomShelf(this.api);

    makeAutoObservable(this);
  }
}
