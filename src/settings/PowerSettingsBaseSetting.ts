/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: PowerSettingsSetting.ts
Created:  2024-01-19T20:49:39.349Z
Modified: 2024-01-19T20:49:39.349Z

Description: description
*/

import PowerSettings from "../PowerSettings";

abstract class PowerSettingsBaseSetting {
    constructor(
        private context: PowerSettings,
        private identifier: string,
    ) {
        //
    }

    public getContext(): PowerSettings { return this.context; }
    public setContext(context: PowerSettings) { this.context = context; }

    abstract getControl(): (setting: PowerSettingsBaseSetting, context: PowerSettings) => HTMLDivElement;

    public getIdentifier(): string { return this.identifier; }
    abstract getName(): string;
    abstract getDescription(): string | null;
    abstract getDefaultValue(): string | null;
    abstract getValue(): string | null;
}

export default PowerSettingsBaseSetting;