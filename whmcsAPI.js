const whmcs = require("@dojnaz/whmcs");
const { WHMCS_APIIDENTIFIER, WHMCS_APISECRET, WHMCS_SERVERURL } = process.env

module.exports = new whmcs({
  apiIdentifier: WHMCS_APIIDENTIFIER,
  apiSecret: WHMCS_APISECRET,
  serverUrl: WHMCS_SERVERURL,
});
