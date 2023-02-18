import { User } from './User.js';
import { Store } from './Store.js';
import { Article } from './Article.js';
import { storeArticles } from './storeArticle.js';

User.hasMany(Store, { onDelete: 'CASCADE' });
Store.belongsTo(User, { onDelete: 'CASCADE' });

Store.belongsToMany(Article, { through: storeArticles });
Article.belongsToMany(Store, { through: storeArticles });