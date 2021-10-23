import "../kaboom";

export function loadHero() {

  loadSpriteAtlas("sprites/main_char2.png", "code/sprite_atlases/main_char_sa.json");

  loadSpriteAtlas("sprites/battle_screen.png", "code/battle_screen_sa.json");

  loadSpriteAtlas("sprites/items.png", "code/items_sa.json");

  loadSprite("heart", "sprites/heart.png");

  loadSpriteAtlas("sprites/wizard_idle.png", "code/enemy_sa.json");
}
