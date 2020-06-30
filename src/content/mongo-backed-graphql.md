---
title: Generate All CRUD and Pagination Operations (10 minutes or less)
publishedAt: 2020-06-29
description: With these basic yet useful patters generated it allows the developer to focus on how the end user interacts with the data. 
author: Ryan P. Hansen
urlToImage: ../images/nepal.jpg
sourceName: TS Mongo Codegen
path: /blog/mongo-backed-graphql/
type: post
---

# Generate All CRUD and Pagination Operations (10 minutes or less)

GraphQL and its schema driven development methodology allows for a lot of the common tasks around data resources to be abstracted. 

[**ts-mongo-codegen**](https://github.com/rphansen91/ts-mongo-codegen) uses your GraphQL schema and with the inclusion of (opt-in) directives generate all of the CRUD operations for the specified type.

* Insert Resource
* Insert Many Resources
* Find Resource By ObjectID
* Find Many Resources By ObjectIDs
* Paginated and Sorted Queries
* Filtered Totals
* Update Resource By ObjectID
* Update Many Resources By ObjectIDs
* Remove Resource By ObjectID
* Remove Many Resources By ObjectIDs

With these basic yet useful patters generated it allows the developer to focus on how the end user interacts with the data. 

Less time as a result is spent doing error prone tasks like manipulating data types, and more time is spent delivering *visible* value.

*Let's move some mountains!*

You can follow along by forking the [`mountains-api`](https://github.com/rphansen91/mountains-api).

Here is the `Mountain` type that we will be using and augmenting today.

## Type Defs

```js
import gql from 'graphql-tag'

export const mountainSchema = gql`
  type Mountain @collection(name: "mountains", crud: true) {
    id: ObjectId
    name: String @insert @set @filter
    meters: Float @insert @set @filter
    feet: Float @insert @set @filter
    location: String @insert @set @filter
  }
`
```

## Directives

### @collection

With this directive declared [**ts-mongo-codegen**](https://github.com/rphansen91/ts-mongo-codegen) will generate interfaces and factory functions that can be made executable when starting the GraphQL server.

#### Options

- name: The name of the mongo collection
- crud: Should generate crud types and resolvers

### @insert

The `@insert` directive tells [**ts-mongo-codegen**](https://github.com/rphansen91/ts-mongo-codegen) which fields should be included in the **C**REATE types.

### @filter

The `@filter` directive tells [**ts-mongo-codegen**](https://github.com/rphansen91/ts-mongo-codegen) which fields should be included in the **R**EAD types.

### @set

The `@set` directive tells [**ts-mongo-codegen**](https://github.com/rphansen91/ts-mongo-codegen) which fields should be included in the **U**PDATE types.

## Generate

Now that we have our `Mountain` type defined. We will set up our `codegen.json` which defines the options for our GraphQL Codegen. More documentation can be found [here](https://graphql-code-generator.com/).

```json
{
  "schema": ["./node_modules/ts-mongo-codegen/dist/types/mongo-types.ts", "./src/gql/*.ts"],
  "generates": {
    "./src/types.generated.ts": {
      "plugins": [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        "ts-mongo-codegen"
      ]
    }
  }
}
```

With the code generated we can put it all together into an executable schema.

```js
import { makeExecutableSchema } from '@graphql-tools/schema'
import { addResolveFunctionsToSchema } from 'apollo-server'
import { graphqlTypeDate, graphqlTypeObjectId, makeAugmentedSchema, mongoTypeDefs } from 'ts-mongo-codegen'
import { mountainMutationResolvers, mountainQueryResolvers, mountainResolvers } from './types.generated'
import { composeResolvers } from '@graphql-tools/resolvers-composition'
import { mountainSchema } from './gql/mountains'
import { isAuthenticated } from './auth'

// Make an executable schema with the mongo types and our custom mountain schema type
const executableSchema = makeExecutableSchema({
  typeDefs: [mongoTypeDefs, mountainSchema],
})

// Add CRUD operations to the Mountain type by augmenting the schema
export const schema = makeAugmentedSchema(executableSchema)

// The mountainResolvers, mountainMutationResolvers, and mountainQueryResolvers are generated types
// Run `yarn generate` to update types or add more
const resolvers = composeResolvers(
  {
    Date: graphqlTypeDate,
    Mountain: mountainResolvers,
    Mutation: {
      ...mountainMutationResolvers,
    },
    ObjectId: graphqlTypeObjectId,
    Query: {
      ...mountainQueryResolvers,
    },
  },
  {
    // Make sure mutation requests are authenticated
    Mutation: [isAuthenticated()],
  }
)

// Finally we add our generated resolvers to the schema
addResolveFunctionsToSchema({
  resolvers,
  schema,
})
```

And with that we are done. We can view our results in the GraphQL playground.

## **C**REATE

## Insert Resource

<iframe alt="Insert Resource Playground" src="https://graphqlbin.com/v2/K6LYt8" width="100%" height="800px" frameborder="0"></iframe>

## Insert Many Resources

<iframe alt="Insert Many Resources Playground" src="https://graphqlbin.com/v2/PYz6Ho" width="100%" height="800px" frameborder="0"></iframe>

## **R**EAD

### Find Resource By ObjectID

<iframe alt="Find Resource By ObjectID Playground" src="https://graphqlbin.com/v2/RLP5iQ" width="100%" height="800px" frameborder="0"></iframe>

### Find Many Resources By ObjectIDs

<iframe alt="Find Many Resources By ObjectIDs Playground" src="https://graphqlbin.com/v2/N8YpcV" width="100%" height="800px" frameborder="0"></iframe>

### Paginated and Sorted Queries

<iframe alt="Paginated and Sorted Playground" src="https://www.graphqlbin.com/v2/JPNNFK" width="100%" height="800px" frameborder="0"></iframe>

### Filtered Totals

<iframe alt="Filtered Totals Playground" src="https://graphqlbin.com/v2/QO6jho" width="100%" height="800px" frameborder="0"></iframe>

## **U**PDATE

### Update Resource By ObjectID

<iframe alt="Update Resource By ObjectID Playground" src="https://graphqlbin.com/v2/W8QohP" width="100%" height="800px" frameborder="0"></iframe>

### Update Many Resources By ObjectIDs

<iframe alt="Update Many Resources By ObjectIDs Playground" src="https://graphqlbin.com/v2/ZWzXuX" width="100%" height="800px" frameborder="0"></iframe>

## **D**ELETE

### Remove Resource By ObjectID

<iframe alt="Remove Resource By ObjectID Playground" src="https://graphqlbin.com/v2/OZPXsp" width="100%" height="800px" frameborder="0"></iframe>

### Remove Many Resources By ObjectIDs

<iframe alt="Remove Many Resources By ObjectIDs Playground" src="https://graphqlbin.com/v2/YMyxuA" width="100%" height="800px" frameborder="0"></iframe>

## Conclusion

In this post we generated all of the basic CRUD operations with very little effort. Our clients whether that be web or mobile will now have a very predictable backend backed by MongoDB.

In this article we did not go into creating the context dependency necessary for the resolvers. We will go over that in a different post but if you are interested can find the implementation [**here**](https://github.com/rphansen91/mountains-api/blob/master/src/context.ts).