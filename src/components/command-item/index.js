import React from "react";
import { CommandsLi } from "./styled";

const CommandItem = ({ command }) => (
    <CommandsLi>{command}</CommandsLi>
);

export default CommandItem;