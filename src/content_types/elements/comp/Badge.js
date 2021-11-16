import React from "react";
import { Badge } from "@chakra-ui/react";
function Badge_Comp({ name, color }) {
  return (
    <Badge variant="subtle" colorScheme={`${color ? color : "green"}`} mx="1">
      {name}
    </Badge>
  );
}

export default Badge_Comp;
