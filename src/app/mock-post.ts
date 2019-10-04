import { Post } from './post'
import { getLocaleDateFormat } from '../../node_modules/@angular/common';

const maDate = new Date();
export const POSTS: Post[] = [
    { titre: 'la tonte des caniches nains d\'antarctique', content:'blabla', loveIts:2, created_at: maDate },
    { titre: 'La visite des égoux de paris avec les tortues ninjas', content:'blabla', loveIts:-1, created_at: maDate },
    { titre: 'Le don du sang expliqué par Dracula', content:'blabla', loveIts:0, created_at: maDate },
];
