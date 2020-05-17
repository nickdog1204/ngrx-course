import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {ILesson} from "../model/lesson";

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<ILesson> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Lesson', serviceElementsFactory)
  }
}
