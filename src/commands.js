/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const DEPLOY4PAGE_COMMAND = {
  name: 'deploy4page',
  description: 'Deploy cloudflare pages.',
};

export const INVITE_COMMAND = {
  name: 'invite',
  description: 'Get an invite link to add the bot to your server',
};

export const SET_DEPLOY_HOOK_COMMAND = {
  name: 'set-deploy-hook',
  description: 'Set the deployment hook URL',
  options: [
    {
      name: 'url',
      description: 'The deployment hook URL',
      type: 3,
      required: true,
    },
  ],
};
