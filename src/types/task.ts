export type Task = {
    id: String;
    title: String;
    description: String;
    stage: number;
    activities: Activities[];
}
export type Activities = {
    description: String;
    checked: Boolean;
}
export type Query = {
    getAllTasks: Task[];
}