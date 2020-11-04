import { request } from "../util/common";

export const fetchProjects = async () => {
    let projects = await request('data', 'get');
    return projects;
}