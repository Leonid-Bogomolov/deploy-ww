import style from "./style.module.css"

const About = () => {
    return (
        <div className={style.container}>
            <div id="about" className={style.marker}></div>
            <h2>What to find in this API?</h2>
            <hr></hr>
            <div className={style.info_numbers}>
                <div>
                    <h3>100 +</h3>
                    <p>Jelly belly beans</p>
                </div>
                <div>
                    <h3>8</h3>
                    <p>Properties on each bean</p>
                </div>
                <div>
                    <h3>99 +</h3>
                    <p>Facts on Jelly Belly</p>
                </div>
                <div>
                    <h3>20 +</h3>
                    <p>Milestones in the Jelly Belly History</p>
                </div>
                <div>
                    <h3>25 +</h3>
                    <p>Recipes</p>
                </div>
                <div>
                    <h3>50 +</h3>
                    <p>Jelly Belly Combinations</p>
                </div>
            </div>
            <div className={style.info_numbers_last}>
                All data reflecting from the original
                <a href="http://www.jellybelly.com">
                    Jelly Belly Website
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                        </path>
                    </svg>
                </a>
                <ul id="about-ul">
                    <h3>Check out all endpoints</h3>
                    <li>
                        <a href="/beans">
                            Beans
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/recipes">
                            Recipes
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                                </path>

                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/facts">
                            Facts
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/combinations">
                            Combinations
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/history">
                            History
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" className={style.svg_inline__fa} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">
                                </path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.AboutAddition}>
                <h2>
                    Content and Sources
                </h2>
                <p>
                    The content, including images and data, has been sourced from the official Jelly Belly website (<a href="https://www.jellybelly.com" target="_blank" rel="noopener noreferrer">www.jellybelly.com</a>). It's important to note that I do not claim ownership of any information on this API or website, except for the original graphics of the logo and logotype. The rest of the content is a creative remix of the available information.
                </p>
                <h2>
                    Contribution and Contact
                </h2>
                <p>
                    If you have suggestions, comments, or contributions for this API or website, please feel free to reach out. You can contact me through the "Contact" section on this website or directly via email at <a href="mailto:moshikoatia@gmail.com">moshikoatia@gmail.com</a>. Your input and collaboration are greatly appreciated.
                </p>
                <h2>
                    Repositories and Project Structure
                </h2>
                <p>
                    This project is divided into three main parts, each with its own repository:
                </p>
                <ul>
                    <li>
                        <strong>1. Web Scraper Repository</strong>
                        (
                        <a href="https://github.com/Object-ions/capstone-supporting-files" target="blank">
                            GitHub Repo
                        </a>
                        )
                        : This repository contains scripts and supporting files for data collection using Python, BeautifulSoup and ChromeDrive. It details the methodology used for creatively gathering data step by step until it was ready to be seeded into the C# API.
                    </li>
                    <li>
                        <strong>
                            2. API Repository
                        </strong>
                        (
                        <a href="https://github.com/Object-ions/Jelly-Belly-Wiki-API" target="blank">GitHub Repo
                        </a>
                        )
                        : The heart of the project, this repository holds the C# and EF Core .Net API with MySql migrations. It serves as the core database of the project. Detailed instructions on how to use this API are available in the repository, similar to the API Documentation provided in the UI.
                    </li>
                    <li>
                        <strong>
                            3. UI Repository
                        </strong>
                        (
                        <a href="https://github.com/Object-ions/Jelly_Belly_Wiki_Client" target="blank">GitHub Repo</a>
                        )
                        : The User Interface makes full use of the API's database, showcasing one approach to design by utilizing all the endpoints and their various options.
                    </li>
                </ul>
                <p className={style.note_about}>
                    <strong>
                        Note:
                    </strong>
                    This is not the final version of this project, and it will continue to evolve. As it's a large-scale work and I am a precise person, this is still a work in progress.
                </p>
            </div>
        </div>
    )
}

export default About