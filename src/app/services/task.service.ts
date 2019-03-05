import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  // Fetch all the tasks from Static JSON
  getTaskList() {

    return this.http.get("/assets/tasks.json",
      { headers: { "accept": "application/json" } });
  }

  // Fetch all the tasks from service
  fetchAllTasks(): Promise<any> {

    return this.http.get("http://localhost:8081/task/fetchall")
      .toPromise()
      .then(res => res)
  }

  // Fetch specific task by task id
  fetchTask(id: number): Promise<any> {

    return this.http.get("http://localhost:8081/task/fetch/" + id)
      .toPromise()
      .then(res => res)
  }

  // Add a new task
  addTask(task: Task): Promise<any> {

    return this.http.post("http://localhost:8081/task/save", task)
      .toPromise()
      .then(res => "Task " + task.task + " added successfully")
  }

  // Update a task
  updateTask(task: Task): Promise<any> {

    return this.http.put("http://localhost:8081/task/update", task)
      .toPromise()
      .then(res => "Task " + task.task + " updated successfully")
  }

  // End a task
  endTask(id: number): Promise<any> {

    return this.http.put("http://localhost:8081/task/endtask/" + id, "")
      .toPromise()
      .then(res => "Task ended successfully")
  }
}
