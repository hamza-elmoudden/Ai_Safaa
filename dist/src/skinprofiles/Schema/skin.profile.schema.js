"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkinProfile = exports.Skin_type = void 0;
var Skin_type;
(function (Skin_type) {
    Skin_type["dry"] = "dry";
    Skin_type["oily"] = "oily";
    Skin_type["combination"] = "combination";
    Skin_type["normal"] = "normal";
    Skin_type["sensitive"] = "sensitive";
})(Skin_type || (exports.Skin_type = Skin_type = {}));
class SkinProfile {
    id;
    user_id;
    skin_type;
    concerns;
    allergies;
    notes;
    created_at;
    updated_at;
    constructor(id, user_id, skin_type, concerns, allergies, notes, created_at, updated_at) {
        this.id = id;
        this.user_id = user_id;
        this.skin_type = skin_type;
        this.concerns = concerns;
        this.allergies = allergies;
        this.notes = notes;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
exports.SkinProfile = SkinProfile;
//# sourceMappingURL=skin.profile.schema.js.map