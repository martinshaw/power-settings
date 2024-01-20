/*
All Rights Reserved, (c) 2024 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: PowerSettings.ts
Created:  2024-01-18T16:27:33.110Z
Modified: 2024-01-18T16:27:33.110Z

Description: description
*/

import { JSONValue } from "types-json";
import { PowerSettingsBaseSetting, PowerSettingsBaseSource } from "./index";

export type PowerSettingsConfig = {
  //
}

const defaultConfig: PowerSettingsConfig = {
  //
};

class PowerSettings {
  private config: PowerSettingsConfig;
  private sources: PowerSettingsBaseSource[];
  private settings: PowerSettingsBaseSetting[];

  private normalizedSourceValues: Record<string, JSONValue>;

  constructor(
    config: Partial<PowerSettingsConfig>,
    sources: (context: PowerSettings) => PowerSettingsBaseSource[],
    settings: (context: PowerSettings) => PowerSettingsBaseSetting[],
  ) {
    this.config = {
      ...defaultConfig,
      ...(config || {}),
    };

    this.sources = sources(this);
    
    this.settings = settings(this);

    this.refresh();
  }

  private refresh(): void {
    this.normalizedSourceValues = this.getNormalizedSourceValues();
  }

  private getNormalizedSourceValues(): Record<string, JSONValue> {
    const values: Record<string, JSONValue> = {};
    this.sources.forEach((source) => {
      const sourceValues = source.getNormalizedValues();
      Object.keys(sourceValues).forEach((key) => {
        values[key] = sourceValues[key];
      });
    });

    return values;
  }

  public getSetting(identifier: string): PowerSettingsBaseSetting | null {
    return this.settings.find((setting) => setting.getIdentifier() === identifier) || null;
  }

  public getSettingValue(identifier: string): JSONValue | null {
    return this.normalizedSourceValues[identifier] || null;
  }
}

export default PowerSettings;