import PropTypes from 'prop-types'

const technologyList = {
    css: { name: "CSS3", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" }, 
    html: { name: "HTML5", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" }, 
    js: { name: "Javascript", src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" }, 
    mysql: { name: "MySQL", src: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" }, 
    php: { name: "PHP", src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" }, 
    babel: { name: "Babel", src: "https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" }, 
    cypress: { name: "Cypress", src: "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" }, 
    d3: { name: "D3.js", src: "https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white" }, 
    firebase: { name: "Firebase", src: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" }, 
    jest: { name: "Jest", src: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" }, 
    jquery: { name: "jQuery", src: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" }, 
    node: { name: "Node.js", src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" }, 
    npm: { name: "npm", src: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" }, 
    react: { name: "React.js", src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" }, 
    redux: { name: "Redux", src: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" }, 
    sass: { name: "Sass", src: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" }, 
    styled: { name: "Styled-components", src: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" }, 
    webpack: { name: "Webpack", src: "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" }, 
    yarn: { name: "Yarn", src: "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" }, 
    docker: { name: "Docker", src: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" }, 
    eslint: { name: "ESLint", src: "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" }, 
    photoshop: { name: "Adobe Photoshop", src: "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" }, 
    netbeans: { name: "Apache Netbeans", src: "https://img.shields.io/badge/apache%20netbeans-1B6AC6?style=for-the-badge&logo=apache%20netbeans%20IDE&logoColor=white" }, 
    eclipse: { name: "Eclipse", src: "https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white" }, 
    figma: { name: "Figma", src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" }, 
    gimp: { name: "Gimp", src: "https://img.shields.io/badge/gimp-5C5543?style=for-the-badge&logo=gimp&logoColor=white" }, 
    git: { name: "Git", src: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" },  
    github: { name: "GitHub", src: "https://img.shields.io/badge/GitHub-7dd372?style=for-the-badge&logo=github&logoColor=white" }, 
    netlify: { name: "Netlify", src: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" }, 
    postman: { name: "Postman", src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" }, 
    vscode: { name: "Visual Studio Code", src: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" }, 
    wordpress: { name: "WordPress", src: "https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" }
}

/**
 * Display technology badge 
 * @component
 * @param {object} props 
 * @param {string} props.technology - technology name 
 * @returns {object} Technology
 */
function TechnologyBadge(props) {
    const { technology } = props 
    const technoInfo = technologyList[technology]
    return technoInfo && <img src={ technoInfo.src } alt={ technoInfo.name } />
}

TechnologyBadge.propTypes = {
    technology: PropTypes.string.isRequired
}

export default TechnologyBadge 