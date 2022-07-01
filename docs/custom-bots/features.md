---
title: Features
description: This page thoroughly explains all of your custom bot's features.
sidebar_position: 1
---

# Features

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page thoroughly explains all of your custom bot's features.

## Frequent Updates

Your custom bot will receive automatic weekly updates!

## Support

We provide swift support with anything you may need help with! Join our [Discord server](/discord) for assistance.

## Settings

There are many settings available for you to configure, hence the name **custom** bot. To configure them, run the `/settings` command ([see here](/docs/about-us/faq#why-dont-my-bots-commands-appear) if the command prompt doesn't appear). Click the 'Edit Settings' button on the message that appears and fill out the fields.

<Tabs>
  <TabItem value="botInfo" label="Bot Info" default>

| Setting | Description            | Type   | Notes                                 |
|---------|------------------------|--------|---------------------------------------|
| Name    | The name of your bot   | Text   | Only editable via https://discord.dev |
| ID      | The ID of your bot     | Number | Not editable                          |
| Prefix  | The prefix of your bot | Text   | Not editable                          |

  </TabItem>
  <TabItem value="mainSettings" label="Main Settings">

| Setting     | Description                 | Type               | Notes                                                           |
|-------------|-----------------------------|--------------------|-----------------------------------------------------------------|
| Theme Color | The theme color of your bot | Hex                | Will be the color of most embeds                                |
| Status      | The status of your bot      | Text               | Must begin with either `Playing`, `Listening to`, or `Watching` |

  </TabItem>
  <TabItem value="memberManagement" label="Member Management">

| Setting           | Description                                                   | Type               | Notes |
|-------------------|---------------------------------------------------------------|--------------------|-------|
| Join Log Channel  | The channel which all people who join your server are logged  | Channel Name or ID |       |
| Leave Log Channel | The channel which all people who leave your server are logged | Channel Name or ID |       |
| Join Role         | The role which all people who join your server will receive   | Role Name or ID    |       |

  </TabItem>
  <TabItem value="discordRobloxModeration" label="Discord --> Roblox Moderation">

| Setting                     | Description                                                           | Type               | Notes |
|-----------------------------|-----------------------------------------------------------------------|--------------------|-------|
| Place ID                    | The place ID of your Roblox game                                      | Number             |       |
| Game Moderator Role         | Users who have this role will be able to run game moderation commands | Role Name or ID    |       |
| Game Moderation Log Channel | The channel which all game moderation action is logged to             | Channel Name or ID |       |

  </TabItem>
  <TabItem value="moderationSettings" label="Moderation Settings">

| Setting                | Description                                                      | Type               | Notes |
|------------------------|------------------------------------------------------------------|--------------------|-------|
| Moderator Role         | Users who have this role will be able to run moderation commands | Role Name or ID    |       |
| Moderation Log Channel | The channel which all moderation action is logged to             | Channel Name or ID |       |
| Mod Call Channel       | The channel which all /callmod notifications are sent            | Channel Name or ID |       |

  </TabItem>
</Tabs>

## Fun Commands

Here's a list of your custom bot's fun commands:
- `/8ball` - ask a closed question and receive an answer
  - Argument #1: `Question` (required)
- `/coinflip` - flip a coin
- `/joke` - your bot will tell you a joke

## Informational Commands

Here's a list of your custom bot's informational commands:
- `/avatar` - displays a user's Discord profile picture
  - Argument #1: `User` (not required)
  - Argument #2: `Size` (not required)
  - Argument #3: `Extension` (not required)
  - Argument #4: `Type` (not required)
- `/github` - displays information about a GitHub user's profile
  - Argument #1: `User` (required)
- `/member-count` - displays how many members are in the server
- `/roleinfo` - displays information about a role
  - Argument #1: `Role` (required)
- `/serverinfo` - displays information about the server
- `/userinfo` - displays information about a Discord user
  - Argument #1: `User` (not required)

## Miscellaneous Commands

Here's a list of your custom bot's miscellaneous commands:
- [`/embed-editor`](/docs/custom-bots/features#embed-editor) - displays the interactive embed editor menu
  - For anyone with the `MANAGE_SERVER` permission
- `/callmod` - calls a moderator to your current channel
- `/invites` - displays how many users someone has invited to your server
  - Argument #1: `User` (not required)
- `/lmgtfy` - for when someone would rather bother you with their question than Google it for themselves
  - Argument #1: `Question` (required)
- `/tax` - calculates how much a person would receive if you paid the specified amount of robux
  - Argument #1: `Amount` (required)
- `/reverse-tax` - calculates how much a person would need to pay for the other person receive the specified amount of robux
  - Argument #1: `Amount` (required)

## Moderation Commands

Here's a list of your custom bot's moderation commands:
- `/ban` - bans a user from your server
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `BAN_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (not required)
  - Argument #3: `Delete Messages` (not required)
- `/dm` - sends a user a direct message via your bot
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Message` (required) - use `\n` for a new line
- `/kick` - kicks a user from your server
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `KICK_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (not required)
- `/modlogs` - displays the moderation logs of a user
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
- `/purge` - deletes the specified amount of messages from the current channel
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MANAGE_MESSAGES` permission to use this command.
  - Argument #1: `Amount` (required)
- `/remove-modlog` - removes a user's moderation log from their record
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `Case ID` (required)
  - Argument #2: `Reason` (not required)
- `/remove-timeout` - removes a user from timeout
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (not required)
- `/say` - makes your bot say the specified message
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MANAGE_MESSAGES` permission to use this command.
  - Argument #1: `Message` (required)
- `/timeout` - puts a user in timeout, preventing them from sending messages, joining voice chats, etc
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Time` (required)
  - Argument #3: `Reason` (not required)
- `/unban` - unbans a user from your server
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: [`User ID`](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) (required)
  - Argument #2: `Reason` (not required)
- `/warn` - warns a user
  - For anyone with the configured `Moderator Role`
    - If there's no configured role, you must instead have the `MODERATE_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (not required)

:::info

All executed moderation commands will be logged to your configured [Moderation Log Channel](/docs/custom-bots/features#settings).

:::

## Roblox Moderation Commands

Here's a list of your custom bot's [Roblox moderation](/docs/custom-bots/features#discord----roblox-moderation) commands:
- `/gameban` - bans a user from your game
  - For anyone with the configured `Game Moderator Role`
    - If there's no configured role, you must instead have the configured `Moderator Role`.
      - If there's no configured role, you must instead have the `BAN_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (required)
  - Argument #3: `Days` (required)
  - Argumnt #4: `Evidence` (not required)
- `/gamekick` - kicks a user from your game
  - For anyone with the configured `Game Moderator Role`
    - If there's no configured role, you must instead have the configured `Moderator Role`.
      - If there's no configured role, you must instead have the `BAN_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (required)
- `/gamelogs` - displays a player's game moderation logs
  - For anyone with the configured `Game Moderator Role`
    - If there's no configured role, you must instead have the configured `Moderator Role`.
      - If there's no configured role, you must instead have the `BAN_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
- `/gameunban` - unbans a player from your game
  - For anyone with the configured `Game Moderator Role`
    - If there's no configured role, you must instead have the configured `Moderator Role`.
      - If there's no configured role, you must instead have the `BAN_MEMBERS` permission to use this command.
  - Argument #1: `User` (required)
  - Argument #2: `Reason` (not required)

:::info

All executed Roblox moderation commands will be logged to your configured [Game Moderation Log Channel](/docs/custom-bots/features#settings).

:::

## Embed Editor

The embed editor is an interface which allows you to create, save & load embeds to send to your channels. People like to use embeds for rules, special announcements, etc. To access it, run the `/embed-editor` command in your server. Note that you must have the `MANAGE_SERVER` permission in order to use this.

Upon first use, the interface will look like this:

![Embed Editor](/img/features/embed-editor.png)

The embed editor was designed for ease of access on all platforms and currently features up to 25 saveable embeds with:
- A custom title
- A custom color
- A custom thumbnail
- A custom description
- A custom image
- A custom footer
- Up to 5 fields (each with a custom name and value)

## Discord --> Roblox Moderation

myBot offers a Discord --> Roblox moderation system which allows you to moderate players your game right from the comfort of your own Discord server! This is perfect for those who aren't always able to open Roblox and for those who'd like a more effective moderation system for their game.

Here's a guide on how to set it up:

1. Visit [this link](https://www.roblox.com/library/10066799586/myBot-Moderation-System), click 'Get' after signing into your Roblox account, and then open Roblox Studio
2. Insert the model into your game and place the provided script into `ServerScriptService`
3. Enable 'Allow HTTP Requests' under the `Security` tab of your game settings
4. Run the `/settings` command with your custom bot and click 'Edit Settings'. Specify 'Place ID' for the `Setting` and input your game's place ID into `New Value`. If you don't know your place ID then run the following command in your command bar: `print(game.PlaceId)`
5. Enjoy! You now have effective Roblox moderation commands in the comfort of your own Discord server; all provided by myBot!