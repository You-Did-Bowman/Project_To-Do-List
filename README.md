# 'TO DO' App Project
This project was a group project at the end of the ‘Single Page Application’ module in my further training at the DCI. 
Our group consisted of three people. Our group presents an App of To-Do Tasks with some additional features that are not usually inplemented in mobile versions of such sort of apps. The choice was made on basis of the time frame for creating the code, solving issues of combining data from different branches, proper styling and finally deployment of the project on render:
<br><br>
Link to app: <a href="https://project-to-do-list-u8kr.onrender.com">To-Do-App</a>

<details>
  <summary>Contents: 🔽</summary>

- [TO DO App Project](#to-do-app-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Workflow](#workflow)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contact (alphabetical order)](#contact)


</details>

### Built With

🔹[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
<br>
🔹[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
<br>
🔹![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=HTML&logoColor=white)
<br>
🔹![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
<br>
🔹![Javascript.com](https://shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=000)

## Getting Started
Work starts with an idea of which App we want to create. Then with the sketch in Excalidraw we create the structure of our App.

<img src=".//src/assets/excalidraw_todo.png" width = "700px">

The next step is to assign tasks for every group-member based on quantity of components and complexity of project's functionality. For that purpose we choose Jira.
We also assign responsible manager for GitHub for creating the repo, branches, etc. And team-Lead for time-management and organisational matters.

<img src=".//src/assets/jira_todo.png" width = "700px">

![Alt Text]()

Taking into consideration requirements:

  - multiple pages components (react-router-dom, preferably also sending params from one page to another)
  - nested components (preferably sending props from one to another at least once)
  - use 3rd party API to fetch some data (get request) like: weather API, recipes API...
  - deploy on render
  - extra: one global state (useContext)
  - extra: useReducer

following steps are:

  * Picking colour scheme: #FFE9D0, #FFFED3, #FFD0D0, #BBE9FF, #B1AFFF
  * Creating 2 main and 9 subordinate components (routing and linking them)
  * Creating individul css file for each component. Handful approach for our project.
  * Nested components are imported and data is shared with useState hook
  * Using 3rd party API to fetch data for inspirational quotes
  * Deploying on render
  * extra: one global state (useContext) is highly in use

[🔼 Back to top](#to-do-app-project)
 
## Workflow 
Important daily procedure is to push, pull and merge branches for solving small portions of conflicts. Tracking daily updates to continue coding with up-to-date information. Also live communication to discuss following steps and required changes is a good practice for smooth workflow.

🔹To push your changes and get updated code from main to continue working:

- Work in your branch <br>
- Push changes to your branch occassionally! <br>
- At EOD, merge your changes to main after taking a pull from main <br>
- Once your changes are merged to main, inform Github manager <br>
- After Github manager's successfully merging of all changes (Conflict resolution), come back in your branch <br>
- Make sure you do the following: <br>
   - git checkout main <br>
   - git pull <br>
   - git checkout "your branch" <br>
   - git merge main <br>
- VOILA! Now your code is UP-TO-DATE! <br>

! After getting the code from main, if you get conflicts, resolve it and push again and if any error occures:

git push -f -u origin branchName

[🔼 Back to top](#to-do-app-project)

## Usage
At first glance at our TO-DO App, it welcomes you with random phrase of wisdom or inspiration and surprises with animated logo. 

Button "Add" opens for you the form to create your to-do, choosing (or not) priority, category and due date. Although writing the text of your task is mandatory if you want it to be created. 
Also you can use "Go back" button if you change your mind.

For the list of your tasks, which are presented as colorful cards divided (or not) into various groups, you are welcome to "Sort" them according to the level of priority (important, medium, low) and date of creation (new, old). And "Filter" option will show you all, completed and pending tasks. 
When "Due date" is assigned, you will get a warning sign of "Due Soon or Overdue" just to remind about your task's deadline.
You can also edit your tasks and due date. You can check the tasks and mark as completed or if the task is no longer needed,you can "DELETE" the task.
For more convenience if the list of tasks is long, "Go up" button is at your service.

Finally, the footer will recover the contact information of our project-members.

We appreciate your time to discover the result of our work and trust in our skills and creativity!

[🔼 Back to top](#to-do-app-project)

## Screenshots

<img src="./src/assets/LandingPage.png" width = "700px">
Landing page
<br><br>
<img src="./src/assets/Add-task.png" width = "700px">
Adding task
<br><br>
<img src="./src/assets/LandingPage-with-tasks.png" width = "700px">
Landing page with tasks
<br><br>
<img src="./src/assets/NotFound.png" width = "700px">
<br>
Not found page
<br><br>
<img src="./src/assets/Mobile Version.png" width = "250px">
<br>
Mobile Version

<br>

[🔼 Back to top](#to-do-app-project)

## Contact 
(alphabetical order)

<b>Divya Mariya Raphy</b>
<br>
Mail: divya.raphy@dci-student.org
<br>
Github-Link: <a href="https://github.com/divyasheen">Divyasheen</a>
<br><br>

<b>Nataliia Lishchynska</b>
<br>
Mail: -
<br>
Github-Link: <a href="https://github.com/NATZEN24">NATZEN24</a>
<br><br>

<b>Judith Bohmann</b>
<br>
Mail: ju.bohmann@gmx.de
<br>
Github-Link: <a href="https://github.com/You-Did-Bowman">You-Did-Bowman</a>
<br><br>


