const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61U2Y6jSBD8l3q1NeY+LLW0gDHG+MAGfK32oQwFLnN2UdhNj/zvI+zunZZmtrdXWp6KOjIjIiPzOyhKXCMHtWD4HVQEXyBF3ZK2FQJDoDdxjAjogwhSCIYgWC431b4XLrdr7NbKiFPlyKmjY60661W13+3syalacwraak/g1gdVc8xw+ElAUzhmTrao5/NIko30lWdQLC/8TYuUg+75tuFeSIgbqblen8CtiwgxwUViVieUIwIzB7UuxORr8EPH3rwOIDmrFfTV6VHzEj7qGeEuL108ORSD+KJErhYdM+Vr8JuBZMmBOOqFZ/1Yq4zJu7PVacYv12KPBLvX86RnFOLIX+vmA36NkwJFdoQKimn7Zd0dg1kzEW5P+0mebtp4PYucqN2XdP/iPs/obivULHSUShx/UfdITtNWa7E1LfM2VQP/wM+FDbezRnOa81b2XObPSqM4Ybv/CNwl715J/4vue81XQqVZHHyN2I4qbYvjPosXcnQ1LnA2c6zB887ydrAoki/C33sH99QybjBGsiUQO6f1arJmguJwTjecLW4gTc6yts6Sn/Ahbcin7hADPfIX5WDe0qu+FvmVJcne1C8NU6n8437PaMHRscQUFb2XM2vx18nG452SIH25TKuVEXIOna1XYgyV5cD04hfX0JKnO6MUtXYEhuytDwhKcE0JpLgs7nsq3wcwungoJIje5QXra8Mq2+jY1vzkKu2VJhmFnnDl0ySBg4AdVwZ5biRv8JqYT6APKlKGqK5RNME1LUk7R3UNE1SD4Z/3SnWkCcpLiqY4AkPA8YLKSpzCixyv/FF/u54grWFVfSsQBX0QkzKfIzCkpEF9cH8hiLzISoKuqcJ4rJsaK3E8K+giawqixLFGxzF/ZPVxjmoK8woMWVlQeYFTWPHW/5+AMILBCPyYkRTJ5PSxOdIEg+MlTlA0XZH10edAOOn2Vx8U6IU+nNzpz7N9EGNS06BoqqyE0bvN3w9hGJZNQb22CI1ugQgYfthGlOIiqTtqTQFJeMIXZHQ8wDCGWY3+LjkiKHrn8jbGjDLqnKh5vKlrigc67F2gX8UZstKv+mSPe4KsirIkc7IgszLT3ewO+qCAXTSwMRfLeafLG+IuQYQoxFkNhsCwX+NLHYzMOcekim1Z2irRjEQDPxm+987DmzEWX2bbZ6Zyx/VVplu1DPIitf0TXCypNtlg/7i5ti/61a+ffhMEDIGyOhut92qH0zQrBjwSBooY7KRwuQmtC7TXW7LDbrN2t1V5GAjLHe5x18m+IPzKn7NsQEnhHa8TpxijQe4pr8FoTPba6qnLFqELDtHHZKrRHlZcbowEawcD9sJP67GMzVPOlKdRezygPJB6qXW1uFAdlcZhZZ8aOOBIri90b8wdoouCN0GxrNZ4ym9Nj6jL2Wj16Or7VMnepjl+6zd8/40xug/Htxr8ey0fyDvPMbf+hyBv8/YfZpa+E5rQY5+p478c50t5c4HjaSUaprA9+2Sls/uUY8N5vQpNGdw681cZpHFJcjAEsIhIeXcKKZvOxHYRl58kM7TANt8GWgZrqv1sjN/0GiM9brmkrCawPoEh4BM3mKady1utqjwK6XufAa373JCA2w/xs0d9lAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
