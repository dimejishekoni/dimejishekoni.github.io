import React from "react";
import checkers from '../assets/images/projects/checkers.png';
import mitron from '../assets/images/projects/mitron_bank.png';
import bi360 from '../assets/images/projects/bi360.png';
import excel from '../assets/images/projects/excel.png';
import mock05 from '../assets/images/projects/mock05.png';
import mock10 from '../assets/images/projects/mock10.png';
import slr from '../assets/images/projects/slr.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMzkzNjkxMjgtNmI0Ny00ZDIyLWI1MTgtYmNiOTMyOGMyMzRiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" target="_blank" rel="noreferrer"><img src={bi360} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMzkzNjkxMjgtNmI0Ny00ZDIyLWI1MTgtYmNiOTMyOGMyMzRiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" target="_blank" rel="noreferrer"><h2>Business Insight 360</h2></a>
                <p>This is a comprehensive Power BI project that showcases dashboards for Finance, Sales, Supply Chain, Marketing, and Executive operations, providing actionable insights to optimize decision-making across various business sectors.</p>
            </div>
            <div className="project">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYzQ4Mzg5ZTEtMzczNS00MzBmLTk3M2YtOTdiZjYyZTQ5ZTBlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9&pageName=ReportSection3aac053726c8ce52444b" target="_blank" rel="noreferrer"><img src={mitron} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYzQ4Mzg5ZTEtMzczNS00MzBmLTk3M2YtOTdiZjYyZTQ5ZTBlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9&pageName=ReportSection3aac053726c8ce52444b" target="_blank" rel="noreferrer"><h2>Strategic Insight For Mitron's Bank New Credit Card Line</h2></a>
                <p>This project involved analyzing a sample dataset of 4,000 customers across five cities to uncover key insights on online spending patterns and customer behavior. The findings guided strategic recommendations on product features and target markets, successfully demonstrating capability to deliver actionable, data-driven solutions and earning the trust of Mitron Bank’s strategy team for further collaboration.</p>
                {/* <p>This is a Power BI project created to help AtliQ Grand, a leading hotel chain, regain market share and increase revenue through data-driven decisions. It delivers insights into key performance metrics, revenue distribution, and booking patterns, enabling better sales strategies and operational improvements.</p> */}
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
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={excel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Sales and Financial Analytics Report in Excel (FMCG)</h2></a>
                <p>This is a project that leverages pivot tables, Power Query, and basic DAX functions to deliver actionable insights into customer discounts, negotiation strategies, and untapped markets. Designed to help businesses optimize sales efforts, it provides data-driven recommendations to enhance tactics, improve customer experiences, and boost revenue.</p>
            </div>
            <div className="project">
                <a href="https://github.com/dimejishekoni/Sign_To_Text" target="_blank" rel="noreferrer"><img src={slr} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dimejishekoni/Sign_To_Text" target="_blank" rel="noreferrer"><h2>Sign Language Translation to Text</h2></a>
                <p>Built an Advanced Sign Language Recognition (SLR) System developed using Google’s MediaPipe library for precise body pose landmark detection. This project involves a comparative study of LSTM and Transformer models, with results demonstrating the superior performance of the Transformer model in recognizing sign language gestures, highlighting its potential for real-time communication applications.</p>
            </div>
            <div className="project">
                <a href="https://github.com/dimejishekoni/Checkers" target="_blank" rel="noreferrer"><img src={checkers} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dimejishekoni/Checkers" target="_blank" rel="noreferrer"><h2>AI-Powered Checkers Game</h2></a>
                <p>Built with an intelligent AI powered checkers game using the Minimax algorithm. The game follows traditional 8x8 checkers rules, with key mechanics such as diagonal movement, forced captures, and piece promotion to kings upon reaching the opponent’s side. The Minimax algorithm, combined with heuristic evaluation, enables the AI to make optimal moves, providing a challenging and engaging gameplay experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;