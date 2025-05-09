/**
 * onecx-shell-bff
 * Backend-For-Frontend (BFF) service for OneCX Shell. This API provides base configuration information for frontends.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tkit_dev@1000kit.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { LoadWorkspaceConfigRequest } from '../model/loadWorkspaceConfigRequest';
// @ts-ignore
import { LoadWorkspaceConfigResponse } from '../model/loadWorkspaceConfigResponse';
// @ts-ignore
import { ProblemDetailResponse } from '../model/problemDetailResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'any'
})
export class WorkspaceConfigBffService {

    protected basePath = 'http://onecx-shell-bff:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Load favicon by theme name
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getThemeFaviconByName(name: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/x-icon', context?: HttpContext}): Observable<Blob>;
    public getThemeFaviconByName(name: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/x-icon', context?: HttpContext}): Observable<HttpResponse<Blob>>;
    public getThemeFaviconByName(name: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/x-icon', context?: HttpContext}): Observable<HttpEvent<Blob>>;
    public getThemeFaviconByName(name: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'image/x-icon', context?: HttpContext}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getThemeFaviconByName.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'image/x-icon'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let localVarPath = `/workspaceConfig/themes/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/favicon`;
        return this.httpClient.request('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Load logo by theme name
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getThemeLogoByName(name: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/*', context?: HttpContext}): Observable<Blob>;
    public getThemeLogoByName(name: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/*', context?: HttpContext}): Observable<HttpResponse<Blob>>;
    public getThemeLogoByName(name: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/*', context?: HttpContext}): Observable<HttpEvent<Blob>>;
    public getThemeLogoByName(name: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'image/*', context?: HttpContext}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getThemeLogoByName.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'image/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let localVarPath = `/workspaceConfig/themes/${this.configuration.encodeParam({name: "name", value: name, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/logo`;
        return this.httpClient.request('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Load all data needed by startup of OneCX UI (components, routes, slots, theme, workspace)
     * @param loadWorkspaceConfigRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loadWorkspaceConfig(loadWorkspaceConfigRequest: LoadWorkspaceConfigRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<LoadWorkspaceConfigResponse>;
    public loadWorkspaceConfig(loadWorkspaceConfigRequest: LoadWorkspaceConfigRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<LoadWorkspaceConfigResponse>>;
    public loadWorkspaceConfig(loadWorkspaceConfigRequest: LoadWorkspaceConfigRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<LoadWorkspaceConfigResponse>>;
    public loadWorkspaceConfig(loadWorkspaceConfigRequest: LoadWorkspaceConfigRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (loadWorkspaceConfigRequest === null || loadWorkspaceConfigRequest === undefined) {
            throw new Error('Required parameter loadWorkspaceConfigRequest was null or undefined when calling loadWorkspaceConfig.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/workspaceConfig`;
        return this.httpClient.request<LoadWorkspaceConfigResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: loadWorkspaceConfigRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
