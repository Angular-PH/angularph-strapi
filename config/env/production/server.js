module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://angularph-api.azurewebsites.net",
    admin: {
      url: "https://blue-island-06fc01600.2.azurestaticapps.net",
      serveAdminPanel: true,
    },
});