module.exports = {
    apps: [
        {   
            name: "flexpoint-prod-main-website",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            watch: true, // Enable watch mode
            ignore_watch: ["node_modules", "logs"],
            watch_options: {
                followSymlinks: false,
                usePolling: true,
            },
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};