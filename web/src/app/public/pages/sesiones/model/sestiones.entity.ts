export class SesionesEntity {
  creatorName: string;
  roomName: string;
  videoConferenceDate:  string;
  videoConferenceTime: string;
  creationConferenceDate: string  ;

  constructor() {
    this.creatorName = '';
    this.roomName = '';
    this.videoConferenceDate = '';
    this.videoConferenceTime = '';
    this.creationConferenceDate = '';
  }
}
