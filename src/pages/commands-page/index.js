import React from "react";
import { CommandsDivContainer, CommandsUl, CommandsLi } from "./style";

const CommandsPage = () => (
        <CommandsDivContainer>
            <CommandsUl>
                <CommandsLi>.tip - Recive a peice of advice.</CommandsLi>
                <CommandsLi>.help - Brings you to this menu.</CommandsLi>
                <CommandsLi>.about - Shows details about Protip.</CommandsLi>
                <CommandsLi>.source - View the source code.</CommandsLi>
                <CommandsLi>.bug - Report a bug/error.</CommandsLi>
                <CommandsLi>.suggest - Suggest a feature.</CommandsLi>
                <CommandsLi>.invite - Invite Protip to your server.</CommandsLi>
                <CommandsLi>.github - View Protip's github repository.</CommandsLi>
                <CommandsLi>.website - Visit the official Protip website.</CommandsLi>
                <CommandsLi>.set prefix - Set a new prefix for Protip.</CommandsLi>
            </CommandsUl>
        </CommandsDivContainer>
);

export default CommandsPage;