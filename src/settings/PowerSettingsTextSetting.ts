/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: PowerSettingsSetting.ts
Created:  2024-01-19T20:49:39.349Z
Modified: 2024-01-19T20:49:39.349Z

Description: description
*/

import PowerSettings from "../PowerSettings";
import PowerSettingsBaseSetting from "./PowerSettingsBaseSetting";

abstract class PowerSettingsTextSetting extends PowerSettingsBaseSetting {
    constructor(
        context: PowerSettings,
        identifier: string,
        private name: string,
        private description: string | null,
        private defaultValue: string | null = null,
    ) {
        super(context, identifier)
    }

    getControl(): (setting: PowerSettingsBaseSetting, context: PowerSettings) => HTMLDivElement {
        return (setting: PowerSettingsBaseSetting, context: PowerSettings) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="setting">
                    <div class="setting-name">${setting.getName()}</div>
                    <div class="setting-description">${setting.getDescription()}</div>
                    <input type="text" class="setting-value" value="${setting.getValue()}" />
                </div>
            `;
            return div;
        };
    }

    getName(): string { return this.name;}
    getDescription(): string | null { return this.description;}
    getDefaultValue(): string | null { return this.defaultValue; }
    getValue(): string | null { return ''; }
}

export default PowerSettingsBaseSetting;