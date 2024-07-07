export interface IVideo {
  videoId: string;
  url: string;
  title: string;
  totalView: number;
}

export interface IPayloadGetDetailVideo {
  videoId: string;
}

export interface IPayloadIncreaseView {
  videoId: string;
  userId: string;
  duration: number;
}
