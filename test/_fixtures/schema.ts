import { defineTable, Schema } from "sqldb/schema"

defineTable("users", {
  id: Schema.Number,
  email: Schema.String,
  email_confirmed: Schema.Boolean,
  profile: Schema.JSON(
    Schema.Object({
      avatar_url: Schema.String,
      weblink: Schema.nullable(Schema.String)
    })
  ),
  created_at: Schema.default(Schema.Date),
  updated_at: Schema.nullable(Schema.Date),
  roles: Schema.Array(Schema.Enum(["admin", "user"]))
})
