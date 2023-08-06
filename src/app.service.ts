import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private microControllerButtonState = false;
  private frontendButtonState = false;

  getMicroControllerButtonState(): boolean {
    return this.microControllerButtonState;
  }

  getFrontendButtonState(): boolean {
    return this.frontendButtonState;
  }

  setMicroControllerButtonState(state: boolean): void {
    this.microControllerButtonState = state;
  }

  setFrontendButtonState(state: boolean): void {
    this.frontendButtonState = state;
  }
}
