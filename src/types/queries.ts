export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: any; output: any };
  BigInt: { input: any; output: any };
  Cursor: { input: any; output: any };
  Date: { input: any; output: any };
  Datetime: { input: any; output: any };
  JSON: { input: any; output: any };
  Opaque: { input: any; output: any };
  Time: { input: any; output: any };
  UUID: { input: any; output: any };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]["input"]>;
  gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Date"]["input"]>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]["input"]>;
  gt?: InputMaybe<Scalars["Datetime"]["input"]>;
  gte?: InputMaybe<Scalars["Datetime"]["input"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]["input"]>;
  lte?: InputMaybe<Scalars["Datetime"]["input"]>;
  neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `ahmed` collection */
  deleteFromahmedCollection: AhmedDeleteResponse;
  /** Deletes zero or more records from the `customer` collection */
  deleteFromcustomerCollection: CustomerDeleteResponse;
  /** Deletes zero or more records from the `order` collection */
  deleteFromorderCollection: OrderDeleteResponse;
  /** Deletes zero or more records from the `orders` collection */
  deleteFromordersCollection: OrdersDeleteResponse;
  /** Deletes zero or more records from the `orders_enum` collection */
  deleteFromorders_enumCollection: Orders_EnumDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  get_all_orders_v2?: Maybe<OrdersConnection>;
  get_total_order_price?: Maybe<Scalars["BigFloat"]["output"]>;
  get_total_order_pricedd?: Maybe<Scalars["BigFloat"]["output"]>;
  /** Adds one or more `ahmed` records to the collection */
  insertIntoahmedCollection?: Maybe<AhmedInsertResponse>;
  /** Adds one or more `customer` records to the collection */
  insertIntocustomerCollection?: Maybe<CustomerInsertResponse>;
  /** Adds one or more `order` records to the collection */
  insertIntoorderCollection?: Maybe<OrderInsertResponse>;
  /** Adds one or more `orders` records to the collection */
  insertIntoordersCollection?: Maybe<OrdersInsertResponse>;
  /** Adds one or more `orders_enum` records to the collection */
  insertIntoorders_enumCollection?: Maybe<Orders_EnumInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  sum_order_prices?: Maybe<Scalars["BigFloat"]["output"]>;
  /** Updates zero or more records in the `ahmed` collection */
  updateahmedCollection: AhmedUpdateResponse;
  /** Updates zero or more records in the `customer` collection */
  updatecustomerCollection: CustomerUpdateResponse;
  /** Updates zero or more records in the `order` collection */
  updateorderCollection: OrderUpdateResponse;
  /** Updates zero or more records in the `orders` collection */
  updateordersCollection: OrdersUpdateResponse;
  /** Updates zero or more records in the `orders_enum` collection */
  updateorders_enumCollection: Orders_EnumUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromahmedCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<AhmedFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcustomerCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<CustomerFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromorderCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OrderFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromordersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OrdersFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromorders_EnumCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Orders_EnumFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ProfilesFilter>;
};

/** The root type for creating and mutating data */
export type MutationGet_All_Orders_V2Args = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoahmedCollectionArgs = {
  objects: Array<AhmedInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocustomerCollectionArgs = {
  objects: Array<CustomerInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoorderCollectionArgs = {
  objects: Array<OrderInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoordersCollectionArgs = {
  objects: Array<OrdersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoorders_EnumCollectionArgs = {
  objects: Array<Orders_EnumInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateahmedCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<AhmedFilter>;
  set: AhmedUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecustomerCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<CustomerFilter>;
  set: CustomerUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateorderCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OrderFilter>;
  set: OrderUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateordersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OrdersFilter>;
  set: OrdersUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateorders_EnumCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Orders_EnumFilter>;
  set: Orders_EnumUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars["Opaque"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `ahmed` */
  ahmedCollection?: Maybe<AhmedConnection>;
  /** A pagable collection of type `customer` */
  customerCollection?: Maybe<CustomerConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `order` */
  orderCollection?: Maybe<OrderConnection>;
  /** A pagable collection of type `orders` */
  ordersCollection?: Maybe<OrdersConnection>;
  /** A pagable collection of type `orders_enum` */
  orders_enumCollection?: Maybe<Orders_EnumConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
};

/** The root type for querying data */
export type QueryAhmedCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<AhmedFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AhmedOrderBy>>;
};

/** The root type for querying data */
export type QueryCustomerCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CustomerFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CustomerOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryOrderCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};

/** The root type for querying data */
export type QueryOrdersCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The root type for querying data */
export type QueryOrders_EnumCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Orders_EnumFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Orders_EnumOrderBy>>;
};

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  ilike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  iregex?: InputMaybe<Scalars["String"]["input"]>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]["input"]>;
  gt?: InputMaybe<Scalars["Time"]["input"]>;
  gte?: InputMaybe<Scalars["Time"]["input"]>;
  in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]["input"]>;
  lte?: InputMaybe<Scalars["Time"]["input"]>;
  neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Time"]["input"]>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]["input"]>;
  in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
};

export type Ahmed = Node & {
  __typename?: "ahmed";
  age?: Maybe<Scalars["BigInt"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
};

export type AhmedConnection = {
  __typename?: "ahmedConnection";
  edges: Array<AhmedEdge>;
  pageInfo: PageInfo;
};

export type AhmedDeleteResponse = {
  __typename?: "ahmedDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ahmed>;
};

export type AhmedEdge = {
  __typename?: "ahmedEdge";
  cursor: Scalars["String"]["output"];
  node: Ahmed;
};

export type AhmedFilter = {
  age?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AhmedFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AhmedFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AhmedFilter>>;
};

export type AhmedInsertInput = {
  age?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AhmedInsertResponse = {
  __typename?: "ahmedInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ahmed>;
};

export type AhmedOrderBy = {
  age?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type AhmedUpdateInput = {
  age?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AhmedUpdateResponse = {
  __typename?: "ahmedUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ahmed>;
};

export type Customer = Node & {
  __typename?: "customer";
  email?: Maybe<Scalars["String"]["output"]>;
  first_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  ip_address?: Maybe<Scalars["String"]["output"]>;
  last_name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  orderCollection?: Maybe<OrderConnection>;
  phone?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerOrderCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};

export type CustomerConnection = {
  __typename?: "customerConnection";
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
};

export type CustomerDeleteResponse = {
  __typename?: "customerDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

export type CustomerEdge = {
  __typename?: "customerEdge";
  cursor: Scalars["String"]["output"];
  node: Customer;
};

export type CustomerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CustomerFilter>>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  ip_address?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CustomerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CustomerFilter>>;
  phone?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type CustomerInsertInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ip_address?: InputMaybe<Scalars["String"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerInsertResponse = {
  __typename?: "customerInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

export type CustomerOrderBy = {
  email?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  ip_address?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type CustomerUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  ip_address?: InputMaybe<Scalars["String"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerUpdateResponse = {
  __typename?: "customerUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

export type Order = Node & {
  __typename?: "order";
  customer?: Maybe<Customer>;
  customer_id?: Maybe<Scalars["Int"]["output"]>;
  discount_price?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  order_date?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Scalars["String"]["output"]>;
  purchase_price?: Maybe<Scalars["String"]["output"]>;
  transaction_id?: Maybe<Scalars["String"]["output"]>;
};

export type OrderConnection = {
  __typename?: "orderConnection";
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
};

export type OrderDeleteResponse = {
  __typename?: "orderDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export type OrderEdge = {
  __typename?: "orderEdge";
  cursor: Scalars["String"]["output"];
  node: Order;
};

export type OrderFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrderFilter>>;
  customer_id?: InputMaybe<IntFilter>;
  discount_price?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrderFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrderFilter>>;
  order_date?: InputMaybe<StringFilter>;
  product?: InputMaybe<StringFilter>;
  purchase_price?: InputMaybe<StringFilter>;
  transaction_id?: InputMaybe<StringFilter>;
};

export type OrderInsertInput = {
  customer_id?: InputMaybe<Scalars["Int"]["input"]>;
  discount_price?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  order_date?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<Scalars["String"]["input"]>;
  purchase_price?: InputMaybe<Scalars["String"]["input"]>;
  transaction_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderInsertResponse = {
  __typename?: "orderInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export type OrderOrderBy = {
  customer_id?: InputMaybe<OrderByDirection>;
  discount_price?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  order_date?: InputMaybe<OrderByDirection>;
  product?: InputMaybe<OrderByDirection>;
  purchase_price?: InputMaybe<OrderByDirection>;
  transaction_id?: InputMaybe<OrderByDirection>;
};

export type OrderUpdateInput = {
  customer_id?: InputMaybe<Scalars["Int"]["input"]>;
  discount_price?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  order_date?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<Scalars["String"]["input"]>;
  purchase_price?: InputMaybe<Scalars["String"]["input"]>;
  transaction_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderUpdateResponse = {
  __typename?: "orderUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export enum Order_Status {
  Cancelled = "cancelled",
  Delivered = "delivered",
  Pending = "pending",
  Shipped = "shipped",
}

/** Boolean expression comparing fields on type "order_status" */
export type Order_StatusFilter = {
  eq?: InputMaybe<Order_Status>;
  in?: InputMaybe<Array<Order_Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Order_Status>;
};

export type Orders = Node & {
  __typename?: "orders";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  client_id: Scalars["UUID"]["output"];
  created_at: Scalars["Datetime"]["output"];
  fileUrl?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["UUID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  price?: Maybe<Scalars["BigFloat"]["output"]>;
  zip_code?: Maybe<Scalars["String"]["output"]>;
};

export type OrdersConnection = {
  __typename?: "ordersConnection";
  edges: Array<OrdersEdge>;
  pageInfo: PageInfo;
};

export type OrdersDeleteResponse = {
  __typename?: "ordersDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersEdge = {
  __typename?: "ordersEdge";
  cursor: Scalars["String"]["output"];
  node: Orders;
};

export type OrdersFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrdersFilter>>;
  city?: InputMaybe<StringFilter>;
  client_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrdersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrdersFilter>>;
  price?: InputMaybe<BigFloatFilter>;
  zip_code?: InputMaybe<StringFilter>;
};

export type OrdersInsertInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  client_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  fileUrl?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  zip_code?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrdersInsertResponse = {
  __typename?: "ordersInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  client_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  fileUrl?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  zip_code?: InputMaybe<OrderByDirection>;
};

export type OrdersUpdateInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  client_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  fileUrl?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  zip_code?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrdersUpdateResponse = {
  __typename?: "ordersUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type Orders_Enum = Node & {
  __typename?: "orders_enum";
  id: Scalars["Int"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  status: Order_Status;
};

export type Orders_EnumConnection = {
  __typename?: "orders_enumConnection";
  edges: Array<Orders_EnumEdge>;
  pageInfo: PageInfo;
};

export type Orders_EnumDeleteResponse = {
  __typename?: "orders_enumDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders_Enum>;
};

export type Orders_EnumEdge = {
  __typename?: "orders_enumEdge";
  cursor: Scalars["String"]["output"];
  node: Orders_Enum;
};

export type Orders_EnumFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Orders_EnumFilter>>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Orders_EnumFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Orders_EnumFilter>>;
  status?: InputMaybe<Order_StatusFilter>;
};

export type Orders_EnumInsertInput = {
  status?: InputMaybe<Order_Status>;
};

export type Orders_EnumInsertResponse = {
  __typename?: "orders_enumInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders_Enum>;
};

export type Orders_EnumOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type Orders_EnumUpdateInput = {
  status?: InputMaybe<Order_Status>;
};

export type Orders_EnumUpdateResponse = {
  __typename?: "orders_enumUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Orders_Enum>;
};

export type Profiles = Node & {
  __typename?: "profiles";
  id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  role?: Maybe<Scalars["String"]["output"]>;
};

export type ProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: "profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"]["output"];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  role?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProfilesInsertResponse = {
  __typename?: "profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProfilesUpdateResponse = {
  __typename?: "profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type OrdersFragmentFragment = {
  __typename?: "orders";
  id: any;
  price?: any | null;
  fileUrl?: string | null;
};

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  __typename?: "Query";
  ordersCollection?: {
    __typename?: "ordersConnection";
    edges: Array<{
      __typename?: "ordersEdge";
      node: {
        __typename?: "orders";
        id: any;
        price?: any | null;
        fileUrl?: string | null;
      };
    }>;
  } | null;
};

export type CreateOrderMutationVariables = Exact<{
  price: Scalars["BigFloat"]["input"];
}>;

export type CreateOrderMutation = {
  __typename?: "Mutation";
  insertIntoordersCollection?: {
    __typename?: "ordersInsertResponse";
    records: Array<{ __typename?: "orders"; id: any; price?: any | null }>;
  } | null;
};

export type UpdateOrderMutationVariables = Exact<{
  set: OrdersUpdateInput;
  filter?: InputMaybe<OrdersFilter>;
  atMost: Scalars["Int"]["input"];
}>;

export type UpdateOrderMutation = {
  __typename?: "Mutation";
  updateordersCollection: {
    __typename?: "ordersUpdateResponse";
    records: Array<{ __typename?: "orders"; id: any; price?: any | null }>;
  };
};

export type DeleteOrderMutationVariables = Exact<{
  filter: OrdersFilter;
}>;

export type DeleteOrderMutation = {
  __typename?: "Mutation";
  deleteFromordersCollection: {
    __typename?: "ordersDeleteResponse";
    records: Array<{ __typename?: "orders"; id: any }>;
  };
};
