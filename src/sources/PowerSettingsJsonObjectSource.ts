/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: PowerSettingsJsonObjectSource.ts
Created:  2024-01-19T22:00:21.814Z
Modified: 2024-01-19T22:00:21.815Z

Description: description
*/

import { flattie } from "flattie";
import { JSONObject, JSONValue } from "types-json";
import PowerSettings, { PowerSettingsBaseSetting } from "../index";
import PowerSettingsBaseSource from "./PowerSettingsBaseSource";

class PowerSettingsJsonObjectSource extends PowerSettingsBaseSource {
    constructor(
        context: PowerSettings,
        name: string,
        private json: JSONObject,
    ) {
        super(context, name);
    }

    getNormalizedValues(): Record<string, JSONValue> {
        return flattie(this.json); 
    }
}

export default PowerSettingsJsonObjectSource;