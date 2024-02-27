import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setProjectsState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: newProject.id,
      };
    });
  }
  let content;
 console.log(projectsState)
  if (projectsState.selectedProjectId === null) {
    content = <NewProject addProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
