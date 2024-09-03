# discord-bot-cloudflare

A simple discord bot that uses the Cloudflare API to update the Cloudflare Pages.

## Installation

1. Clone the repository
2. Install the dependencies
3. Create a `.dev.env` file and add the following variables:
    - `DISCORD_TOKEN` - The token of the discord bot
    - `DISCORD_APP_ID` - The ID of the discord application
    - `DISCORD_PUBLIC_KEY` - The public key of the discord application
    - `DEPLOY_HOOK_URL` - The URL of the Cloudflare Pages deploy hook
4. Set production environment variables by running `wrangler secret put` for each variable in the `.dev.env` file
5. Deploy the bot by running `npm run publish`

## Usage
### Commands
#### deploy4page
The bot listens for the `deploy4page` command and updates the Cloudflare Pages by sending a POST request to the deploy hook URL.

## Acknowledgements

This project was inspired by [discord/cloudflare-sample-app](https://github.com/discord/cloudflare-sample-app).
