// deno-lint-ignore-file
const conversation = () => {
  const king: any = {};
  const general: any = {};

  king.hasImprovedRelations();

  king.emphasize('eldians r devil');
  king.prepForAttack();
  king.sacrifice();
  king.attention();

  general.emphasize('we r devils');
};
const battle = () => {
  const warhammer: any = {};
  const attack: any = {};
  const pros: any = {};
  const general: any = {};
  const soldiers: any = {};

  attack.pound(warhammer);
  warhammer.oneshot(attack);
  pros.kill(warhammer, general, soldiers);

  const jaw: any = {};

  try {
    attack.eat(warhammer);
  } catch (e) {
    try {
      jaw.kill(attack);
    } catch (e) {
        pros.kill(jaw);
    }
  }
};

export {};
