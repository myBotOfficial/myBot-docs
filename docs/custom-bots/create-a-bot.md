---
sidebar_position: 2
---

# Create a Bot

---

This page walks you through step-by-step how to create a custom bot with [many features](/docs/custom-bots/features) in under 2 minutes with myBot! Before following this tutorial, please ensure you have enough credits (see [here](/docs/our-currency/payment-plans) and [here](/docs/our-currency/credit-pricing)).

## Step 1

Head to https://discord.dev and login if you haven’t already.  
Click `New Application`, enter your desired bot’s username and click `Create`.

![New Application](/img/create-a-bot/new-application.png)

![New Application Fields](/img/create-a-bot/new-application-fields.png)

## Step 2

You should see a sidebar on the left-hand side. Click `Bot`.

![Click Bot](/img/create-a-bot/click-bot.png)

Scroll down a little and you should see `Presence Intent`, `Server Members Intent`, and `Message Content Intent`. Enable all 3 of these.

![Intents](/img/create-a-bot/intents.png)

## Step 3

Scroll back to the top of the page and click `Reset Token`. If you have two-factor authentication enabled, you may be prompted to enter a code.

![Reset Token](/img/create-a-bot/reset-token.png)

Once you’ve done that, you should see `Copy`. Click that. You may now close the tab.

![Confirm Reset Token](/img/create-a-bot/reset-token-confirm.png)

## Step 4

Go to the [#bot-commands](/discord) channel and type `/create-bot`. You’ll be prompted to enter 3 pieces of information:
- Plan: [monthly payment, lifetime payment or free 7-day trial](/docs/our-currency/payment-plans)
- Token: the thing you copied from [step 3](/docs/custom-bots/create-a-bot#step-3)
- Main Server ID: the ID of the server which you’ll be using your bot in (follow [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) tutorial to learn how to retrieve it)

## Step 5

Congratulations, you’ve created your very own bot! Click the provided link to invite your bot to your server.

![Success](/img/create-a-bot/success.png)

You may notice that your bot isn’t online; that’s because you need to run the `/start-bot` command in the [#bot-commands](/discord) channel!

## Step 6

Now that your bot is online, why don’t you check it out? Run the `/settings` command via your bot to edit the configuration (you can change its theme color, moderation log channel, its custom status & so much more) and then explore its commands! Enjoy a fully custom bot updated weekly!

Here are some useful commands to run in our [server](/discord) that you may find handy:
- `/bots`
- `/start-bot`
- `/stop-bot`
- `/edit-bot`
- `/delete-bot`
- `/credits`
- `/buy-credits`