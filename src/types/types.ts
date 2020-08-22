import {ResultCodesEnum} from "../api/api";

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number | null
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}
export type UserType = {
  name: string
  id: number
  photos: PhotosType
  status: null | string,
  followed: boolean
}
export type DialogsType = {
  id: number
  name: string
  ava: string
}
export type ChatsType = {
  id?: number
  message: string
}
// for API
// export type SimpleResponseType = {
//   resultCode: ResultCodesEnum
//   messages: Array<string>
//   data: Object
// }
// export type PutProfileType = {
//   userId: number
//   lookingForAJob: boolean
//   lookingForAJobDescription: string
//   fullName: string
//   contacts: {
//     github: string | null
//     vk: string | null
//     facebook: string | null
//     instagram: string | null
//     twitter: string | null
//     website: string | null
//     youtube: string | null
//     mainLink: string | null
//   }
//
// }