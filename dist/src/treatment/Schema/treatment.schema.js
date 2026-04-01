"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treatment = exports.areas_treated = exports.plan_status = void 0;
var plan_status;
(function (plan_status) {
    plan_status["active"] = "active";
    plan_status["completed"] = "completed";
    plan_status["paused"] = "paused";
    plan_status["cancelled"] = "cancelled";
})(plan_status || (exports.plan_status = plan_status = {}));
var areas_treated;
(function (areas_treated) {
    areas_treated["Face"] = "Face";
    areas_treated["Neck"] = "Neck";
    areas_treated["Back"] = "Back";
    areas_treated["Scalp"] = "Scalp";
    areas_treated["Hair"] = "Hair";
    areas_treated["Nails"] = "Nails";
})(areas_treated || (exports.areas_treated = areas_treated = {}));
class Treatment {
    id;
    user_id;
    title;
    status;
    improvement_pct;
    areas_treated;
    duration_days;
    initial_photo_url;
    initial_photo_key;
    ai_diagnosis;
    ai_model;
    next_checkin_at;
    started_at;
    completed_at;
    created_at;
    updated_at;
    path;
    constructor(id, user_id, title, status, improvement_pct, areas_treated, duration_days, initial_photo_url, initial_photo_key, ai_diagnosis, ai_model, next_checkin_at, started_at, completed_at, created_at, updated_at, path) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.status = status;
        this.improvement_pct = improvement_pct;
        this.areas_treated = areas_treated;
        this.duration_days = duration_days;
        this.initial_photo_url = initial_photo_url;
        this.initial_photo_key = initial_photo_key;
        this.ai_diagnosis = ai_diagnosis;
        this.ai_model = ai_model;
        this.next_checkin_at = next_checkin_at;
        this.started_at = started_at;
        this.completed_at = completed_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.path = path;
    }
}
exports.Treatment = Treatment;
//# sourceMappingURL=treatment.schema.js.map