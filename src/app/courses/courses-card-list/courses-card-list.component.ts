import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from "../model/course";
import {MatDialog} from "@angular/material/dialog";
import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {CourseEntityService} from "../services/course-entity.service";

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.pug',
  styleUrls: ['./courses-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: ICourse[];

  @Output()
  courseChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private courseEntityService: CourseEntityService
  ) {
  }

  ngOnInit() {

  }

  editCourse(course: ICourse) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Edit Course",
      course,
      mode: 'update'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());

  }

  onDeleteCourse(course: ICourse) {
    this.courseEntityService.delete(course)
  }

}
