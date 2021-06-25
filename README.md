## Running Locally

-   Install Dependecies: `npm install`
-   Run Bot: `npm run start:dev`

## Set Environment Variables Locally

File: `.env`

```
ENVIRONMENT=DEVELOPMENT
PATH_URL=api.mercadolibre.com
BOT_TOKEN=8888888888:xxxxxxxxxxxxxxx// PRODUCTION
BOT_TOKEN_DEV=8888888888:xxxxxxxxxxxxxxx // DEVELOPMENT
APP_URL=<https://<your-app-name>.azurewebsites.net/api/<your-api-name>?code=<your-api-function-key>> // Isn't required in development environment 
```

## How To Get a Telegram Bot Token

Find telegram bot named "@botfarther", he will help you with creating and managing your Bot.

## Automatic Deployments

- [Setup Automatic Deploy](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=dotnet)
- Modify your .yml: `github/workflows/master_telegram-experimental.yml`

```
AZURE_FUNCTIONAPP_NAME: <your azure function app name>
AZURE_FUNCTIONAPP_PUBLISH_PROFILE: <your github secret>
NODE_VERSION: '14.x' <default>
```