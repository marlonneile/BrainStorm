import MMKV from "./store"

const getAllNotes = () => {
  const allNotesId = getAllNotesId()
  return allNotesId?.map((id) => ({
    id,
    ...MMKV.getMap(id)
  }))
}

const getAllNotesId = () => {
  return MMKV.getArray('note-id')
}

const deleteAll = () => {
  return MMKV.clearStore()
}

export { getAllNotes, getAllNotesId, deleteAll };