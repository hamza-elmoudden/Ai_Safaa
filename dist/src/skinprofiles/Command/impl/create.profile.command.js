"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileCommand = void 0;
class CreateProfileCommand {
    user_id;
    skin_type;
    concerns;
    allergies;
    notes;
    constructor(user_id, skin_type, concerns, allergies, notes) {
        this.user_id = user_id;
        this.skin_type = skin_type;
        this.concerns = concerns;
        this.allergies = allergies;
        this.notes = notes;
    }
}
exports.CreateProfileCommand = CreateProfileCommand;
//# sourceMappingURL=create.profile.command.js.map