import "../kaboom";

export function loadSprites() {

  loadSpriteAtlas("sprites/main_char2.png", "code/sprite_data/sprite_atlas_jsons/main_char_sa.json");

  loadSpriteAtlas("sprites/battle_screen.png", "code/sprite_data/sprite_atlas_jsons/battle_screen_sa.json");

  loadSprite("enemyBar", "sprites/enemyBar.png");

  loadSpriteAtlas("sprites/items.png", "code/sprite_data/sprite_atlas_jsons/items_sa.json");

  loadSprite("heart", "sprites/heart.png");

  loadSpriteAtlas("sprites/wizard_idle.png", "code/sprite_data/sprite_atlas_jsons/enemy_sa.json");
}
