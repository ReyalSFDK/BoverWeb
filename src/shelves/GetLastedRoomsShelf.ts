import { makeAutoObservable } from "mobx";
import { Room, RoomsApi } from "../api";

export class GetLastedRoomsShelf {
  private api: RoomsApi;
  public isLoading = false;

  public hasError = false;

  public rooms: Room[] = [];

  constructor(api: RoomsApi) {
    this.api = api;

    makeAutoObservable(this);
  }


  public setHasError = (hasError: boolean) => {
    this.hasError = hasError;
  }

  public setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  }

  public setRooms = (rooms: Room[]) => {
    this.rooms = rooms;
  }

  public fetch = async () => {
    this.setIsLoading(true);
    try {
      const rooms = await this.api.roomsControllerFindAll();
      this.setRooms(rooms);
    } catch (error) {
      console.error(error);
      this.setHasError(true);
    } finally {
      this.setIsLoading(false);
    }
  }
}
