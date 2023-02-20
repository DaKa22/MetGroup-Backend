import { Store } from './Store.js';
import { Article } from './Article.js';

Store.hasMany(Article, { onDelete: 'CASCADE' });
Article.belongsTo(Store, { onDelete: 'CASCADE' });
