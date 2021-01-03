import React from "react";
import SideLinks from "../../components/side-links/index";
import CommandItem from "../../components/command-item/index";
import { CommandsDivContainer, CommandsUl } from "./style";

const CommandsPage = () => {
    const [data, setData] = React.useState([
        { command: ".tip - Recive a peice of advice." },
        { command: ".help - Brings you to this menu." },
        { command: ".about - Shows details about Protip." },
        { command: ".source - View the source code." },
        { command: ".bug - Report a bug/error." },
        { command: ".suggest - Suggest a feature." },
        { command: ".invite - Invite Protip to your server." },
        { command: ".github - View Protip's github repository." },
        { command: ".website Visit the official Protip website." },
        { command: ".uptime See how long Protip has been online" },
        { command: ".set prefix - Set a new prefix for Protip." }
    ]);

    React.useEffect(() => {
        document.body.style.backgroundImage = "url('')";
        document.body.style.backgroundColor = "#2f303f";
      }, []);

return (
        <CommandsDivContainer>
          <SideLinks/>
            <CommandsUl>
            {data.map((data, index) => (
                    <CommandItem
                      key={index}
                      command={data.command}
                    />
                ))}
            </CommandsUl>
        </CommandsDivContainer>
    )
};

export default CommandsPage;