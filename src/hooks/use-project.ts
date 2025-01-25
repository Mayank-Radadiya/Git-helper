import { api } from "@/trpc/react";
import { useLocalStorage } from "usehooks-ts";

export const useProject = () => {
   const { data: projects, error } = api.project.getProjects.useQuery();
   if (error) console.log(error);

   const [selectedProjectId, setSelectedProjectId] = useLocalStorage(
      "selectedProjectId",
      " ",
   );

   // find current project with current projectId witch stored in localStorage
   //      projectId ==== LocalStorage selectedProjectId
   const project = projects?.find(
      (project) => project.id === selectedProjectId,
   );
   return {
      projects,
      project,
      selectedProjectId,
      setSelectedProjectId,
   };
};
