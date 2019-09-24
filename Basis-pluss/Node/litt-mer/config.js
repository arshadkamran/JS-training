const env = process.envNODE_ENV || "development";
if(env === "development") {
    const config = require("./config.json");
    const envconfig = config[env];
    Object.keys(envconfig).forEach(key => {
        process.env[key] = envconfig [key];
    });
//    console.log(config);
//    console.log(envconfig);

}