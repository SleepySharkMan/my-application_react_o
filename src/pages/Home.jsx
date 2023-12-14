import React from "react";
import ContentContainer from "../components/ContentContainer";


const Home = ({ sectionData }) => {

    const chunkSize = 2
    const dividedData = []
    for (let i = 0; i < sectionData.length; i += chunkSize) {
        dividedData.push(sectionData.slice(i, i + chunkSize));
    }

    return (
        <div className="main-div">
            {dividedData.map((group, index) => (
                <div className="section-group" key={index}>
                    {group.map((section) => (
                        <ContentContainer section={section} key={section.id} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Home;