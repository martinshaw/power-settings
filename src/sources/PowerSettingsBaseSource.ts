/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: PowerSettingsSource.ts
Created:  2024-01-19T20:42:42.027Z
Modified: 2024-01-19T20:42:42.027Z

Description: description
*/

import { JSONValue } from "../../node_modules/types-json/.auto/build/index";
import PowerSettings from "../PowerSettings";
import PowerSettingsBaseSetting from "../settings/PowerSettingsBaseSetting";

abstract class PowerSettingsBaseSource {
    constructor(
        private context: PowerSettings,
        private name: string
    ) {
        //
    }

    public getContext(): PowerSettings { return this.context; }
    public setContext(context: PowerSettings) { this.context = context; }

    public getName(): string { return this.name; }

    abstract getNormalizedValues(): Record<string, JSONValue>;
}

export default PowerSettingsBaseSource;