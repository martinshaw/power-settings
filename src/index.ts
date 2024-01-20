import UI from './UI';
import PowerSettings from './PowerSettings'
import PowerSettingsBaseSetting from './settings/PowerSettingsBaseSetting';
import PowerSettingsTextSetting from './settings/PowerSettingsTextSetting';
import PowerSettingsBaseSource from './sources/PowerSettingsBaseSource';
import PowerSettingsJsonObjectSource from './sources/PowerSettingsJsonObjectSource';

if (typeof window !== 'undefined') {
    (window as any).UI = UI;
    (window as any).PowerSettings = PowerSettings; 
    (window as any).PowerSettingsBaseSetting = PowerSettingsBaseSetting;
    (window as any).PowerSettingsTextSetting = PowerSettingsTextSetting;
    (window as any).PowerSettingsBaseSource = PowerSettingsBaseSource;
    (window as any).PowerSettingsJsonObjectSource = PowerSettingsJsonObjectSource;
}

export default PowerSettings;
export { 
    UI, 
    PowerSettingsBaseSetting, 
    PowerSettingsTextSetting,
    PowerSettingsBaseSource,
    PowerSettingsJsonObjectSource,
};