import MMKV from "./store"
import { NoteProps } from "./types"

const getAllNotes: () => NoteProps[] = () => {
  const allNotesId = getAllNotesId()

  return allNotesId.map((id) => ({
    id,
    ...MMKV.getMap(id)
  })) as NoteProps[]
}

const getAllNotesId: () => string[] = () => {
  return MMKV.getArray('note-id') ?? []
}

const deleteAll = () => {
  return MMKV.clearStore()
}

export { getAllNotes, getAllNotesId, deleteAll };