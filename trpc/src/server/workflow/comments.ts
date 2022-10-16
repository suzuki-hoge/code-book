import Database from 'better-sqlite3'
import { format } from 'date-fns'
import { Comment } from 'domain/Comment'

const db = new Database('database/dev.db')

export function findFirstCommentByThemeId(themeId: string): Comment | undefined {
  const found = findCommentsByThemeId(themeId)
  return found === [] ? undefined : found[0]
}

export function findCommentsByThemeId(themeId: string): Comment[] {
  return db
    .prepare(
      `
        select comment.id,
               comment.body,
               comment.created,
               comment.author_id,
               user.name,
               user.icon
        from comment
               join user on comment.author_id = user.id
        where comment.theme_id = ?
        order by comment.created asc`,
    )
    .all(themeId)
    .map((row: { [key: string]: string }) => {
      return {
        id: row.id,
        themeId: themeId,
        body: row.body,
        created: row.created,
        author: {
          id: row.author_id,
          name: row.name,
          icon: row.icon,
        },
      }
    })
}

export function createComment(id: string, themeId: string, body: string, authorId: string): void {
  db.prepare('insert into comment (id, theme_id, body, created, author_id) values (?, ?, ?, ?, ?)').run(
    id,
    themeId,
    body,
    format(new Date(), 'yyyy/MM/dd HH:mm'),
    authorId,
  )
}

export function updateComment(id: string, body: string): void {
  db.prepare('update comment set body = ? where id = ?').run(body, id)
}
