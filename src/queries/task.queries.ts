import { gql } from "apollo-angular";

const getAllTaskQuery = gql`
    query GetAllTasksQuery {
        getAllTasks {
            id
            title
            description
            stage
            activities {
            description
            checked
            }
        }
    }
`;
export {getAllTaskQuery}