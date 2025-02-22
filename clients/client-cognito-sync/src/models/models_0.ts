// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CognitoSyncServiceException as __BaseException } from "./CognitoSyncServiceException";

/**
 * @public
 * An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
 */
export class AlreadyStreamedException extends __BaseException {
  readonly name: "AlreadyStreamedException" = "AlreadyStreamedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyStreamedException, __BaseException>) {
    super({
      name: "AlreadyStreamedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyStreamedException.prototype);
  }
}

/**
 * @public
 * The input for the BulkPublish operation.
 */
export interface BulkPublishRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * The output for the BulkPublish operation.
 */
export interface BulkPublishResponse {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;
}

/**
 * @public
 * An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
 */
export class DuplicateRequestException extends __BaseException {
  readonly name: "DuplicateRequestException" = "DuplicateRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequestException, __BaseException>) {
    super({
      name: "DuplicateRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequestException.prototype);
  }
}

/**
 * @public
 * Indicates an internal service
 *       error.
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * @public
 * Thrown when a request parameter does not comply
 *       with the associated constraints.
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * @public
 * Thrown when a user is not authorized to access the
 *       requested resource.
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
  }
}

/**
 * @public
 * Thrown if the resource doesn't
 *       exist.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * A request to delete the specific
 *       dataset.
 */
export interface DeleteDatasetRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * @public
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;
}

/**
 * @public
 * A collection of data for an identity pool. An identity pool can
 *       have multiple datasets. A dataset is per identity and can be general or associated with a
 *       particular entity in an application (like a saved game). Datasets are automatically created if
 *       they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
 *       pairs.
 */
export interface Dataset {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId?: string;

  /**
   * @public
   * A string of up to 128 characters. Allowed characters
   *       are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName?: string;

  /**
   * @public
   * Date on which the dataset was
   *       created.
   */
  CreationDate?: Date;

  /**
   * @public
   * Date when the dataset was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * The device that made the last change to this
   *       dataset.
   */
  LastModifiedBy?: string;

  /**
   * @public
   * Total size in bytes of the records in this
   *       dataset.
   */
  DataStorage?: number;

  /**
   * @public
   * Number of records in this dataset.
   */
  NumRecords?: number;
}

/**
 * @public
 * Response to a successful DeleteDataset
 *       request.
 */
export interface DeleteDatasetResponse {
  /**
   * @public
   * A collection of data for an identity pool.
   *       An identity pool can have multiple datasets. A dataset is per identity and can be general or
   *       associated with a particular entity in an application (like a saved game). Datasets are
   *       automatically created if they don't exist. Data is synced by dataset, and a dataset can hold
   *       up to 1MB of key-value pairs.
   */
  Dataset?: Dataset;
}

/**
 * @public
 * Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
  }
}

/**
 * @public
 * Thrown if the request is
 *       throttled.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * @public
 * A request for meta data about a dataset (creation
 *       date, number of records, size) by owner and dataset name.
 */
export interface DescribeDatasetRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * @public
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;
}

/**
 * @public
 * Response to a successful DescribeDataset
 *       request.
 */
export interface DescribeDatasetResponse {
  /**
   * @public
   * Meta data for a collection of data for an
   *       identity. An identity can have multiple datasets. A dataset can be general or associated with
   *       a particular entity in an application (like a saved game). Datasets are automatically created
   *       if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value
   *       pairs.
   */
  Dataset?: Dataset;
}

/**
 * @public
 * A request for usage information about
 *       the identity pool.
 */
export interface DescribeIdentityPoolUsageRequest {
  /**
   * @public
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * Usage information for the identity
 *       pool.
 */
export interface IdentityPoolUsage {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * @public
   * Number of sync sessions for the
   *       identity pool.
   */
  SyncSessionsCount?: number;

  /**
   * @public
   * Data storage information for the identity
   *       pool.
   */
  DataStorage?: number;

  /**
   * @public
   * Date on which the identity pool was
   *       last modified.
   */
  LastModifiedDate?: Date;
}

/**
 * @public
 * Response to a successful
 *       DescribeIdentityPoolUsage request.
 */
export interface DescribeIdentityPoolUsageResponse {
  /**
   * @public
   * Information about the
   *       usage of the identity pool.
   */
  IdentityPoolUsage?: IdentityPoolUsage;
}

/**
 * @public
 * A request for information about the usage of
 *       an identity pool.
 */
export interface DescribeIdentityUsageRequest {
  /**
   * @public
   * A name-spaced GUID (for
   *       example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID
   *       generation is unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;
}

/**
 * @public
 * Usage information for the identity.
 */
export interface IdentityUsage {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId?: string;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * @public
   * Date on which the identity was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * Number of datasets for the
   *       identity.
   */
  DatasetCount?: number;

  /**
   * @public
   * Total data storage for this
   *       identity.
   */
  DataStorage?: number;
}

/**
 * @public
 * The response to a successful
 *       DescribeIdentityUsage request.
 */
export interface DescribeIdentityUsageResponse {
  /**
   * @public
   * Usage information for the
   *       identity.
   */
  IdentityUsage?: IdentityUsage;
}

/**
 * @public
 * The input for the GetBulkPublishDetails operation.
 */
export interface GetBulkPublishDetailsRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BulkPublishStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BulkPublishStatus = (typeof BulkPublishStatus)[keyof typeof BulkPublishStatus];

/**
 * @public
 * The output for the GetBulkPublishDetails operation.
 */
export interface GetBulkPublishDetailsResponse {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * @public
   * The date/time at which the last bulk publish was initiated.
   */
  BulkPublishStartTime?: Date;

  /**
   * @public
   * If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.
   */
  BulkPublishCompleteTime?: Date;

  /**
   * @public
   * Status of the last bulk publish operation, valid values are:
   *       <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p>
   *       <p>IN_PROGRESS - Data is being published to the configured stream</p>
   *       <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p>
   *       <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>
   */
  BulkPublishStatus?: BulkPublishStatus;

  /**
   * @public
   * If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.
   */
  FailureMessage?: string;
}

/**
 * @public
 * <p>A request for a list of the configured Cognito Events</p>
 */
export interface GetCognitoEventsRequest {
  /**
   * @public
   * <p>The Cognito Identity Pool ID for the request</p>
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * <p>The response from the GetCognitoEvents request</p>
 */
export interface GetCognitoEventsResponse {
  /**
   * @public
   * <p>The Cognito Events returned from the GetCognitoEvents request</p>
   */
  Events?: Record<string, string>;
}

/**
 * @public
 * <p>The input for the GetIdentityPoolConfiguration operation.</p>
 */
export interface GetIdentityPoolConfigurationRequest {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool for which to return a configuration.</p>
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type StreamingStatus = (typeof StreamingStatus)[keyof typeof StreamingStatus];

/**
 * @public
 * Configuration options for configure Cognito streams.
 */
export interface CognitoStreams {
  /**
   * @public
   * The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.
   */
  StreamName?: string;

  /**
   * @public
   * The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.
   */
  RoleArn?: string;

  /**
   * @public
   * Status of the Cognito streams. Valid values are:
   *       <p>ENABLED - Streaming of updates to identity pool is enabled.</p>
   *       <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   */
  StreamingStatus?: StreamingStatus;
}

/**
 * @public
 * <p>Configuration options to be applied to the identity pool.</p>
 */
export interface PushSync {
  /**
   * @public
   * <p>List of SNS platform application ARNs that could be used by clients.</p>
   */
  ApplicationArns?: string[];

  /**
   * @public
   * <p>A role configured to allow Cognito to call SNS on behalf of the developer.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>The output for the GetIdentityPoolConfiguration operation.</p>
 */
export interface GetIdentityPoolConfigurationResponse {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * @public
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * @public
 * Request for a list of datasets for an
 *       identity.
 */
export interface ListDatasetsRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * @public
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * @public
   * The maximum number of results to be
   *       returned.
   */
  MaxResults?: number;
}

/**
 * @public
 * Returned for a successful ListDatasets
 *       request.
 */
export interface ListDatasetsResponse {
  /**
   * @public
   * A set of datasets.
   */
  Datasets?: Dataset[];

  /**
   * @public
   * Number of datasets returned.
   */
  Count?: number;

  /**
   * @public
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;
}

/**
 * @public
 * A request for usage information on an
 *       identity pool.
 */
export interface ListIdentityPoolUsageRequest {
  /**
   * @public
   * A pagination token for obtaining
   *       the next page of results.
   */
  NextToken?: string;

  /**
   * @public
   * The maximum number of results to
   *       be returned.
   */
  MaxResults?: number;
}

/**
 * @public
 * Returned for a successful
 *       ListIdentityPoolUsage request.
 */
export interface ListIdentityPoolUsageResponse {
  /**
   * @public
   * Usage information for
   *       the identity pools.
   */
  IdentityPoolUsages?: IdentityPoolUsage[];

  /**
   * @public
   * The maximum number of results to
   *       be returned.
   */
  MaxResults?: number;

  /**
   * @public
   * Total number of identities for the
   *       identity pool.
   */
  Count?: number;

  /**
   * @public
   * A pagination token for obtaining
   *       the next page of results.
   */
  NextToken?: string;
}

/**
 * @public
 * A request for a list of records.
 */
export interface ListRecordsRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * @public
   * A string of up to 128 characters. Allowed
   *       characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName: string | undefined;

  /**
   * @public
   * The last server sync count for this
   *       record.
   */
  LastSyncCount?: number;

  /**
   * @public
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * @public
   * The maximum number of results to be
   *       returned.
   */
  MaxResults?: number;

  /**
   * @public
   * A token containing a session ID,
   *       identity ID, and expiration.
   */
  SyncSessionToken?: string;
}

/**
 * @public
 * The basic data structure of a dataset.
 */
export interface _Record {
  /**
   * @public
   * The key for the record.
   */
  Key?: string;

  /**
   * @public
   * The value for the record.
   */
  Value?: string;

  /**
   * @public
   * The server sync count for this record.
   */
  SyncCount?: number;

  /**
   * @public
   * The date on which the record was last
   *       modified.
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * The user/device that made the last change to this
   *       record.
   */
  LastModifiedBy?: string;

  /**
   * @public
   * The last modified date of the client
   *       device.
   */
  DeviceLastModifiedDate?: Date;
}

/**
 * @public
 * Returned for a successful
 *       ListRecordsRequest.
 */
export interface ListRecordsResponse {
  /**
   * @public
   * A list of all records.
   */
  Records?: _Record[];

  /**
   * @public
   * A pagination token for obtaining the next
   *       page of results.
   */
  NextToken?: string;

  /**
   * @public
   * Total number of records.
   */
  Count?: number;

  /**
   * @public
   * Server sync count for this
   *       dataset.
   */
  DatasetSyncCount?: number;

  /**
   * @public
   * The user/device that made the last
   *       change to this record.
   */
  LastModifiedBy?: string;

  /**
   * @public
   * Names of merged
   *       datasets.
   */
  MergedDatasetNames?: string[];

  /**
   * @public
   * Indicates whether the dataset
   *       exists.
   */
  DatasetExists?: boolean;

  /**
   * @public
   * A boolean value
   *       specifying whether to delete the dataset locally.
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * @public
   * A token containing a session ID,
   *       identity ID, and expiration.
   */
  SyncSessionToken?: string;
}

/**
 * @public
 */
export class InvalidConfigurationException extends __BaseException {
  readonly name: "InvalidConfigurationException" = "InvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationException, __BaseException>) {
    super({
      name: "InvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Platform = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;

/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * <p>A request to RegisterDevice.</p>
 */
export interface RegisterDeviceRequest {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. Here, the ID of the pool that the identity belongs to.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * <p>The unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * @public
   * <p>The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).</p>
   */
  Platform: Platform | undefined;

  /**
   * @public
   * <p>The push token.</p>
   */
  Token: string | undefined;
}

/**
 * @public
 * <p>Response to a RegisterDevice request.</p>
 */
export interface RegisterDeviceResponse {
  /**
   * @public
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;
}

/**
 * @public
 * <p>A request to configure Cognito Events"</p>"
 */
export interface SetCognitoEventsRequest {
  /**
   * @public
   * <p>The Cognito Identity Pool to use when configuring Cognito Events</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * <p>The events to configure</p>
   */
  Events: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * @public
 * <p>The input for the SetIdentityPoolConfiguration operation.</p>
 */
export interface SetIdentityPoolConfigurationRequest {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. This is the ID of the pool to modify.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * @public
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * @public
 * <p>The output for the SetIdentityPoolConfiguration operation</p>
 */
export interface SetIdentityPoolConfigurationResponse {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: PushSync;

  /**
   * @public
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: CognitoStreams;
}

/**
 * @public
 * <p>A request to SubscribeToDatasetRequest.</p>
 */
export interface SubscribeToDatasetRequest {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which the identity belongs.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * <p>Unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * @public
   * <p>The name of the dataset to subcribe to.</p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 * <p>Response to a SubscribeToDataset request.</p>
 */
export interface SubscribeToDatasetResponse {}

/**
 * @public
 * <p>A request to UnsubscribeFromDataset.</p>
 */
export interface UnsubscribeFromDatasetRequest {
  /**
   * @public
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by
   *          Amazon Cognito. The ID of the pool to which this identity belongs.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * <p>Unique ID for this identity.</p>
   */
  IdentityId: string | undefined;

  /**
   * @public
   * <p>The name of the dataset from which to unsubcribe.</p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 * <p>Response to an UnsubscribeFromDataset request.</p>
 */
export interface UnsubscribeFromDatasetResponse {}

/**
 * @public
 * <p>The AWS Lambda function returned invalid output or an exception.</p>
 */
export class InvalidLambdaFunctionOutputException extends __BaseException {
  readonly name: "InvalidLambdaFunctionOutputException" = "InvalidLambdaFunctionOutputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaFunctionOutputException, __BaseException>) {
    super({
      name: "InvalidLambdaFunctionOutputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaFunctionOutputException.prototype);
  }
}

/**
 * @public
 * <p>AWS Lambda throttled your account, please contact AWS Support</p>
 */
export class LambdaThrottledException extends __BaseException {
  readonly name: "LambdaThrottledException" = "LambdaThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LambdaThrottledException, __BaseException>) {
    super({
      name: "LambdaThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LambdaThrottledException.prototype);
  }
}

/**
 * @public
 * Thrown when the limit on the number of objects or
 *       operations has been exceeded.
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Operation = {
  remove: "remove",
  replace: "replace",
} as const;

/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * An update operation for a record.
 */
export interface RecordPatch {
  /**
   * @public
   * An operation, either replace or remove.
   */
  Op: Operation | undefined;

  /**
   * @public
   * The key associated with the record patch.
   */
  Key: string | undefined;

  /**
   * @public
   * The value associated with the record
   *       patch.
   */
  Value?: string;

  /**
   * @public
   * Last known server sync count for this record. Set
   *       to 0 if unknown.
   */
  SyncCount: number | undefined;

  /**
   * @public
   * The last modified date of the client
   *       device.
   */
  DeviceLastModifiedDate?: Date;
}

/**
 * @public
 * A request to post updates to records or add and
 *       delete records for a dataset and user.
 */
export interface UpdateRecordsRequest {
  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityPoolId: string | undefined;

  /**
   * @public
   * A name-spaced GUID (for example,
   *       us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is
   *       unique within a region.
   */
  IdentityId: string | undefined;

  /**
   * @public
   * A string of up to 128 characters.
   *       Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.'
   *       (dot).
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * A list of patch
   *       operations.
   */
  RecordPatches?: RecordPatch[];

  /**
   * @public
   * The SyncSessionToken returned by a
   *       previous call to ListRecords for this dataset and identity.
   */
  SyncSessionToken: string | undefined;

  /**
   * @public
   * Intended to supply a device ID that
   *       will populate the lastModifiedBy field referenced in other methods. The
   *          ClientContext field is not yet implemented.
   */
  ClientContext?: string;
}

/**
 * @public
 * Returned for a successful
 *       UpdateRecordsRequest.
 */
export interface UpdateRecordsResponse {
  /**
   * @public
   * A list of records that have been
   *       updated.
   */
  Records?: _Record[];
}
