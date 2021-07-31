# Goal

This project was utilized as a preparation exercise for Project 3 and learning exercise for serverless application.

_NOTE: Homework 14 required creation of a similar blog posting app_

### Stack

- Hosting/Deployment: AWS Amplify/Serverless
- Auth: AWS Cognito
- API: GraphQL
- DB: DynamoDB
- FrontEnd: Nextjs/TailwindCSS

_[Deployed app found here](https://d2hjrdqcx090np.cloudfront.net/)_

# Application

_NOTE: further detail of application found in NOTES.txt_

### Nextjs

The Nextjs framework was chosen to provide application of more advanced front-end concepts. Implemented concepts include hybrid build/request time page generation, page routing, route pre-fetching, incremental static hydration, and API integration.

### Auth

Amplify allows Cognito integration for user and page authentication/authorization. Cognito is also applied in the GraphQL methods for authorized data fetching.

### API

GraphQL is leveraged within the Amplify CLI to create a Post model. This method creates streamlined testing within the AppSync dashboard, and data relations within DynamoDB.

### Hosting/Deployment

With AWS becoming an industry staple, AWS Amplify was chosen to apply serverless architecture. Backend deployments were issued with Amplify CLI and app deployment was accomplished using serverless-next abstraction.

## TODOs

Lots of todos.

- Add authorized commenting to posts
- Image optimization and img preview on Home page
- Styling
- Cache control
- Post filtering methods
- Custom Domain
