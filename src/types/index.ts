export interface IJwtAccessTokens {
  access: string
  refresh?: string
  mfa?: string
  exp?: string | number
}
export enum JwtSignature {
  ACCESS_TOKEN = "access",
  REFRESH_TOKEN = "refresh",
  USER_ROLE = "role",
}

export interface IJwtAuthToken {
  userId?: string
  email: string
  mfa?: {
    validated: boolean
    enabled: boolean
  }
  exp?: string | number
}

export type IPermissionType =
  | "BASIC"
  | "BLOCKED"
  | "EDITOR"
  | "FULL_ACCESS"
  | "OBSERVER"
  | "OWNER"
  | "STANDARD"
  | "TRIAL"

export enum AccountOptions {
  Basic = "basic",
  Free = "free",
  Gold = "gold",
}

export interface IAccountFields {
  expired: boolean
  expiresAt: string
  id: string
  isTrial: boolean
  isVerified: boolean
  plan: AccountOptions
  status: AccountStatus
  email?: string
}

export enum Subjects {
  AccountCreated = "account:created",
  AccountDeleted = "account:deleted",
  AccountUpdated = "account:updated",

  CustomerCreated = "customer:created",
  CustomerDeleted = "customer:deleted",

  UserCreated = "user:created",
  UserUpdated = "user:updated",
  UserDeleted = "user:deleted",
  GetUser = "user:request",

  BoardCreated = "board:created",
  BoardDeleted = "board:deleted",
  BoardUpdated = "board:updated",
  BoardViewed = "board:viewed",
  GetBoardById = "board:by:id",
  GetBoards = "boards:list",

  ListCreated = "list:created",
  ListUpdated = "list:updated",
  ListDeleted = "list:deleted",

  NewActivity = "activity:new",
  AuthedActivity = "activity:authenticated",

  Card = "card:created",
  CardUpdated = "card:updated",

  PaymentCreated = "payments:created",
  PaymentFailed = "payments:failed",

  Email = "send:email",
}

export enum ACTION_KEYS {
  CREATE_BOARD = "created:board",
  DELETED_BOARD = "deleted:board",
  ARCHIVED_BOARD = "archived:board",

  CREATE_CARD = "created:card",
  TRANSFER_CARD = "transferred:card",
  COMMENT_ON_CARD = "commented:on:card",
  ADD_CHECKLIST = "added:checklist:to:card",
  MOVE_CARD_TO_LIST = "moved:card:from:list:to:list",
  MOVE_CARD_UP = "moved:card:up",
  MOVE_CARD_DOWN = "moved:card:down",
  DELETED_CARD = "deleted:card",
  ARCHIVED_CARD = "archived:card",
  CONVERT_TASK_TO_CARD = "converted:task:to:card",
  CHANGED_CARD_COVER = "added:card:cover",
  REMOVED_CARD_COVER = "removed:card:cover",
  ADD_CARD_ATTACHMENT = "added:card:attachment",
  REMOVE_CARD_ATTACHMENT = "removed:card:attachment",

  CREATE_LIST = "add:list:to:board",
  TRANSFER_LIST = "transferred:list",
  DELETED_LIST = "deleted:list",
  ARCHIVED_LIST = "archived:list",
  MOVE_LIST_LEFT = "move:list:left",
  MOVE_LIST_RIGHT = "move:list:right",
}

export enum queueGroupNames {
  BOARDS_QUEUE_GROUP = "boards-service",
  CARDS_QUEUE_GROUP = "cards-service",
  LIST_QUEUE_GROUP = "list-service",
  AUTH_QUEUE_GROUP = "auth-service",
  AUTH_ACTIVITY_QUEUE_GROUP = "activity-service",
  ACCOUNT_QUEUE_GROUP = "accounts-service",
  PAYMENTS_QUEUE_GROUP = "payment-service",
  EMAIL_QUEUE_GROUP = "email-service",
}

export enum AccountStatus {
  Active = "active",
  Cancelled = "cancelled",
  Created = "created",
  Pending = "pending",
}

export enum ACTIVITY_TYPES {
  BOARD = "board",
  CARD = "card",
  COMMENT = "comment",
  LIST = "list",
  CHECKLIST = "checklist",
  TASK = "task",
}

export interface INewPayment {
  status: string
  productId: string
  startAt?: string
  expiresAt?: string
  customerId: string
  orderId: string
  ownerId: string
  isTrial: boolean
  plan: string
}

export enum HTTPStatusCode {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,

  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
}
