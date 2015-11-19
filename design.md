# Airships

## Game Mechanics

Survive - Scavance for resources
Build - Build Airships (Scavenge for parts from crashed airships)
Explore - Pilot ships to explore new places

Trade - Trade with AI 

Multiplayer - Similar to Terraria / Starbound / Minecraft

AI Cities to discover - Most of world Dessert / Mountains / (maybe) Forrest

=================

### Resources

- Fule: Must build / Repair / Take over fuel pumps in the wilderness to harvest fuel (this encourages exploration)
- Food: Eat food to survive - I dont really want to make the game about just surviving so I'm not sure on this one
- Crashed airhip parts - Scavenge parts from other airships
- Weapons ? (I'm not sure how combat would work yet. I know I want it in the game but maybe as a last resort option?)

=================

### World

- 2D Top down
- Randomly generated

=================

### Build

- Airships to be completely customisable in layout, size, parts, everything
- Can be piloted by a single person but make it highly advatageous to be with friends

=================

## Technical Bit

Javascript Client with NodeJs server

PixiJs 2D Rendering Engine - Open to suggestions on this, Ive used this before and its makes nice rendering abstractions without
stopping you from writing your own shaders and stuff (although it comes with a bunch already out of the box)- Real nice :)

Messege Parsing based engine - pubsub component architecture allows us to separate game engine code cleanly and make
							   the medium (da interwebz) transparent . . . Hopefully

Electron / NwJS - "I don't like the idea of this being a browser based game (I really like HTML5 teck for rendering and ease of programming
but I feel being in a browser breaks emersion and feels different to play somehow), I kinda want something like NWJS or 
Electron keeping it a "Desktop" application" Lilroo Joe. 2015
