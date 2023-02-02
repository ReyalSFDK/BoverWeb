/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Bó Ver
 * Documentação para API Bó Ver
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration?: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 *
 * @export
 * @interface CreateRoomDto
 */
export interface CreateRoomDto {
    /**
     * Room custom title
     * @type {string}
     * @memberof CreateRoomDto
     */
    title: string;
    /**
     * Youtube video URL for play in room
     * @type {string}
     * @memberof CreateRoomDto
     */
    videoURL: string;
}
/**
 *
 * @export
 * @interface Room
 */
export interface Room {
    /**
     *
     * @type {string}
     * @memberof Room
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Room
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Room
     */
    videoURL: string;
}
/**
 * RoomsApi - fetch parameter creator
 * @export
 */
export const RoomsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @param {CreateRoomDto} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerCreate(body: CreateRoomDto, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling roomsControllerCreate.');
            }
            const localVarPath = `/rooms`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
          delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"CreateRoomDto" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindAll(options: any = {}): FetchArgs {
            const localVarPath = `/rooms`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
          delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindOne(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling roomsControllerFindOne.');
            }
            const localVarPath = `/rooms/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
          delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomsApi - functional programming interface
 * @export
 */
export const RoomsApiFp = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {CreateRoomDto} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerCreate(body: CreateRoomDto, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Room> {
            const localVarFetchArgs = RoomsApiFetchParamCreator(configuration).roomsControllerCreate(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindAll(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Room[]> {
            const localVarFetchArgs = RoomsApiFetchParamCreator(configuration).roomsControllerFindAll(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindOne(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = RoomsApiFetchParamCreator(configuration).roomsControllerFindOne(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * RoomsApi - factory interface
 * @export
 */
export const RoomsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         *
         * @param {CreateRoomDto} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerCreate(body: CreateRoomDto, options?: any) {
            return RoomsApiFp(configuration).roomsControllerCreate(body, options)(fetch, basePath);
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindAll(options?: any) {
            return RoomsApiFp(configuration).roomsControllerFindAll(options)(fetch, basePath);
        },
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomsControllerFindOne(id: string, options?: any) {
            return RoomsApiFp(configuration).roomsControllerFindOne(id, options)(fetch, basePath);
        },
    };
};

/**
 * RoomsApi - object-oriented interface
 * @export
 * @class RoomsApi
 * @extends {BaseAPI}
 */
export class RoomsApi extends BaseAPI {
    /**
     *
     * @param {CreateRoomDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public roomsControllerCreate(body: CreateRoomDto, options?: any) {
        return RoomsApiFp(this.configuration).roomsControllerCreate(body, options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public roomsControllerFindAll(options?: any) {
        return RoomsApiFp(this.configuration).roomsControllerFindAll(options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public roomsControllerFindOne(id: string, options?: any) {
        return RoomsApiFp(this.configuration).roomsControllerFindOne(id, options)(this.fetch, this.basePath);
    }

}