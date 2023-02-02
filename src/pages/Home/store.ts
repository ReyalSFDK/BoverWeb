import { makeAutoObservable } from "mobx";
import { Room, RoomsApi, } from "../../api";

export class Store {
  private api = new RoomsApi({ basePath: "https://p01--api--sjtljr7v9y52.code.run" });
  public rooms: Room[] = [];
  public loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  public setLoading = (loading: boolean) => {
    this.loading = loading;
  }

  public setRooms = (rooms: Room[]) => {
    this.rooms = rooms;
  }

  public fetchRooms = async () => {
    this.setLoading(true);
    try {
      const rooms = await this.api.roomsControllerFindAll();
      this.setRooms(rooms);
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }
}
