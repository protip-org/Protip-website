import React from "react"; 
import { SideLinksDivContainer, SideLink, SideLinksImg } from "./style";

const SideLinks = () => {
    const [data, setData] =  React.useState([
        { name: "Top.gg", image: "https://i.imgur.com/u52McDY.png", link: "" },
        { name: "Discord", image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png", link: "https://discord.gg/8CrxvdeqDS" },
        { name: "Github", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", link: "https://github.com/IMAD200" }
    ]);

    return (
        <SideLinksDivContainer>
             {data.map((data, index) => (
                 <SideLink 
                    href={data.link} 
                    target="_blank" 
                    key={index}>
                    <SideLinksImg src={`${data.image}`} />
                 </SideLink>
               ))}
        </SideLinksDivContainer>
    )
};

export default SideLinks;