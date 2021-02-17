import { createStore, Store } from 'redux';
import allReducers from './allReducers';
import { Repository } from './repositories/types';

export interface ApplicationStore {
    repositories: Repository[];
}

const store: Store<ApplicationStore> = createStore( allReducers );

export default store;