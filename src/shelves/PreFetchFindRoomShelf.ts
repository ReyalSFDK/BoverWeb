import { makeAutoObservable } from "mobx";
import { RoomsApi } from "../api";

export class PreFetchFindRoomShelf {
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


  public fetch = async (roomId: string, onSucess: VoidFunction) => {
    this.setIsLoading(true);
    try {
      await this.api.roomsControllerFindOne(roomId);
      onSucess();
    } catch (error) {
      console.error(error);
      this.setHasError(true);
    } finally {
      this.setIsLoading(false);
    }
  }
}
