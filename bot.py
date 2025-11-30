import discord
from discord.ext import commands
import os

TOKEN = os.getenv("DISCORD_TOKEN")  # Récupère ton token depuis Render

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Connecté en tant que {bot.user}")

@bot.command()
async def ping(ctx):
    await ctx.send("Pong 🏓")

bot.run(TOKEN)
