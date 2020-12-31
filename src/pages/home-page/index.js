import React from "react";
import { HomeDivContainer, HomeH1, HomeP, HomeButton } from "./style";

const HomePage = () => (
    <HomeDivContainer>
        <HomeH1>Protip bot</HomeH1>
        <HomeP>A discord bot designed to give helpful advice.</HomeP>
        <HomeButton onClick={() => window.location.href = "https://discord.com/oauth2/authorize?client_id=792875120116891709&scope=bot&permissions=2147483647"}>Add the bot</HomeButton>
    </HomeDivContainer>
);

export default HomePage;