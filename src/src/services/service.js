import { request } from './index';
import _ from 'lodash';
import { environment } from '../config/env';

export function request(itemId, callback, errorHandler) {
    const API_URL = `${environment().env.tecnologiaApi}/insumos`;

    axios().put(`${API_URL}/route/${itemId}`)
        .then(result => callback(_.get(result, 'data')))
        .catch(error => errorHandler(_.get(error, 'response.data')));
}
