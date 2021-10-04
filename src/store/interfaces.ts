export interface InterfaceComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface InterfaceCommentsLocalState {
  comments: InterfaceComment[];
  loaded: boolean;
}

export interface InterfaceActionReducerLoadComments {
  type: string;
  payload: InterfaceComment[];
}
