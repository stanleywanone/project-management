import { useCallback } from "react";
import styled from "styled-components";
import { EditCard } from "../../../commons/EditCard";
import { NewCard } from "../../../commons/NewCard";
import { Header } from "../../Header";
import { useProjects } from "../hooks/useProjects";
import { ProjectCards } from "./ProjectCards";
import { useNavigate } from "react-router-dom";

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: "header" "body";
  grid-template-rows: 10% 90%;
`;

export const ProjectBody = styled.div`
  grid-area: body;
  background-color: var(--secondary-color);
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const LogOutContainer = styled.div`
  display: flex;
  align-items: end;
  padding-right: 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
`;

export const Projects = () => {
  const navigate = useNavigate();
  const {
    projects,
    addProject,
    setAddProjectForm,
    isOpenAddProject,
    setIsOpenAddProject,
    editProjectform,
    setEditProjectForm,
    editProject,
    isOpenEditProject,
    setIsOpenEditProject,
    updatedProject,
    setProjects,
    openDeleteModal,
    setOpenDeleteModal,
    deleteProject,
  } = useProjects();

  const title = "Project Management";
  const logOut = useCallback(() => {
    localStorage.clear();
    return navigate("/auth/signin");
  }, [navigate]);
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <Header title={title} />
        <LogOutContainer onClick={() => logOut()}>Log Out</LogOutContainer>
      </HeaderContainer>
      <ProjectBody>
        <ProjectCards
          setProjects={setProjects}
          projects={projects}
          editProject={editProject}
          setIsOpenAddProject={setIsOpenAddProject}
        />
        <NewCard
          isOpen={isOpenAddProject}
          setIsOpen={setIsOpenAddProject}
          setForm={setAddProjectForm}
          onSubmit={addProject}
        />
        <EditCard
          isOpen={isOpenEditProject}
          setIsOpen={setIsOpenEditProject}
          setForm={setEditProjectForm}
          onSubmit={updatedProject}
          editForm={editProjectform}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          deleteProject={deleteProject}
        />
      </ProjectBody>
    </ProjectsContainer>
  );
};

export default Projects;
