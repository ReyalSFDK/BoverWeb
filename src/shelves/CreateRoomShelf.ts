import { makeAutoObservable } from "mobx";
import { RoomsApi } from "../api";

export class CreateRoomShelf {
  private api: RoomsApi;
  public isLoading = false;

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


  public fetch = async (title: string, videoURL: string, onSucess: (roomId: string) => void) => {
    this.setIsLoading(true);
    try {
      const createdRoom = await this.api.roomsControllerCreate({
        videoURL,
        title,
      });
      onSucess(createdRoom.id);
    } catch (error) {
      console.error(error);
      this.setHasError(true);
    } finally {
      this.setIsLoading(false);
    }
  }
}
