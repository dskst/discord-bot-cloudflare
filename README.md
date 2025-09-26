# discord-bot-cloudflare

A simple discord bot that uses the Cloudflare API to update the Cloudflare Pages.

## Installation

1. Clone the repository
2. Install the dependencies
3. Create a KV namespace in Cloudflare dashboard:
    - Go to Cloudflare Dashboard → Workers & Pages → KV
    - Create a namespace named "CONFIG_KV"
    - Create another namespace for preview (e.g., "CONFIG_KV_PREVIEW")
4. Create a `.dev.env` file and add the following variables:
    - `DISCORD_TOKEN` - The token of the discord bot
    - `DISCORD_APP_ID` - The ID of the discord application
    - `DISCORD_PUBLIC_KEY` - The public key of the discord application
    - `DEPLOY_HOOK_URL` - The URL of the Cloudflare Pages deploy hook
    - `CONFIG_KV_NAMESPACE_ID` - The ID of the production KV namespace
    - `CONFIG_KV_NAMESPACE_PREVIEW_ID` - The ID of the preview KV namespace
5. Set production environment variables by running `wrangler secret put` for each secret variable and set KV namespace IDs as environment variables
6. Deploy the bot by running `npm run publish`

## Usage
### Commands
#### deploy4page
The bot listens for the `deploy4page` command and updates the Cloudflare Pages by sending a POST request to the deploy hook URL.

## Acknowledgements

This project was inspired by [discord/cloudflare-sample-app](https://github.com/discord/cloudflare-sample-app).
