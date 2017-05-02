'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Player {
  constructor(playerObject) {
    if (!playerObject) {
      throw new Error('playerObject info missing');
    }
    this.playerObject = playerObject;
  }

  steamId() {
    const id = this.playerObject.steamid;
    if (!id) {
      throw new Error('Player has no steamid');
    }
    return id;
  }

  communityVisibilityState() {
    return this.playerObject.communityvisibilitystate;
  }

  profileState() {
    return this.playerObject.profilestate;
  }

  personaName() {
    return this.playerObject.personaname;
  }

  name() {
    return this.personaName();
  }

  lastLogoff() {
    return Date.parse(this.playerObject.lastlogoff);
  }

  profileURL() {
    return this.playerObject.profileurl;
  }

  avatar() {
    return this.playerObject.avatar;
  }

  avatarMedium() {
    return this.playerObject.avatarmedium;
  }

  avatarFull() {
    return this.playerObject.avatarfull;
  }

  personaState() {
    return this.playerObject.personastate;
  }

  realName() {
    return this.playerObject.realname;
  }

  primaryClanId() {
    return this.playerObject.primaryclanid;
  }

  timeCreated() {
    return this.playerObject.timecreated;
  }

  createdAt() {
    return this.timeCreate();
  }

  personaStateFlags() {
    return this.playerObject.personastateflags;
  }

  countryCode() {
    return this.playerObject.loccountrycode;
  }
}
exports.default = Player;
//# sourceMappingURL=player.js.map