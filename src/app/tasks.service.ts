import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { getAllTaskQuery } from '../queries/task.queries';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private Tasks: Task[];
  private Tasks$: Subject<Task[]>;
    loading: Boolean = true;
    error: any;
    constructor (private apollo:Apollo){
        this.Tasks = []
        this.Tasks$ = new Subject();
    }
    getAllTask$(): Observable<Task[]> {
        this.apollo.watchQuery({
            query: getAllTaskQuery,
        }). valueChanges.subscribe((result: any) => {
            console.log("result: ", result?.data?.getAllTasks)
            this.Tasks.push(result?.data?.getAllTasks);
            this.Tasks$.next(this.Tasks);
            this.loading = result.loading;
            this.error = result.error;
            console.log("on service: ",this.Tasks$)
        })
        return this.Tasks$.asObservable();
    }
}
