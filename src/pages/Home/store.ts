import { makeAutoObservable } from "mobx";
import { RoomsApi, } from "../../api";
import { FindRoomShelf, CreateRoomShelf, GetLastedRoomsShelf } from "../../shelves";

export class Store {
  private api = new RoomsApi({ basePath: "https://p01--api--sjtljr7v9y52.code.run" });

  public preFetchFindRoomShelf: FindRoomShelf;

  public createRoomShelf: CreateRoomShelf;

  public getLastedRoomsShelf: GetLastedRoomsShelf;

  constructor() {
    this.preFetchFindRoomShelf = new FindRoomShelf(this.api);
    this.createRoomShelf = new CreateRoomShelf(this.api);
    this.getLastedRoomsShelf = new GetLastedRoomsShelf(this.api);

    makeAutoObservable(this);
  }

  get hasLoading(): boolean {
    return this.preFetchFindRoomShelf.isLoading
        || this.createRoomShelf.isLoading
        || this.getLastedRoomsShelf.isLoading;
  }
}
