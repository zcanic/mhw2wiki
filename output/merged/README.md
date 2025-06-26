# MHW2Wiki 数据源说明

本目录包含从《怪物猎人：世界》游戏中提取的结构化数据文件，用作 MHW2Wiki 项目的数据源。

## 数据概览

| 文件 | 记录数 | 描述 | 关键字段 |
|------|--------|------|----------|
| `LargeMonsters.json` | ~100 | 大型怪物数据 | id, name, species, ecology |
| `Item.json` | ~2000 | 物品和材料 | id, name, type, rarity, description |
| `Skill.json` | ~200 | 技能效果 | id, name, description, levels |
| `Armor.json` | ~800 | 防具数据 | id, name, type, skills, defense |
| `ArmorUpgrade.json` | ~1000 | 防具升级路线 | baseArmor, upgradedArmor, materials |
| `WeaponSeries.json` | ~150 | 武器系列 | id, name, weaponType, weapons |
| `Charm.json` | ~300 | 护石数据 | id, name, skills, rarity |
| `Accessory.json` | ~200 | 装饰品数据 | id, name, skills, slotSize |

## 武器分类数据

`weapons/` 目录包含各武器类型的详细数据：

| 文件 | 武器类型 | 记录数 | 特殊字段 |
|------|----------|--------|----------|
| `GreatSword.json` | 大剑 | ~200 | attack, sharpness, affinity |
| `LongSword.json` | 太刀 | ~180 | attack, sharpness, affinity |
| `SwordShield.json` | 片手剑 | ~160 | attack, sharpness, elementType |
| `DualBlades.json` | 双剑 | ~170 | attack, sharpness, elementType |
| `Hammer.json` | 大锤 | ~140 | attack, affinity, impact |
| `HuntingHorn.json` | 狩猎笛 | ~130 | attack, melodies, songs |
| `Lance.json` | 长枪 | ~150 | attack, sharpness, affinity |
| `Gunlance.json` | 铳枪 | ~140 | attack, shellingType, shellingLevel |
| `SwitchAxe.json` | 斩击斧 | ~160 | attack, phialType, sharpness |
| `ChargeBlade.json` | 盾斧 | ~150 | attack, phialType, sharpness |
| `InsectGlaive.json` | 操虫棍 | ~140 | attack, kinsectBonus, sharpness |
| `Bow.json` | 弓 | ~120 | attack, coatings, chargeShots |
| `LightBowgun.json` | 轻弩 | ~110 | attack, ammo, specialAmmo |
| `HeavyBowgun.json` | 重弩 | ~100 | attack, ammo, specialAmmo |

## 数据结构特点

### 多语言支持
所有文本字段都包含多语言版本：
```json
{
  "name": {
    "en": "Rathalos",
    "ja": "リオレウス", 
    "zh": "火龙",
    "zh-TW": "火龍"
  }
}
```

### 嵌套关系
数据通过 ID 引用建立关联：
- 防具 → 技能 (通过 `armorSkills.skillId`)
- 武器 → 武器系列 (通过 `weaponSeriesId`)
- 怪物 → 掉落物品 (通过 `rewards.itemId`)

### 数组字段
复杂属性使用数组存储：
```json
{
  "armorSkills": [
    {"skillId": 1, "level": 2},
    {"skillId": 5, "level": 1}
  ],
  "decorationSlots": [3, 2, 1]
}
```

## 数据来源和版本

- **游戏版本**: Monster Hunter: World + Iceborne DLC
- **数据版本**: 15.11 (Final Update)
- **提取时间**: 2023年
- **数据格式**: JSON
- **编码**: UTF-8

## 使用说明

1. **数据导入**: 使用 `packages/database/scripts/import.ts` 脚本导入数据到 PostgreSQL
2. **数据验证**: 导入前会进行字段验证和关系检查
3. **数据更新**: 支持增量更新，相同 ID 的记录会被覆盖
4. **错误处理**: 导入过程中的错误会记录到日志文件

## 注意事项

- 所有 ID 字段都是数字类型
- 多语言字段可能存在部分缺失，优先使用英文作为后备
- 数值字段（如攻击力、防御力）已经是游戏内显示值
- 图片资源需要单独处理，数据中只包含文件名引用

## 相关文档

- [数据模式设计](../../docs/DATA_SCHEMA.md) - 数据库设计和优化策略
- [数据概览分析](../../docs/DATA_OVERVIEW.md) - 数据价值和业务分析
- [数据库架构](../../packages/database/prisma/schema.prisma) - Prisma 数据库模型
- [导入脚本](../../packages/database/scripts/import.ts) - 数据导入工具
    - [Hunting Horn](#hunting-horn)
  - [Locations](#locations)
    - [Data Files](#data-files-5)
    - [Translation Files](#translation-files-5)
    - [Notes](#notes-5)
  - [Monsters](#monsters)
    - [Data Files](#data-files-6)
    - [Translation Files](#translation-files-6)
    - [Notes](#notes-6)
      - [Reward Type State](#reward-type-state)
  - [Locations (Stages)](#locations-stages)
    - [Data Files](#data-files-7)
    - [Translation Files](#translation-files-7)
    - [Notes](#notes-7)
  - [Poogie](#poogie)
  - [Support Ship](#support-ship)

# About
The goal of this project is to "glue" several other tools together in order to get sane JSON files for data objects in
Wilds. This repo is used by the [MHDB Wilds Project](https://docs.wilds.mhdb.io) as it's primary data source.

**If you're just looking for game data**, you don't need to build the merged files yourself. The most recent version of
all the merged data files are available in
[`/output/merged`](https://github.com/LartTyler/mhdb-wilds-data/tree/main/output/merged).

## Requirements
- C# .NET 8.0
- Rust

The C# project in `/tools/DotUserReader` (for now) needs to be manually compiled before running the project. Everything
else either has an executable embedded in the project, or will compile on-demand if necessary.

## Pipeline
1. Extract the `re_chunk_000.pak` file in the root of your Wilds install using `/tools/REtool/Extract-PAK.bat`.
2. Copy `/tools/rslib/examples/config.toml` to the project root, and adjust the paths in `[io]` to point to the
   extracted files. If you used the `bat` file as-is, no changes will be necessary.
3. Run `/extract.bat` to convert the relevant `.user.3` and `.msg.23` files to JSON dumps.
4. Run `/merge.bat` to convert the raw JSON dumps into a merged JSON format.

# Tools
|Tool|Purpose|
|---|---|
|[REtool](https://residentevilmodding.boards.net/thread/10567/pak-tex-editing-tool)|Extracting data files from `.pak` (requires dtlnor's [MHWs.list](https://github.com/dtlnor/MonsterHunterWildsModding/blob/main/files/MHWs.list) file)|
|[REMSG_Converter](https://github.com/dtlnor/REMSG_Converter)|Convert `.msg.23` translation files into JSON|
|[RszTool](https://github.com/czastack/RszTool)|Convenient `.user.3` browsing and searching|

# Research
Most files that we care about for the database project appear to be located in:
- `natives/STM/GameDesign/Common/{Enemy, Equip, Item, Weapon}`
- `natives/STM/GameDesign/Text/Excel_*`

Every file I've examined so far appears to start with a dummy value as the first object. Maybe a template or base
object? Something like that? Regardless, I'm like 99% certain we can ignore the first definition in every `.user.3`
file.

The rarity field (usually `_Rare`) in each file makes _absolultely no sense_. The value in the files seems to be
counting _down_ from 18, with an in-game rarity value of "1" corresponding to an in-file value of "18". I feel like I
must be missing something here, but for now I'm just going to "convert" it to the in-game value by subtracting the
in-file value from 19. This feels so hacky, and like it's going to bite me in the ass at some point.

## Decorations (Accessories)
### Data Files
- `natives/STM/GameDesign/Common/Equip/AccessoryData.user.3`

There are two other files that may be of note:
- `natives/STM/GameDesign/Common/Equip/AccessoryJudgeData.user.3`
- `natives/STM/GameDesign/Common/Equip/AccessoryRankJudgeData.user.3`

Those two files appear to contain drop chances, but I'm not 100% certain. Since they aren't relevant to any field
already in the database, I'm going to ignore them for now.

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Equip/Accessory.msg.23`

There is a second file in the same directory named `AccessoryData.msg.23` that doesn't actually appear to contain any
information. All the translations are showing as empty, and there's only 4 entries. Ignoring for now.

### Notes
This one seems to be pretty straightforward. The data file contains all the decorations, and the translation file
contains all the relevant strings. The `_Skill` array in the data file contains the skill IDs the decoration grants,
and the `_SkillLevel` array contains each skill's level at the matching index.

~~The one field I'm not sure about is `_AccessoryType`. I have no idea what that value corresponds to, or if we even
care about it for the purpose of the database project.~~

`_AccessoryType` encodes what "group" the decoration is part of: armor decorations or weapon decorations. The table
below contains those type values and what the correspond to.

|Value|Group|
|---|---|
|1842954880|Armor decorations|
|-1638455296|Weapon decorations|

Why in Gore Magala's unholy name they chose those two values, I have absolutely no idea.

## Skills
### Data Files
- `natives/STM/GameDesign/Common/Equip/SkillCommonData.user.3`
- `natives/STM/GameDesign/Common/Equip/SkillData.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Equip/SkillCommon.msg.23`
- `natives/STM/GameDesign/Text/Excel_Equip/Skill.msg.23`

### Notes
`SkillCommonData.user.3` appears to contain the actual skill data, things like category, and name and description GUIDs.

`SkillData.user.3` contains the information for each _level_ of a skill. There's both a `skillName` and `skillExplain`
GUID present in the file, but only `skillExplain` seems to hold a GUID that's actually useful. The GUID for the name
field seems to uniformly point to unique entries, but each one containing only placeholder / blank data. Each entry in
this file has a `skillId` field which points to the `skillId` field in `SkillCommonData.user.3`.

Basically, in order to get all the information on a skill and it's levels, you'll need both files. IMO the best option
would be to parse `SkillCommonData.user.3` first, index each entry by its `skillId` field, then parse `SkillData.user.3`
to get the levels and add them to your partial skills last.

Similar to [Items](#items), it looks like there's two skills whose IDs are `0` and `1` that contain no real information.
I believe both can ignored can be ignored.

### Modifier Values?
In `SkillData.user.3`, there's a `_value` field that appears to hold some sort of attribute modifiers for the skill. For
example, the entry for the "Attack Boost" skill at level 1 is:

```json
{
    "_Index": 1,
    "_dataId": 2,
    "_skillId": 1,
    "_SkillLv": 1,
    "_skillName": "824fa7e2-6344-4f5d-a140-0d411ccc674d",
    "_skillExplain": "96e65c81-c4a1-4fb0-aea4-c256200cda88",
    "_openSkill": [
        1,
        0,
        0,
        0,
        0
    ],
    "_value": [
        100,
        3,
        0,
        0
    ]
}
```

In-game, attack boost shows a +3 to attack (`_value[1]`). Later levels of attack boost _also_ give a percentage
increase to attack, and it seems that even for ranks that do not give that bonus, they still require the modifier to be
present (thus the "100" modifier at `_value[0]`). At later ranks that _do_ include the percent bonus, that value has
changed:

```json
{
    "_Index": 5,
    "_dataId": 6,
    "_skillId": 1,
    "_SkillLv": 5,
    "_skillName": "ee33bf9d-18fa-45cf-a868-25ce715a57a5",
    "_skillExplain": "6df1df71-77f5-4bff-bdda-aa73a34ef034",
    "_openSkill": [
        1,
        0,
        0,
        0,
        0
    ],
    "_value": [
        104,
        9,
        0,
        0
    ]
}
```

Those values match Attack Boost 5's +9 attack and +4% attack bonuses. I'm wondering if maybe those values are provided
to a constructor or initialization function, and maybe perhaps change their meaning based on the skill? To support this,
"Resentment" gives +5 attack when you have recoverable health. The JSON below is the relevant section from
`SkillData.user.3`.

```json
{
    "_Index": 8,
    "_dataId": 181,
    "_skillId": 1359821952,
    "_SkillLv": 1,
    "_skillName": "cb317928-7cd0-4a62-a063-1615e80dfa4c",
    "_skillExplain": "1b599bee-8dd2-45f0-9ad8-e1eac54f00b5",
    "_openSkill": [
        1359821952,
        0,
        0,
        0,
        0
    ],
    "_value": [
        5,
        0,
        0,
        0
    ]
}
```

### Skill Category
The `_skillCategory` field might actually be relevant to the API. It looks like it can be a value between 0 and
3 (inclusive), and so far I've found a distinction between set bonuses and actual concrete skills. For example,
the low rank Rey Dau set has a set bonus named "Rey Dau's Voltage", but the entries in `SkillData.user.3` point to name
and description entries in `Skill.msg.23` with actual values, not the dummy values found in most skill rank entries.
Additionally, the `_Lv` field of such entries appear to hold the number of set pieces required to activate the bonus.

Unlike the Attack Boost sections, `_value` starts with what looks like the +5 attack modifier, instead of the percent
modifier argument. Below is a table of what I believe those category values represent.

|Value|Description|Example|
|---|---|---|
|0|"Normal" skills (though maybe armor-only skills?)|Constitution, Speed Eating|
|1|Armor set bonuses|Thunderous Roar I (Rey Dau's Voltage)|
|2|Group skills, set bonuses granted by armor pieces belonging to the same category (such as guardian armor)|Fortifying Pelt, Guardian's Pulse|
|3|Weapon-only skills|Attack Boost, Critical Draw|

## Items
### Data Files
- `natives/STM/GameDesign/Common/ItemData.user.3`
- `natives/STM/GameDesign/Common/ItemRecipe.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Data/Item.msg.23`

### Notes
For recipe data, it looks like every item with a recipe _always_ has two IDs listed as an input. For items with only one
input, it seems like one of those IDs is always `1`, which points to an item in the files with no name or other
information. My guess is that this is just an empty item and is ignored by the game when displaying or crafting recipes.

Additionally, several IDs do not (at the time of writing) have any strings attached to them and will be ignored. The IDs
are:
- 100
- 280
- 283
- 284
- 476
- 690

~~Some items appear to be duplicated, with the duplicates having the `_OutBox` flag set. I'm not sure what that flag is
for, but I'm thinking items tagged this way are used for some weird internal system (it includes things like mantles,
fishing bait, and some weird ones like "Valuable Material" and "Equipped Mantles"). For now, I'm going to ignore
anything with that flag set.~~

`_OutBox` is definitely a weird flag. Some things like "Equipped Mantles" doesn't make sense as an item, and I'm going
to manually build that exclusion list. However, there doesn't seem to be as much duplication as I originally thought,
and some items are actually referenced in recipes for non-`_OutBox` items. I'm going to add them back, with the
exception of a handful which I'll list below.

|ID|Name (English)|Exclude Reason|
|---|---|---|
|278|Screamer Pod|This looks like a dupe; original is ID 70. It also has the wrong stack size and item value.|
|409|Equipped Mantles|This isn't even an item, it looks like a placeholder (maybe on the loadout screen?).|

Fields listed below are my best guess, based on which items have the flag set.

|Field|Type|Description|Example|
|---|---|---|---|
|`_Type`|int|The item category, see the table below|–|
|`_Infinit`|boolean|Item isn't consumed on use|Capture Net|
|`_ForMoney`|boolean|Item is a treasure item|Silver Egg|
|`_Battle`|boolean|Item is a trap or slinger ammo|Screamer pod, drugged meat, shock trap|
|`_Shikyu`|boolean|Supply items|First-aid med|
|`_OutBox`|boolean|Currently unknown|–|

|Type ID|Engine Enum Name|Meaning|
|---|---|---|
|0|EXPENDABLE|Consumables|
|1|TOOL|Tools, such as mantles and the capture net|
|2|MATERIAL|Materials|
|3|SHELL|Bowgun ammo|
|4|BOTTLE|Bow coatings|
|5|POINT|Items that are "sold" for points|
|6|GEM|"Mystery" items that are revealsed (appriased) at the end of a hunt|

## Armor
### Data Files
- `natives/STM/GameDesign/Equip/ArmorData.user.3`
- `natives/STM/GameDesign/Equip/ArmorRecipeData.user.3`
- `natives/STM/GameDesign/Equip/ArmorSeriesData.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Equip/Armor.msg.23`
- `natives/STM/GameDesign/Text/Excel_Equip/ArmorSeries.msg.23`

### Notes
In `ArmorData.user.3`, the `_Skill` array appears to give special meaning to the position of a skill in the array. The
skill at index 0 seems to always be the set bonus, or `0` if there isn't one, followed by the group bonus at index 1
(again, or `0` if there isn't one), followed by general skills in the remainder of the array.

In `ArmorSeriesData.user.3`, there are two "special" IDs that I've found:
- `0`, which seems to correspond to an empty / "template" value that several other objects tend to have.
- `1`, which seems to be for when no armor is equipped.

ID `0` does not appear in `ArmorData.user.3`, but ID `1` does. Neither are relevant to the API, so they will not be
included in merged files.

## Weapons
### Data Files

### Translation Files

### Notes
Weapons are referred to in several ways in the game files, some of which are very confusing or counterintuitive. The
table below lists the English name of each weapon type alongside the variations on that name that can be found in the
game files.

|English Name|Long Name|Short Name|Type ID|
|---|---|---|---|
|Bow|Bow|Wp11|3|
|Charge Blade|ChargeAxe|Wp09|5|
|Gunlance|GunLance|Wp07|7|
|Hammer|Hammer|Wp04|10|
|Heavy Bowgun|HeavyBowgun|Wp12|2|
|Lance|Lance|Wp06|8|
|Light Bowgun|LightBowgun|Wp13|1|
|Great Sword|LongSword|Wp00|14|
|Insect Glaive|Rod|Wp10|4|
|Sword & Shield|ShortSword|Wp01|13|
|Switch Axe|SlashAxe|Wp08|6|
|Long Sword|Tachi|Wp03|11|
|Dual Blades|TwinSword|Wp02|12|
|Hunting Horn|Whistle|Wp05|9|

<span style="font-size: 10px;"><em>Caling great swords "LongSword" in the files and NOT THE ACTUAL LONG SWORD will
forever torment me.</em></span>

### Crafting Info
Crafting info for weapons is split into two files:

|File|Description|
|---|---|
|`natives/STM/GameDesign/Common/Equip/<Type>Recipe.user.3`|Contains material costs and the `_canShortcut` flag|
|`natives/STM/GameDesign/Common/Equip/<Type>Tree.user.3`|Contains each weapon's previous and next weapons in the crafting tree|

Where `<Type>` is the internal long name of the weapon (such as "Bow" or "ChargeAxe"). If the `_canShortcut` flag is
true, the weapon can be crafted directly instead of upgraded from the previous weapon in the tree, _however_: the listed
material costs are doubled for weapons crafted directly; the material costs listed in the game files (and in the merged
files) are for the _upgrade costs_. Direct crafts double both the zenny and material inputs.

### Bow
Fields relevant to bow data are listed below.

|Field Name|Description|
|---|---|
|_isLoadingBin|Bow coatings, an array of 8 booleans indicating which coating is available.|

Coating order for `_isLoadingBin` is as follows.

- 0: Close-range
- 1: Power
- 2: Pierce
- 3: Poison
- 4: Paralysis
- 5: Sleep
- 6: Blast
- 7: Exhaust

Note that while the UI in-game shows poison _after_ paralysis, it appears to come first in the game files.

### Gunlance
Fields relevant to gunlance are listed below.

|Field Name|Description|
|---|---|
|_Wp07ShellType|Indicates which shell the gunlance uses|
|_Wp07ShellLv|Indicates the level of the shell|

Shell types are encoded as follows.

|Value|Meaning|
|---|---|
|-324406336|Normal|
|-1732758016|Wide|
|203273856|Long|

Shell levels are encoded as follows.

|Value|Meaning|
|---|---|
|1226920576|LV1|
|-993734528|LV2|
|-745160128|LV3|
|-170079472|LV4|
|-269717152|LV5|
|145851744|LV6|
|-58574980|LV7|
|-1868644224|LV8|

### Hunting Horn
Fields relevant to hunting horns are listed below.

|Field Name|Description|
|---|---|
|_Wp05UniqueType|This holds the unique ID for 1 of 31 possible note combinations|
|_Wp05MusicSkillHighFreqType|This holds the unique ID for the echo wave effect|
|_Wp05HibikiSkillType|This holds the unique ID of the echo bubble effect|

The localization for the echo wave, echo bubble, and song names can be found in the following files.

- Echo Wave: `natives/STM/GameDesign/Text/Excel_Action/HighFreqDataText_Wp05.msg.23`
- Echo Bubble: `natives/STM/GameDesign/Text/Excel_Action/HibikiDataText_Wp05.msg.23`
- Songs: `natives/STM/GameDesign/Text/Excel_Action/MusicSkillDataText_Wp05.msg.23`

In each file, it appears that instead of keying the strings by the GUID, it is instead keyed by the `name` field, with
the sequential ID of each item being appended to the end of the name string. So, for example, you can find the
translations of the "Attack Up (S)" song under the `name` "MusicSkillDataText_Wp05_11".

## Locations
### Data Files
- `natives/STM/GameDesign/Stage/Common/EnumMaker/Stage.user.3`
- `natives/STM/GameDesign/Gimmick/Gm800/Gm800_*/*_AaaUniqueParam.user.3`
- `natives/STM/GameDesign/Stage/Common/DarkAreaSetting.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Reference/RefEnvironment.msg.23`

### Notes
`RefEnvironment.msg.23` seems to have the translations for each location, but I can't find how the entry names or GUIDs
link back to the entries in `Stage.user.3`. For now, I'm hardcoding a map of stage identifiers (`ST1##`) to name GUIDs.
I hate doing it this way, but at this point I've spent hours just looking for where the game files might map a stage ID
or string identifier to the GUID in the translations file. I'm not even sure if `RefEnvironment.user.3` is the only
reference to the stage names. Instead of wasting more time, the `merger` will just handle mapping internally. The table
below lists the current map of stage identifiers to GUIDs.

|String Identifier|Name GUID|
|---|---|
|ST101|53c75773-e1c1-4842-b853-594c064c9dcf|
|ST102|b05b96d2-3151-447c-911c-9e3d3b9e781c|
|ST103|53dbc540-c48a-4c3d-bf1a-e7a715db927c|
|ST104|c19b98a4-c220-4891-ac0e-15e21edf67bc|
|ST105|2d17ecc9-6c48-4544-91ed-a078e05a4075|

Only stages in the ST1XX namespace are included, since those appear to be the field stages, as opposed to cities / camps
(such as Suja or Kunafa).

For some strange reason, camps are treated by the game the same as the other map "gimmicks", like ivy traps or the
rocks you can pull down on top of monsters with your slinger. All camps are part of the Gm800 namepace, and encode
the data we care about in the `Gm<id>_AaaUniqueParam.user.3` where `<id>` is the identifier string for that specific
gimmick.

Zone count for a stage is located in several files it seems, but the tooling currently in place only seems to be able
to parse the `DarkAreaSetting.user.3` file. It contains data for, I believe, day/night cycle settings, but each object
seems to include settings for each camp, so it _should_ be suitable.

## Monsters
### Data Files
- `natives/STM/GameDesign/Common/Enemy/EnemyData.user.3`
- `natives/STM/GameDesign/Common/Enemy/EnemySpecies.user.3`
- `natives/STM/GameDesign/Common/Enemy/EM*.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/EnumMaker/EmID.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/Data/EmCommonSize.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/Data/EmCommonRandomSize.user.3`
- `natives/STM/GameDesign/Enemy/Em*/*/Data/Em*_Param_Parts.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/Data/EmParamBadCondition2.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/Data/EmParamBadConditionPreset.user.3`
- `natives/STM/GameDesign/Enemy/CommonData/Data/EnemyWeakAttrData.user.3`
- `natives/STM/GameDesign/Common/Enemy/EnemyReportMeasureFreeInfoData.user.3`
- `natives/STM/GameDesign/Enemy/Em*/*/Data/Em*_Param_PartsBreakReward.user.3`
- `natives/STM/GameDesign/Common/Enemy/EnemyPartsTypeData.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Data/EnemyText.msg.23`
- `natives/STM/GameDesign/Text/Excel_Data/EnemySpeciesName.msg.23`

### Notes
`EnemyData.user.3` contains a mapping of the monster "fixed" ID to the various strings associated with it, such as
name, description, tempered and frenzied name variants, etc. The table below contains description of each string field.

|Field|Description|
|---|---|
|`_JpEnemyName`|If anyone can tell me where this is used, I'd appreciate it; for example, "Rathian" is named "雌火竜" by this field.|
|`_EnemyName`|The monster's name|
|`_EnemyExp`|The description|
|`_EnemyExtraName`|Looks like it's used for Alpha variants; currently only populated for Alpha Doshaguma|
|`_EnemyFrenzyName`|The frenzied name variant|
|`_EnemyLegendaryName`|The tempered name variant|
|`_EnemyLegendaryKingName`|Doesn't appear to be used currently, but maybe arch-tempered or something?|

Additionally, it looks like this file contains more than just large monsters. Small monsters, as well as endemic life
and "gathering node" creatures (like godbugs and flashbugs) are included in here as well. Best I can tell, large
monsters all have a non-zero value in the `_BossIconType` field, small monsters in the `_ZakoIconType`, and endemic
life / "gathering node" creatures in `_AnimalIconType`. Additionally, only large and small monsters appear to have a
non-zero value for the `_Species` field.

`EnemySpecies.user.3` contains mappings for `_Species` IDs to their GUID in `EnemySpeciesName.msg.23`.

The `EM*.user.3` files use the enumerated enemy IDs as their file name (derived from `EmID.user.3`), and appear to
contain the drop rates for items from the monster. The `_IdEx` field is a list of item IDs, `_RewardNumEx` is the
number of items rewarded, and `_probabilityEx` is the chance that the item will drop. Additionally, `_StoryId`,
`_RewardNumStory`, and `_probabilityStory` is the item ID, drop amount, and drop chance (respectively) for hunts against
the monster during low rank.

The `_rewardType` field indicates which category the drop falls into. The table below lists the value of the field, the
enum variant name it matches to, and a description of what the category is.

|Name|Value|Description|
|---|---|---|
|INVALID|10|See [Reward Type State](#reward-type-state) below|
|RW000|2|Carving|
|RW001|3|Carving (Severed Part)|
|RW002|4|—|
|RW003|5|Endemic Capture|
|RW004|6|Target Rewards|
|RW005|7|Broken Parts|
|RW006|8|Wound Destroyed|
|RW007|9|—|
|RW008|911862272|Carving (Rotten)|
|RW009|810441920|Slinger Gather|
|RW010|-468628128|—|
|RW011|-1946230784|—|
|RW012|-2122632576|Carving (Rotten Severed Part)|
|RW013|-275464864|—|
|RW014|-1387333760|—|
|RW015|-1024798784|Tempered Wound Destroyed|
|RW016|906321792|Carving (Crystallized)|

For `RW004` (Target Rewards) the value displayed in-game in the monster guide appears to use the smallest value of all
RW004 entries in the drop tables. For example, Rathian actually has 3 `RW004` entries for Rathian Spike+, and the
guide shows 8% drop chance for that category, which is the lowest of the 3 values. The `_partsIndex` field in each
entry is "active" for RW005 reward types, and will be zero or more to indicate which entry in each monster's
`Param_PartsBreakReward.user.3` file, which is located in their data directory (`GameDesign/Enemy/Em<id>`). The fixed
IDs used in that file can be mapped to a part name using the `EnemyPartsTypeData.user.3` file.

#### Reward Type State
This had me confused for a very long time. I noticed that, for any given file, a large number of entries had
`_rewardType` set to 10, which corresponds with INVALID in the enums file. Even entries that were very clearly for an
entry I could see the monster guide (based on matching the item ID and drop chance) were marked INVALID.

From what I can tell, `_rewardType` actually remembers the most recent non-"INVALID" entry, and applies that to entries
where `_rewardType` is INVALID. For example: Rathian Spike+ has 7 entries in the drop table, but only one of them is set
to a value other than INVALID. However, if you consider the file in its entirety and go backwards from each INVALID
entry, the `_rewardType` value matches up to what you'd expect it to be.

So basically, in order to parse out the drop table, you must:
- Parse the file from start to finish.
- Remember the last `_rewardType` that wasn't INVALID, and apply that to entries with the INVALID reward type.

This isn't relevant to how data is extracted, but Guardian variants of monsters usually have a non-zero second "field"
in the enumerated ID, e.g. Rathalos is `EM0002_00_0.user.3` and Guardian Rathalos is `EM0002_50_0.user.3`. They're
different monsters and will be represented in the merged files (and the API) that way, but it may be useful information
to have.

`Em*_Param_Parts.user.3` contains monster base health.

`EmCommonSize.user.3` appears to contain a list of how monster sizes map to crowns. My best guess is that the
`_CrownSize_*` fields are percentages, and `_BaseSize` indicates the monster's size at 100% scale. The `_EmId` field
appears to hold the fixed ID of the monster from the enums file.

`EmCommonRandomSize.user.3` seems to hold an array of random distributions (under `_RandomSizeTblArray`) for monster
size multipliers, keyed by the UUID in `_InstanceGuid`. In each entry is a `_ProbDataTbl` with a `_Scale` size
multiplier and a `_Prob` integer indicating how likely that multiplier is to be picked. The probability table is
referenced in `_EnemyRandomSizeTblArray` entries, with `_EmId` holding the fixed ID of the monster from the enums file
and multiple possible size tables in `_SizeTable`. I'm still not sure how the game decides which `_SizeTable` to choose,
and which `SizeTableId*` entry under that to pick.

`EmParamBadCondition2.user.3` and `EmParamBadConditionPreset.user.3` are used together to determine the star rating
displayed in the monster manual for status effects such as poison. `EmParamBadCondition2.user.3` is a list of monsters
and GUIDs that point to entries in `EmParamBadConditionPreset.user.3`, which define how weak the monster is to that
status or condition; that indicator is stored in the `_EffectiveType` field of the corresponding entry. The table below
maps the value of that field to the effectiveness rating of the status (the stars displayed in the monster manual).

|File Value|Star Rating|
|---|---|
|1693907968|1 star|
|-1937674624|2 star|
|-1279992448|3 star|

Additionally, for statuses or conditions that the monster is fully resistant to, the `EmParamBadCondition2.user.3` file
uses a GUID of all zeroes (`00000000-0000-0000-0000-000000000000`) in place of a valid GUID to indicate that the status
is not effective at all (such as flash effects on Gore Magala and Gypceros).

`EnemyWeakAttrData.user.3` contains a mapping of fixed monster IDs to boolean values indicating which elements they
are weak to. This can be combined with `EnemyReportMeasureFreeInfoData.user.3` to add the conditions under which the
monster is weak to that element (such as Nerscylla being weak to thunder once its mantle is broken).

## Locations (Stages)
### Data Files
- `natives/STM/GameDesign/Gimmick/_Develop/EnumMaker/GmID.user.3`
- `natives/STM/GameDesign/Gimmick/Gm800/Gm800_*/*_AaaUniqueParam.user.3`

### Translation Files
- `natives/STM/GameDesign/Text/Excel_Data/Gimmick.msg.23`

### Notes
Camps are categorized under "gimmicks", and all appear to be implemented in the `Gm800` namespace. In each directory
(e.g. `Gm800/Gm800_000_51`) there is a file named `Gm800_*_AaaUniqueParam.user.3` which contains information on which
stage the camp is located in (`_Stage` field, which holds the fixed stage ID from the enums file), area number
(`_AreaNum`), danger level (`_RiskDegree`), and several other fields which might be useful. `Gimmick.msg.23` contains
the camp names, and can be found by entry name with the pattern "Gimmick_NAME_\<ID>" where `<ID>` is the fixed ID
from the enums file (which can be generated from `GmID.user.3`).

Technically, the mapping can also be derived from `natives/STM/GameDesign/Common/Gimmick/GimmickTextData.user.3`, which
contains a list of Gimmick IDs and the translation GUIDs for the name and description. You would still need to map
the Gimmick ID to an internal name (the `Gm###_###_##` format), so loading the text data file seems like an unnecessary
step to me.

## Poogie
This isn't something in the API just yet, but it looks like Poogie drop rates are located in:
- `natives/STM/GameDesign/Facility/PugeeItemData.user.3`

## Support Ship
- `natives/STM/GameDesign/Facility/SupportShipData.user.3`
