import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMzkzNjkxMjgtNmI0Ny00ZDIyLWI1MTgtYmNiOTMyOGMyMzRiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMzkzNjkxMjgtNmI0Ny00ZDIyLWI1MTgtYmNiOTMyOGMyMzRiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" target="_blank" rel="noreferrer"><h2>Business Insight 360</h2></a>
                <p>This is a comprehensive Power BI project that showcases dashboards for Finance, Sales, Supply Chain, Marketing, and Executive operations, providing actionable insights to optimize decision-making across various business sectors.</p>
            </div>
            <div className="project">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYzQ4Mzg5ZTEtMzczNS00MzBmLTk3M2YtOTdiZjYyZTQ5ZTBlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9&pageName=ReportSection3aac053726c8ce52444b" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYzQ4Mzg5ZTEtMzczNS00MzBmLTk3M2YtOTdiZjYyZTQ5ZTBlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9&pageName=ReportSection3aac053726c8ce52444b" target="_blank" rel="noreferrer"><h2>Hotel Revenue & Market Insights Dashboard</h2></a>
                <p>This is a Power BI project created to help AtliQ Grand, a leading hotel chain, regain market share and increase revenue through data-driven decisions. It delivers insights into key performance metrics, revenue distribution, and booking patterns, enabling better sales strategies and operational improvements.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking dashboard for an educational institution using the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
             <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Sales and Financial Analytics Report in Excel (FMCG)</h2></a>
                <p>This is a project that leverages pivot tables, Power Query, and basic DAX functions to deliver actionable insights into customer discounts, negotiation strategies, and untapped markets. Designed to help businesses optimize sales efforts, it provides data-driven recommendations to enhance tactics, improve customer experiences, and boost revenue.</p>
            </div>
            {/* <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;