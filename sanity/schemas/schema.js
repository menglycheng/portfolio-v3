// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import experience from "./experience";
import competition from "./competition";
import project from "./project";
import event from "./event";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([experience, competition, project, event]),
});
