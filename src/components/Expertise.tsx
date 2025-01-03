import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython,  faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import { faBrain, faDatabase } from '@fortawesome/free-solid-svg-icons'; // General data-related icon
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "Python (Pandas, NumPy, Matplotlib, Seaborn)",
    "Excel (Advanced formulas, PivotTables, Power Query)",
    "SQL (MySQL, PostgreSQL, SQL Server)",
    "Power BI",
    "Jupyter Notebooks"
];

const labelsSecond = [
    "SQL",
    "Apache Spark",
    "Airflow",
    "AWS (S3, Redshift)",
    "Azure Data Factory",
    "Snowflake"
];

const labelsThird = [
    "Scikit-Learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "XGBoost",
    "Hugging Face",
    "OpenAI API",
    "LangChain"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analytics</h3>
                    <p>I specialize in transforming complex datasets into clear and actionable insights. With expertise in exploratory data analysis, data cleaning, and statistical analysis, I deliver high-quality reports and visualizations that help stakeholders make informed decisions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & ETL</h3>
                    <p>I have hands-on experience in data preprocessing, ETL pipeline development, and working with cloud-based data solutions to ensure data is accessible, reliable, and ready for analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning and Artificial Intelligence</h3>
                    <p>I develop machine learning models for predictive analytics, classification, and clustering tasks. My expertise includes model selection, hyperparameter tuning, and performance evaluation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;