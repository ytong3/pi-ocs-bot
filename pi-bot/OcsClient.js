var restCall = require("request-promise")

module.exports = {
    OcsClient : function(url) {
        this.url = url;
        this.version = 0.1;
        this.typesBase = "/api/Tenants/{0}/Namespaces/{1}/Types";
        this.streamsBase = "/api/Tenants/{0}/Namespaces/{1}/Streams";
        this.viewsBase = "/api/Tenants/{0}/Namespaces/{1}/Views";
        this.insertSingleValueBase = "/Data/InsertValue";
        this.insertMultipleValuesBase = "/Data/InsertValues";
        this.getLastValueBase = "/{0}/Data/GetLastValue";
        this.getWindowValuesBase = "/{0}/Data/GetWindowValues?startIndex={1}&endIndex={2}";
        this.getRangeValuesBase = "/{0}/Data/GetRangeValues?startIndex={1}&skip={2}&count={3}&reversed={4}&boundaryType={5}&viewId={6}";
        this.updateSingleValueBase = "/Data/UpdateValue";
        this.updateMultipleValuesBase = "/Data/UpdateValues";
        this.replaceSingleValueBase = "/Data/ReplaceValue";
        this.replaceMultipleValuesBase = "/Data/ReplaceValues";
        this.removeSingleValueBase = "/{0}/Data/RemoveValue?index={1}";
        this.removeMultipleValuesBase = "/{0}/Data/RemoveWindowValues?startIndex={1}&endIndex={2}";
        this.token = "";
        this.tokenExpires = "";

        // get the bearer token with the config
        this.getToken = function (authItems) {
            return restCall({
                url: authItems["authority"],
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: {
                    'grant_type': 'client_credentials',
                    'client_id': authItems['clientId'],
                    'client_secret': authItems['clientSecret'],
                    'resource': authItems['resource']
                }
            })
        }

        // get all streams

        // get current namespace

        // get last value

        // get a window of events

    }
}