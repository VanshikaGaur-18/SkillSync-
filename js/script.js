console.log("SkillSync is running!");
// ======================================
// SKILLSYNC NAVIGATION
// ======================================


// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");


// Get the main content area
const pageContent = document.getElementById("page-content");


// Add click event to every navigation link
navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Prevent the link from refreshing the page
        event.preventDefault();

        // Remove active class from all links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        link.classList.add("active");

        // Get page name
        const page = link.getAttribute("data-page");

        // Load selected page
        loadPage(page);

    });

});


// ======================================
// LOAD PAGE
// ======================================

function loadPage(page) {

    if (page === "dashboard") {

        showDashboard();

    } 
    
    else if (page === "roadmap") {

        showRoadmap();

    } 
    
    else if (page === "skills") {

        showSkills();

    } 
    
    else if (page === "resume") {

        showResume();

    } 
   
    
    else if (page === "companies") {

        showCompanies();

    } 
    
    else if (page === "goals") {

        showGoals();

    } 
    
    else if (page === "pomodoro") {

        showPomodoro();

    } 
    
    else if (page === "notes") {

        showNotes();

    }
     else if (page === "settings") {
    showSettings();
}

}


// ======================================
// DASHBOARD
// ======================================
function showDashboard() {

    const stats = getDashboardStats();
    const profile =
    JSON.parse(
        localStorage.getItem("skillSyncProfile")
    ) || {
        name: ""
    };

const userName =
    profile.name || "Student";

    pageContent.innerHTML = `

        <div class="welcome-card">
            <div>
                <p class="small-text">WELCOME BACK 👋</p>

                <h1>Ready to build your future, ${userName}?</h1>

                <p>
                    Stay consistent, track your progress,
                    and move one step closer to your dream career.
                </p>
            </div>

            <div class="welcome-icon">
                🚀
            </div>
        </div>


        <!-- DASHBOARD STATS -->

        <div class="dashboard-stats">

            <div class="stat-card">
                <h3>${stats.totalSkills}</h3>
                <p>Total Skills</p>
            </div>

            <div class="stat-card">
                <h3>
                    ${stats.completedGoals} / ${stats.totalGoals}
                </h3>
                <p>Goals Completed</p>
            </div>

            <div class="stat-card">
                <h3>${stats.totalCompanies}</h3>
                <p>Companies</p>
            </div>

            <div class="stat-card">
                <h3>${stats.resumeProgress}%</h3>
                <p>Resume Progress</p>
            </div>

        </div>


        <!-- CAREER PROGRESS -->

        <div class="dashboard-card">

            <div class="card-header">
                <div>
                    <h2>Career Progress</h2>

                    <p>
                        Your overall roadmap progress
                    </p>
                </div>
            </div>

            <div class="progress-container">

                <div class="progress-info">
                    <span>Roadmap Progress</span>

                    <strong>
                        ${stats.roadmapProgress}%
                    </strong>
                </div>

                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width: ${stats.roadmapProgress}%">
                    </div>
                </div>

            </div>

        </div>


        <!-- QUICK OVERVIEW -->

        <div class="dashboard-card">

            <div class="card-header">

                <div>
                    <h2>Quick Overview</h2>

                    <p>
                        Keep building your skills and stay consistent.
                    </p>
                </div>

            </div>

            <div class="overview-grid">

                <div class="overview-item">
                    <span>📚</span>
                    <div>
                        <strong>${stats.totalSkills}</strong>
                        <p>Skills tracked</p>
                    </div>
                </div>

                <div class="overview-item">
                    <span>🎯</span>
                    <div>
                        <strong>${stats.completedGoals}</strong>
                        <p>Goals completed</p>
                    </div>
                </div>

                <div class="overview-item">
                    <span>🏢</span>
                    <div>
                        <strong>${stats.totalCompanies}</strong>
                        <p>Companies tracked</p>
                    </div>
                </div>

                <div class="overview-item">
                    <span>📄</span>
                    <div>
                        <strong>${stats.resumeProgress}%</strong>
                        <p>Resume completed</p>
                    </div>
                </div>

            </div>

        </div>

        <!-- RECENT ACTIVITY -->

        <div class="dashboard-card">

            <div class="card-header">
                <div>
                    <h2>Recent Activity</h2>
                    <p>Keep track of your latest progress.</p>
                </div>
            </div>

            <div id="recent-activity">
                <p class="dashboard-empty">
                    No recent activity yet.
                </p>
            </div>

        </div>


        <!-- UPCOMING TASKS -->

      <!-- QUICK ACTIONS -->
<!-- QUICK ACTIONS -->

<div class="dashboard-card">

    <div class="card-header">
        <div>
            <h2>Quick Actions</h2>
            <p>Quickly manage your career activities.</p>
        </div>
    </div>

    <div class="quick-actions">

        <button
            class="quick-action-btn"
            onclick="loadPage('goals')">
            🎯
            <span>Add Goal</span>
        </button>

        <button
            class="quick-action-btn"
            onclick="loadPage('skills')">
            📚
            <span>Add Skill</span>
        </button>

        <button
            class="quick-action-btn"
            onclick="loadPage('companies')">
            🏢
            <span>Add Company</span>
        </button>

        <button
            class="quick-action-btn"
            onclick="loadPage('notes')">
            📝
            <span>Create Note</span>
        </button>

    </div>

</div>
    `;
    renderUpcomingTasks();
    renderRecentActivity();
}


// ======================================
// ROADMAP
// ======================================

// ======================================
// ROADMAP MODULE
// ======================================

// Default roadmap data
let roadmapData = JSON.parse(localStorage.getItem("skillSyncRoadmap")) || [

    {
        id: 1,
        title: "HTML & CSS",
        category: "Web Development",
        progress: 100,
        status: "Completed"
    },

    {
        id: 2,
        title: "JavaScript",
        category: "Web Development",
        progress: 70,
        status: "In Progress"
    },

    {
        id: 3,
        title: "DSA",
        category: "Placement",
        progress: 60,
        status: "In Progress"
    },

    {
        id: 4,
        title: "GATE Aptitude",
        category: "GATE",
        progress: 40,
        status: "In Progress"
    },

    {
        id: 5,
        title: "Projects & Resume",
        category: "Career",
        progress: 20,
        status: "Upcoming"
    }

];


// ======================================
// SAVE ROADMAP
// ======================================

function saveRoadmap() {

    localStorage.setItem(
        "skillSyncRoadmap",
        JSON.stringify(roadmapData)
    );

}


// ======================================
// SHOW ROADMAP
// ======================================

function showRoadmap() {

    pageContent.innerHTML = `

        <div class="dashboard-card">

            <div class="card-header">

                <div>

                    <h2>🗺️ Career Roadmap</h2>

                    <p>
                        Plan and track your learning journey.
                    </p>

                </div>

                <button class="add-btn" id="add-roadmap-btn">
                    + Add Topic
                </button>

            </div>


            <div id="roadmap-container">

            </div>

        </div>


        <!-- ADD TOPIC FORM -->

        <div class="dashboard-card roadmap-form-card"
             id="roadmap-form-card"
             style="display:none; margin-top:20px;">

            <div class="card-header">

                <div>

                    <h2>Add Roadmap Topic</h2>

                    <p>
                        Add a new skill or learning goal.
                    </p>

                </div>

            </div>


            <form id="roadmap-form">

                <div class="form-group">

                    <label for="roadmap-title">
                        Topic Name
                    </label>

                    <input
                        type="text"
                        id="roadmap-title"
                        placeholder="Example: Java"
                        required
                    >

                </div>


                <div class="form-group">

                    <label for="roadmap-category">
                        Category
                    </label>

                    <select id="roadmap-category">

                        <option value="DSA">
                            DSA
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="GATE">
                            GATE
                        </option>

                        <option value="Core Subjects">
                            Core Subjects
                        </option>

                        <option value="AI / GenAI">
                            AI / GenAI
                        </option>

                        <option value="Career">
                            Career
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label for="roadmap-progress">
                        Progress (%)
                    </label>

                    <input
                        type="number"
                        id="roadmap-progress"
                        min="0"
                        max="100"
                        value="0"
                        required
                    >

                </div>


                <div class="form-actions">

                    <button
                        type="submit"
                        class="add-btn">
                        Add Topic
                    </button>

                    <button
                        type="button"
                        class="view-btn"
                        id="cancel-roadmap-btn">
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    `;


    renderRoadmap();
    


    // Show form

    document
        .getElementById("add-roadmap-btn")
        .addEventListener("click", function () {

            document
                .getElementById("roadmap-form-card")
                .style.display = "block";

        });


    // Cancel form

    document
        .getElementById("cancel-roadmap-btn")
        .addEventListener("click", function () {

            document
                .getElementById("roadmap-form-card")
                .style.display = "none";

        });


    // Submit form

    document
        .getElementById("roadmap-form")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            addRoadmapTopic();

        });

}


// ======================================
// RENDER ROADMAP
// ======================================

function renderRoadmap() {

    const container =
        document.getElementById("roadmap-container");


    container.innerHTML = "";


    if (roadmapData.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>
                    No roadmap topics yet.
                </h3>

                <p>
                    Click "+ Add Topic" to create your first goal.
                </p>

            </div>

        `;

        return;

    }


    roadmapData.forEach(function (item) {

        const roadmapCard =
            document.createElement("div");


        roadmapCard.className = "roadmap-topic";


        roadmapCard.innerHTML = `

            <div class="roadmap-topic-header">

                <div>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.category}
                    </p>

                </div>


                <div class="roadmap-actions">

                    <span class="status-badge ${getStatusClass(item.status)}">
                        ${item.status}
                    </span>

                    <button
                        class="delete-btn"
                        onclick="deleteRoadmapTopic(${item.id})">

                        🗑️

                    </button>

                </div>

            </div>


            <div class="roadmap-progress-info">

                <span>
                    Progress
                </span>

                <strong>
                    ${item.progress}%
                </strong>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${item.progress}%">
                </div>

            </div>

        `;


        container.appendChild(roadmapCard);

    });

}


// ======================================
// ADD ROADMAP TOPIC
// ======================================

function addRoadmapTopic() {

    const title =
        document.getElementById("roadmap-title").value.trim();


    const category =
        document.getElementById("roadmap-category").value;


    const progress =
        Number(
            document.getElementById("roadmap-progress").value
        );


    let status;


    if (progress === 100) {

        status = "Completed";

    }

    else if (progress > 0) {

        status = "In Progress";

    }

    else {

        status = "Upcoming";

    }


    const newTopic = {

        id: Date.now(),

        title: title,

        category: category,

        progress: progress,

        status: status

    };


    roadmapData.push(newTopic);


    saveRoadmap();


    showRoadmap();

}


// ======================================
// DELETE ROADMAP TOPIC
// ======================================

function deleteRoadmapTopic(id) {

    roadmapData =
        roadmapData.filter(function (item) {

            return item.id !== id;

        });


    saveRoadmap();


    renderRoadmap();

}


// ======================================
// GET STATUS CLASS
// ======================================

function getStatusClass(status) {

    if (status === "Completed") {

        return "status-completed";

    }

    if (status === "In Progress") {

        return "status-progress";

    }

    return "status-upcoming";

}
// ======================================
// SKILLS MODULE
// ======================================

// Get skills from LocalStorage
let skillsData = JSON.parse(
    localStorage.getItem("skillSyncSkills")
) || [

    {
        id: 1,
        name: "Java",
        category: "Programming",
        level: "Intermediate",
        progress: 70
    },

    {
        id: 2,
        name: "DSA",
        category: "Problem Solving",
        level: "Intermediate",
        progress: 60
    },

    {
        id: 3,
        name: "HTML & CSS",
        category: "Web Development",
        level: "Advanced",
        progress: 85
    },

    {
        id: 4,
        name: "JavaScript",
        category: "Web Development",
        level: "Intermediate",
        progress: 65
    },

    {
        id: 5,
        name: "Git & GitHub",
        category: "Tools",
        level: "Beginner",
        progress: 50
    }

];


// ======================================
// SAVE SKILLS
// ======================================

function saveSkills() {

    localStorage.setItem(
        "skillSyncSkills",
        JSON.stringify(skillsData)
    );

}


// ======================================
// SHOW SKILLS PAGE
// ======================================

function showSkills() {

    pageContent.innerHTML = `

        <div class="dashboard-card">

            <div class="card-header">

                <div>

                    <h2>💡 My Skills</h2>

                    <p>
                        Track and improve your technical skills.
                    </p>

                </div>

                <button
                    class="add-btn"
                    id="add-skill-btn">

                    + Add Skill

                </button>

            </div>


            <!-- SKILLS CONTAINER -->

            <div id="skills-container">

            </div>

        </div>


        <!-- ADD SKILL FORM -->

        <div
            class="dashboard-card"
            id="skill-form-card"
            style="display:none; margin-top:20px;">

            <div class="card-header">

                <div>

                    <h2>Add New Skill</h2>

                    <p>
                        Add a skill you want to track.
                    </p>

                </div>

            </div>


            <form id="skill-form">


                <!-- SKILL NAME -->

                <div class="form-group">

                    <label for="skill-name">
                        Skill Name
                    </label>

                    <input
                        type="text"
                        id="skill-name"
                        placeholder="Example: Python"
                        required>

                </div>


                <!-- CATEGORY -->

                <div class="form-group">

                    <label for="skill-category">
                        Category
                    </label>

                    <select id="skill-category">

                        <option value="Programming">
                            Programming
                        </option>

                        <option value="Problem Solving">
                            Problem Solving
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="Database">
                            Database
                        </option>

                        <option value="Tools">
                            Tools
                        </option>

                        <option value="AI / GenAI">
                            AI / GenAI
                        </option>

                        <option value="Soft Skills">
                            Soft Skills
                        </option>

                    </select>

                </div>


                <!-- LEVEL -->

                <div class="form-group">

                    <label for="skill-level">
                        Proficiency Level
                    </label>

                    <select id="skill-level">

                        <option value="Beginner">
                            Beginner
                        </option>

                        <option value="Intermediate">
                            Intermediate
                        </option>

                        <option value="Advanced">
                            Advanced
                        </option>

                    </select>

                </div>


                <!-- PROGRESS -->

                <div class="form-group">

                    <label for="skill-progress">
                        Skill Progress (%)
                    </label>

                    <input
                        type="number"
                        id="skill-progress"
                        min="0"
                        max="100"
                        value="0"
                        required>

                </div>


                <!-- BUTTONS -->

                <div class="form-actions">

                    <button
                        type="submit"
                        class="add-btn">

                        Add Skill

                    </button>


                    <button
                        type="button"
                        class="view-btn"
                        id="cancel-skill-btn">

                        Cancel

                    </button>

                </div>


            </form>

        </div>

    `;


    renderSkills();


    // ==================================
    // OPEN FORM
    // ==================================

    document
        .getElementById("add-skill-btn")
        .addEventListener("click", function () {

            document
                .getElementById("skill-form-card")
                .style.display = "block";

        });


    // ==================================
    // CANCEL FORM
    // ==================================

    document
        .getElementById("cancel-skill-btn")
        .addEventListener("click", function () {

            document
                .getElementById("skill-form-card")
                .style.display = "none";

        });


    // ==================================
    // SUBMIT FORM
    // ==================================

    document
        .getElementById("skill-form")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            addSkill();

        });

}


// ======================================
// RENDER SKILLS
// ======================================

function renderSkills() {

    const container =
        document.getElementById("skills-container");


    container.innerHTML = "";


    if (skillsData.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>
                    No skills added yet.
                </h3>

                <p>
                    Click "+ Add Skill" to add your first skill.
                </p>

            </div>

        `;

        return;

    }


    skillsData.forEach(function (skill) {


        const skillCard =
            document.createElement("div");


        skillCard.className = "skill-card";


        skillCard.innerHTML = `

            <div class="skill-card-header">


                <div class="skill-info">

                    <div class="skill-icon">
                        💡
                    </div>


                    <div>

                        <h3>
                            ${skill.name}
                        </h3>

                        <p>
                            ${skill.category}
                        </p>

                    </div>

                </div>


                <div class="skill-actions">


                    <span class="
                        skill-level
                        ${getLevelClass(skill.level)}
                    ">

                        ${skill.level}

                    </span>


                    <button
                        class="delete-btn"
                        onclick="deleteSkill(${skill.id})">

                        🗑️

                    </button>


                </div>


            </div>


            <div class="skill-progress-info">

                <span>
                    Skill Progress
                </span>

                <strong>
                    ${skill.progress}%
                </strong>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${skill.progress}%">

                </div>

            </div>

        `;


        container.appendChild(skillCard);

    });

}


// ======================================
// ADD SKILL
// ======================================

function addSkill() {


    const name =
        document
            .getElementById("skill-name")
            .value
            .trim();


    const category =
        document
            .getElementById("skill-category")
            .value;


    const level =
        document
            .getElementById("skill-level")
            .value;


    const progress =
        Number(
            document
                .getElementById("skill-progress")
                .value
        );


    const newSkill = {

        id: Date.now(),

        name: name,

        category: category,

        level: level,

        progress: progress

    };


    skillsData.push(newSkill);
    addActivity(
    "skill",
    `Added new skill: ${newSkill.name}`
);

    saveSkills();


    showSkills();

}


// ======================================
// DELETE SKILL
// ======================================

function deleteSkill(id) {

    skillsData =
        skillsData.filter(function (skill) {

            return skill.id !== id;

        });


    saveSkills();


    renderSkills();

}


// ======================================
// LEVEL CLASS
// ======================================

function getLevelClass(level) {


    if (level === "Advanced") {

        return "level-advanced";

    }


    if (level === "Intermediate") {

        return "level-intermediate";

    }


    return "level-beginner";

}


// ======================================
// RESUME
// ======================================
let resumeData = JSON.parse(
    localStorage.getItem("skillSyncResume")
) || [
    {
        id: 1,
        item: "Contact Information",
        completed: true
    },
    {
        id: 2,
        item: "Career Objective / Summary",
        completed: false
    },
    {
        id: 3,
        item: "Education",
        completed: true
    },
    {
        id: 4,
        item: "Technical Skills",
        completed: false
    },
    {
        id: 5,
        item: "DSA / Coding Skills",
        completed: false
    },
    {
        id: 6,
        item: "Projects",
        completed: false
    },
    {
        id: 7,
        item: "Internship / Experience",
        completed: false
    },
    {
        id: 8,
        item: "Certifications",
        completed: false
    },
    {
        id: 9,
        item: "Achievements",
        completed: false
    },
    {
        id: 10,
        item: "GitHub & LinkedIn Links",
        completed: true
    }
];

function saveResume() {
    localStorage.setItem(
        "skillSyncResume",
        JSON.stringify(resumeData)
    );
}

function showResume() {
    pageContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>Resume Checklist</h1>
                <p>Build and track your placement-ready resume.</p>
            </div>
        </div>

        <div class="resume-progress-card">
            <div class="resume-progress-header">
                <div>
                    <h2>Resume Completion</h2>
                    <p id="resume-percentage">0%</p>
                </div>

                <div class="resume-progress-circle">
                    <span id="resume-circle-value">0%</span>
                </div>
            </div>

            <div class="progress-bar">
                <div
                    class="progress-fill"
                    id="resume-progress-fill"
                    style="width: 0%;">
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-title">
                <div>
                    <h2>Resume Checklist</h2>
                    <p>Complete each section before applying for jobs.</p>
                </div>
            </div>

            <div id="resume-list"></div>
        </div>

        <div class="section-card">
            <div class="section-title">
                <div>
                    <h2>Add Checklist Item</h2>
                    <p>Add your own resume requirement.</p>
                </div>
            </div>

            <div class="form-grid">
                <div class="form-group">
                    <label>Checklist Item</label>
                    <input
                        type="text"
                        id="resume-item"
                        placeholder="e.g. Add LeetCode Profile"
                    >
                </div>
            </div>

            <button class="primary-btn" onclick="addResumeItem()">
                + Add Item
            </button>
        </div>
    `;

    renderResume();
}
function renderResume() {
    const resumeList = document.getElementById("resume-list");

    if (resumeData.length === 0) {
        resumeList.innerHTML = `
            <div class="empty-state">
                <h3>No checklist items</h3>
                <p>Add your first resume checklist item.</p>
            </div>
        `;

        updateResumeProgress();
        return;
    }

    resumeList.innerHTML = resumeData.map(function (item) {
        return `
            <div class="resume-item ${item.completed ? "completed" : ""}">
                
                <div class="resume-left">
                    <input
                        type="checkbox"
                        ${item.completed ? "checked" : ""}
                        onchange="toggleResumeItem(${item.id})"
                    >

                    <span>${item.item}</span>
                </div>

                <button
                    class="delete-btn"
                    onclick="deleteResumeItem(${item.id})">
                    🗑️
                </button>

            </div>
        `;
    }).join("");

    updateResumeProgress();
}


function toggleResumeItem(id) {
    resumeData = resumeData.map(function (item) {

        if (item.id === id) {
            item.completed = !item.completed;
            if (item.completed) {
    addActivity(
        "resume",
        `Completed resume item: ${item.title}`
    );
}
        }

        return item;
    });

    saveResume();
    renderResume();
}


function addResumeItem() {
    const input = document.getElementById("resume-item");

    const itemName = input.value.trim();

    if (itemName === "") {
        alert("Please enter a checklist item.");
        return;
    }

    const newItem = {
        id: Date.now(),
        item: itemName,
        completed: false
    };

    resumeData.push(newItem);

    saveResume();

    input.value = "";

    renderResume();
}


function deleteResumeItem(id) {
    resumeData = resumeData.filter(function (item) {
        return item.id !== id;
    });

    saveResume();
    renderResume();
}


function updateResumeProgress() {

    if (resumeData.length === 0) {
        document.getElementById("resume-percentage").textContent = "0%";
        document.getElementById("resume-circle-value").textContent = "0%";
        document.getElementById("resume-progress-fill").style.width = "0%";
        return;
    }

    const completedItems =
        resumeData.filter(function (item) {
            return item.completed;
        }).length;

    const percentage =
        Math.round(
            (completedItems / resumeData.length) * 100
        );

    document.getElementById("resume-percentage").textContent =
        percentage + "%";

    document.getElementById("resume-circle-value").textContent =
        percentage + "%";

    document.getElementById("resume-progress-fill").style.width =
        percentage + "%";
}

// ======================================
// COMPANIES
// ======================================

let companiesData = JSON.parse(
    localStorage.getItem("skillSyncCompanies")
) || [
    {
        id: 1,
        company: "TCS",
        role: "Software Engineer",
        date: "2026-10-05",
        status: "Interested",
        notes: "Prepare DSA and aptitude"
    },
    {
        id: 2,
        company: "Infosys",
        role: "System Engineer",
        date: "2026-10-05",
        status: "Applied",
        notes: "Check assessment preparation"
    },
    {
        id: 3,
        company: "Microsoft",
        role: "SDE Intern",
        date: "2026-10-05",
        status: "Interview",
        notes: "Revise DSA and OOP"
    }
];
function addCompany() {

    const companyName =
        document.getElementById("company-name").value.trim();

    const companyRole =
        document.getElementById("company-role").value.trim();

    const companyDate =
        document.getElementById("company-date").value;

    const companyStatus =
        document.getElementById("company-status").value;

    const companyNotes =
        document.getElementById("company-notes").value.trim();


    // Check required fields
    if (
        companyName === "" ||
        companyRole === "" ||
        companyDate === ""
    ) {
        alert("Please fill Company Name, Job Role and Date.");
        return;
    }


    // Create new company
    const newCompany = {

        id: Date.now(),

        company: companyName,

        role: companyRole,

        date: companyDate,

        status: companyStatus,

        notes: companyNotes
    };


    // Add company to array
    companiesData.push(newCompany);
    companiesData.push(newCompany);

addActivity(
    "company",
    `Added new company: ${newCompany.name}`
);

saveCompanies();


    // Save to LocalStorage
    saveCompanies();


    // Clear form
    document.getElementById("company-name").value = "";

    document.getElementById("company-role").value = "";

    document.getElementById("company-date").value = "";

    document.getElementById("company-status").value =
        "Interested";

    document.getElementById("company-notes").value = "";


    // Display updated companies
    renderCompanies();
}
function deleteCompany(id) {

    companiesData = companiesData.filter(function (company) {

        return company.id !== id;

    });


    saveCompanies();

    renderCompanies();
}

function showCompanies() {

    pageContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>Company & Interview Tracker</h1>
                <p>Track your placement applications and interviews.</p>
            </div>
        </div>

        <div class="company-summary">

            <div class="company-stat-card">
                <h3>Total Companies</h3>
                <p id="total-companies">0</p>
            </div>

            <div class="company-stat-card">
                <h3>Applied</h3>
                <p id="applied-companies">0</p>
            </div>

            <div class="company-stat-card">
                <h3>Interviews</h3>
                <p id="interview-companies">0</p>
            </div>

            <div class="company-stat-card">
                <h3>Selected</h3>
                <p id="selected-companies">0</p>
            </div>

        </div>

      <div class="section-card">

    <div class="section-title company-list-header">

        <div>
            <h2>My Companies</h2>
            <p>Keep track of your job applications.</p>
        </div>

        <select
            id="company-filter"
            onchange="filterCompanies()"
            class="company-filter">

            <option value="All">All Companies</option>
            <option value="Interested">Interested</option>
            <option value="Applied">Applied</option>
            <option value="Assessment">Assessment</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>

        </select>

    </div>

    <div id="company-list"></div>

</div>
        <div class="section-card">

            <div class="section-title">
                <div>
                    <h2>Add Company</h2>
                    <p>Add a company that you want to track.</p>
                </div>
            </div>

            <div class="company-form">

                <div class="form-group">
                    <label>Company Name</label>
                    <input
                        type="text"
                        id="company-name"
                        placeholder="e.g. Google"
                    >
                </div>

                <div class="form-group">
                    <label>Job Role</label>
                    <input
                        type="text"
                        id="company-role"
                        placeholder="e.g. Software Engineer"
                    >
                </div>

                <div class="form-group">
                    <label>Application Date</label>
                    <input
                        type="date"
                        id="company-date"
                    >
                </div>

                <div class="form-group">
                    <label>Status</label>

                    <select id="company-status">
                        <option value="Interested">Interested</option>
                        <option value="Applied">Applied</option>
                        <option value="Assessment">Assessment</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea
                        id="company-notes"
                        placeholder="Add preparation notes..."
                    ></textarea>
                </div>

            </div>

            <button class="primary-btn" onclick="addCompany()">
                + Add Company
            </button>

        </div>
    `;

    renderCompanies();
}
function renderCompanies(filter = "All") {

    const companyList =
        document.getElementById("company-list");

    let filteredCompanies = companiesData;

    // Apply status filter
    if (filter !== "All") {

        filteredCompanies = companiesData.filter(
            function (company) {
                return company.status === filter;
            }
        );
    }

    if (filteredCompanies.length === 0) {

        companyList.innerHTML = `
            <div class="empty-state">
                <h3>No companies found</h3>
                <p>No companies match this status.</p>
            </div>
        `;

        updateCompanyStats();
        return;
    }

    companyList.innerHTML = filteredCompanies.map(
        function (company) {

            return `
                <div class="company-card">

                    <div class="company-card-top">

                        <div>
                            <h3>${company.company}</h3>
                            <p>${company.role}</p>
                        </div>

                        <span class="company-status ${getCompanyStatusClass(company.status)}">
                            ${company.status}
                        </span>

                    </div>

                    <div class="company-details">

                        <span>
                            📅 ${company.date}
                        </span>

                        <span>
                            📝 ${company.notes || "No notes"}
                        </span>

                    </div>

                    <div class="company-actions">

                        <select
                            class="status-update"
                            onchange="updateCompanyStatus(${company.id}, this.value)">

                            <option value="Interested"
                                ${company.status === "Interested" ? "selected" : ""}>
                                Interested
                            </option>

                            <option value="Applied"
                                ${company.status === "Applied" ? "selected" : ""}>
                                Applied
                            </option>

                            <option value="Assessment"
                                ${company.status === "Assessment" ? "selected" : ""}>
                                Assessment
                            </option>

                            <option value="Interview"
                                ${company.status === "Interview" ? "selected" : ""}>
                                Interview
                            </option>

                            <option value="Selected"
                                ${company.status === "Selected" ? "selected" : ""}>
                                Selected
                            </option>

                            <option value="Rejected"
                                ${company.status === "Rejected" ? "selected" : ""}>
                                Rejected
                            </option>

                        </select>

                        <button
                            class="delete-btn"
                            onclick="deleteCompany(${company.id})">
                            🗑️ Delete
                        </button>

                    </div>

                </div>
            `;

        }
    ).join("");

    updateCompanyStats();
}

function updateCompanyStatus(id, newStatus) {

    companiesData = companiesData.map(
        function (company) {

            if (company.id === id) {
                company.status = newStatus;
            }

            return company;
        }
    );

    saveCompanies();

    const filter =
        document.getElementById("company-filter");

    renderCompanies(filter ? filter.value : "All");
}
function filterCompanies() {

    const filter =
        document.getElementById("company-filter").value;

    renderCompanies(filter);
}


function getCompanyStatusClass(status) {

    if (status === "Selected") {
        return "status-selected";
    }

    if (status === "Rejected") {
        return "status-rejected";
    }

    if (status === "Interview") {
        return "status-interview";
    }

    if (status === "Applied") {
        return "status-applied";
    }

    if (status === "Assessment") {
        return "status-assessment";
    }

    return "status-interested";
}


function updateCompanyStats() {

    document.getElementById("total-companies").textContent =
        companiesData.length;

    document.getElementById("applied-companies").textContent =
        companiesData.filter(function (company) {
            return company.status === "Applied";
        }).length;

    document.getElementById("interview-companies").textContent =
        companiesData.filter(function (company) {
            return company.status === "Interview";
        }).length;

    document.getElementById("selected-companies").textContent =
        companiesData.filter(function (company) {
            return company.status === "Selected";
        }).length;
}


// ======================================
// DAILY GOALS
// ======================================
// ======================================
// DAILY GOALS MODULE
// ======================================


// Get goals from LocalStorage

let goalsData = JSON.parse(
    localStorage.getItem("skillSyncGoals")
) || [

    {
        id: 1,
        title: "Practice 2 DSA Problems",
        category: "DSA",
        priority: "High",
        completed: false
    },

    {
        id: 2,
        title: "Complete JavaScript Practice",
        category: "Web Development",
        priority: "Medium",
        completed: false
    },

    {
        id: 3,
        title: "Practice GATE Aptitude",
        category: "GATE",
        priority: "High",
        completed: true
    }

];


// ======================================
// SAVE GOALS
// ======================================

function saveGoals() {

    localStorage.setItem(
        "skillSyncGoals",
        JSON.stringify(goalsData)
    );

}


// ======================================
// SHOW GOALS PAGE
// ======================================

function showGoals() {

    pageContent.innerHTML = `

        <div class="dashboard-card">


            <div class="card-header">

                <div>

                    <h2>🎯 Daily Goals</h2>

                    <p>
                        Focus on today's important tasks.
                    </p>

                </div>


                <button
                    class="add-btn"
                    id="add-goal-btn">

                    + Add Goal

                </button>

            </div>


            <!-- COMPLETION -->

            <div class="goal-completion">

                <div class="goal-completion-info">

                    <span>
                        Today's Progress
                    </span>

                    <strong id="goal-percentage">
                        0%
                    </strong>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        id="goal-progress-bar">
                    </div>

                </div>

            </div>


            <!-- GOALS -->

            <div id="goals-container">

            </div>


        </div>


        <!-- ADD GOAL FORM -->

        <div
            class="dashboard-card"
            id="goal-form-card"
            style="display:none; margin-top:20px;">


            <div class="card-header">

                <div>

                    <h2>Add Daily Goal</h2>

                    <p>
                        What do you want to accomplish today?
                    </p>

                </div>

            </div>


            <form id="goal-form">


                <!-- TITLE -->

                <div class="form-group">

                    <label for="goal-title">
                        Goal
                    </label>

                    <input
                        type="text"
                        id="goal-title"
                        placeholder="Example: Solve 3 LeetCode problems"
                        required>

                </div>


                <!-- CATEGORY -->

                <div class="form-group">

                    <label for="goal-category">
                        Category
                    </label>

                    <select id="goal-category">

                        <option value="DSA">
                            DSA
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="GATE">
                            GATE
                        </option>

                        <option value="Academics">
                            Academics
                        </option>

                        <option value="AI / GenAI">
                            AI / GenAI
                        </option>

                        <option value="Personal">
                            Personal
                        </option>

                    </select>

                </div>


                <!-- PRIORITY -->

                <div class="form-group">

                    <label for="goal-priority">
                        Priority
                    </label>

                    <select id="goal-priority">

                        <option value="High">
                            High
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="Low">
                            Low
                        </option>

                    </select>

                </div>


                <!-- BUTTONS -->

                <div class="form-actions">

                    <button
                        type="submit"
                        class="add-btn">

                        Add Goal

                    </button>


                    <button
                        type="button"
                        class="view-btn"
                        id="cancel-goal-btn">

                        Cancel

                    </button>

                </div>


            </form>

        </div>

    `;


    renderGoals();


    // ==================================
    // OPEN FORM
    // ==================================

    document
        .getElementById("add-goal-btn")
        .addEventListener("click", function () {

            document
                .getElementById("goal-form-card")
                .style.display = "block";

        });


    // ==================================
    // CANCEL FORM
    // ==================================

    document
        .getElementById("cancel-goal-btn")
        .addEventListener("click", function () {

            document
                .getElementById("goal-form-card")
                .style.display = "none";

        });


    // ==================================
    // SUBMIT FORM
    // ==================================

    document
        .getElementById("goal-form")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            addGoal();

        });

}


// ======================================
// RENDER GOALS
// ======================================

function renderGoals() {

    const container =
        document.getElementById("goals-container");


    container.innerHTML = "";


    if (goalsData.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>
                    No goals for today.
                </h3>

                <p>
                    Click "+ Add Goal" to create one.
                </p>

            </div>

        `;

        updateGoalProgress();

        return;

    }


    goalsData.forEach(function (goal) {


        const goalCard =
            document.createElement("div");


        goalCard.className =
            "daily-goal-item";


        if (goal.completed) {

            goalCard.classList.add("goal-completed");

        }


        goalCard.innerHTML = `


            <div class="goal-left">


                <input
                    type="checkbox"
                    class="goal-checkbox"
                    ${goal.completed ? "checked" : ""}
                    onchange="toggleGoal(${goal.id})">


                <div class="goal-content">

                    <h4>
                        ${goal.title}
                    </h4>

                    <p>
                        ${goal.category}
                    </p>

                </div>


            </div>


            <div class="goal-right">


                <span class="
                    priority-badge
                    ${getPriorityClass(goal.priority)}
                ">

                    ${goal.priority}

                </span>


                <button
                    class="delete-btn"
                    onclick="deleteGoal(${goal.id})">

                    🗑️

                </button>


            </div>


        `;


        container.appendChild(goalCard);

    });


    updateGoalProgress();

}


// ======================================
// ADD GOAL
// ======================================

function addGoal() {


    const title =
        document
            .getElementById("goal-title")
            .value
            .trim();


    const category =
        document
            .getElementById("goal-category")
            .value;


    const priority =
        document
            .getElementById("goal-priority")
            .value;


    const newGoal = {

        id: Date.now(),

        title: title,

        category: category,

        priority: priority,

        completed: false

    };


    goalsData.push(newGoal);


    saveGoals();


    showGoals();

}


// ======================================
// TOGGLE GOAL
// ======================================
function toggleGoal(id) {

    goalsData =
        goalsData.map(function (goal) {

            if (goal.id === id) {

                goal.completed =
                    !goal.completed;

                if (goal.completed) {
                    addActivity(
                        "goal",
                        `Completed goal: ${goal.title}`
                    );
                }
            }

            return goal;
        });

    saveGoals();

    renderGoals();
}


// ======================================
// DELETE GOAL
// ======================================

function deleteGoal(id) {


    goalsData =
        goalsData.filter(function (goal) {

            return goal.id !== id;

        });


    saveGoals();


    renderGoals();

}


// ======================================
// UPDATE PROGRESS
// ======================================

function updateGoalProgress() {


    const percentageElement =
        document.getElementById(
            "goal-percentage"
        );


    const progressBar =
        document.getElementById(
            "goal-progress-bar"
        );


    if (!percentageElement || !progressBar) {

        return;

    }


    if (goalsData.length === 0) {

        percentageElement.textContent = "0%";

        progressBar.style.width = "0%";

        return;

    }


    const completedGoals =
        goalsData.filter(function (goal) {

            return goal.completed;

        }).length;


    const percentage =
        Math.round(
            (completedGoals / goalsData.length) * 100
        );


    percentageElement.textContent =
        `${percentage}%`;


    progressBar.style.width =
        `${percentage}%`;

}


// ======================================
// PRIORITY CLASS
// ======================================

function getPriorityClass(priority) {


    if (priority === "High") {

        return "priority-high";

    }


    if (priority === "Medium") {

        return "priority-medium";

    }


    return "priority-low";

}

// ======================================
// POMODORO
// ======================================

function showPomodoro() {

    pageContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>Pomodoro Focus Timer</h1>
                <p>Stay focused and make progress every day.</p>
            </div>
        </div>

        <div class="pomodoro-container">

            <div class="pomodoro-card">

                <div class="pomodoro-mode">
                    <button
                        id="focus-mode-btn"
                        class="mode-btn active"
                        onclick="setPomodoroMode('focus')">
                        Focus
                    </button>

                    <button
                        id="break-mode-btn"
                        class="mode-btn"
                        onclick="setPomodoroMode('break')">
                        Break
                    </button>
                </div>

                <h2 id="pomodoro-label">
                    Focus Time
                </h2>

                <div class="pomodoro-timer" id="pomodoro-timer">
                    25:00
                </div>

                <div class="pomodoro-buttons">

                    <button
                        class="primary-btn"
                        onclick="startPomodoro()">
                        ▶ Start
                    </button>

                    <button
                        class="secondary-btn"
                        onclick="pausePomodoro()">
                        ⏸ Pause
                    </button>

                    <button
                        class="secondary-btn"
                        onclick="resetPomodoro()">
                        🔄 Reset
                    </button>

                </div>

            </div>


            <div class="pomodoro-info">

                <div class="pomodoro-stat">
                    <h3>Sessions Completed</h3>
                    <p id="pomodoro-sessions">0</p>
                </div>

                <div class="pomodoro-stat">
                    <h3>Current Task</h3>

                    <select id="pomodoro-task">

                        <option value="DSA">
                            DSA
                        </option>

                        <option value="GATE">
                            GATE Preparation
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="Academics">
                            Academics
                        </option>

                        <option value="AI / GenAI">
                            AI / GenAI
                        </option>

                    </select>

                </div>

            </div>

        </div>
    `;
}
// =============================
// POMODORO TIMER LOGIC
// =============================

let pomodoroInterval = null;

let pomodoroMode = "focus";

let pomodoroTime = 25 * 60;

let pomodoroSessions =
    Number(localStorage.getItem("skillSyncPomodoroSessions")) || 0;


// Start Timer
function startPomodoro() {

    // Prevent multiple timers from running
    if (pomodoroInterval !== null) {
        return;
    }

    pomodoroInterval = setInterval(function () {

        if (pomodoroTime > 0) {

            pomodoroTime--;

            updatePomodoroDisplay();

        } else {

            completePomodoroSession();

        }

    }, 1000);
}


// Pause Timer
function pausePomodoro() {

    clearInterval(pomodoroInterval);

    pomodoroInterval = null;
}


// Reset Timer
function resetPomodoro() {

    clearInterval(pomodoroInterval);

    pomodoroInterval = null;

    if (pomodoroMode === "focus") {

        pomodoroTime = 25 * 60;

    } else {

        pomodoroTime = 5 * 60;

    }

    updatePomodoroDisplay();
}


// Update timer on screen
function updatePomodoroDisplay() {

    const timer =
        document.getElementById("pomodoro-timer");

    if (!timer) {
        return;
    }

    const minutes =
        Math.floor(pomodoroTime / 60);

    const seconds =
        pomodoroTime % 60;


    timer.textContent =
        String(minutes).padStart(2, "0")
        + ":" +
        String(seconds).padStart(2, "0");
}


// Change Focus / Break
function setPomodoroMode(mode) {

    clearInterval(pomodoroInterval);

    pomodoroInterval = null;

    pomodoroMode = mode;


    if (mode === "focus") {

        pomodoroTime = 25 * 60;

        document.getElementById("pomodoro-label")
            .textContent = "Focus Time";

        document.getElementById("focus-mode-btn")
            .classList.add("active");

        document.getElementById("break-mode-btn")
            .classList.remove("active");

    } else {

        pomodoroTime = 5 * 60;

        document.getElementById("pomodoro-label")
            .textContent = "Break Time";

        document.getElementById("break-mode-btn")
            .classList.add("active");

        document.getElementById("focus-mode-btn")
            .classList.remove("active");
    }


    updatePomodoroDisplay();
}


// Complete session
function completePomodoroSession() {

    clearInterval(pomodoroInterval);

    pomodoroInterval = null;


    if (pomodoroMode === "focus") {

        pomodoroSessions++;

localStorage.setItem(
    "skillSyncPomodoroSessions",
    pomodoroSessions
);

const sessionCounter =
    document.getElementById("pomodoro-sessions");

if (sessionCounter) {

    sessionCounter.textContent =
        pomodoroSessions;
}

        alert("Focus session completed! 🎉 Take a short break.");

        setPomodoroMode("break");

    } else {

        alert("Break completed! 💪 Time to focus again.");

        setPomodoroMode("focus");
    }
}


// ======================================
// NOTES
// ======================================
    let activityData = JSON.parse(
    localStorage.getItem("skillSyncActivity")
) || [];


    function saveActivity() {
    localStorage.setItem(
        "skillSyncActivity",
        JSON.stringify(activityData)
    );
}
function addActivity(type, message) {

    const newActivity = {
        id: Date.now(),
        type: type,
        message: message,
        time: new Date().toLocaleString()
    };

    activityData.unshift(newActivity);

    // Keep only the latest 10 activities
    if (activityData.length > 10) {
        activityData = activityData.slice(0, 10);
    }

    saveActivity();
}

let notesData = JSON.parse(
    localStorage.getItem("skillSyncNotes")
) || [
    {
        id: 1,
        title: "Binary Search",
        category: "DSA",
        content: "Remember to identify the search space and define the low and high boundaries."
    },
    {
        id: 2,
        title: "GATE Aptitude",
        category: "GATE",
        content: "Practice percentage, ratio, averages and logical reasoning regularly."
    }
];

function saveNotes() {
    localStorage.setItem(
        "skillSyncNotes",
        JSON.stringify(notesData)
    );
}




function showNotes() {

    pageContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>My Notes</h1>
                <p>Save important study notes and ideas.</p>
            </div>
        </div>

        <div class="section-card">

            <div class="section-title">
                <div>
                    <h2>Create Note</h2>
                    <p>Save something you want to remember.</p>
                </div>
            </div>

            <div class="notes-form">

                <div class="form-group">
                    <label>Note Title</label>

                    <input
                        type="text"
                        id="note-title"
                        placeholder="e.g. Binary Search Important Points"
                    >
                </div>

                <div class="form-group">
                    <label>Category</label>

                    <select id="note-category">

                        <option value="DSA">
                            DSA
                        </option>

                        <option value="GATE">
                            GATE
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="Academics">
                            Academics
                        </option>

                        <option value="AI / GenAI">
                            AI / GenAI
                        </option>

                        <option value="Career">
                            Career
                        </option>

                        <option value="Personal">
                            Personal
                        </option>

                    </select>
                </div>

                <div class="form-group note-content-group">
                    <label>Note Content</label>

                    <textarea
                        id="note-content"
                        placeholder="Write your note here..."
                    ></textarea>
                </div>

            </div>

            <button
                class="primary-btn"
                onclick="addNote()">

                + Save Note

            </button>

        </div>


       <div class="section-card">
    <div class="section-title">
        <div>
            <h2>Saved Notes</h2>
            <p>Your personal study notes.</p>
        </div>
    </div>

    <div class="notes-filter">
        <input
            type="text"
            id="notes-search"
            placeholder="🔍 Search notes..."
            oninput="filterNotes()"
        >

        <select
            id="notes-category-filter"
            onchange="filterNotes()"
        >
            <option value="All">All Categories</option>
            <option value="DSA">DSA</option>
            <option value="GATE">GATE</option>
            <option value="Web Development">Web Development</option>
            <option value="Academics">Academics</option>
            <option value="AI / GenAI">AI / GenAI</option>
            <option value="Career">Career</option>
            <option value="Personal">Personal</option>
        </select>
    </div>

    <div id="notes-list"></div>
</div>
    `;

    renderNotes();
}

function showSettings() {
    pageContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>Settings</h1>
                <p>Manage your SkillSync preferences.</p>
            </div>
        </div>

        <div class="settings-grid">

            <div class="section-card">
                <div class="section-title">
                    <div>
                        <h2>Appearance</h2>
                        <p>Customize how SkillSync looks.</p>
                    </div>
                </div>

                <div class="setting-item">
                    <div>
                        <h3>Dark Mode</h3>
                        <p>Switch between light and dark theme.</p>
                    </div>

                    <button
                        class="theme-btn"
                        onclick="toggleTheme()">
                        🌙 Toggle Theme
                    </button>
                </div>
            </div>

            <div class="section-card">
                <div class="section-title">
                    <div>
                        <h2>Profile</h2>
                        <p>Your basic career information.</p>
                    </div>
                </div>

                <div class="profile-settings">
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            id="profile-name"
                            placeholder="Enter your name">
                    </div>

                    <div class="form-group">
                        <label>Career Goal</label>
                        <input
                            type="text"
                            id="profile-goal"
                            placeholder="e.g. SDE / Software Engineer">
                    </div>

                    <button
                        class="primary-btn"
                        onclick="saveProfile()">
                        Save Profile
                    </button>
                </div>
            </div>

            <div class="section-card danger-card">
                <div class="section-title">
                    <div>
                        <h2>Data Management</h2>
                        <p>Manage your SkillSync stored data.</p>
                    </div>
                </div>

                <button
                    class="danger-btn"
                    onclick="clearSkillSyncData()">
                    🗑️ Clear All Data
                </button>
            </div>

        </div>
    `;

    loadProfile();
}



function renderNotes() {

    const notesList =
        document.getElementById("notes-list");

    if (notesData.length === 0) {

        notesList.innerHTML = `
            <div class="empty-state">
                <h3>No notes yet</h3>
                <p>Create your first study note.</p>
            </div>
        `;

        return;
    }

    notesList.innerHTML = notesData.map(
        function (note) {

            return `
                <div class="note-card">

                    <div class="note-card-header">

                        <div>
                            <h3>${note.title}</h3>

                            <span class="note-category">
                                ${note.category}
                            </span>
                        </div>

                        <button
                            class="delete-btn"
                            onclick="deleteNote(${note.id})">
                            🗑️
                        </button>

                    </div>

                    <p class="note-text">
                        ${note.content}
                    </p>

                </div>
            `;

        }
    ).join("");
}

function filterNotes() {
    const searchInput =
        document.getElementById("notes-search");

    const categoryFilter =
        document.getElementById("notes-category-filter");

    const notesList =
        document.getElementById("notes-list");

    if (!searchInput || !categoryFilter || !notesList) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;

    const filteredNotes = notesData.filter(
        function (note) {

            const matchesSearch =
                note.title.toLowerCase().includes(searchText) ||
                note.content.toLowerCase().includes(searchText);

            const matchesCategory =
                selectedCategory === "All" ||
                note.category === selectedCategory;

            return matchesSearch && matchesCategory;
        }
    );

    if (filteredNotes.length === 0) {
        notesList.innerHTML = `
            <div class="empty-state">
                <h3>No notes found</h3>
                <p>Try a different search or category.</p>
            </div>
        `;
        return;
    }

    notesList.innerHTML = filteredNotes.map(
        function (note) {
            return `
                <div class="note-card">
                    <div class="note-card-header">
                        <div>
                            <h3>${note.title}</h3>

                            <span class="note-category">
                                ${note.category}
                            </span>
                        </div>

                        <button
                            class="delete-btn"
                            onclick="deleteNote(${note.id})">
                            🗑️
                        </button>
                    </div>

                    <p class="note-text">
                        ${note.content}
                    </p>
                </div>
            `;
        }
    ).join("");
}


function addNote() {

    const title =
        document.getElementById("note-title")
            .value.trim();

    const category =
        document.getElementById("note-category")
            .value;

    const content =
        document.getElementById("note-content")
            .value.trim();


    if (title === "" || content === "") {

        alert("Please enter a title and note content.");

        return;
    }


    const newNote = {

        id: Date.now(),

        title: title,

        category: category,

        content: content
    };


    notesData.push(newNote);

    saveNotes();


    document.getElementById("note-title").value = "";

    document.getElementById("note-category").value = "DSA";

    document.getElementById("note-content").value = "";


    renderNotes();
}


function deleteNote(id) {

    notesData = notesData.filter(
        function (note) {

            return note.id !== id;

        }
    );

    saveNotes();

    renderNotes();
}

function loadTheme() {
    const savedTheme =
        localStorage.getItem("skillSyncTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}
  loadTheme();
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "skillSyncTheme",
        isDark ? "dark" : "light"
    );
}
let profileData = JSON.parse(
    localStorage.getItem("skillSyncProfile")
) || {
    name: "",
    goal: ""
};

function saveProfile() {
    const name =
        document.getElementById("profile-name")
            .value.trim();

    const goal =
        document.getElementById("profile-goal")
            .value.trim();

    profileData = {
        name: name,
        goal: goal
    };

    localStorage.setItem(
        "skillSyncProfile",
        JSON.stringify(profileData)
    );

    alert("Profile saved successfully! ✅");
}
function loadProfile() {
    const nameInput =
        document.getElementById("profile-name");

    const goalInput =
        document.getElementById("profile-goal");

    if (nameInput) {
        nameInput.value = profileData.name;
    }

    if (goalInput) {
        goalInput.value = profileData.goal;
    }
}
function clearSkillSyncData() {
    const confirmDelete = confirm(
        "Are you sure you want to delete all SkillSync data? This cannot be undone."
    );

    if (!confirmDelete) {
        return;
    }

    localStorage.removeItem("skillSyncRoadmap");
    localStorage.removeItem("skillSyncSkills");
    localStorage.removeItem("skillSyncGoals");
    localStorage.removeItem("skillSyncResume");
    localStorage.removeItem("skillSyncCompanies");
    localStorage.removeItem("skillSyncNotes");
    localStorage.removeItem("skillSyncPomodoroSessions");
    localStorage.removeItem("skillSyncProfile");

    alert("All SkillSync data has been cleared. 🗑️");

    location.reload();
}

function getDashboardStats() {

    const roadmap =
        JSON.parse(
            localStorage.getItem("skillSyncRoadmap")
        ) || [];

    const skills =
        JSON.parse(
            localStorage.getItem("skillSyncSkills")
        ) || [];

    const goals =
        JSON.parse(
            localStorage.getItem("skillSyncGoals")
        ) || [];

    const resume =
        JSON.parse(
            localStorage.getItem("skillSyncResume")
        ) || [];

    const companies =
        JSON.parse(
            localStorage.getItem("skillSyncCompanies")
        ) || [];

    const completedGoals =
        goals.filter(function (goal) {
            return goal.completed;
        }).length;

    const completedResume =
        resume.filter(function (item) {
            return item.completed;
        }).length;

    const selectedCompanies =
        companies.filter(function (company) {
            return company.status === "Selected";
        }).length;

    let roadmapProgress = 0;

    if (roadmap.length > 0) {

        const totalProgress =
            roadmap.reduce(function (sum, topic) {
                return sum + Number(topic.progress);
            }, 0);

        roadmapProgress =
            Math.round(totalProgress / roadmap.length);
    }

    let resumeProgress = 0;

    if (resume.length > 0) {
        resumeProgress =
            Math.round(
                (completedResume / resume.length) * 100
            );
    }

    return {
        totalSkills: skills.length,
        totalGoals: goals.length,
        completedGoals: completedGoals,
        totalCompanies: companies.length,
        selectedCompanies: selectedCompanies,
        roadmapProgress: roadmapProgress,
        resumeProgress: resumeProgress
    };
}
function renderUpcomingTasks() {

    const upcomingTasks =
        document.getElementById("upcoming-tasks");

    if (!upcomingTasks) {
        return;
    }

    const goals =
        JSON.parse(
            localStorage.getItem("skillSyncGoals")
        ) || [];

    const incompleteGoals =
        goals.filter(function (goal) {
            return !goal.completed;
        });

    if (incompleteGoals.length === 0) {

        upcomingTasks.innerHTML = `
            <p class="dashboard-empty">
                🎉 All daily goals are completed!
            </p>
        `;

        return;
    }

    upcomingTasks.innerHTML =
        incompleteGoals.map(function (goal) {

            return `
                <div class="upcoming-task">

                    <div class="task-info">
                        <strong>${goal.title}</strong>

                        <span>
                            ${goal.category}
                        </span>
                    </div>

                    <span class="task-priority ${goal.priority.toLowerCase()}">
                        ${goal.priority}
                    </span>

                </div>
            `;

        }).join("");
}

    function renderRecentActivity() {

    const activityContainer =
        document.getElementById("recent-activity");

    if (!activityContainer) {
        return;
    }

    if (activityData.length === 0) {

        activityContainer.innerHTML = `
            <p class="dashboard-empty">
                No recent activity yet.
            </p>
        `;

        return;
    }

    activityContainer.innerHTML =
        activityData.map(function (activity) {

            let icon = "📌";

            if (activity.type === "goal") {
                icon = "🎯";
            }
            else if (activity.type === "skill") {
                icon = "📚";
            }
            else if (activity.type === "company") {
                icon = "🏢";
            }
            else if (activity.type === "resume") {
                icon = "📄";
            }

            return `
                <div class="activity-item">

                    <div class="activity-icon">
                        ${icon}
                    </div>

                    <div class="activity-content">

                        <strong>
                            ${activity.message}
                        </strong>

                        <span>
                            ${activity.time}
                        </span>

                    </div>

                </div>
            `;

        }).join("");
}