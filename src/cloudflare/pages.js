/**
 * Use Cloudflare Pages to deploy your static site.
 */
export async function deploy(deployHookUrl) {
    try {
        const response = await fetch(deployHookUrl, {
            method: 'POST',
        });

        if (response.ok) {
            return 'Deployment triggered successfully!';
        } else {
            return 'Failed to trigger deployment. Please check the deploy hook URL.';
        }
    } catch (error) {
        console.error('Error triggering deployment:', error);
        return 'An error occurred while triggering deployment.';
    }
}
