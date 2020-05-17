import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {ICourse} from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<ICourse> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Course', serviceElementsFactory)

  }
}
