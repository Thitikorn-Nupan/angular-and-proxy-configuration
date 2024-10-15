export interface Actor {
  actorId: number;
  actorName: string;
  actorFollowing: number;
}

export interface ResponseActor {
  status: boolean;
  info: string;
  data: Actor[];
}
