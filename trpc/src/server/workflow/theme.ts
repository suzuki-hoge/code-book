import Database from 'better-sqlite3'
import {format} from 'date-fns'
import {ThemeDetail, ThemeSummary} from '../../domain/Theme'
import {findCommentsByThemeId, findFirstCommentByThemeId} from './comments'


const db = new Database('database/dev.db')

export function findThemeSummaries(): ThemeSummary[] {
  return db
    .prepare(
      `
        select theme.id,
               theme.title,
               theme.created,
               theme.author_id,
               count(comment.id) as comments,
               user.id           as author_id,
               user.name,
               user.icon
        from theme
               left join comment on theme.id = comment.theme_id
               join user on theme.author_id = user.id
        group by theme.id`,
    )
    .all()
    .map((row: { [key: string]: string }) => {
      return {
        id: row.id,
        title: row.title,
        created: row.created,
        firstComment: findFirstCommentByThemeId(row.id),
        commentCount: parseInt(row.comments),
        author: {
          id: row.author_id,
          name: row.name,
          icon: row.icon,
        },
      }
    })
}

export function findThemeDetail(themeId: string): ThemeDetail {
  const row = db
    .prepare(
      `
        select theme.id,
               theme.title,
               theme.created,
               theme.author_id,
               user.id as author_id,
               user.name,
               user.icon
        from theme
               join user on theme.author_id = user.id
        where theme.id = ?`,
    )
    .get(themeId)
  const comments = findCommentsByThemeId(themeId)
  return {
    id: row.id,
    title: row.title,
    created: row.created,
    comments: comments,
    commentCount: comments.length,
    author: {
      id: row.author_id,
      name: row.name,
      icon: row.icon,
    },
  }
}

export function createTheme(id: string, title: string, authorId: string): void {
  db.prepare('insert into theme (id, title, created, author_id) values (?, ?, ?, ?)')
    .run(id, title, format(new Date(), 'yyyy/MM/dd HH:mm'), authorId)
}
