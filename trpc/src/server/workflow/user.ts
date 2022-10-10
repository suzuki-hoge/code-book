import Database from 'better-sqlite3'
import { User } from '../../domain/User'

const db = new Database('database/dev.db')

export function findAll(): User[] {
  return db
    .prepare(
      `
        select id,
               name,
               icon
        from user`,
    )
    .all()
    .map((row: { [key: string]: string }) => {
      return {
        id: row.id,
        name: row.name,
        icon: row.icon,
      }
    })
}
