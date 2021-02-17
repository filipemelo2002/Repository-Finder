export enum ActionTypes {
    ADD_REPOSITORY = 'ADD_REPOSITORY'
}

export interface Repository {
    id: number;
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    }
}