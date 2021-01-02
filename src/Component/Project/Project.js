import React from 'react';
import ProjectLogo from '../../images/project.svg'
import './Project.css'


const Project = ( { projectData } ) => {
    
    const projectBackground = (code) => {
        return { backgroundColor: code }
    }

    const projectLeftStyle = {
        gridArea: 'projectLogo'
    }

    const projectRightStyle = {
        gridArea: 'projectContent'
    }

    const projectLogo = {
        width: '600px'
    }
    return (
        <div id="Projects" className="project" style = { projectData.isDark ? projectBackground('#000') : projectBackground('#fff')}>
            <div style={ projectData.leftFlow ? projectLeftStyle : projectRightStyle} className="projectLogo">
                <img src={ projectData.logo } alt="" style={projectLogo}/>
            </div>
            <div style={projectData.leftFlow ? projectRightStyle : projectLeftStyle } className="projectContent">
                <h1 style={{color: "#c74464"}}>{ projectData.title }</h1>
                <h4>{projectData.description}</h4>
                <h4>{projectData.skills}</h4>
            </div> 
            
        </div>
    )
}

export default Project
