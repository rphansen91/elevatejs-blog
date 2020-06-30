---
title: Generate All CRUD and Pagination Operations (10 minutes or less)
publishedAt: 2020-06-29
description: React state management library
author: Ryan P. Hansen
urlToImage: ../images/nepal.jpg
sourceName: TS Mongo Codegen
path: /blog/mongo-backed-graphql/
type: post
---

# Generate All CRUD and Pagination Operations (10 minutes or less)

GraphQL and its schema driven development methodology lends it's self nicely for code generation. After creating dozens of MongoDB backed GraphQL Apis over the past few years their are quite a few patterns that have stood out at least when.

*Let's move some mountains!*

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

With these basic yet useful patters generated it allows the developer to focus on how the end user interacts with the data. 

Less time as a result is spent doing error prone tasks like manipulating data types, and more time is spent delivering value.
