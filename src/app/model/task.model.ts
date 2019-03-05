export class Task {
    id: number;
    task: string;
    parentTaskName: string;
    parentId: number;
    priority: number;
    startDateStr: string;
    endDateStr: string;
    deleteFlag: string;

    constructor() {
        
    }
}