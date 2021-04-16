---
to: src/components/<%= level %>/<%= name %>/index.tsx
---
import React from "react";

import "./style.scss";

interface <%= h.toPascalCase(name) %>Props {}

const <%= h.toPascalCase(name) %>: React.FC<<%= h.toPascalCase(name) %>Props> = ({}) => {
    return <div className="<%= h.createBaseClassName(level, name) %>"></div>
}

export default <%= h.toPascalCase(name) %>;