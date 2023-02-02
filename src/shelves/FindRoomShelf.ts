import { makeAutoObservable } from "mobx";
import { RoomsApi, Room } from "../api";

export class FindRoomShelf {
  private api: RoomsApi;
  public isLoading = false;

  public room: Room | null = null;
  public hasError = false;

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

  public setRoom = (room: Room) => {
    this.room = room;
  }


  public fetch = async (roomId: string, onSucess?: VoidFunction) => {
    this.setIsLoading(true);
    try {
      const room = await this.api.roomsControllerFindOne(roomId);
      this.setRoom(room);
      if (onSucess) {
        onSucess();
      }
    } catch (error) {
      console.error(error);
      this.setHasError(true);
    } finally {
      this.setIsLoading(false);
    }
  }
}
