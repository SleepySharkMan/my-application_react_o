import React from "react";

const ContentContainer = (sectionInfo) => {
    return (
            <a href={"/catalog/"+ sectionInfo.section.sectionTitle} className="section-card">
                    <img src={sectionInfo.section.img} alt="" className="img-section" />
                    <div className="sectiont-text">{sectionInfo.section.sectionTitle}</div>
            </a>
    );
};
export default ContentContainer;