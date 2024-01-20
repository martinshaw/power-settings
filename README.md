<center>
<h1> power-settings</h1>
<i>VS Code-like settings management — Based on hierarchy-inheriting JSON files and JSON schema</i>
</center>

## Examples

https://github.com/martinshaw/power-settings/tree/master/example

```typescript
import PowerSettings, {
    PowerSettingsJsonObjectSource,
    PowerSettingsTextSetting,
} from "power-settings";

const ps = new PowerSettings(
{},
(context) => [
    new PowerSettingsJsonObjectSource(context, "Default", {
    a: {
        b: 1,
        c: 2,
        d: "3",
    },
    "b.a": 1,
    "b.b": 2,
    "b.c": "3",
    "b.c.a": 4,
    "b.c.b": 5,
    c: {
        a: 1,
        b: 2,
        c: "3",
    },
    }),
    new PowerSettingsJsonObjectSource(context, "Workspace", {
    c: {
        a: 9,
        b: 8,
        c: 7,
        d: 7,
    },
    }),
],
(context) => [
    new PowerSettingsTextSetting(context, "a", "Background Color"),
    new PowerSettingsTextSetting(context, "b.a", "Foreground Color"),
    new PowerSettingsTextSetting(context, "c", "Font Name"),
]
);

console.log('Printing for identifier which has a value in the default source and the workspace source, but not a setting')
console.log(ps.getSetting("a.b"));
console.log(ps.getSettingValue("a.b"));

console.log('Printing for identifier which has a value in the default source and the workspace source and a setting')
console.log(ps.getSetting("b.a"));
console.log(ps.getSettingValue("b.a"));

console.log('Printing for identifier which does not have a value in the default source but does have a value in the workspace source and has a setting')
console.log(ps.getSetting("c.d"));
console.log(ps.getSettingValue("c.d"));

console.log('Printing for identifier which does not have a value in the either source and does not have a setting')
console.log(ps.getSetting("z.z"));
console.log(ps.getSettingValue("z.z"));
```