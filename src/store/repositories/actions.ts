import { action } from 'typesafe-actions';
import { ActionTypes, Repository } from './types';

export const add_repository = (repository: Repository) => action(ActionTypes.ADD_REPOSITORY, repository);